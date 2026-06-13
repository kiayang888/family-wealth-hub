import { SectionTitle } from "@/components/SectionTitle";
import { MeetingCard } from "@/components/MeetingCard";
import { meetings } from "@/lib/data";

export default function MeetingsPage() {
  return (
    <div className="stack-xl">
      <SectionTitle
        title="Meeting Notes"
        subtitle="Document discussions, decisions, and next steps."
      />

      <div className="grid cards-grid">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} detailed />
        ))}
      </div>
    </div>
  );
}
