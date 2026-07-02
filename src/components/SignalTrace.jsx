/** Split a string into lines no longer than maxChars, breaking on spaces.
 *  Falls back to a hard break for tokens longer than maxChars. */
function wrapText(text, maxChars = 22) {
  const str = text == null ? "" : String(text);
  if (!str) return [""];
  const words = str.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    // Hard-break a single word that is longer than the limit
    if (word.length > maxChars) {
      if (current) { lines.push(current); current = ""; }
      for (let i = 0; i < word.length; i += maxChars) {
        lines.push(word.slice(i, i + maxChars));
      }
      continue;
    }
    if (current && (current + " " + word).length > maxChars) {
      lines.push(current);
      current = word;
    } else {
      current = current ? current + " " + word : word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export default function SignalTrace({ trace }) {
  if (!trace || !trace.length) return null;

  const width = 780;
  const padX = 34;
  const usable = width - padX * 2;
  const step = trace.length > 1 ? usable / (trace.length - 1) : 0;
  const lineH = 16; // px per wrapped line

  // Pre-compute wrapped lines so we can size the viewBox dynamically
  const nodes = trace.map((t, i) => ({
    year: t.year == null ? "" : String(t.year),
    label: t.label == null ? "" : String(t.label),
    sub: t.sub == null ? "" : String(t.sub),
    x: padX + step * i,
    below: i % 2 === 0,
    labelLines: wrapText(t.label),
  }));

  // Space needed above and below the centre line
  const maxAboveLines = Math.max(
    ...nodes.filter((n) => !n.below).map((n) => n.labelLines.length)
  );
  const maxBelowLines = Math.max(
    ...nodes.filter((n) => n.below).map((n) => n.labelLines.length)
  );

  const topPad = 48 + Math.max(maxAboveLines, 1) * lineH + 12; // room for above labels
  const botPad = 32 + Math.max(maxBelowLines, 1) * lineH + 12; // room for below labels
  const midY = topPad;
  const height = topPad + botPad;

  const linePath = nodes
    .map((n, i) => (i === 0 ? `M ${n.x} ${midY}` : `L ${n.x} ${midY}`))
    .join(" ");

  return (
    <div className="trace-wrap">
      <span className="trace-label">Career trace</span>
      <svg
        className="trace-svg"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={`Career timeline from ${nodes[0].year} to ${nodes[nodes.length - 1].year}`}
      >
        <path className="trace-line" d={linePath} fill="none" />

        {nodes.map((n, i) => (
          <circle
            key={`dot-${i}`}
            className={`trace-node-dot${i === nodes.length - 1 ? " is-last" : ""}`}
            cx={n.x}
            cy={midY}
            r="5"
          />
        ))}

        {nodes.map((n, i) => {
          const anchor =
            i === 0 ? "start" : i === nodes.length - 1 ? "end" : "middle";

          if (n.below) {
            // Year above dot, label + sub below
            const labelStartY = midY + 26;
            return (
              <g key={`lbl-${i}`}>
                <text className="trace-year" x={n.x} y={midY - 16} textAnchor={anchor}>
                  {n.year}
                </text>
                {n.labelLines.map((line, li) => (
                  <text
                    key={li}
                    className="trace-lbl"
                    x={n.x}
                    y={labelStartY + li * lineH}
                    textAnchor={anchor}
                  >
                    {line}
                  </text>
                ))}
                {n.sub && (
                  <text
                    className="trace-sub"
                    x={n.x}
                    y={labelStartY + n.labelLines.length * lineH}
                    textAnchor={anchor}
                  >
                    {n.sub}
                  </text>
                )}
              </g>
            );
          } else {
            // Label + sub above dot, year below
            const subY = midY - 28;
            const labelStartY = subY - n.labelLines.length * lineH;
            return (
              <g key={`lbl-${i}`}>
                {n.labelLines.map((line, li) => (
                  <text
                    key={li}
                    className="trace-lbl"
                    x={n.x}
                    y={labelStartY + li * lineH}
                    textAnchor={anchor}
                  >
                    {line}
                  </text>
                ))}
                {n.sub && (
                  <text className="trace-sub" x={n.x} y={subY} textAnchor={anchor}>
                    {n.sub}
                  </text>
                )}
                <text className="trace-year" x={n.x} y={midY + 20} textAnchor={anchor}>
                  {n.year}
                </text>
              </g>
            );
          }
        })}
      </svg>
    </div>
  );
}
