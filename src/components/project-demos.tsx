const voiceBars = [14, 22, 16, 28, 18, 26, 12, 24, 15];

const ragMessages = [
  { kind: "bot", width: "72%", delay: "0s" },
  { kind: "user", width: "48%", delay: "0.8s" },
  { kind: "bot", width: "86%", delay: "1.6s" },
  { kind: "user", width: "38%", delay: "2.4s" },
] as const;

const scoreRows = [
  { tone: "high", width: "82%" },
  { tone: "mid", width: "64%" },
  { tone: "high", width: "74%" },
  { tone: "low", width: "46%" },
] as const;

export function ProjectDemo({ id, bare = false }: { id: string; bare?: boolean }) {
  return (
    <div className={bare ? "demo-bare" : "demo-stage"} aria-hidden="true">
      {id === "ai-call-automation" ? <VoiceOrb /> : id === "eduquery" ? <RagChat /> : <ScoreRead />}
    </div>
  );
}

function VoiceOrb() {
  return (
    <div className="voice-orb">
      {voiceBars.map((height, index) => (
        <span key={index} style={{ height, animationDelay: `${index * 0.12}s` }} />
      ))}
    </div>
  );
}

function RagChat() {
  return (
    <div className="rag-chat">
      {ragMessages.map((message) => (
        <span
          key={message.delay}
          className={`rag-msg rag-msg-${message.kind}`}
          style={{ width: message.width, animationDelay: message.delay }}
        />
      ))}
    </div>
  );
}

function ScoreRead() {
  return (
    <div className="score-read">
      {scoreRows.map((row) => (
        <span key={row.width} className="score-row">
          <span className={`score-dot score-dot-${row.tone}`} />
          <span className="score-track">
            <span className={`score-fill score-fill-${row.tone}`} style={{ width: row.width }} />
          </span>
        </span>
      ))}
    </div>
  );
}
