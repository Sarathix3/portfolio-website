// ============================================================
// CONFIG — edit these placeholders with real details
// ============================================================
const CONFIG = {
  linkedin: "https://www.linkedin.com/in/sarathi-boominathan",
  cgpa: "8.90", // single source of truth: hero, about, profile.json, education
  email: "a6090301@gmail.com",
  phone: "+91-9150643656",
  location: "Chennai, Tamil Nadu",
  resumeUrl: "assets/B_Sarathi_Resume.pdf",
};

// ============================================================
// SKILLS DATA
// ============================================================
const SKILLS = [
  { name: "Java", icon: "fa-brands fa-java", tag: "core language" },
  { name: "C", icon: "fa-solid fa-code", tag: "fundamentals" },
  { name: "Python", icon: "fa-brands fa-python", tag: "basics" },
  { name: "DSA", icon: "fa-solid fa-diagram-project", tag: "daily practice" },
  { name: "OOP", icon: "fa-solid fa-cubes", tag: "design" },
  { name: "HTML5", icon: "fa-brands fa-html5", tag: "markup" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", tag: "styling" },
  { name: "JavaScript", icon: "fa-brands fa-js", tag: "ES6" },
  { name: "MySQL", icon: "fa-solid fa-database", tag: "relational db" },
  { name: "Git & GitHub", icon: "fa-brands fa-git-alt", tag: "version control" },
  // DevOps toolchain: level "learning" shows a dashed card; delete the field once you're comfortable
  { name: "Linux & Bash", icon: "fa-brands fa-linux", tag: "shell scripting", level: "learning" },
  { name: "Docker", icon: "fa-brands fa-docker", tag: "containers", level: "learning" },
  { name: "CI/CD", icon: "fa-solid fa-arrows-spin", tag: "GitHub Actions", level: "learning" },
  { name: "AWS", icon: "fa-brands fa-aws", tag: "cloud basics", level: "learning" },
  { name: "Kubernetes", icon: "fa-solid fa-dharmachakra", tag: "up next", level: "learning" },
];

// ============================================================
// CERTIFICATES — add entries to show them in the gallery
// image: path inside this repo, e.g. "assets/certificates/aws-cloud.png"
// ============================================================
const CERTIFICATES = [
  // { title: "AWS Cloud Practitioner Essentials", image: "assets/certificates/aws-cloud.png", link: "" },
];

// ============================================================
// PROJECTS DATA — sourced from github.com/Sarathix3
// ============================================================
const PROJECTS = [
  {
    name: "HostelPro",
    desc: "A full-stack PG & hostel management system — tenants can browse rooms, book, pay rent, and raise complaints; admins manage rooms, bookings, payments and notices from a dashboard.",
    stack: ["Node.js", "Express", "MySQL", "JWT", "REST API"],
    repo: "https://github.com/Sarathix3/hostel-app",
    live: "https://hostel-app-8esr.vercel.app",
  },
  // Template for a new project:
  // { name: "...", desc: "...", stack: ["Docker", "GitHub Actions"], repo: "https://github.com/Sarathix3/...", live: "" },
  {
    name: "Calculator App",
    desc: "A responsive calculator with full keyboard support, chained calculations, and graceful handling of invalid input — built without any external libraries.",
    stack: ["HTML5", "CSS3", "Vanilla JS"],
    repo: "https://github.com/Sarathix3/calculator-app",
    live: "",
  },
];

// ============================================================
// CODING JOURNEY — commit-log style roadmap
// ============================================================
const JOURNEY = [
  { hash: "a1e4f2c", status: "done", title: "Learned C & core programming fundamentals", desc: "Control flow, functions, pointers, memory basics." },
  { hash: "c7d891a", status: "done", title: "Picked up Java & Object-Oriented Programming", desc: "Classes, inheritance, polymorphism, exception handling." },
  { hash: "f3b56e0", status: "done", title: "Started Data Structures & Algorithms", desc: "Arrays, linked lists, stacks, queues, recursion, sorting." },
  { hash: "9e12ab4", status: "done", title: "Shipped HostelPro, a full-stack project", desc: "Node.js, Express and MySQL backend deployed on Vercel." },
  { hash: "b84c7d1", status: "active", title: "Learning Linux, Git workflows & Docker", desc: "Shell scripting, containerizing apps, and a daily DSA habit alongside." },
  { hash: "future", status: "todo", title: "Automate builds with CI/CD", desc: "GitHub Actions pipelines that test and deploy my projects automatically." },
  { hash: "future", status: "todo", title: "Cloud & orchestration basics", desc: "AWS fundamentals, then Kubernetes and infrastructure as code." },
  { hash: "future", status: "todo", title: "Build a DevOps capstone & contribute to open source", desc: "A Dockerized app with a full pipeline, monitoring and documented setup." },
];

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  renderSkills();
  renderCertificates();
  renderProjects();
  renderJourney();
  initTyping();
  initTabs();
  initScrollSpy();
  initScrollTop();
  initReveal();
  initEduBar();
  initContactForm();
  initCursorDot();
  document.getElementById("year").textContent = new Date().getFullYear();
});

// ============================================================
// Apply config-driven links/placeholders
// ============================================================
function applyConfig() {
  const linkedinBtn = document.getElementById("linkedinBtn");
  const contactLinkedin = document.getElementById("contactLinkedin");
  const resumeBtn = document.getElementById("resumeBtn");

  document.querySelectorAll("[data-cgpa]").forEach((el) => (el.textContent = CONFIG.cgpa));
  const eduFill = document.querySelector(".edu-bar-fill");
  if (eduFill) eduFill.style.width = `${parseFloat(CONFIG.cgpa) * 10}%`;

  if (CONFIG.linkedin) {
    linkedinBtn.href = CONFIG.linkedin;
    contactLinkedin.href = CONFIG.linkedin;
    contactLinkedin.querySelector(".contact-value").textContent = CONFIG.linkedin.replace(/^https?:\/\//, "");
  } else {
    linkedinBtn.href = "#contact";
    contactLinkedin.href = "#contact";
  }

  if (CONFIG.resumeUrl) {
    resumeBtn.href = CONFIG.resumeUrl;
    resumeBtn.setAttribute("target", "_blank");
    resumeBtn.setAttribute("rel", "noopener");
  } else {
    resumeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Resume link not set yet. Add it in script.js (CONFIG.resumeUrl).");
    });
  }

  document.querySelectorAll('a[href^="mailto:"]').forEach((el) => {
    el.href = `mailto:${CONFIG.email}`;
    const valueEl = el.querySelector(".contact-value");
    if (valueEl) valueEl.textContent = CONFIG.email;
  });

  const phoneLink = document.getElementById("contactPhone");
  const phoneValue = document.getElementById("contactPhoneValue");
  if (CONFIG.phone && phoneLink && phoneValue) {
    phoneLink.href = `tel:${CONFIG.phone.replace(/[^\d+]/g, "")}`;
    phoneValue.textContent = CONFIG.phone;
  } else if (phoneLink) {
    phoneLink.style.display = "none";
  }

  const locationValue = document.getElementById("contactLocationValue");
  if (CONFIG.location && locationValue) {
    locationValue.textContent = CONFIG.location;
  } else {
    document.getElementById("contactLocation")?.style.setProperty("display", "none");
  }
}

// ============================================================
// Typing effect for hero role line
// ============================================================
function initTyping() {
  const el = document.getElementById("typed");
  const phrases = [
    "console.log('Aspiring DevOps Engineer');",
    "learning.stack(['Linux','Docker','CI/CD']);",
    "building(['HostelPro','pipelines']);",
    "status = 'open to internships';",
  ];
  let phraseIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = phrases[phraseIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 30 : 55);
  }
  tick();
}

// ============================================================
// Render skills grid
// ============================================================
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(
    (s) => `
    <div class="skill-card reveal${s.level ? " " + s.level : ""}">
      <div class="skill-icon"><i class="${s.icon}"></i></div>
      <span class="skill-name">${s.name}</span>
      <span class="skill-tag">${s.level === "learning" ? "learning: " : ""}${s.tag}</span>
    </div>`
  ).join("");
}

// ============================================================
// Render certificates (keeps the placeholder if the list is empty)
// ============================================================
function renderCertificates() {
  if (!CERTIFICATES.length) return;
  const grid = document.getElementById("certGrid");
  grid.innerHTML = CERTIFICATES.map((c) => {
    const inner = `<img src="${c.image}" alt="${c.title}" loading="lazy" /><div class="cert-card-title">${c.title}</div>`;
    return `<div class="cert-card reveal">${c.link ? `<a href="${c.link}" target="_blank" rel="noopener">${inner}</a>` : inner}</div>`;
  }).join("");
}

// ============================================================
// Render projects grid
// ============================================================
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = PROJECTS.map(
    (p) => `
    <div class="project-card reveal">
      <div class="project-top">
        <span class="project-name">${p.name}</span>
        <i class="fa-solid fa-code-branch project-icon"></i>
      </div>
      <p class="project-desc">${p.desc}</p>
      <div class="project-stack">
        ${p.stack.map((s) => `<span class="stack-chip">${s}</span>`).join("")}
      </div>
      <div class="project-links">
        <a href="${p.repo}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Code</a>
        ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>` : ""}
      </div>
    </div>`
  ).join("");
}

// ============================================================
// Render journey commit log
// ============================================================
function renderJourney() {
  const log = document.getElementById("commitLog");
  log.innerHTML = JOURNEY.map(
    (j) => `
    <div class="commit ${j.status} reveal">
      <div class="commit-hash">#${j.hash}</div>
      <div class="commit-msg">${j.title}</div>
      <p class="commit-desc">${j.desc}</p>
    </div>`
  ).join("");
}

// ============================================================
// Tab bar navigation
// ============================================================
function initTabs() {
  const tabs = document.querySelectorAll(".tab");
  const tabbar = document.getElementById("tabbar");
  const menuToggle = document.getElementById("menuToggle");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.getElementById(tab.dataset.target);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      tabbar.classList.remove("open");
    });
  });

  menuToggle.addEventListener("click", () => {
    tabbar.classList.toggle("open");
  });
}

// ============================================================
// Scroll spy — highlight active tab based on section in view
// ============================================================
function initScrollSpy() {
  const sections = document.querySelectorAll(".section[id]");
  const tabs = document.querySelectorAll(".tab");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tabs.forEach((t) => t.classList.remove("active"));
          const activeTab = document.querySelector(`.tab[data-target="${entry.target.id}"]`);
          if (activeTab) activeTab.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

// ============================================================
// Scroll-to-top button
// ============================================================
function initScrollTop() {
  const btn = document.getElementById("scrollTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 500);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ============================================================
// Scroll reveal animations
// ============================================================
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ============================================================
// Animate education CGPA bar when in view
// ============================================================
function initEduBar() {
  const bar = document.querySelector(".edu-bar-fill");
  if (!bar) return;
  const targetWidth = bar.style.width;
  bar.style.width = "0%";
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => (bar.style.width = targetWidth));
          observer.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );
  observer.observe(bar);
}

// ============================================================
// Contact form — mailto fallback (no backend included)
// ============================================================
function initContactForm() {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;

    note.textContent = "Opening your email client…";
    form.reset();
  });
}

// ============================================================
// Custom cursor dot (desktop, decorative)
// ============================================================
function initCursorDot() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const dot = document.getElementById("cursorDot");
  window.addEventListener("mousemove", (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    dot.style.opacity = "1";
  });
  window.addEventListener("mouseleave", () => (dot.style.opacity = "0"));
}
