export default function SignalTrace({ trace }) {
  if (!trace || !trace.length) return null;

  const width = 780;
  const height = 128;
  const padX = 34;
  const usable = width - padX * 2;
  const step = trace.length > 1 ? usable / (trace.length - 1) : 0;
  const midY = 40;

  const nodes = trace.map((t, i) => ({ ...t, x: padX + step * i, y: midY }));
  const linePath = nodes.map((n, i) => (i === 0 ? `M ${n.x} ${n.y}` : `L ${n.x} ${n.y}`)).join(" ");

  return (
    <div className="trace-wrap">
      <span className="trace-label">Career trace</span>
      <svg
        className="trace-svg"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={`Career timeline from ${trace[0].year} to ${trace[trace.length - 1].year}`}
      >
        <path className="trace-line" d={linePath} fill="none" />
        {nodes.map((n, i) => (
          <circle
            key={`dot-${i}`}
            className={`trace-node-dot${i === nodes.length - 1 ? " is-last" : ""}`}
            cx={n.x}
            cy={n.y}
            r="5"
          />
        ))}
        {nodes.map((n, i) => {
          const anchor = i === 0 ? "start" : i === nodes.length - 1 ? "end" : "middle";
          return (
            <g key={`lbl-${i}`}>
              <text className="trace-year" x={n.x} y={n.y - 16} textAnchor={anchor}>
                {n.year}
              </text>
              <text className="trace-lbl" x={n.x} y={n.y + 30} textAnchor={anchor}>
                {n.label}
              </text>
              <text className="trace-sub" x={n.x} y={n.y + 47} textAnchor={anchor}>
                {n.sub || ""}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
