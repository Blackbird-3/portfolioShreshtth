export function WaveWord({ text }: { text: string }) {
  return (
    <span className="block" aria-hidden="true">
      {text.split("").map((char, index) => (
        <span key={`${char}-${index}`} className="wave-char" style={{ ["--char-index" as string]: index }}>
          {char}
        </span>
      ))}
    </span>
  );
}
