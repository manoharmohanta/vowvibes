// Smooth scrolling for navigation links
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

// Add scroll effect to navigation
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 4px 25px rgba(255, 133, 15, 0.15)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 4px 20px rgba(255, 133, 15, 0.1)';
    }
});

// Add interactive hover effects
document.querySelectorAll('.vendor-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-12px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Counter animation for stats
function animateCounter(element, target) {
    let count = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(count) + '+';
        }
    }, 20);
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numbers = entry.target.querySelectorAll('.stat-number');
            numbers.forEach(num => {
                const target = parseInt(num.textContent);
                animateCounter(num, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
});

const statsSection = document.querySelector('.portal-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Form submission handler
// document.querySelector('form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Thank you for your booking request! Henna by Anjali will contact you within 2 hours to confirm your appointment.');
// });

// Design gallery interaction
document.querySelectorAll('.design-item').forEach(item => {
    item.addEventListener('click', function () {
        const designName = this.textContent.trim();
        alert(`You clicked on "${designName}". Contact Anjali to see more designs in this category!`);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to service items
document.querySelectorAll('.service-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';

    setTimeout(() => {
        item.style.transition = 'all 0.6s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    }, index * 100);
});

// Highlight active bottom nav icon
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.bottom-nav__item');
    navLinks.forEach(link => {
        if (window.location.pathname.includes(link.getAttribute('href').replace('.html', ''))) {
            link.classList.add('active');
        }
        // For index.html#home
        if (window.location.pathname.endsWith('index.html') && link.getAttribute('href').includes('#home')) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for CTA buttons
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         // For demo purposes, show upgrade modal
//         showUpgradeModal();
//     });
// });

// Upgrade modal simulation
function showUpgradeModal() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;

    modal.innerHTML = `
        <div style="background: white; padding: 50px; border-radius: 20px; text-align: center; max-width: 500px; margin: 20px;">
            <h3 style="color: var(--gold); font-size: 2rem; margin-bottom: 20px;">🎉 Welcome to Premium!</h3>
            <p style="margin-bottom: 30px; color: #666; line-height: 1.6;">Thank you for choosing VowVibes Premium! Our team will contact you within 2 hours to activate your premium features and provide onboarding assistance.</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background: var(--gold); color: var(--charcoal); border: none; padding: 15px 30px; border-radius: 10px; font-weight: 600; cursor: pointer;">Close</button>
        </div>
    `;

    document.body.appendChild(modal);
}

// Add some interactive animations
document.querySelectorAll('.benefit-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';

    setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 100);
});

// Pricing card hover effects
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.borderColor = 'var(--gold)';
    });

    card.addEventListener('mouseleave', function () {
        if (!this.classList.contains('featured')) {
            this.style.borderColor = 'transparent';
        }
    });
});

// Pagination for static vendor cards in search-results.html

document.addEventListener("DOMContentLoaded", function () {
    // Only run on search-results.html
    if (!window.location.pathname.includes('search-results.html')) return;

    const pageSize = 9; // Vendors per page
    const resultsList = document.getElementById('results-list');
    const resultsCount = document.getElementById('results-count');
    let vendorCards = Array.from(resultsList.querySelectorAll('.vendor-card'));

    // Create pagination container if not present
    let pagination = document.getElementById('pagination');
    if (!pagination) {
        pagination = document.createElement('div');
        pagination.id = 'pagination';
        pagination.style.display = "flex";
        pagination.style.justifyContent = "center";
        pagination.style.gap = "0.5rem";
        pagination.style.marginTop = "2rem";
        resultsList.parentNode.appendChild(pagination);
    }

    function showPage(page) {
        // Hide all cards
        vendorCards.forEach(card => card.style.display = 'none');
        // Show only cards for this page
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        vendorCards.slice(start, end).forEach(card => card.style.display = '');

        // Update count
        const showing = vendorCards.slice(start, end).filter(card => card.style.display !== 'none').length;
        resultsCount.textContent = `Showing ${showing} of ${vendorCards.length} results`;

        // Update pagination buttons
        pagination.innerHTML = '';
        const totalPages = Math.ceil(vendorCards.length / pageSize);
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.style.padding = "0.5rem 1rem";
            btn.style.borderRadius = "6px";
            btn.style.border = "1px solid #ddd";
            btn.style.background = i === page ? "#f7c948" : "#fff";
            btn.style.fontWeight = i === page ? "bold" : "normal";
            btn.style.cursor = "pointer";
            btn.addEventListener('click', () => showPage(i));
            pagination.appendChild(btn);
        }
    }

    showPage(1);
});

// Simple filter logic
document.querySelectorAll('.gallery-filters button').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.gallery-filters button').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        document.querySelectorAll('.gallery-item').forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Indian wedding budget allocation (default percentages)
const categoryPercents = {
    venue: 0.20,
    catering: 0.25,
    decor: 0.12,
    photography: 0.08,
    makeup: 0.05,
    music: 0.04,
    invitation: 0.03,
    jewellery: 0.10,
    bridal: 0.06,
    groom: 0.03,
    gifts: 0.02,
    transport: 0.01,
    other: 0.01
};

const categoryLabels = {
    venue: "Venue",
    catering: "Catering",
    decor: "Decor",
    photography: "Photography",
    makeup: "Makeup/Mehendi",
    music: "Music/DJ",
    invitation: "Invitation",
    jewellery: "Jewellery",
    bridal: "Bridal Wear",
    groom: "Groom Wear",
    gifts: "Gifts/Return Gifts",
    transport: "Transport",
    other: "Miscellaneous"
};
const budgetForm = document.getElementById('budgetForm');

if (budgetForm) {
    budgetForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const totalBudget = parseInt(document.getElementById('totalBudget').value, 10);
        const checked = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);

        if (!totalBudget || totalBudget < 10000) {
            document.getElementById('budgetResult').innerHTML = '<div class="alert alert-warning">Please enter a valid budget (minimum ₹10,000).</div>';
            return;
        }
        if (checked.length === 0) {
            document.getElementById('budgetResult').innerHTML = '<div class="alert alert-warning">Please select at least one category.</div>';
            return;
        }

        // Calculate total percent for selected categories
        let totalPercent = checked.reduce((sum, cat) => sum + (categoryPercents[cat] || 0), 0);
        // If user selects categories whose sum is less than 1, scale up proportionally
        let resultHTML = `<table class="table table-bordered budget-table mt-3">
        <thead>
            <tr>
                <th>Category</th>
                <th>Suggested Budget (₹)</th>
                <th>Percent (%)</th>
            </tr>
        </thead>
        <tbody>`;
        let totalAllocated = 0;
        checked.forEach(cat => {
            let percent = categoryPercents[cat] || 0;
            let adjPercent = percent / totalPercent; // scale to 100%
            let amount = Math.round(totalBudget * adjPercent);
            totalAllocated += amount;
            resultHTML += `<tr>
            <td>${categoryLabels[cat]}</td>
            <td>₹${amount.toLocaleString('en-IN')}</td>
            <td>${(adjPercent * 100).toFixed(1)}%</td>
        </tr>`;
        });
        resultHTML += `</tbody></table>
        <div class="budget-total">Total Allocated: ₹${totalAllocated.toLocaleString('en-IN')}</div>`;
        document.getElementById('budgetResult').innerHTML = resultHTML;
    });
}

const contactBtn = document.getElementById('showContactForm');
if (contactBtn) {
    contactBtn.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('contactForm').style.display = 'block';
    });
}

const emailBtn = document.getElementById('showEmailForm');
if (emailBtn) {
    emailBtn.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('contactForm').style.display = 'block';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    if (!form) {
        return; // ✅ legal now, because it's inside a function
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        this.style.display = 'none';
        alert('Form submitted successfully!');
    });
});
