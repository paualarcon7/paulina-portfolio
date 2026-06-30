import { profile, about, experience, projects, skills, education } from './data'

function Icon({ path }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {path}
    </svg>
  )
}

const icons = {
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
  github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></>,
  doc: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></>,
  arrow: <path d="M7 17 17 7M7 7h10v10" />,
}

export default function App() {
  return (
    <>
      {/* NAV */}
      <header className="nav">
        <a href="#top" className="brand">PA<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="hero">
        <p className="eyebrow">{profile.location}</p>
        <h1>{profile.name}</h1>
        <h2>
          {profile.role} <span className="dot">·</span> <span className="accent">{profile.tagline}</span>
        </h2>
        <p className="lead">{profile.intro}</p>
        <div className="cta">
          <a className="btn btn-primary" href={profile.links.cv} target="_blank" rel="noreferrer">
            <Icon path={icons.doc} /> Download CV
          </a>
          <a className="btn" href={`mailto:${profile.email}`}>
            <Icon path={icons.mail} /> Get in touch
          </a>
        </div>
        <div className="social">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon path={icons.linkedin} /></a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon path={icons.github} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Icon path={icons.mail} /></a>
        </div>
      </section>

      <main>
        {/* ABOUT */}
        <section id="about" className="section">
          <h3 className="section-title"><span>01</span> About</h3>
          <div className="about-grid">
            {about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <h3 className="section-title"><span>02</span> Experience</h3>
          <div className="timeline">
            {experience.map((job) => (
              <article key={job.company} className="job">
                <div className="job-head">
                  <h4>
                    {job.url ? (
                      <a className="job-company" href={job.url} target="_blank" rel="noreferrer">
                        {job.company} <Icon path={icons.arrow} />
                      </a>
                    ) : (
                      job.company
                    )}
                    <span className="job-role"> — {job.role}</span>
                  </h4>
                  <span className="period">{job.period}</span>
                </div>
                <p className="job-summary">{job.summary}</p>
                <ul>
                  {job.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
                <div className="tags">
                  {job.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <h3 className="section-title"><span>03</span> Projects</h3>
          <p className="section-note">A few public, earlier projects. Most recent work lives in private company repositories.</p>
          <div className="cards">
            {projects.map((proj) => (
              <article key={proj.name} className="card">
                <div className="card-body">
                  <h4>{proj.name}</h4>
                  <p>{proj.blurb}</p>
                </div>
                <div className="card-foot">
                  <div className="tags">
                    {proj.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="card-links">
                    {proj.demo && <a href={proj.demo} target="_blank" rel="noreferrer">Live demo <Icon path={icons.arrow} /></a>}
                    {proj.code && <a href={proj.code} target="_blank" rel="noreferrer">Code <Icon path={icons.arrow} /></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <h3 className="section-title"><span>04</span> Skills</h3>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.group} className="skill-group">
                <h5>{s.group}</h5>
                <div className="tags">
                  {s.items.map((i) => <span key={i} className="tag">{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section">
          <h3 className="section-title"><span>05</span> Education</h3>
          <ul className="edu">
            {education.map((e) => (
              <li key={e.title}>
                <strong>{e.title}</strong> — {e.org}
                <span className="period">{e.period}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <h3 className="section-title"><span>06</span> Contact</h3>
          <h4 className="contact-cta">Let's build something together.</h4>
          <p>Open to full-stack and backend roles. The fastest way to reach me is email.</p>
          <div className="cta">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}><Icon path={icons.mail} /> {profile.email}</a>
          </div>
          <div className="social">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon path={icons.linkedin} /></a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon path={icons.github} /></a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} {profile.name} · Built with React + Vite</p>
      </footer>
    </>
  )
}
