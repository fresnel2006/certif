// Navigation scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Contact form validation and submission
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Reset error messages
        document.querySelectorAll('.error-message').forEach(error => {
            error.classList.remove('show');
        });

        let isValid = true;

        // Name validation
        if (!name) {
            document.getElementById('name-error').textContent = 'Le nom est requis';
            document.getElementById('name-error').classList.add('show');
            isValid = false;
        } else if (name.length < 2) {
            document.getElementById('name-error').textContent = 'Le nom doit contenir au moins 2 caractères';
            document.getElementById('name-error').classList.add('show');
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            document.getElementById('email-error').textContent = 'L\'email est requis';
            document.getElementById('email-error').classList.add('show');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            document.getElementById('email-error').textContent = 'Veuillez entrer un email valide';
            document.getElementById('email-error').classList.add('show');
            isValid = false;
        }

        // Message validation
        if (!message) {
            document.getElementById('message-error').textContent = 'Le message est requis';
            document.getElementById('message-error').classList.add('show');
            isValid = false;
        } else if (message.length < 10) {
            document.getElementById('message-error').textContent = 'Le message doit contenir au moins 10 caractères';
            document.getElementById('message-error').classList.add('show');
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission
            const submitBtn = document.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Success animation
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
                submitBtn.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';

                // Reset form after 2 seconds
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        }
    });
}

// Typing effect for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect on page load
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Project cards hover effect
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) rotate(1deg)';
    });

    project.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Skill tags animation
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
    tag.classList.add('animate-in');
});

// Add CSS for skill tag animation
const style = document.createElement('style');
style.textContent = `
    .skill-tag.animate-in {
        animation: fadeInUp 0.6s ease-out both;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }

    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);

// Social links hover effect
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(5deg)';
    });

    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Button ripple effect
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

document.querySelectorAll('.btn-primary, .btn-secondary, .submit-btn, .project-link').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);
