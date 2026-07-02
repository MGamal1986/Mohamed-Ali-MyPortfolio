function TextBlock({ paragraphs }) {
  return (
    <div className="section-body">
      {(paragraphs || []).map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function Timeline({ entries }) {
  return (
    <>
      {(entries || []).map((e, i) => (
        <div className="tl-entry" key={i}>
          <div className="tl-date">{e.date}</div>
          <div>
            <p className="tl-title">{e.title}</p>
            {e.org && <p className="tl-org">{e.org}</p>}
            {e.points && e.points.length > 0 && (
              <ul className="tl-points">
                {e.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

function Grid({ categories }) {
  return (
    <div className="grid-cats">
      {(categories || []).map((c, i) => (
        <div className="grid-cat" key={i}>
          <p className="grid-cat-label">{c.label}</p>
          <div className="tag-row">
            {(c.tags || []).map((t, j) => (
              <span className="tag" key={j}>
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Certs({ entries }) {
  return (
    <>
      {(entries || []).map((c, i) => (
        <div className="cert-entry" key={i}>
          <div>
            <p className="cert-name">{c.name}</p>
            {c.children && c.children.length > 0 && (
              <ul className="cert-children">
                {c.children.map((ch, j) => (
                  <li key={j}>{ch}</li>
                ))}
              </ul>
            )}
          </div>
          {c.valid && <span className="cert-valid">Valid {c.valid}</span>}
        </div>
      ))}
    </>
  );
}

function ListBlock({ items }) {
  return (
    <ul className="simple-list">
      {(items || []).map((i, idx) => (
        <li key={idx}>
          <span className="li-date">{i.date}</span>
          <span>{i.text}</span>
          <span className="li-org">{i.org}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Section({ section, innerRef }) {
  const renderBody = () => {
    switch (section.type) {
      case "text":
        return <TextBlock paragraphs={section.paragraphs} />;
      case "timeline":
        return <Timeline entries={section.entries} />;
      case "grid":
        return <Grid categories={section.categories} />;
      case "certs":
        return <Certs entries={section.entries} />;
      case "list":
        return <ListBlock items={section.items} />;
      default:
        return null;
    }
  };

  return (
    <section className="section" id={section.id} ref={innerRef}>
      <div className="section-eyebrow">{section.navLabel || section.heading}</div>
      <h2 className="section-heading">{section.heading}</h2>
      {renderBody()}
    </section>
  );
}
