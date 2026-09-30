 "use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, CheckCircle2, Code2,
  Database, Download, Github, Globe2, Layers3, Linkedin, Mail, Menu, Phone,
  Send, Server, Sparkles, X, ExternalLink
} from "lucide-react";

const skills = [
  "React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
  "Node.js", "Express.js", "NestJS", "Laravel", "PHP",
  "PostgreSQL", "MongoDB", "SQL Server", "Prisma", "REST APIs", "JWT"
];

const projects = [
  {
    title: "Dosh Puja",
    category: "Full Stack Platform",
    description: "A multi-dashboard spiritual services platform with dynamic puja catalogue, user/pandit/admin workflows, wishlist, KYC, wallet and payment functionality.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "JWT", "Razorpay"],
    accent: "01"
  },
  {
    title: "Rewardza Ghana",
    category: "Gamification Platform",
    description: "A rewards and quiz platform with leaderboard APIs, game sessions, point transactions, referrals and MongoDB aggregation-based ranking.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    accent: "02"
  },
  {
    title: "Hospital Management System",
    category: "Management Software",
    description: "Laravel-based management application designed around structured hospital workflows, database operations and administrative modules.",
    stack: ["Laravel", "PHP", "MySQL"],
    accent: "03"
  },
  {
    title: "Horoscope & Panchang",
    category: "API-driven Application",
    description: "Astrology application integrating external APIs for horoscope, panchang and related data with a responsive Next.js interface.",
    stack: ["Next.js", "TypeScript", "REST APIs"],
    accent: "04"
  },
  {
    title: "Marble Art",
    category: "Inventory & Catalogue",
    description: "Business application covering inventory, product catalogue, purchase orders and estimate-related data workflows.",
    stack: ["Web App", "SQL Server", "REST APIs"],
    accent: "05"
  },
  {
    title: "Custom Admin Dashboards",
    category: "Product Engineering",
    description: "Reusable responsive dashboards with authentication, CRUD modules, tables, forms, filters and API integrations.",
    stack: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    accent: "06"
  }
];

const services = [
  { icon: Globe2, title: "Web Development", text: "Modern, responsive websites and web applications built around real business requirements." },
  { icon: Server, title: "Backend & APIs", text: "Secure REST APIs, authentication, business logic and database integrations." },
  { icon: Layers3, title: "Admin Dashboards", text: "Clean dashboards for managing users, content, orders, analytics and workflows." },
  { icon: Database, title: "Database Solutions", text: "Practical data models and integrations using PostgreSQL, MongoDB and SQL Server." }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="nav-wrap">
        <nav className="container nav">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span>A</span> Aman Verma
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["About", "Skills", "Experience", "Projects", "Services", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
          </div>

          <a className="nav-cta" href="#contact">Let&apos;s Talk <ArrowUpRight size={16} /></a>
          <button className="menu-btn" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <section id="home" className="hero grid-bg">
        <div className="container hero-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div className="availability"><span /> Available for opportunities</div>
            <p className="eyebrow">FULL STACK DEVELOPER</p>
            <h1>
              I build <span className="gradient-text">digital products</span> that work.
            </h1>
            <p className="hero-text">
              I&apos;m Aman Verma, a Full Stack Developer with 14 months of professional experience.
              I build scalable web applications, APIs, dashboards and database-driven products.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">View My Work <ArrowUpRight size={18} /></a>
               <a
    className="btn btn-outline"
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Download Resume <Download size={17} />
  </a>
              <a className="btn btn-outline" href="#contact">Contact Me <Mail size={17} /></a>
            </div>

            <div className="hero-socials">
              <a href="mailto:amanverma7411@gmail.com"><Mail size={17} /> amanverma7411@gmail.com</a>
              <a href="https://www.linkedin.com/in/aman-verma-30b558247" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            </div>
          </motion.div>

          <motion.div
  className="hero-profile"
  initial={{ opacity: 0, scale: .92, x: 30 }}
  animate={{ opacity: 1, scale: 1, x: 0 }}
  transition={{ duration: .7, delay: .15 }}
>
  <div className="profile-image-wrap">
    <Image
      src="/profile.png"
      alt="Aman Verma - Full Stack Developer"
      width={500}
      height={500}
      priority
      className="profile-image"
    />
  </div>

  <div className="profile-info">
    <p>HELLO, I&apos;M</p>
    <h2>Aman Verma</h2>
    <span>Full Stack Developer</span>
  </div>

  <div className="profile-tech">
    <span>React</span>
    <span>Next.js</span>
    <span>Node.js</span>
    <span>Laravel</span>
  </div>
</motion.div>
        </div>
        <a href="#about" className="scroll-indicator"><ArrowDown size={17} /> Scroll to explore</a>
      </section>

      <section id="about" className="section">
        <div className="container two-col">
          <div>
            <p className="section-label">01 / About Me</p>
            <h2 className="section-title">Turning ideas into <span className="gradient-text">working products.</span></h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m a Full Stack Developer focused on creating reliable and intuitive digital experiences.
              My work spans frontend interfaces, backend services, databases, authentication, third-party APIs
              and business dashboards.
            </p>
            <p>
              I enjoy taking a feature from an initial idea through API design, database modelling,
              implementation and a polished responsive UI.
            </p>
            <div className="stats">
              <div><strong>14+</strong><span>Months Experience</span></div>
              <div><strong>6+</strong><span>Projects & Modules</span></div>
              <div><strong>15+</strong><span>Core Technologies</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="container">
          <p className="section-label">02 / Skills</p>
          <h2 className="section-title">My <span className="gradient-text">toolbox.</span></h2>
          <p className="section-subtitle">Technologies I use to design, build, connect and ship modern web applications.</p>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <motion.div key={skill} className="skill-card" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .025 }}>
                <Code2 size={17} />
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <p className="section-label">03 / Experience</p>
          <h2 className="section-title">Where I&apos;ve <span className="gradient-text">grown.</span></h2>

          <div className="timeline">
            <div className="timeline-line" />
            <motion.div className="timeline-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="timeline-dot" />
              <div className="timeline-date">2025 — PRESENT</div>
              <div className="experience-card">
                <div className="experience-head">
                  <div>
                    <h3>Full Stack Developer</h3>
                    <p>Professional Software Development</p>
                  </div>
                  <BriefcaseBusiness size={25} />
                </div>
                <ul>
                  <li>Developing responsive applications using React, Next.js, TypeScript and Tailwind CSS.</li>
                  <li>Building REST APIs and backend services with Node.js, Express, NestJS and Laravel.</li>
                  <li>Working with PostgreSQL, MongoDB, SQL Server and Prisma for data-driven features.</li>
                  <li>Implementing authentication, dashboards, CRUD workflows, API integrations and payment flows.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="section-head-row">
            <div>
              <p className="section-label">04 / Selected Work</p>
              <h2 className="section-title">Things I&apos;ve <span className="gradient-text">built.</span></h2>
            </div>
            <p className="section-subtitle">A selection of applications and systems I&apos;ve worked on across different domains.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .06 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-number">{project.accent}</div>
                <div className="project-icon"><Sparkles size={22} /></div>
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-row">{project.stack.map(t => <span key={t}>{t}</span>)}</div>
                <div className="project-link">View details <ArrowUpRight size={17} /></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <p className="section-label">05 / Services</p>
          <h2 className="section-title">What I can <span className="gradient-text">build for you.</span></h2>
          <div className="services-grid">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div className="service-card" key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
                  <div className="service-icon"><Icon size={22} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-box">
          <div>
            <p className="section-label">06 / Contact</p>
            <h2 className="section-title">Have a project in <span className="gradient-text">mind?</span></h2>
            <p className="section-subtitle">Let&apos;s discuss your idea, requirements and how I can help turn it into a working product.</p>
          </div>

          <div className="contact-links">
            <a href="mailto:amanverma7411@gmail.com" className="contact-link">
              <span><Mail size={20} /></span>
              <div><small>Email</small><strong>amanverma7411@gmail.com</strong></div>
              <ArrowUpRight size={18} />
            </a>
            <a href="tel:+917080201578" className="contact-link">
              <span><Phone size={20} /></span>
              <div><small>Phone</small><strong>+91 70802 01578</strong></div>
              <ArrowUpRight size={18} />
            </a>
            <a href="https://www.linkedin.com/in/aman-verma-30b558247" target="_blank" rel="noreferrer" className="contact-link">
              <span><Linkedin size={20} /></span>
              <div><small>LinkedIn</small><strong>Connect with me</strong></div>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <a href="#home" className="logo"><span>A</span> Aman Verma</a>
          <p>© {new Date().getFullYear()} Aman Verma. Built with Next.js.</p>
          <div className="footer-socials">
            <a href="mailto:amanverma7411@gmail.com" aria-label="Email"><Mail size={18} /></a>
            <a href="https://www.linkedin.com/in/aman-verma-30b558247" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
            <motion.div className="modal" initial={{ opacity: 0, y: 30, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: .97 }} onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close"><X /></button>
              <p className="section-label">{selectedProject.category}</p>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="tag-row modal-tags">{selectedProject.stack.map(t => <span key={t}>{t}</span>)}</div>
              <a href="#contact" className="btn btn-primary" onClick={() => setSelectedProject(null)}>Discuss a similar project <Send size={17} /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .nav-wrap {
          position: fixed; z-index: 50; top: 0; left: 0; right: 0;
          background: rgba(8,8,8,.72); backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--line);
        }
        .nav { height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 25px; }
        .logo { display: flex; align-items: center; gap: 10px; font-family: "Space Grotesk"; font-weight: 700; }
        .logo span { width: 32px; height: 32px; border-radius: 9px; display: grid; place-items: center; background: var(--accent); color: #fff; }
        .nav-links { display: flex; gap: 25px; }
        .nav-links a { color: #aaa; font-size: 13px; transition: color .2s; }
        .nav-links a:hover { color: #fff; }
        .nav-cta { display: inline-flex; gap: 6px; align-items: center; font-size: 13px; font-weight: 700; }
        .menu-btn { display: none; background: none; border: 0; color: white; }

        .hero { min-height: 100vh; position: relative; overflow: hidden; display: flex; align-items: center; padding: 130px 0 80px; }
        .hero:before { content: ""; position: absolute; width: 600px; height: 600px; border-radius: 50%; background: rgba(215,32,35,.12); filter: blur(100px); right: -200px; top: 100px; }
        .hero-inner { position: relative; display: grid; grid-template-columns: 1.1fr .9fr; align-items: center; gap: 70px; }
        .availability { display: inline-flex; gap: 9px; align-items: center; padding: 7px 11px; border: 1px solid var(--line); border-radius: 99px; color: #bdbdbd; font-size: 12px; margin-bottom: 25px; background: rgba(255,255,255,.02); }
        .availability span { width: 7px; height: 7px; border-radius: 50%; background: #39d98a; box-shadow: 0 0 10px #39d98a; }
        .eyebrow { color: var(--accent-light); font-weight: 800; letter-spacing: .2em; font-size: 12px; }
        .hero h1 { font-family: "Space Grotesk"; font-size: clamp(52px, 7vw, 88px); letter-spacing: -.065em; line-height: .94; max-width: 760px; margin: 15px 0 25px; }
        .hero-text { color: var(--muted); max-width: 620px; line-height: 1.8; font-size: 17px; }
        .hero-actions { display: flex; gap: 12px; margin-top: 32px; flex-wrap: wrap; }
        .hero-socials { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 28px; }
        .hero-socials a { display: flex; gap: 8px; align-items: center; color: #888; font-size: 12px; }
        .hero-card { border: 1px solid var(--line); border-radius: 20px; background: rgba(15,15,17,.86); box-shadow: 0 25px 80px rgba(0,0,0,.45); overflow: hidden; transform: rotate(1.5deg); }
        .code-top { height: 44px; display: flex; align-items: center; gap: 6px; padding: 0 15px; border-bottom: 1px solid var(--line); }
        .code-top span { width: 8px; height: 8px; border-radius: 50%; background: #3a3a3d; }
        .code-top small { margin-left: 8px; color: #666; font-family: monospace; }
        .hero-card pre { margin: 0; padding: 25px; color: #bcbcc1; line-height: 1.7; font-size: 12px; overflow: auto; }
        .scroll-indicator { position: absolute; bottom: 25px; left: 50%; transform: translateX(-50%); color: #666; display: flex; align-items: center; gap: 7px; font-size: 11px; }

        .two-col { display: grid; grid-template-columns: .9fr 1.1fr; gap: 90px; }
        .about-copy > p { color: #aaa; line-height: 1.9; font-size: 16px; }
        .stats { display: flex; gap: 45px; margin-top: 35px; }
        .stats div { display: grid; gap: 5px; }
        .stats strong { font-family: "Space Grotesk"; font-size: 35px; }
        .stats span { color: #777; font-size: 11px; }

        .skills-section { background: var(--bg-soft); }
        .skills-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 45px; }
        .skill-card { display: flex; align-items: center; gap: 11px; padding: 17px; background: var(--card); border: 1px solid var(--line); border-radius: 12px; color: #ccc; font-size: 13px; transition: .2s; }
        .skill-card svg { color: var(--accent-light); }
        .skill-card:hover { transform: translateY(-3px); border-color: rgba(215,32,35,.45); }

        .timeline { position: relative; max-width: 850px; margin: 50px auto 0; }
        .timeline-line { position: absolute; left: 8px; top: 10px; bottom: 0; width: 1px; background: var(--line); }
        .timeline-item { position: relative; padding-left: 45px; }
        .timeline-dot { position: absolute; left: 3px; top: 5px; width: 11px; height: 11px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 20px rgba(215,32,35,.7); }
        .timeline-date { color: var(--accent-light); font-size: 11px; font-weight: 800; letter-spacing: .14em; margin-bottom: 12px; }
        .experience-card { padding: 30px; border: 1px solid var(--line); border-radius: 17px; background: var(--card); }
        .experience-head { display: flex; justify-content: space-between; gap: 20px; }
        .experience-head h3 { font-size: 22px; margin: 0 0 7px; }
        .experience-head p { margin: 0; color: #777; font-size: 13px; }
        .experience-head svg { color: var(--accent-light); }
        .experience-card ul { margin: 25px 0 0; padding-left: 20px; color: #aaa; line-height: 1.9; font-size: 13px; }

        .section-head-row { display: flex; justify-content: space-between; gap: 50px; align-items: end; }
        .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 45px; }
        .project-card { position: relative; min-height: 370px; padding: 30px; border: 1px solid var(--line); border-radius: 18px; background: linear-gradient(145deg, #111113, #0c0c0d); cursor: pointer; overflow: hidden; transition: .25s; }
        .project-card:after { content: ""; position: absolute; width: 180px; height: 180px; border-radius: 50%; background: rgba(215,32,35,.1); filter: blur(60px); right: -80px; top: -70px; }
        .project-card:hover { transform: translateY(-5px); border-color: rgba(215,32,35,.45); }
        .project-number { position: absolute; top: 25px; right: 28px; color: #333; font-family: "Space Grotesk"; font-size: 34px; font-weight: 700; }
        .project-icon { width: 46px; height: 46px; border-radius: 13px; display: grid; place-items: center; background: rgba(215,32,35,.1); color: var(--accent-light); margin-bottom: 45px; }
        .project-card > p:first-of-type { color: var(--accent-light); font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: .13em; }
        .project-card h3 { font-family: "Space Grotesk"; font-size: 28px; margin: 8px 0 12px; }
        .project-description { color: #888; font-size: 13px; line-height: 1.7; min-height: 65px; }
        .tag-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 18px; }
        .tag-row span { border: 1px solid var(--line); padding: 5px 8px; border-radius: 6px; color: #aaa; font-size: 10px; }
        .project-link { position: absolute; bottom: 25px; left: 30px; display: flex; align-items: center; gap: 6px; color: #ddd; font-size: 12px; font-weight: 700; }

        .services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 45px; }
        .service-card { padding: 27px; border: 1px solid var(--line); border-radius: 16px; background: var(--card); }
        .service-icon { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 11px; color: var(--accent-light); background: rgba(215,32,35,.1); }
        .service-card h3 { font-size: 17px; margin: 22px 0 10px; }
        .service-card p { color: #777; font-size: 12px; line-height: 1.8; margin: 0; }

        .contact-section { background: var(--bg-soft); }
        .contact-box { display: grid; grid-template-columns: 1fr .8fr; gap: 80px; align-items: center; }
        .contact-links { display: grid; gap: 10px; }
        .contact-link { display: flex; align-items: center; gap: 14px; padding: 15px; border: 1px solid var(--line); border-radius: 12px; background: var(--card); }
        .contact-link > span { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 10px; background: rgba(215,32,35,.1); color: var(--accent-light); }
        .contact-link div { display: grid; gap: 4px; flex: 1; }
        .contact-link small { color: #666; font-size: 10px; text-transform: uppercase; letter-spacing: .1em; }
        .contact-link strong { font-size: 12px; }
        .contact-link > svg { color: #555; }

        footer { border-top: 1px solid var(--line); padding: 25px 0; }
        .footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
        footer p { color: #555; font-size: 11px; margin: 0; }
        .footer-socials { display: flex; gap: 9px; }
        .footer-socials a { width: 34px; height: 34px; border: 1px solid var(--line); border-radius: 9px; display: grid; place-items: center; color: #888; }

        .modal-backdrop { position: fixed; inset: 0; z-index: 100; background: rgba(0,0,0,.75); backdrop-filter: blur(10px); display: grid; place-items: center; padding: 20px; }
        .modal { position: relative; max-width: 600px; width: 100%; background: #121214; border: 1px solid var(--line); border-radius: 20px; padding: 38px; box-shadow: 0 30px 100px rgba(0,0,0,.7); }
        .modal-close { position: absolute; right: 15px; top: 15px; width: 36px; height: 36px; border-radius: 9px; background: rgba(255,255,255,.05); color: #aaa; border: 1px solid var(--line); display: grid; place-items: center; cursor: pointer; }
        .modal h2 { font-family: "Space Grotesk"; font-size: 38px; margin: 5px 0 15px; }
        .modal > p:not(.section-label) { color: #999; line-height: 1.8; font-size: 14px; }
        .modal-tags { margin-bottom: 28px; }

        @media (max-width: 900px) {
          .hero-inner, .two-col, .contact-box { grid-template-columns: 1fr; }
          .hero-card { display: none; }
          .skills-grid { grid-template-columns: repeat(3, 1fr); }
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .section-head-row { align-items: start; flex-direction: column; }
        }
        @media (max-width: 700px) {
          .nav-cta { display: none; }
          .menu-btn { display: block; }
          .nav-links { display: none; position: absolute; top: 72px; left: 14px; right: 14px; padding: 15px; background: #111; border: 1px solid var(--line); border-radius: 14px; flex-direction: column; }
          .nav-links.open { display: flex; }
          .nav-links a { padding: 10px; }
          .hero { padding-top: 120px; }
          .hero h1 { font-size: 54px; }
          .scroll-indicator { display: none; }
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
          .projects-grid, .services-grid { grid-template-columns: 1fr; }
          .stats { gap: 20px; flex-wrap: wrap; }
          .stats strong { font-size: 28px; }
          .experience-card { padding: 22px; }
          .contact-box { gap: 40px; }
          .footer-inner { flex-direction: column; }
          .modal { padding: 30px 22px; }
        }
      `}</style>
    </main>
  );
}
