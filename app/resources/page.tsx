import { SectionTitle } from "@/components/SectionTitle";
import { resources } from "@/lib/data";

export default function ResourcesPage() {
  return (
    <div className="stack-xl">
      <SectionTitle
        title="Resources"
        subtitle="Helpful starting points for budgeting, saving, and investing."
      />

      <div className="grid cards-grid">
        {resources.map((resource) => (
          <article key={resource.id} className="card stack-sm">
            <span className="pill">{resource.category}</span>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <ul className="list">
              {resource.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
