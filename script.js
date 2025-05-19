
// AOS Animation Init
AOS.init({ duration: 800, once: true });

// Theme Toggle
function themeToggle() {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
}
window.onload = () => {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
  }
};

// Navigation Toggle (Mobile)
function navToggle() {
  document.getElementById('mainNav').classList.toggle('show');
}

// Back to Top Button
window.onscroll = () => {
  document.getElementById('topBtn').style.display =
    window.scrollY > 300 ? 'block' : 'none';
};

// Rename function:
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Portfolio Gallery Loader and Filter
if (document.getElementById('gallery')) {
  const gallery = document.getElementById('gallery');
  const categories = ['landscapes', 'people', 'urban', 'nature'];
  for (let i = 1; i <= 100; i++) {
    const cat = categories[i % categories.length];
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.dataset.category = cat;
    img.dataset.aos = 'zoom-in';
    img.src = `https://picsum.photos/seed/${cat + i}/400/300`;
    img.alt = cat;
    gallery.appendChild(img);
  }

  document.querySelectorAll('.filters button').forEach(btn => {
    btn.onclick = () => {
      document.querySelector('.filters .active')?.classList.remove('active');
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('#gallery img').forEach(img => {
        img.style.display = (filter === 'all' || img.dataset.category === filter) ? 'block' : 'none';
      });
    };
  });
}

// Scroll slider by one card width
function scrollSlider(direction) {
  const slider = document.getElementById('cardSlider');
  // calculate card width (including gap)
  const card = slider.querySelector('.card');
  const style = window.getComputedStyle(slider);
  const gap = parseInt(style.columnGap || style.gap) || 16;
  const cardWidth = card.offsetWidth + gap;
  slider.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}
function themeToggle() {
  const isLight = document.body.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Hide preloader once everything is ready
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.remove(), 500);
  }
});

function navToggle() {
  document.getElementById('mainNav').classList.toggle('show');
}
