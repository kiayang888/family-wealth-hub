import type { Motivation } from "@/lib/data";

type MotivationCardProps = {
  item: Motivation;
};

export function MotivationCard({ item }: MotivationCardProps) {
  return (
    <article className="card stack-sm">
      <span className="pill">{item.category}</span>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </article>
  );
}
