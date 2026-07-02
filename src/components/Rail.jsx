export default function Rail({ name, sections, activeId }) {
  return (
    <nav className="rail" aria-label="Section navigation">
      <div>
        <p className="rail-id">Portfolio</p>
        <p className="rail-name">{name}</p>
        <ul className="rail-nav">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={activeId === s.id ? "active" : ""}>
                {s.navLabel || s.heading}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
