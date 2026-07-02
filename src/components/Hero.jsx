import SignalTrace from "./SignalTrace.jsx";

export default function Hero({ profile, careerTrace }) {
  const contactBits = [profile.location, profile.phone, profile.email].filter(Boolean);

  return (
    <header className="hero">
      <div className="hero-top">
        {profile.photo && (
          <img className="hero-photo" src={profile.photo} alt={profile.name} width="96" height="96" />
        )}
        <div>
          <h1 className="hero-title">{profile.title}</h1>
          <p className="hero-name">{profile.name}</p>
        </div>
      </div>
      <p className="hero-tagline">{profile.tagline}</p>
      <div className="hero-contact">
        {contactBits.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      <SignalTrace trace={careerTrace} />
    </header>
  );
}
