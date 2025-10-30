import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./App.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Hi, I'm</p>
          <h1 className="hero-title">Sameera Eeda</h1>
          <p className="hero-sub">MERN Stack Developer & CS Student</p>
          <p className="hero-desc">
            I'm a passionate learner who loves building impactful web solutions. Whether it's crafting intuitive UIs
            or solving complex backend challenges, I genuinely enjoy every part of the process — especially when it helps people.
          </p>

          <div className="cta-row">
            <a className="btn primary" href="#projects">View My Work</a>
            <a className="btn ghost" href="#contact">Get In Touch</a>
            <a className="btn resume" href="/SAMEERA_EEDA_RESUME.pdf" download>Download Resume</a>
          </div>
        </div>

        <div className="hero-card">
          <h3>Sameera Eeda</h3>
          <p className="muted">MERN Stack Developer • AI & Web</p>
          <div className="socials-vertical">
            <a href="mailto:sameeraeeda@gmail.com" title="Email"><FaEnvelope /></a>
            <a href="https://github.com/Sameeraeeda" target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sameera-eeda-8baaa4264/" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container card">
        <h2>About Me</h2>
        <div className="about-grid">
          <div>
            <p>
              Hi there! I'm a Computer Science student at Keshav Memorial Institute of Technology (CGPA 8.6). Beyond the grades,
              what really lights me up is the magic of bringing ideas to life through code.
            </p>
            <p>
              I've been fortunate to work on projects — from recommendation systems to smart parking solutions — each teaching me new
              skills about technology, problem-solving, and collaboration. When I'm not coding, I explore new frameworks, contribute to open-source,
              and help fellow developers. I believe the best learning happens when we lift each other up. 🚀
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight"><strong>Always Learning</strong><span>Every line of code is a chance to learn.</span></div>
            <div className="highlight"><strong>Built with Care</strong><span>I craft experiences, not just code.</span></div>
            <div className="highlight"><strong>Problem Solver</strong><span>I love turning complex challenges into elegant solutions.</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills & Technologies</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>🎨 Frontend Development</h3>
            <div className="skill-buttons">
              {["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"].map(s => <button key={s}>{s}</button>)}
            </div>
          </div>

          <div className="skill-card">
            <h3>⚙️ Backend Development</h3>
            <div className="skill-buttons">
              {["Node.js", "Express.js", "Python", "Flask", "RESTful APIs"].map(s => <button key={s}>{s}</button>)}
            </div>
          </div>

          <div className="skill-card">
            <h3>🗄 Databases & Tools</h3>
            <div className="skill-buttons">
              {["MongoDB", "PostgreSQL", "SQL", "Database Design", "Git", "OpenCV", "EasyOCR", "Twilio API", "VS Code"].map(s => <button key={s}>{s}</button>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Product Recommendation System",
      desc: "Intelligent recommendations tailored to user behavior — full-stack + ML.",
      tech: ["Python", "Flask", "MongoDB", "React", "Node.js", "Express.js"],
      link: "https://github.com/Sameeraeeda/ecommerce"
    },
    {
      title: "Smart Parking System",
      desc: "CV-based parking automation with license recognition & SMS alerts.",
      tech: ["Python", "OpenCV", "EasyOCR", "MongoDB", "React", "Twilio API"],
      link: "https://github.com/Sameeraeeda/PARKINGSYSTEM"
    },
    {
      title: "Nexus Search Engine",
      desc: "Custom search engine using Wikipedia AI data and multi-source APIs.",
      tech: ["React", "Node.js", "Express.js", "APIs"],
      link: "https://github.com/Sameeraeeda/Search-engineproject"
    },
      {
    title: "Medicine Tracker",
    desc: "Web app to track medicines and send refill alerts — built with MERN and Twilio SMS.",
    tech: ["React","Node.js","MongoDB","Express.js","Twilio API"],
    link: "https://github.com/Sameeraeeda/medicine-tracker"
  }


  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(p => (
            <article className="project-card" key={p.title}>
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
              <div className="tech-row">{p.tech.map(t => <span key={t} className="tech">{t}</span>)}</div>
              <a className="link-primary" href={p.link} target="_blank" rel="noreferrer">View Code</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



function EducationAndCerts() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education & Certifications</h2>
        <div className="edu-grid">
          <div className="card small">
            <h4>B.Tech — Computer Science</h4>
            <p>Keshav Memorial Institute of Technology (KMIT)<br/>CGPA: 8.6</p>
          </div>
          <div className="card small">
            <h4>Certifications</h4>
            <ul>
              <li>Java Programming - Coursera</li>
              <li>Meta Front-End Developer - Meta</li>
              <li>SQL (Intermediate) - HackerRank</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container card">
        <h2>Let's Connect</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="muted">I'd love to hear from you! Whether you have a question, a project idea, or just want to say hi.</p>
            <div className="contact-line"><FaEnvelope /> <a href="mailto:sameeraeeda@gmail.com">sameeraeeda@gmail.com</a></div>
            <div className="contact-line"><FaPhone /> <a href="tel:+918074749179">+91 8074749179</a></div>
            <div className="contact-line"><FaMapMarkerAlt /> Hyderabad, India</div>
          </div>

          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks — copy this message and email me or configure a backend."); e.target.reset(); }}>
            <label>Your Name</label>
            <input placeholder="Your Name" required />
            <label>Your Email</label>
            <input type="email" placeholder="you@example.com" required />
            <label>Message</label>
            <textarea placeholder="Hi Sameera — I loved your work..." rows="5" required></textarea>
            <div className="form-row">
              <button type="submit" className="btn primary">Send Message</button>
              <button type="reset" className="btn ghost">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Sameera Eeda </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
     
      <EducationAndCerts />
      <Contact />
      <Footer />
    </>
  );
}
