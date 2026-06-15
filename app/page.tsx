import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import { ProgressBar } from "@/components/ProgressBar";
import { MemberCard } from "@/components/MemberCard";
import { MeetingCard } from "@/components/MeetingCard";
import { MotivationCard } from "@/components/MotivationCard";
import { familySummary, members, meetings, motivations, monthlyChallenge } from "@/lib/data";
import { supabase } from "@/lib/supabase";

export default function HomePage() {
  const highlightedMembers = members.slice(0, 3);
  const latestMeetings = meetings.slice(0, 2);
  const featuredMotivation = motivations.slice(0, 2);

  return (
    <div className="stack-xl">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Family Wealth Dashboard</span>
          <h1>Building generational wealth together.</h1>
          <p>
            Track progress, celebrate milestones, keep meeting notes, and stay
            motivated to save and invest as one family. 
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/goals">View Progress</a>
            <a className="button secondary" href="/members">See Members</a>
          </div>
        </div>

        <div className="hero-panel card">
          <h3>Family Mission</h3>
          <p>
            
            We aim to create generational wealth by exploring various investment
opportunities while also focusing on enhancing the financial literacy of all individuals involved.
Through this collaboration, each member will contribute to building wealth over time, utilizing
diverse investment channels, and strive to ensure a solid foundation for future success and
empowerment. We save wisely, invest consistently, and encourage one another to
            create a stronger future for our children and generations to come.

          </p>
          <div className="hero-mini-stats">
            <div>
              <strong>{familySummary.activeMembers}</strong>
              <span>Active members</span>
            </div>
            <div>
              <strong>{familySummary.nextMeeting}</strong>
              <span>Next meeting</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle
          title="Quick Snapshot"
          subtitle="A simple view of how the family is doing this month."
        />
        <div className="grid stats-grid">
          <StatCard label="Total Saved" value={familySummary.totalSaved} helper="Family cash savings" />
          <StatCard label="Total Invested" value={familySummary.totalInvested} helper="Across all members" />
          <StatCard label="Monthly Contributions" value={familySummary.thisMonthAdded} helper="Saved + invested this month" />
          <StatCard label="Participation Rate" value={familySummary.participationRate} helper="Members contributing this month" />
        </div>
      </section>

      <section className="card stack-md">
        <SectionTitle
          title="Family Goal Progress"
          subtitle="A clear target helps everyone stay focused."
        />
        <ProgressBar
          label="2026 Family Savings Goal"
          value={100430}
          max={25000}
          prefix="$"
        />
        <ProgressBar
          label="2026 Family Investing Goal"
          value={44490}
          max={35320}
          prefix="$"
        />
        <div className="callout">
          <strong>Monthly challenge:</strong> {monthlyChallenge}
        </div>
      </section>

      <section>
        <SectionTitle
          title="Member Spotlight"
          subtitle="Celebrate momentum and consistency."
        />
        <div className="grid cards-grid">
          {highlightedMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          title="Latest Meeting Notes"
          subtitle="Keep decisions and action items in one place."
        />
        <div className="grid cards-grid">
          {latestMeetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          title="Motivation Corner"
          subtitle="A few reminders to keep everyone inspired."
        />
        <div className="grid cards-grid">
          {featuredMotivation.map((item) => (
            <MotivationCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

