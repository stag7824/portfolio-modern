/**
 * Portfolio — UI logic
 * Populates dynamic sections from data.js, dark mode, scroll effects.
 */

/* ── SVG Icon library ──────────────────────── */
const ICONS = {
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
};

document.addEventListener('DOMContentLoaded', () => {
    populateAll();
    initTheme();
    initHeader();
    initMobileNav();
    initScrollReveal();
    initSmoothScroll();
});

/* ── Data helpers ─────────────────────────────── */
function getData() {
    return typeof portfolioData !== 'undefined' ? portfolioData : null;
}

/* ── Populate all sections from data.js ───────── */
function populateAll() {
    const d = getData();
    if (!d) return;

    /* Page title */
    if (d.personal) {
        document.title = d.personal.name + ' | ' + d.personal.role;
    }

    /* Nav links */
    populateNav(d);

    /* Hero */
    if (d.personal) {
        const heading = document.getElementById('heroHeading');
        if (heading) {
            const words = d.personal.role.split(' ');
            const last = words.pop();
            heading.innerHTML = words.join(' ') + '<br><span class="text-accent">' + last + '</span>';
        }
        const sub = document.getElementById('heroSub');
        if (sub) sub.textContent = d.personal.subtitle || '';
        const badge = document.getElementById('heroBadge');
        if (badge && d.personal.available) {
            badge.lastChild.textContent = ' Open to opportunities';
        }
    }

    /* Contact desc */
    const contactDesc = document.getElementById('contactDesc');
    if (contactDesc && d.personal?.availabilityNote) {
        contactDesc.textContent = d.personal.availabilityNote;
    }

    /* CTA email */
    const ctaBtn = document.getElementById('ctaEmailBtn');
    if (ctaBtn && d.personal?.email) {
        ctaBtn.href = 'mailto:' + d.personal.email;
    }

    /* Logos / companies */
    populateLogos(d);

    /* Features */
    populateFeatures(d);

    /* Experience */
    populateExperience(d);

    /* Projects */
    populateProjects(d);

    /* Skills (tags) */
    populateSkills(d);

    /* Testimonials */
    populateTestimonials(d);

    /* Contact cards */
    populateContact(d);

    /* Footer nav */
    populateFooterNav(d);
    populateFooterConnect(d);
}

/* ── Navigation ───────────────────────────────── */
function populateNav(d) {
    const nav = document.getElementById('navLinks');
    if (!nav || !d.navigation) return;
    nav.innerHTML = d.navigation
        .filter(i => !i.isCta)
        .map(i => '<a href="' + i.href + '">' + i.label + '</a>')
        .join('');
}

/* ── Logos ─────────────────────────────────────── */
function populateLogos(d) {
    const row = document.getElementById('logosRow');
    if (!row || !d.companies) return;
    row.innerHTML = d.companies.map(c => {
        const isImg = c.icon && (c.icon.endsWith('.svg') || c.icon.endsWith('.png'));
        const icon = isImg
            ? '<img src="' + c.icon + '" alt="' + c.name + '">'
            : '<span>' + c.icon + '</span>';
        return '<div class="logo-item">' + icon + ' ' + c.name + '</div>';
    }).join('');
}

/* ── Features ─────────────────────────────────── */
function populateFeatures(d) {
    const grid = document.getElementById('featuresGrid');
    if (!grid || !d.features) return;
    grid.innerHTML = d.features.map((f, i) =>
        '<div class="feature-card reveal" data-delay="' + i + '">' +
            '<div class="feature-num">' + (i + 1) + '</div>' +
            '<h3>' + f.title + '</h3>' +
            '<p>' + f.description + '</p>' +
            '<a href="' + f.link + '" class="feature-link">' + f.linkText.replace(' →', '') + ' ' + ICONS.arrow + '</a>' +
        '</div>'
    ).join('');
}

/* ── Experience ───────────────────────────────── */
function populateExperience(d) {
    const list = document.getElementById('expList');
    if (!list || !d.experience) return;
    list.innerHTML = d.experience.map((e, i) => {
        const iconHtml = e.icon && (e.icon.endsWith('.svg') || e.icon.endsWith('.png'))
            ? '<img src="' + e.icon + '" alt="' + e.company + '" class="exp-company-icon">'
            : '';
        return '<div class="exp-card reveal" data-delay="' + Math.min(i, 3) + '">' +
            '<div class="exp-header">' +
                '<div class="exp-header-left">' +
                    iconHtml +
                    '<div>' +
                        '<h3>' + e.company + '</h3>' +
                        '<span class="exp-role">' + e.role + '</span>' +
                    '</div>' +
                '</div>' +
                '<span class="exp-duration">' + e.duration + '</span>' +
            '</div>' +
            '<ul class="exp-achievements">' +
                e.achievements.map(a => '<li>' + a + '</li>').join('') +
            '</ul>' +
            '<div class="exp-tags">' +
                e.technologies.map(t => '<span>' + t + '</span>').join('') +
            '</div>' +
        '</div>';
    }).join('');
}

/* ── Projects (horizontal scroll cards) ────────── */
function populateProjects(d) {
    const grid = document.getElementById('projectsGrid');
    if (!grid || !d.projects) return;
    grid.innerHTML = d.projects.map((p, i) => {
        const ghLink = p.github && p.github !== '#'
            ? '<a href="' + p.github + '" class="project-gh" title="View on GitHub" target="_blank" rel="noopener noreferrer">' + ICONS.github + '</a>'
            : '';
        return '<div class="project-card-h">' +
            '<div class="project-top">' +
                '<span class="project-icon">' + p.icon + '</span>' +
                ghLink +
            '</div>' +
            '<h3>' + p.title + '</h3>' +
            '<p class="project-desc">' + p.description + '</p>' +
            '<div class="tech-tags">' +
                p.technologies.map(t => '<span>' + t + '</span>').join('') +
            '</div>' +
        '</div>';
    }).join('');

    // Initialize horizontal scroll controls
    initHorizontalScroll();
}

/* ── Skills (tags, no bars) ───────────────────── */
function populateSkills(d) {
    const grid = document.getElementById('skillsGrid');
    if (!grid || !d.skills) return;
    grid.innerHTML = d.skills.map((cat, ci) =>
        '<div class="skill-category reveal" data-delay="' + Math.min(ci, 3) + '">' +
            '<h3>' +
                '<span>' + cat.icon + '</span> ' +
                cat.category +
            '</h3>' +
            '<div class="skill-tags">' +
                cat.items.map(s =>
                    '<span class="skill-tag">' + s.name + '</span>'
                ).join('') +
            '</div>' +
        '</div>'
    ).join('');
}

/* ── Testimonials ─────────────────────────────── */
function populateTestimonials(d) {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid || !d.testimonials) return;
    grid.innerHTML = d.testimonials.map((t, i) =>
        '<div class="testimonial-card reveal" data-delay="' + Math.min(i, 3) + '">' +
            '<blockquote>' + t.quote + '</blockquote>' +
            '<div class="testimonial-author">' +
                '<span class="author-name">' + t.author + '</span>' +
                '<span class="author-role">' + t.role + '</span>' +
            '</div>' +
        '</div>'
    ).join('');
}

/* ── Contact (proper SVG icons) ───────────────── */
function populateContact(d) {
    const grid = document.getElementById('contactGrid');
    if (!grid || !d.personal) return;
    const p = d.personal;
    const s = d.social || {};

    const cards = [
        { icon: ICONS.email, title: 'Email', link: 'mailto:' + p.email, label: p.email },
        { icon: ICONS.linkedin, title: 'LinkedIn', link: s.linkedin, label: s.linkedinHandle },
        { icon: ICONS.github, title: 'GitHub', link: s.github, label: s.githubHandle },
    ];

    if (s.portfolio) {
        cards.push({ icon: ICONS.globe, title: 'Portfolio', link: 'https://' + s.portfolioHandle, label: s.portfolioHandle });
    }

    grid.innerHTML = cards.map(c =>
        '<div class="contact-card">' +
            '<div class="c-icon">' + c.icon + '</div>' +
            '<h3>' + c.title + '</h3>' +
            '<a href="' + c.link + '" target="_blank" rel="noopener noreferrer">' + c.label + '</a>' +
        '</div>'
    ).join('');
}

/* ── Footer nav ───────────────────────────────── */
function populateFooterNav(d) {
    const nav = document.getElementById('footerNav');
    if (!nav || !d.navigation) return;
    nav.innerHTML = d.navigation.map(i =>
        '<a href="' + i.href + '">' + i.label + '</a>'
    ).join('');
}

function populateFooterConnect(d) {
    const s = d?.social;
    if (!s) return;
    const gh = document.getElementById('footerGithub');
    const li = document.getElementById('footerLinkedin');
    const em = document.getElementById('footerEmail');
    if (gh) gh.href = s.github;
    if (li) li.href = s.linkedin;
    if (em && d.personal?.email) em.href = 'mailto:' + d.personal.email;
}

/* ═════════════════════════════════════════════════
   INTERACTIONS
   ═════════════════════════════════════════════════ */

/* ── Theme toggle ─────────────────────────────── */
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const meta = document.getElementById('themeColor');

    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (meta) meta.content = theme === 'dark' ? '#0A0A0A' : '#FAFAF8';
    }

    // Default to light mode unless user explicitly chose a theme
    if (!localStorage.getItem('theme')) {
        setTheme('light');
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    // Listen for system preference changes
    matchMedia('(prefers-color-scheme:dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

/* ── Header scroll ────────────────────────────── */
function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    let last = 0;
    const onScroll = () => {
        const y = window.scrollY;
        header.classList.toggle('scrolled', y > 10);
        if (y > last && y > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        last = y;
    };
    header.style.transition = 'transform .3s var(--ease, ease), border-color .25s, box-shadow .25s, background .4s ease';
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ── Mobile nav ───────────────────────────────── */
function initMobileNav() {
    const toggle = document.getElementById('mobileToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    function close() {
        links.classList.remove('active');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => {
        const open = links.classList.toggle('active');
        toggle.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
    });

    links.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') close();
    });
}

/* ── Smooth scroll ────────────────────────────── */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

/* ── Scroll reveal (staggered) ────────────────── */
function initScrollReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

    function observeAll() {
        document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
    }

    observeAll();
    // Also observe dynamically created elements
    setTimeout(observeAll, 150);
}

/* ── Horizontal scroll (projects) ─────────────── */
function initHorizontalScroll() {
    const wrapper = document.getElementById('hscrollWrapper');
    const track = document.getElementById('projectsGrid');
    const dotsContainer = document.getElementById('hscrollDots');
    const prevBtn = document.getElementById('hscrollPrev');
    const nextBtn = document.getElementById('hscrollNext');
    if (!wrapper || !track) return;

    const cards = track.querySelectorAll('.project-card-h');
    if (!cards.length) return;

    // Create dots
    if (dotsContainer) {
        dotsContainer.innerHTML = Array.from(cards).map((_, i) =>
            '<button class="hscroll-dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '" aria-label="Go to project ' + (i + 1) + '"></button>'
        ).join('');
    }

    function getCardWidth() {
        return cards[0].offsetWidth + 24; // card width + gap
    }

    function getActiveIndex() {
        const scrollLeft = wrapper.scrollLeft;
        const cardW = getCardWidth();
        return Math.round(scrollLeft / cardW);
    }

    function scrollToIndex(idx) {
        const cardW = getCardWidth();
        wrapper.scrollTo({ left: idx * cardW, behavior: 'smooth' });
    }

    function updateDots() {
        const idx = getActiveIndex();
        if (dotsContainer) {
            dotsContainer.querySelectorAll('.hscroll-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === idx);
            });
        }
        if (prevBtn) prevBtn.disabled = idx <= 0;
        if (nextBtn) nextBtn.disabled = idx >= cards.length - 1;
    }

    // Scroll event for dots
    wrapper.addEventListener('scroll', updateDots, { passive: true });

    // Dot clicks
    if (dotsContainer) {
        dotsContainer.addEventListener('click', e => {
            const dot = e.target.closest('.hscroll-dot');
            if (dot) scrollToIndex(Number(dot.dataset.index));
        });
    }

    // Arrow clicks
    if (prevBtn) prevBtn.addEventListener('click', () => scrollToIndex(Math.max(0, getActiveIndex() - 1)));
    if (nextBtn) nextBtn.addEventListener('click', () => scrollToIndex(Math.min(cards.length - 1, getActiveIndex() + 1)));

    // Mouse drag scrolling
    let isDragging = false, startX = 0, startScroll = 0;
    wrapper.addEventListener('mousedown', e => {
        isDragging = true;
        startX = e.pageX;
        startScroll = wrapper.scrollLeft;
        wrapper.style.scrollSnapType = 'none';
    });
    window.addEventListener('mousemove', e => {
        if (!isDragging) return;
        e.preventDefault();
        wrapper.scrollLeft = startScroll - (e.pageX - startX);
    });
    window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        wrapper.style.scrollSnapType = 'x mandatory';
        // Snap to nearest card
        scrollToIndex(getActiveIndex());
    });

    updateDots();
}
