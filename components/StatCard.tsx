type StatCardProps = {
  label: string;
  value: string;
  helper?: string;
};

export function StatCard({ label, value, helper }: StatCardProps) {
  return (
    <article className="card stack-sm">
      <span className="pill">{label}</span>
      <div className="stat-value">{value}</div>
      {helper ? <p className="helper">{helper}</p> : null}
    </article>
  );
}
