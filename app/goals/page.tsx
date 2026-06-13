import { SectionTitle } from "@/components/SectionTitle";
import { ProgressBar } from "@/components/ProgressBar";
import { familyGoals, members } from "@/lib/data";

export default function GoalsPage() {
  return (
    <div className="stack-xl">
      <SectionTitle
        title="Goals & Progress"
        subtitle="Measure family savings, investments, and personal milestones."
      />

      <section className="card stack-md">
        {familyGoals.map((goal) => (
          <ProgressBar
            key={goal.id}
            label={goal.title}
            value={goal.current}
            max={goal.target}
            prefix="$"
          />
        ))}
      </section>

      <section className="card">
        <h3>Member Progress</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Savings Goal</th>
                <th>Current Savings</th>
                <th>Investment Goal</th>
                <th>Current Investments</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.status}</td>
                  <td>${member.savingsGoal.toLocaleString()}</td>
                  <td>${member.currentSavings.toLocaleString()}</td>
                  <td>${member.investmentGoal.toLocaleString()}</td>
                  <td>${member.currentInvestments.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
