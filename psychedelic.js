document.addEventListener('DOMContentLoaded', function() {
  const portalSection = document.querySelector('.portal-section');
  portalSection.addEventListener('mousemove', (e) => {
    const rect = portalSection.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    portalSection.style.setProperty('--mouse-x', `${x}%`);
    portalSection.style.setProperty('--mouse-y', `${y}%`);
    
    const hueRotation = (x + y) % 360;
    portalSection.style.setProperty('--hue-rotation', `${hueRotation}deg`);
  });

  document.querySelectorAll('.content-section').forEach(section => {
    section.addEventListener('mousemove', (e) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      section.style.setProperty('--mouse-x', `${x}%`);
      section.style.setProperty('--mouse-y', `${y}%`);
    });
  });

  document.querySelectorAll('.music-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      const angle = Math.atan2(y - 0.5, x - 0.5) * (180 / Math.PI);
      card.style.setProperty('--gradient-angle', `${angle}deg`);
      
      const intensity = Math.hypot(x - 0.5, y - 0.5) * 2;
      card.style.setProperty('--effect-intensity', intensity);
    });
  });

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.body.style.setProperty('--scroll', scrolled + 'px');
    
    const hue = (scrolled / window.innerHeight * 60 + 120) % 360;
    document.documentElement.style.setProperty('--dynamic-hue', `${hue}deg`);
  });

  function createParticleSystem(container) {
    const particles = [];
    const particleCount = 30; // Reduced from 100 for performance
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'portal-particle';
      particle.style.setProperty('--delay', `${Math.random() * 10}s`);
      particle.style.setProperty('--rotation', `${Math.random() * 360}deg`);
      container.appendChild(particle);
      particles.push(particle);
    }
    return particles;
  }

  document.querySelectorAll('.installation-card').forEach(card => {
    createParticleSystem(card);
  });

  const slipstream = document.createElement('div');
  slipstream.className = 'slipstream-overlay';
  document.body.appendChild(slipstream);

  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    slipstream.style.background = `
      radial-gradient(
        circle at ${x}% ${y}%,
        rgba(46, 92, 62, 0.2),
        transparent 50%
      )
    `;
  });
});
