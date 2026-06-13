type ProgressBarProps = {
  label: string;
  value: number;
  max: number;
  prefix?: string;
};

export function ProgressBar({ label, value, max, prefix = "" }: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="progress-shell">
      <div className="progress-meta">
        <span>{label}</span>
        <span>
          {prefix}
          {value.toLocaleString()} / {prefix}
          {max.toLocaleString()} ({Math.round(percentage)}%)
        </span>
      </div>
      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
