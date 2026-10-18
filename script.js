// Small interactions: active nav state and current year.
document.getElementById("year").textContent = new Date().getFullYear();

const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = navLinks
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-30% 0px -60% 0px" });

sections.forEach(section => observer.observe(section));
