import type { Meeting } from "@/lib/data";

type MeetingCardProps = {
  meeting: Meeting;
  detailed?: boolean;
};

export function MeetingCard({ meeting, detailed = false }: MeetingCardProps) {
  return (
    <article className="card stack-md">
      <div className="stack-sm">
        <span className="pill">{meeting.date}</span>
        <h3>{meeting.title}</h3>
        <p className="helper">{meeting.summary}</p>
      </div>

      <div className="meeting-meta">
        <div className="meta-row">
          <span>Attendees</span>
          <strong>{meeting.attendees.join(", ")}</strong>
        </div>
        <div className="meta-row">
          <span>Next meeting</span>
          <strong>{meeting.nextMeeting}</strong>
        </div>
      </div>

      {detailed ? (
        <div className="stack-sm">
          <div>
            <strong>Topics</strong>
            <ul className="list">
              {meeting.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Action items</strong>
            <ul className="list">
              {meeting.actionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </article>
  );
}
