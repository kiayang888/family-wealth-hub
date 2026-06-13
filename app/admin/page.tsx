import { SectionTitle } from "@/components/SectionTitle";

export default function AdminPage() {
  return (
    <div className="stack-xl">
      <SectionTitle
        title="Admin Center"
        subtitle="A starter area for managing members, meetings, and family updates."
      />

      <div className="grid cards-grid">
        <article className="card stack-sm">
          <h3>Add New Member</h3>
          <p>Create a new family profile with savings and investment goals.</p>
          <button className="button primary" type="button">Create Member</button>
        </article>

        <article className="card stack-sm">
          <h3>Post Meeting Notes</h3>
          <p>Publish new notes, action items, and the next meeting date.</p>
          <button className="button primary" type="button">Add Meeting</button>
        </article>

        <article className="card stack-sm">
          <h3>Publish Motivation Post</h3>
          <p>Share an encouraging message, challenge, or family success story.</p>
          <button className="button primary" type="button">New Post</button>
        </article>
      </div>

      <section className="card stack-sm">
        <h3>Next Build Ideas</h3>
        <ul className="list">
          <li>Connect to Supabase or PostgreSQL</li>
          <li>Add authentication and role permissions</li>
          <li>Create forms for adding members and meetings</li>
          <li>Add charts for family savings and investment growth</li>
          <li>Store monthly contribution history</li>
        </ul>
      </section>
    </div>
  );
}
