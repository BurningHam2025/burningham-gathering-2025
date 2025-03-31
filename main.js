document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const navHeight = document.querySelector('#main-nav').offsetHeight;
      window.scrollTo({
        top: target.offsetTop - navHeight,
        behavior: 'smooth'
      });
    });
  });

  const nav = document.querySelector('#main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(255, 255, 255, 0.98)';
      nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
      nav.style.background = 'rgba(255, 255, 255, 0.95)';
      nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
  });

  const features = document.querySelectorAll('.feature');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
      }
    });
  }, { threshold: 0.1 });

  features.forEach(feature => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(20px)';
    feature.style.transition = 'all 0.6s ease-out';
    observer.observe(feature);
  });

  const hero = document.querySelector('#hero');
  hero.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    hero.style.backgroundPosition = `${x * 50}px ${y * 50}px, 0 0, 0 0`;
  });

  const hammySection = document.querySelector('#hammy');
  if (hammySection) {
    const burningHam = hammySection.querySelector('.burning-ham');
    burningHam.addEventListener('mouseover', () => {
      const flames = burningHam.querySelector('.flames');
      flames.style.filter = 'blur(15px)';
      flames.style.height = '70%';
    });
    burningHam.addEventListener('mouseout', () => {
      const flames = burningHam.querySelector('.flames');
      flames.style.filter = 'blur(10px)';
      flames.style.height = '60%';
    });
  }
});
