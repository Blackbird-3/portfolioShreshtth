import { chip } from "@/lib/styles";

export function StackChips({ items }: { items: readonly string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className={chip}>
          {item}
        </li>
      ))}
    </ul>
  );
}
