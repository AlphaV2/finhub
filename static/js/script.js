// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
    particlesContainer.appendChild(particle);
  }
}

// Success popup animation
function showSuccessMessage(message) {
  const popup = document.getElementById('success-popup');
  popup.textContent = message;
  popup.style.display = 'block';
  popup.style.animation = 'successPop 3s ease-out';
  
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
}

// Early Access Form (for non-Django form)
const earlyAccessForm = document.getElementById("early-access-form");
if (earlyAccessForm) {
  earlyAccessForm.addEventListener("submit", (e) => {
    // Only prevent default if it's not a Django form
    if (!earlyAccessForm.hasAttribute('action')) {
      e.preventDefault();
      const email = e.target[0].value;
      showSuccessMessage(`🎉 Welcome aboard! Early access link will be sent to ${email}`);
      document.getElementById("access-msg").textContent = `Thanks! Early access link will be sent to ${email}`;
      e.target.reset();
    }
    // If it has an action attribute (Django form), let it submit normally
  });
}

// Contact Form
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target[0].value;
  showSuccessMessage(`✨ Thanks ${name}! We'll get back to you soon!`);
  document.getElementById("contact-msg").textContent = `Thanks ${name}, we'll get back to you soon!`;
  e.target.reset();
});

// Modal Handling
function openModal(type) {
  document.getElementById(`${type}-modal`).style.display = "flex";
}

function closeModal(type) {
  const modal = document.getElementById(`${type}-modal`);
  modal.style.animation = 'modalFadeIn 0.3s ease-out reverse';
  setTimeout(() => {
    modal.style.display = "none";
    modal.style.animation = '';
  }, 300);
}

window.onclick = function(e) {
  if (e.target.classList.contains("modal")) {
    const modal = e.target;
    modal.style.animation = 'modalFadeIn 0.3s ease-out reverse';
    setTimeout(() => {
      modal.style.display = "none";
      modal.style.animation = '';
    }, 300);
  }
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease-out both';
    }
  });
}, observerOptions);

// Smooth scroll enhancement
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  initializeSmoothScroll();
  
  const sections = document.querySelectorAll('.about, .features, .contact');
  sections.forEach(section => observer.observe(section));
  
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animationDelay = (index * 0.1) + 's';
    observer.observe(card);
  });
});

// Handle form success messages from Django (if they exist)
document.addEventListener('DOMContentLoaded', () => {
  const accessMsg = document.getElementById('access-msg');
  if (accessMsg && accessMsg.textContent.trim()) {
    showSuccessMessage('🎉 Welcome aboard! Check your email for early access details.');
  }
});