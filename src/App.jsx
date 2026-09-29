import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  X,
} from 'lucide-react'
import { achievements, navItems, projects, projectScreenshots, services, skillGroups, strengths } from './data.js'

function GitHubIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .7A11.5 11.5 0 0 0 8.36 23c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A10.99 10.99 0 0 1 12 6.01c.98 0 1.95.13 2.86.38 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.71 5.4-5.29 5.69.42.36.79 1.07.79 2.16v3.24c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" /></svg>
}

function LinkedInIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.33 7.54H.55V22h4.78V7.54ZM2.94.35A2.77 2.77 0 1 0 2.94 5.9a2.77 2.77 0 0 0 0-5.55ZM22.45 13.7c0-4.35-2.32-6.37-5.42-6.37a4.67 4.67 0 0 0-4.23 2.33V7.54H8.02V22h4.78v-7.16c0-1.89.36-3.72 2.7-3.72 2.31 0 2.34 2.16 2.34 3.84V22h4.78l-.17-8.3Z" /></svg>
}

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <motion.div className="section-heading" {...reveal}>
      <span className="eyebrow"><span />{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </motion.div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav container" aria-label="Primary navigation">
        <a className="logo" href="#home" aria-label="Mohammad Faiz home">MF<span>.</span></a>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s talk <ArrowRight size={15} /></a>
        </div>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />
      <div className="container hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="availability"><i /> Available for opportunities</div>
          <p className="hero-kicker">Hello, I&apos;m Mohammad Faiz</p>
          <h1>Building scalable <span>ERP solutions</span> &amp; modern web applications.</h1>
          <p className="hero-description">Software Engineer specializing in Frappe, ERPNext, Django, and business process automation. I build enterprise solutions, automate workflows, and create scalable web applications.</p>
          <div className="hero-actions">
            <a href="#projects" className="button primary">View projects <ArrowDown size={18} /></a>
            <a href="/Mohammad_Faiz_Resume.pdf" className="button secondary" download>Download résumé <Download size={18} /></a>
            <a href="#contact" className="text-link">Contact me <ArrowRight size={17} /></a>
          </div>
          <div className="social-row" aria-label="Social links">
            <span>Find me online</span>
            <i />
            <a href="https://github.com/mdfaiz903" target="_blank" rel="noreferrer" aria-label="Mohammad Faiz on GitHub"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="mailto:mdfaiz.nub@gmail.com" aria-label="Email Mohammad Faiz"><Mail size={18} /></a>
          </div>
        </motion.div>

        <motion.div className="portrait-stage" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.18 }}>
          <div className="portrait-glow" />
          <div className="portrait-frame">
            <img src="/mohammad-faiz-programmer-avatar.png" alt="Illustrated programmer avatar of Mohammad Faiz" fetchPriority="high" />
            <div className="portrait-shade" />
            <div className="portrait-caption">
              <span className="caption-icon"><BriefcaseBusiness size={17} /></span>
              <span><small>Current role</small><strong>Jr. Software Engineer</strong></span>
            </div>
          </div>
          <motion.div className="floating-card card-code" animate={{ y: [0, -9, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}>
            <span>&lt;/&gt;</span><div><small>Core focus</small><strong>ERP Engineering</strong></div>
          </motion.div>
          <motion.div className="floating-card card-stack" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}>
            <Sparkles size={17} /><div><small>Stack</small><strong>Frappe · Django</strong></div>
          </motion.div>
        </motion.div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to about"><span>Scroll to explore</span><ArrowDown size={15} /></a>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div>
          <SectionHeading eyebrow="About me" title={<>Engineering with a <span className="gradient-text">business mindset.</span></>} />
          <motion.p className="about-lead" {...reveal}>Computer Science graduate and Software Engineer with hands-on experience in enterprise software development, ERP customization, and web application development.</motion.p>
          <motion.p className="body-copy" {...reveal}>I&apos;m passionate about solving real business problems through technology—translating complex operations into clear, efficient digital solutions that help teams do their best work.</motion.p>
          <motion.div className="signature-line" {...reveal}>
            <span className="signature">Mohammad Faiz</span>
            <span>Software Engineer · Dhaka, Bangladesh</span>
          </motion.div>
        </div>
        <div className="strength-grid">
          {strengths.map((item, index) => (
            <motion.article className="strength-card" key={item.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.08 }}>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div className="mini-arrow"><ArrowRight size={16} /></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Turning industry needs into digital systems." copy="Building reliable ERP products at the intersection of software engineering and business operations." />
        <motion.article className="experience-card" {...reveal}>
          <div className="experience-rail"><span className="rail-dot" /><span /></div>
          <div className="experience-meta">
            <span className="date-chip">Aug 2024 — Present</span>
            <h3>Jr. Software Engineer</h3>
            <a href="#contact">Altersense LTD <ChevronRight size={16} /></a>
            <p><MapPin size={15} /> Dhaka, Bangladesh</p>
          </div>
          <div className="experience-content">
            <p className="experience-intro">Developing and delivering tailored enterprise systems across RMG manufacturing, spinning, merchandising, and HR operations.</p>
            <ul>
              <li><Check size={17} />Developing ERP modules for Manufacturing, Merchandising, and HR.</li>
              <li><Check size={17} />Building custom workflows and reports to automate business processes.</li>
              <li><Check size={17} />Engineering ERP solutions for RMG manufacturing, spinning, and industrial sectors.</li>
              <li><Check size={17} />Partnering with clients on requirement analysis, implementation, and deployment.</li>
            </ul>
          </div>
        </motion.article>
        <div className="achievement-grid">
          {achievements.map((item, index) => (
            <motion.article key={item.value} className="achievement-card" {...reveal} transition={{ ...reveal.transition, delay: index * 0.1 }}>
              <span>{item.value}</span><div><strong>{item.label}</strong><p>{item.copy}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading eyebrow="Technical toolkit" title={<>The tools I use to <span className="gradient-text">build better.</span></>} copy="A practical technology stack shaped by enterprise products, data-driven workflows, and scalable web applications." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <motion.article className={`skill-card skill-${index + 1}`} key={group.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.07 }}>
                <div className="skill-icon"><Icon size={23} /></div>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="services-glow" aria-hidden="true" />
      <div className="container">
        <div className="services-intro">
          <SectionHeading eyebrow="Services" title={<>Expert help for your <span className="gradient-text">next business solution.</span></>} copy="Available for freelance projects and remote collaboration, from focused fixes to complete product development." />
          <motion.div className="services-availability" {...reveal}>
            <span><i />Open to freelance &amp; remote work</span>
            <a href="#contact">Discuss your project <ArrowRight size={16} /></a>
          </motion.div>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article className="service-card" key={service.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
                <div className="service-card-top">
                  <span className="service-icon"><Icon size={22} /></span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Solutions built for real-world impact." copy="A selection of enterprise and consumer applications—from manufacturing workflows to community platforms." />
        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.article className={`project-card ${project.accent} ${project.featured ? 'featured' : ''}`} key={project.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.08 }}>
                <div className="project-top">
                  <span>{project.index}</span>
                  <div className="project-top-actions">
                    {project.url && <a className="project-source-link" href={project.url} target="_blank" rel="noreferrer">View on GitHub <ExternalLink size={14} /></a>}
                    <div className="project-icon"><Icon size={23} /></div>
                  </div>
                </div>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </motion.article>
            )
          })}
        </div>
        <motion.div className="project-gallery" {...reveal}>
          <div className="gallery-heading">
            <div>
              <span>Project gallery</span>
              <h3>Inside Class Routine Management</h3>
              <p>Dashboard insights, conflict-aware routine generation, and day-to-day schedule management.</p>
            </div>
            <a href="https://github.com/mdfaiz903/Class-Routine-Management" target="_blank" rel="noreferrer">Explore the repository <ExternalLink size={15} /></a>
          </div>
          <div className="gallery-grid">
            {projectScreenshots.map((screenshot, index) => (
              <a className={`gallery-item gallery-item-${index + 1}`} href={screenshot.src} target="_blank" rel="noreferrer" key={screenshot.src}>
                <img src={screenshot.src} alt={`${screenshot.title} screen from Class Routine Management`} loading="lazy" />
                <span className="gallery-overlay"><strong>{screenshot.title}</strong><small>{screenshot.description}</small></span>
                <span className="gallery-open" aria-hidden="true"><ExternalLink size={15} /></span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container education-grid">
        <SectionHeading eyebrow="Education" title="A strong foundation for thoughtful engineering." />
        <motion.article className="education-card" {...reveal}>
          <div className="education-icon"><GraduationCap size={28} /></div>
          <div className="education-copy">
            <span>Oct 2019 — Dec 2023</span>
            <h3>B.Sc in Computer Science &amp; Engineering</h3>
            <p>Northern University Bangladesh</p>
          </div>
          <div className="education-location"><MapPin size={16} /> Dhaka, Bangladesh</div>
        </motion.article>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`)
    const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`)
    setSent(true)
    window.location.href = `mailto:mdfaiz.nub@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-orb" aria-hidden="true" />
      <div className="container contact-grid">
        <motion.div className="contact-copy" {...reveal}>
          <span className="eyebrow"><span />Get in touch</span>
          <h2>Let&apos;s build something <span className="gradient-text">meaningful together.</span></h2>
          <p>Have a product idea, an ERP challenge, or a role that feels like a strong fit? I&apos;d be glad to hear about it.</p>
          <div className="contact-list">
            <a href="mailto:mdfaiz.nub@gmail.com"><span><Mail size={19} /></span><div><small>Email</small><strong>mdfaiz.nub@gmail.com</strong></div><ArrowRight size={17} /></a>
            <a href="tel:+8801309889903"><span><Phone size={19} /></span><div><small>Phone</small><strong>01309 889903</strong></div><ArrowRight size={17} /></a>
            <a href="https://github.com/mdfaiz903" target="_blank" rel="noreferrer"><span><GitHubIcon size={19} /></span><div><small>GitHub</small><strong>@mdfaiz903</strong></div><ArrowRight size={17} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><span><LinkedInIcon size={19} /></span><div><small>LinkedIn</small><strong>Let&apos;s connect</strong></div><ArrowRight size={17} /></a>
          </div>
        </motion.div>
        <motion.form id="contact-form" className="contact-form" onSubmit={handleSubmit} {...reveal}>
          <div className="form-heading"><span>Start a conversation</span><Sparkles size={19} /></div>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" placeholder="Jane Smith" autoComplete="name" required />
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="jane@company.com" autoComplete="email" required />
          <label htmlFor="message">How can I help?</label>
          <textarea id="message" name="message" placeholder="Tell me a little about the opportunity or project..." rows="5" required />
          <button className="button primary" type="submit">{sent ? 'Message noted — thank you' : 'Send message'} {sent ? <Check size={18} /> : <Send size={18} />}</button>
          {sent && <p className="form-note" role="status">Your email app should open with the message ready to send.</p>}
        </motion.form>
      </div>
    </section>
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 25, restDelta: 0.001 })

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer>
        <div className="container footer-inner">
          <a className="logo" href="#home">MF<span>.</span></a>
          <p>© {new Date().getFullYear()} Mohammad Faiz. Built with passion and technology.</p>
          <a href="#home">Back to top <ArrowRight size={15} /></a>
        </div>
      </footer>
    </>
  )
}

export default App
