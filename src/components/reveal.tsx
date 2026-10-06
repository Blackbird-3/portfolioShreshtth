/**
 * Section entrance. CSS view timelines do the motion so the first HTML
 * paint stays visible, including when JavaScript is still loading.
 * Reduced motion drops the animation in globals.css.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={className ? `reveal ${className}` : "reveal"}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
