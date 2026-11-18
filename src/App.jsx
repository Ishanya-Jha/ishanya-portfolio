
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Download,
  GraduationCap, Laptop, MapPin, Code2, Menu, X,
  ShieldCheck, ShoppingBag, BriefcaseBusiness, Sparkles,
  Award, Database, Globe, Terminal, ExternalLink, FileText
} from "lucide-react";

const GITHUB = "https://github.com/Ishanya-Jha";
const LINKEDIN = "https://www.linkedin.com/in/ishanya-jha-9279b324a/";
const HACKERRANK = "https://www.hackerrank.com/profile/ishanyajha172";
const UNSTOP = "https://unstop.com/u/ishanjha60274";
const EMAIL = "ishanyajha172@gmail.com";
const RESUME = "/resume.pdf";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Achievements", "#achievements"],
  ["Contact", "#contact"]
];

const skills = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["C++", "Java", "Python", "JavaScript", "VB.NET"]
  },
  {
    title: "Frontend Development",
    icon: Globe,
    items: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"]
  },
  {
    title: "Backend Development",
    icon: Terminal,
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "Authentication"]
  },
  {
    title: "Databases & Tools",
    icon: Database,
    items: ["MongoDB", "MySQL", "MS Access", "Git", "GitHub", "Postman"]
  },
  {
    title: "Computer Science",
    icon: Laptop,
    items: ["OOP", "DSA", "DBMS", "Operating Systems", "Computer Networks"]
  },
  {
    title: "Security",
    icon: ShieldCheck,
    items: ["Secure Coding", "Password Hashing", "RBAC", "Network Security"]
  }
];

const projects = [
  {
    title: "Furnisher's",
    type: "Full-Stack E-commerce",
    description: "A furniture shopping project that evolved from a VB.NET and MS Access desktop application into a full-stack web application.",
    features: [
      "Furniture product browsing experience",
      "Web application development",
      "Database-driven application"
    ],
    stack: ["React", "JavaScript", "Node.js", "MongoDB"],
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000&q=85",
    theme: "furnisher",
    actions: [
      {
        label: "View Repository",
        url: "https://github.com/Ishanya-Jha/DG-Interns-Hub/tree/main/Week-3-Web-Development",
        kind: "repo"
      }
    ]
  },
  {
    title: "Gaming Website",
    type: "Frontend Web Development",
    description: "A gaming-themed website developed as part of the DG Interns Hub web development internship.",
    features: [
      "Gaming-inspired interface",
      "Frontend development",
      "Responsive web layout"
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1000&q=85",
    theme: "gaming",
    actions: [
      {
        label: "Live Demo",
        url: "https://ishanya-jha.github.io/DG-Interns-Hub/Week-4-Web-Development/",
        kind: "live"
      },
      {
        label: "View Repository",
        url: "https://github.com/Ishanya-Jha/DG-Interns-Hub/tree/main/Week-4-Web-Development",
        kind: "repo"
      }
    ]
  },
  {
    title: "SecureAccess",
    type: "Authentication & Authorization",
    description: "An authentication application built to explore account management, protected resources and role-based access.",
    features: [
      "JWT-based authentication",
      "bcrypt password hashing",
      "Protected routes and role-based access"
    ],
    stack: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=85",
    theme: "secure",
    actions: [
      {
        label: "Week 5 Repository",
        url: "https://github.com/Ishanya-Jha/DG-Interns-Hub/tree/main/Week-5-Web-Development",
        kind: "repo"
      },
      {
        label: "Week 6 Repository",
        url: "https://github.com/Ishanya-Jha/DG-Interns-Hub/tree/main/Week-6-Web-Development",
        kind: "repo"
      }
    ]
  },
  {
    title: "JobConnect",
    type: "Full-Stack Job & Internship Portal",
    description: "A job and internship discovery platform developed iteratively across DG Interns Hub Weeks 7–12.",
    features: [
      "Job search and filtering",
      "Category and work-mode filters",
      "Bookmarks and application workflow",
      "React frontend and Express API"
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    icon: BriefcaseBusiness,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&q=85",
    theme: "jobs",
    actions: [
      {
        label: "View Repository",
        url: "https://github.com/Ishanya-Jha/DG-Interns-Hub/tree/main/Week-7-Web-Development",
        kind: "repo"
      }
    ]
  },
  {
    title: "ChefKart AI",
    type: "AI Recipe & Meal Planner",
    description: "An AI-powered food discovery and meal-planning application combining a web application with a Python AI service.",
    features: [
      "AI-assisted recipe discovery",
      "Meal planning and recommendations",
      "Gemini API integration"
    ],
    stack: ["React", "Node.js", "FastAPI", "Gemini"],
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1000&q=85",
    theme: "chef",
    status: "In progress",
    actions: []
  },
  {
    title: "Personal Portfolio",
    type: "React Portfolio Website",
    description: "A responsive portfolio showcasing software development projects, technical skills, experience and achievements.",
    features: [
      "Responsive React interface",
      "Project and experience showcase",
      "Professional contact and profile links"
    ],
    stack: ["React", "Vite", "CSS", "Framer Motion"],
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1000&q=85",
    theme: "portfolio",
    status: "Publishing soon",
    actions: []
  }
];

const certificates = [
  {
    title: "HackerRank Certificate 01",
    description: "Verified HackerRank skill certificate",
    icon: Code2,
    url: "https://www.hackerrank.com/certificates/63c15d0a8a56"
  },
  {
    title: "HackerRank Certificate 02",
    description: "Verified HackerRank skill certificate",
    icon: Award,
    url: "https://www.hackerrank.com/certificates/89b0ad24b712"
  },
  {
    title: "Credly Digital Badge",
    description: "Verified digital credential",
    icon: ShieldCheck,
    url: "https://www.credly.com/badges/7a4d23f1-20f0-4bf3-be6f-bc19df1de6b2/linked_in_profile"
  },
  {
    title: "Unstop Certificate",
    description: "Verified certificate",
    icon: Award,
    url: "https://unstop.com/certificate-preview/1556a2a7-821f-486f-85b1-88a342e378dd"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" }
  }
};

function SectionHeading({ number, eyebrow, title, accent }) {
  return (
    <div className="section-heading">
      <div className="eyebrow">
        <span>{number}.</span> {eyebrow}
      </div>
      <h2>
        {title} <em>{accent}</em>
      </h2>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Ishanya Jha home">
          IJ<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {links.map(([label, href], i) => (
            <a
              key={label}
              className={i === 0 ? "active" : ""}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Let's Talk <ArrowUpRight size={15} />
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="hello-line">
              <span>Hi, I'm</span>
              <i />
            </div>

            <h1>
              Ishanya <span>Jha</span>
            </h1>

            <h2>
              Software Engineer <b>|</b> Full-Stack Developer
            </h2>

            <p>
              I build practical web applications, develop backend systems and
              explore secure software engineering.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                Explore My Work <ArrowUpRight size={17} />
              </a>

              <a
                className="btn btn-outline"
                href={RESUME}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={16} /> View Resume
              </a>
            </div>

            <div className="social-row">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Email">
                <Mail />
              </a>
              <span className="social-divider" />
              <span>Let's connect!</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit orbit-a" />
            <div className="hero-orbit orbit-b" />
            <div className="hero-glow" />
            <div className="dot-grid" />

            <div className="portrait-wrap">
              <img src="/ishanya-formal.png" alt="Ishanya Jha" />
            </div>

            <div className="hero-caption">
              CODE <span>•</span> BUILD <span>•</span> INNOVATE
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <span><ArrowDown size={15} /></span>
            Scroll to explore
          </a>
        </section>

        {/* Resume section: no embedded PDF preview */}
        <section className="resume-section section-rule" id="resume">
          <div className="resume-heading">
            <SectionHeading
              number="01"
              eyebrow="MY RESUME"
              title="Professional"
              accent="Resume."
            />

            <div className="resume-actions">
              <a
                className="btn btn-primary"
                href={RESUME}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={16} /> View Resume
              </a>

              <a
                className="btn btn-outline"
                href={RESUME}
                target="_blank"
                rel="noopener noreferrer"
                download="Ishanya_Jha_Resume_SDE.pdf"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>

          <p className="section-description">
            View my professional resume in a separate tab or download a PDF
            copy.
          </p>
        </section>

        <section className="about section-rule" id="about">
          <div className="about-intro">
            <SectionHeading
              number="02"
              eyebrow="ABOUT ME"
              title="Turning Ideas"
              accent="into Impact."
            />

            <p>
              I'm an MCA student focused on Software Engineering and Full-Stack
              Development. I enjoy turning ideas into working applications,
              understanding how systems work behind the interface and solving
              practical development problems.
            </p>

            <p>
              My experience includes frontend development, REST APIs, database
              integration and secure authentication. I also have a foundation
              in cybersecurity and enjoy applying security principles while
              building software.
            </p>

            <a className="text-link" href="#experience">
              Explore My Experience <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="about-highlight">
            <div className="panel-title">
              WHAT I FOCUS ON <span />
            </div>

            <div className="focus-item">
              <Code2 />
              <div>
                <h3>Software Development</h3>
                <p>Building useful, maintainable applications.</p>
              </div>
            </div>

            <div className="focus-item">
              <Database />
              <div>
                <h3>Backend & APIs</h3>
                <p>Working with servers, databases and REST APIs.</p>
              </div>
            </div>

            <div className="focus-item">
              <ShieldCheck />
              <div>
                <h3>Secure Engineering</h3>
                <p>Understanding authentication and application security.</p>
              </div>
            </div>
          </div>

          <div className="quick-facts">
            <div className="fact">
              <GraduationCap />
              <p>
                <strong>MCA, RITEE (CSVTU)</strong>
                <span>2025 – 2027</span>
              </p>
            </div>

            <div className="fact">
              <Laptop />
              <p>
                <strong>Software Engineer</strong>
                <span>Open to SDE opportunities</span>
              </p>
            </div>

            <div className="fact">
              <MapPin />
              <p>
                <strong>Raipur, India</strong>
                <span>Open to relocation</span>
              </p>
            </div>
          </div>
        </section>

        <section className="experience section-rule" id="experience">
          <SectionHeading
            number="03"
            eyebrow="EXPERIENCE"
            title="Where I've"
            accent="Contributed."
          />

          <div className="experience-list">
            <article className="experience-item">
              <span className="timeline-dot" />

              <div>
                <h3>DG Interns Hub</h3>
                <p className="role">Web Development Intern</p>
                <p className="date">August 2026 – Present</p>

                <p className="detail">
                  Worked on practical web development assignments, including
                  an e-commerce application, authentication system and a job
                  and internship portal.
                </p>

                <p className="detail">
                  Worked with HTML, CSS, JavaScript, React, Node.js, Express
                  and MongoDB across frontend and backend tasks.
                </p>

                <a
                  className="text-link"
                  href="https://github.com/Ishanya-Jha/DG-Interns-Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Internship Repository <ArrowUpRight size={14} />
                </a>
              </div>
            </article>

            <article className="experience-item">
              <span className="timeline-dot" />

              <div>
                <h3>NetworkWalks</h3>
                <p className="role">Cybersecurity Intern</p>
                <p className="date">B083 Batch · 2026</p>

                <p className="detail">
                  Participated in cybersecurity lab setup, technical
                  documentation, intern support and Q&A activities.
                </p>

                <p className="detail">
                  Gained practical exposure to security tools, lab environments
                  and cybersecurity workflows.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="projects section-rule" id="projects">
          <div className="projects-head">
            <SectionHeading
              number="04"
              eyebrow="SELECTED WORK"
              title="Projects I've"
              accent="Built."
            />

            <a
              className="text-link"
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile <ArrowUpRight size={15} />
            </a>
          </div>

          <p className="section-description">
            Academic, internship and personal projects demonstrating my work
            across frontend, backend and application development.
          </p>

          <div className="project-grid">
            {projects.map((project, i) => {
              const Icon = project.icon;

              return (
                <motion.article
                  className="project-card"
                  key={project.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className={`project-art ${project.theme}`}>
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      loading="lazy"
                    />

                    <div className="project-image-overlay" />
                    <Icon className="project-art-icon" size={42} />

                    {project.status && (
                      <span className="status-tag">{project.status}</span>
                    )}
                  </div>

                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <span className="project-type">{project.type}</span>

                    <p>{project.description}</p>

                    <ul className="project-features">
                      {project.features.map(feature => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>

                    <div className="stack-tags">
                      {project.stack.map(item => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {project.actions.length ? (
                        project.actions.map(action => (
                          <a
                            key={action.label}
                            className={
                              action.kind === "live"
                                ? "project-action-live"
                                : "project-action-repo"
                            }
                            href={action.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {action.kind === "live" ? (
                              <ExternalLink size={14} />
                            ) : (
                              <Github size={14} />
                            )}

                            {action.label}
                            <ArrowUpRight size={12} />
                          </a>
                        ))
                      ) : (
                        <span className="project-link-pending">
                          {project.status || "In progress"} · Link not published yet
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="skills-section section-rule" id="skills">
          <SectionHeading
            number="05"
            eyebrow="TECHNICAL TOOLKIT"
            title="Technologies &"
            accent="Skills."
          />

          <p className="section-description">
            Technologies and concepts I have worked with through coursework,
            internships and personal development projects.
          </p>

          <div className="skills-grid">
            {skills.map(group => {
              const Icon = group.icon;

              return (
                <article className="skill-group" key={group.title}>
                  <div className="skill-group-heading">
                    <Icon />
                    <h3>{group.title}</h3>
                  </div>

                  <div className="skill-pills">
                    {group.items.map(item => (
                      <span className="skill-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="education section-rule" id="education">
          <SectionHeading
            number="06"
            eyebrow="EDUCATION"
            title="Academic"
            accent="Background."
          />

          <div className="education-grid">
            <article className="education-card">
              <GraduationCap />
              <div>
                <span className="date">2025 – 2027</span>
                <h3>Master of Computer Applications (MCA)</h3>
                <p>Raipur Institute of Technology (RITEE)</p>
                <p>CSVTU · CPI: 8.75 / 10</p>
              </div>
            </article>

            <article className="education-card">
              <GraduationCap />
              <div>
                <span className="date">2022 – 2025</span>
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <p>Maharaja Agrasen International College</p>
                <p>PRSU · 73.87%</p>
              </div>
            </article>
          </div>
        </section>

        <section className="achievements section-rule" id="achievements">
          <SectionHeading
            number="07"
            eyebrow="CERTIFICATIONS & MILESTONES"
            title="Learning &"
            accent="Achievements."
          />

          <div className="achievement-grid">
            {certificates.map(certificate => {
              const Icon = certificate.icon;

              return (
                <a
                  className="achievement-card achievement-link"
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={certificate.title}
                >
                  <Icon />
                  <div>
                    <h3>{certificate.title}</h3>
                    <p>{certificate.description}</p>
                    <span>
                      View Credential <ExternalLink size={12} />
                    </span>
                  </div>
                </a>
              );
            })}

            <a
              className="achievement-card achievement-link"
              href={HACKERRANK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 />
              <div>
                <h3>HackerRank · C++</h3>
                <p>5-star achievement</p>
                <span>
                  View HackerRank Profile <ExternalLink size={12} />
                </span>
              </div>
            </a>

            <a
              className="achievement-card achievement-link"
              href={HACKERRANK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Laptop />
              <div>
                <h3>HackerRank Profile</h3>
                <p>Programming practice and achievements</p>
                <span>
                  View Profile <ExternalLink size={12} />
                </span>
              </div>
            </a>

            <a
              className="achievement-card achievement-link"
              href={UNSTOP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Award />
              <div>
                <h3>Unstop Profile</h3>
                <p>Competitions and professional profile</p>
                <span>
                  View Profile <ExternalLink size={12} />
                </span>
              </div>
            </a>

            <article className="achievement-card">
              <GraduationCap />
              <div>
                <h3>MCA · CPI 8.75</h3>
                <p>RITEE · CSVTU · 2025–2027</p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact section-rule" id="contact">
          <SectionHeading
            number="08"
            eyebrow="GET IN TOUCH"
            title="Let's Work"
            accent="Together."
          />

          <p>
            I'm interested in software engineering and full-stack development
            opportunities. For opportunities, collaborations or project
            discussions, feel free to reach out.
          </p>

          <div className="contact-links">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              <Linkedin /> LinkedIn
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              <Github /> GitHub
            </a>
            <a href={HACKERRANK} target="_blank" rel="noopener noreferrer">
              <Code2 /> HackerRank
            </a>
            <a href={UNSTOP} target="_blank" rel="noopener noreferrer">
              <Award /> Unstop
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Mail /> Email
            </a>
          </div>

          <a
            className="btn btn-primary"
            href={`mailto:${EMAIL}?subject=Software%20Engineering%20Opportunity`}
          >
            Send Message <ArrowUpRight size={17} />
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Ishanya Jha. All rights reserved.</span>
        <span>
          Designed with <b>♥</b> · Built with React
        </span>
      </footer>
    </div>
  );
}

export default App;
