import { ProgressBar } from "@/components/ProgressBar";
import type { Member } from "@/lib/data";

type MemberCardProps = {
  member: Member;
  detailed?: boolean;
};

export function MemberCard({ member, detailed = false }: MemberCardProps) {
  return (
    <article className="card stack-md">
      <div className="stack-sm">
        <span className="badge">{member.status}</span>
        <h3>{member.name}</h3>
        <p className="helper">{member.role}</p>
      </div>

      <div className="member-meta">
        <div className="meta-row">
          <span>Monthly target</span>
          <strong>${member.monthlyTarget.toLocaleString()}</strong>
        </div>
        <div className="meta-row">
          <span>Streak</span>
          <strong>{member.streakMonths} months</strong>
        </div>
      </div>

      <ProgressBar label="Savings" value={member.currentSavings} max={member.savingsGoal} prefix="$" />
      <ProgressBar label="Investments" value={member.currentInvestments} max={member.investmentGoal} prefix="$" />

      {detailed ? (
        <div className="stack-sm">
          <p className="helper">{member.notes}</p>
        </div>
      ) : null}
    </article>
  );
}
