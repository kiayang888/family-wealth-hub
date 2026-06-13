import { SectionTitle } from "@/components/SectionTitle";
import { MotivationCard } from "@/components/MotivationCard";
import { motivations } from "@/lib/data";

export default function MotivationPage() {
  return (
    <div className="stack-xl">
      <SectionTitle
        title="Motivation & Encouragement"
        subtitle="Keep the family focused on long-term progress, not short-term emotion."
      />

      <div className="grid cards-grid">
        {motivations.map((item) => (
          <MotivationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
