import { supabase } from "@/lib/supabase";
import { SectionTitle } from "@/components/SectionTitle";

export default async function MembersPage() {
  const { data: members, error } = await supabase
    .from("members")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return <p>Error loading members: {error.message}</p>;
  }

  return (
    <div className="stack-xl">
      <SectionTitle
        title="Family Members"
        subtitle="Track each member's goals, progress, and participation."
      />

      <div className="grid cards-grid">
        {members?.map((member) => (
          <article key={member.id} className="card stack-sm">
            <span className="badge">{member.status}</span>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>Savings: ${member.current_savings}</p>
            <p>Investments: ${member.current_investments}</p>
            <p className="helper">{member.notes}</p>
          </article>
        ))}
      </div>
    </div>
  );
}