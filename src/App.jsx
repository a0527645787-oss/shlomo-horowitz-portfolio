import { useEffect, useState } from 'react'

const socials = {
  github: 'https://github.com/a0527645787-oss',
  linkedin: 'https://www.linkedin.com/in/shlomo-horowitz-41346b384/',
  email: 'mailto:a0527645787@gmail.com',
}

const skills = [
  { number: '01', title: 'Cloud & Infrastructure', items: ['AWS', 'EC2', 'Terraform', 'Linux', 'HTTPS'] },
  { number: '02', title: 'Containers & Delivery', items: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'Nginx'] },
  { number: '03', title: 'Applications & Data', items: ['Python', 'FastAPI', 'Flask', 'MySQL', 'Git'] },
  { number: '04', title: 'Observability', items: ['Prometheus', 'Grafana', 'Health checks', 'Metrics'] },
]

const projects = [
  {
    index: '01',
    title: 'ActionInbox',
    description: 'An AI-assisted application that turns email into evidence-backed tasks, with review-first execution handoffs and clearly separated facts, guidance and recommendations.',
    detail: 'Deployed as a single-host AWS stack with EC2, Docker Compose, Nginx, HTTPS and a private MySQL container.',
    stack: ['AWS EC2', 'FastAPI', 'Docker', 'MySQL', 'Nginx', 'Terraform'],
    href: 'https://github.com/a0527645787-oss/action-inbox-build-week',
  },
  {
    index: '02',
    title: 'World Cup Seat Booking',
    description: 'A Flask and MySQL seat-booking application used to build a complete DevOps delivery path from source to a containerized EC2 deployment.',
    detail: 'Includes GitHub Actions CI/CD, short-SHA image releases, health checks, automatic rollback, Prometheus, Grafana and Terraform.',
    stack: ['Flask', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana', 'Terraform'],
    href: 'https://github.com/a0527645787-oss/world-cup-seat-booking-devops',
  },
  {
    index: '03',
    title: 'AWS EC2 Terraform',
    description: 'A focused Terraform configuration that provisions an Ubuntu EC2 instance in AWS us-east-1 and applies a clear resource tag.',
    detail: 'A small infrastructure-as-code exercise centered on a readable, reproducible EC2 resource definition.',
    stack: ['Terraform', 'AWS', 'EC2', 'Infrastructure as Code'],
    href: 'https://github.com/a0527645787-oss/aws-ec2-terraform',
  },
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Shlomo Horowitz, home">SH<span>/</span></a>
      <button className="menu-button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
        <span className="sr-only">Toggle navigation</span>
        <span /><span />
      </button>
      <nav id="main-nav" className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a className="nav-cta" href={socials.email}>Contact <Arrow /></a>
      </nav>
    </header>
  )
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="orbit orbit-one"><span /></div>
      <div className="orbit orbit-two"><span /></div>
      <div className="core"><div className="core-inner">SH</div></div>
      <div className="node node-a">EC2</div>
      <div className="node node-b">CI/CD</div>
      <div className="node node-c">TF</div>
      <div className="node node-d">01</div>
    </div>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="page-shell" id="top">
        <Header />
        <main id="main">
          <section className="hero section">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
              <h1>Building reliable<br />systems <em>in the cloud.</em></h1>
              <p className="hero-lede">I’m Shlomo Horowitz, a Junior DevOps & Cloud Engineer focused on infrastructure, automation and dependable delivery.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View my work <Arrow /></a>
                <a className="button button-secondary" href={socials.email}>Contact me <Arrow /></a>
              </div>
            </div>
            <HeroVisual />
            <div className="hero-meta">
              <span>Based in Israel</span><span>AWS · TERRAFORM · DOCKER</span><span>Scroll to explore ↓</span>
            </div>
          </section>

          <section className="about section ruled" id="about">
            <div className="section-label"><span>01</span> About</div>
            <div className="about-content">
              <h2>I turn infrastructure concepts into <em>working systems.</em></h2>
              <div className="about-copy">
                <p>I’m a DevOps course graduate with hands-on experience building cloud infrastructure, containerized applications, deployment pipelines and monitoring stacks.</p>
                <p>I care about clear automation, observable systems and learning by shipping real projects. I’m looking for a junior role where I can contribute, keep growing and build reliable foundations with a strong team.</p>
                <div className="principles">
                  <span>Automate thoughtfully</span>
                  <span>Make systems observable</span>
                  <span>Keep learning</span>
                </div>
              </div>
            </div>
          </section>

          <section className="skills section ruled" id="skills">
            <div className="section-label"><span>02</span> Toolkit</div>
            <div className="section-heading">
              <h2>Tools I work with.</h2>
              <p>A practical toolkit developed through coursework and hands-on projects.</p>
            </div>
            <div className="skills-grid">
              {skills.map((group) => (
                <article className="skill-card" key={group.title}>
                  <span className="card-number">{group.number}</span>
                  <h3>{group.title}</h3>
                  <div className="tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </section>

          <section className="projects section ruled" id="projects">
            <div className="section-label"><span>03</span> Selected work</div>
            <div className="section-heading projects-heading">
              <h2>Built to learn.<br /><em>Built to run.</em></h2>
              <p>Public repositories showing how I approach applications, infrastructure and delivery.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-index">{project.index}</div>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p className="project-detail">{project.detail}</p>
                    <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                    <span>View GitHub</span><Arrow diagonal />
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="learning section ruled" id="learning">
            <div className="section-label"><span>04</span> Learning now</div>
            <div className="learning-panel">
              <div>
                <p className="eyebrow"><span className="pulse-dot" /> In progress</p>
                <h2>Expanding the stack.</h2>
                <p>Currently building deeper knowledge across container orchestration and modern web development.</p>
              </div>
              <div className="learning-items">
                {['Kubernetes', 'JavaScript', 'Node.js', 'React'].map((item, index) => (
                  <div key={item}><span>0{index + 1}</span>{item}<i>↗</i></div>
                ))}
              </div>
            </div>
          </section>

          <section className="contact section ruled" id="contact">
            <p className="eyebrow">Have an opportunity or project in mind?</p>
            <h2>Let’s build something<br /><em>reliable together.</em></h2>
            <a className="button button-primary contact-button" href={socials.email}>Contact me <Arrow /></a>
            <div className="contact-links">
              <a href={socials.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
              <a href={socials.email}>Email <Arrow diagonal /></a>
            </div>
          </section>
        </main>
        <footer>
          <span>© {new Date().getFullYear()} Shlomo Horowitz</span>
          <span>Junior DevOps & Cloud Engineer</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </>
  )
}

export default App
