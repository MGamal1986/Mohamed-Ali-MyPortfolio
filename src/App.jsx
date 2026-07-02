import { useEffect, useMemo, useRef, useState } from "react";
import { CV_DATA } from "./data.js";
import Rail from "./components/Rail.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";

export default function App() {
  const { profile, careerTrace, sections } = CV_DATA;
  const visibleSections = useMemo(() => sections.filter((s) => !s.hidden), [sections]);

  const [activeId, setActiveId] = useState(visibleSections[0]?.id);
  const sectionRefs = useRef({});

  useEffect(() => {
    document.title = `${profile.name} — ${profile.title}`;
  }, [profile.name, profile.title]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [visibleSections]);

  return (
    <div className="shell">
      <Rail name={profile.name} sections={visibleSections} activeId={activeId} />
      <main className="main">
        <Hero profile={profile} careerTrace={careerTrace} />
        <div id="main-sections">
          {visibleSections.map((s) => (
            <Section
              key={s.id}
              section={s}
              innerRef={(el) => (sectionRefs.current[s.id] = el)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
