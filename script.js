const navToggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const yearSpan = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (navToggleButton && navLinks) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Example: inject projects dynamically (keep static HTML as fallback)
// To customize, edit the array below
const projects = [
  {
    title: 'Project One',
    description: 'Brief description of the project highlighting your role and impact.',
    tags: ['React', 'Node', 'PostgreSQL'],
    live: '#',
    source: '#',
  },
  {
    title: 'Project Two',
    description: 'Short blurb about what problem the project solves and technologies used.',
    tags: ['TypeScript', 'Next.js', 'Tailwind'],
    live: '#',
    source: '#',
  },
  {
    title: 'Project Three',
    description: 'What you built, notable results, and any metrics you can share.',
    tags: ['Python', 'Flask', 'Docker'],
    live: '#',
    source: '#',
  },
];

const projectsGrid = document.getElementById('projectsGrid');
if (projectsGrid && projects && projects.length) {
  projectsGrid.innerHTML = projects
    .map((p) => {
      const tags = p.tags.map((t) => `<span>${t}</span>`).join('');
      return `
      <article class="card">
        <div class="card-body">
          <h3 class="card-title">${p.title}</h3>
          <p class="card-text">${p.description}</p>
          <div class="card-tags">${tags}</div>
        </div>
        <div class="card-actions">
          <a href="${p.live}" class="btn btn-sm" target="_blank" rel="noopener">Live</a>
          <a href="${p.source}" class="btn btn-sm" target="_blank" rel="noopener">Source</a>
        </div>
      </article>`;
    })
    .join('');
}

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formStatus.textContent = 'Sending...';
    const formData = new FormData(contactForm);

    // Demo only: simulate sending
    await new Promise((r) => setTimeout(r, 800));

    // If using a real backend, POST formData to your endpoint here
    formStatus.textContent = 'Thanks! I will get back to you soon.';
    contactForm.reset();
  });
}