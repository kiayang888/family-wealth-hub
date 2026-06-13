import { SectionTitle } from "@/components/SectionTitle";
import { MemberCard } from "@/components/MemberCard";
import { members } from "@/lib/data";

export default function MembersPage() {
  return (
    <div className="stack-xl">
      <SectionTitle
        title="Family Members"
        subtitle="Track each member's goals, progress, and participation."
      />

      <div className="grid cards-grid">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} detailed />
        ))}
      </div>
    </div>
  );
}
