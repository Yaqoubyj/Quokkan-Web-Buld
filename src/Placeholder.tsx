type Props = {
  label: string;
  className?: string;
  tone?: "light" | "dark";
};

export default function Placeholder({ label, className, tone = "light" }: Props) {
  const bg = tone === "dark" ? "#3a2e26" : "#e9ddcf";
  const fg = tone === "dark" ? "#e9ddcf" : "#8a6f57";
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label}
    >
      <rect width="400" height="400" fill={bg} />
      <line x1="0" y1="0" x2="400" y2="400" stroke={fg} strokeOpacity="0.25" strokeWidth="1" />
      <line x1="400" y1="0" x2="0" y2="400" stroke={fg} strokeOpacity="0.25" strokeWidth="1" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={fg}
        fontSize="16"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="1"
      >
        {label}
      </text>
    </svg>
  );
}
