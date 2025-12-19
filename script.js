/**
 * Portfolio - Interactive Features
 * Inspired by Cursor's modern UI/UX
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize dynamic content from data.js FIRST
    initDynamicContent();
    
    // Initialize all features
    initSmoothScroll();
    initHeaderScroll();
    initMobileMenu();
    initTypingAnimation();
    initScrollAnimations();
    initFileExplorer();
    initEditorTabs();
    initChatDemo();
    initChatMinimize();
    initNewFileButton();
    initSkillBars();
    initParallax();
});

/**
 * Initialize ALL dynamic content from portfolioData
 */
function initDynamicContent() {
    const data = typeof portfolioData !== 'undefined' ? portfolioData : null;
    if (!data) return;
    
    const firstName = data.personal?.firstName || 'Talha';
    const lastName = data.personal?.lastName || 'Ahmed';
    const name = data.personal?.name || 'Talha Ahmed';
    const role = data.personal?.role || 'Senior Java Backend Engineer';
    const className = firstName + lastName;
    const mainFileName = `${className}.java`;
    const logoTextValue = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
    
    // Update window title
    document.title = `${name} | ${role}`;
    
    // Update logo with neon effect data attribute
    const logoText = document.querySelector('.logo-text');
    if (logoText) {
        logoText.textContent = logoTextValue;
        logoText.setAttribute('data-text', logoTextValue);
    }
    
    // Update navigation links from data
    initDynamicNavigation(data);
    
    // Update file explorer main Java file
    const mainFileEl = document.querySelector('.file.active');
    if (mainFileEl) {
        const fileText = mainFileEl.childNodes[mainFileEl.childNodes.length - 1];
        if (fileText && fileText.nodeType === Node.TEXT_NODE) {
            fileText.textContent = `\n                                                    ${mainFileName}`;
        }
    }
    
    // Update active tab
    const activeTab = document.querySelector('.tab.active');
    if (activeTab) {
        activeTab.setAttribute('data-file', mainFileName);
        const tabName = activeTab.querySelector('.tab-name');
        if (tabName) {
            tabName.textContent = mainFileName;
        }
    }
    
    // Update breadcrumb
    const breadcrumbCurrent = document.querySelector('.breadcrumb .current');
    if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = mainFileName;
    }
    
    // Update titlebar
    const titlebar = document.querySelector('.titlebar-text');
    if (titlebar) {
        titlebar.textContent = `${mainFileName} — portfolio`;
    }
    
    // Update hero content
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && data.personal) {
        heroTitle.innerHTML = `
            ${data.personal.tagline}, 
            <span class="gradient-text">${name} is a ${role}</span> 
            ${data.personal.description}.
        `;
    }
    
    // Update hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle && data.personal?.subtitle) {
        heroSubtitle.textContent = data.personal.subtitle;
    }
    
    // Update mobile hero card
    updateMobileHeroCard(data);
    
    // Update AI chat messages
    updateChatMessages(data);
    
    // Update companies section
    updateCompaniesSection(data);
    
    // Update feature cards with metrics
    updateFeatureCards(data);
    
    // Update experience timeline
    updateExperienceTimeline(data);
    
    // Update testimonials
    updateTestimonials(data);
    
    // Update projects
    updateProjects(data);
    
    // Update skills
    updateSkills(data);
    
    // Update contact section
    updateContactSection(data);
    
    // Update footer
    updateFooter(data);
}

/**
 * Initialize navigation dynamically
 */
function initDynamicNavigation(data) {
    if (!data.navigation) return;
    
    const navLinks = document.getElementById('navLinks');
    if (!navLinks) return;
    
    navLinks.innerHTML = data.navigation.map(item => {
        if (item.isCta) {
            return `<a href="${item.href}" class="nav-cta">${item.label}</a>`;
        }
        return `<a href="${item.href}">${item.label}</a>`;
    }).join('');
}

/**
 * Update mobile hero card
 */
function updateMobileHeroCard(data) {
    const mobileCardName = document.querySelector('.mobile-card-info h3');
    if (mobileCardName) {
        mobileCardName.textContent = data.personal?.name || 'Talha Ahmed';
    }
    const mobileCardRole = document.querySelector('.mobile-card-info span');
    if (mobileCardRole) {
        mobileCardRole.textContent = data.personal?.role || 'Senior Java Backend Engineer';
    }
    
    // Update mobile stats
    const mobileStats = document.querySelector('.mobile-stats');
    if (mobileStats && data.metrics) {
        const yearsExp = data.personal?.yearsExperience || '8+';
        mobileStats.innerHTML = `
            <div class="mobile-stat">
                <span class="stat-number">${yearsExp}</span>
                <span class="stat-label">Years Exp</span>
            </div>
            <div class="mobile-stat">
                <span class="stat-number">50M+</span>
                <span class="stat-label">Users Served</span>
            </div>
            <div class="mobile-stat">
                <span class="stat-number">${data.metrics[2]?.value || '99.99%'}</span>
                <span class="stat-label">Uptime</span>
            </div>
        `;
    }
    
    // Update mobile tags
    const mobileTags = document.querySelector('.mobile-tags');
    if (mobileTags && data.expertise) {
        mobileTags.innerHTML = data.expertise.slice(0, 4).map(skill => 
            `<span>${skill}</span>`
        ).join('');
    }
}

/**
 * Update chat messages
 */
function updateChatMessages(data) {
    const name = data.personal?.name || 'Talha Ahmed';
    const role = data.personal?.role || 'Senior Java Backend Engineer';
    const yearsExp = data.personal?.yearsExperience || '8+';
    
    const userMsg = document.querySelector('.chat-message.user .message-content');
    const assistantMsg = document.querySelector('.chat-message.assistant .message-content');
    
    if (userMsg) {
        userMsg.textContent = `Tell me about ${name}'s experience`;
    }
    if (assistantMsg && data.experience && data.experience[0]) {
        const exp = data.experience[0];
        assistantMsg.innerHTML = `
            <p><strong>${name}</strong> is a ${role} with ${yearsExp} years of experience building distributed systems at scale.</p>
            <p>Key highlights:</p>
            <ul>
                <li>Led backend architecture at <strong>${exp.company}</strong> serving 50M+ users</li>
                <li>${exp.achievements[0]}</li>
                <li>Open source contributor to Spring Framework</li>
            </ul>
        `;
    }
}

/**
 * Update companies section
 */
function updateCompaniesSection(data) {
    if (!data.companies) return;
    
    const companyLogos = document.querySelector('.company-logos');
    if (!companyLogos) return;
    
    companyLogos.innerHTML = data.companies.map(company => `
        <div class="logo-item">
            <span class="company-logo">${company.icon} ${company.name}</span>
        </div>
    `).join('');
}

/**
 * Update feature cards with metrics
 */
function updateFeatureCards(data) {
    if (!data.features || !data.metrics) return;
    
    // Update metrics in the terminal demo
    const metricRows = document.querySelectorAll('.metric-row');
    if (metricRows.length > 0 && data.metrics) {
        data.metrics.forEach((metric, index) => {
            if (metricRows[index]) {
                const row = metricRows[index];
                const label = row.querySelector('.metric-label');
                const fill = row.querySelector('.metric-fill');
                const value = row.querySelector('.metric-value');
                
                if (label) label.textContent = metric.label;
                if (fill) fill.style.width = `${metric.percentage}%`;
                if (value) {
                    value.textContent = metric.value;
                    if (metric.status === 'good') {
                        value.classList.add('good');
                    }
                }
            }
        });
    }
}

/**
 * Update experience timeline
 */
function updateExperienceTimeline(data) {
    if (!data.experience) return;
    
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    timeline.innerHTML = data.experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="company-header">
                    <h3>${exp.company}</h3>
                    <span class="role">${exp.role}</span>
                    <span class="duration">${exp.duration}</span>
                </div>
                <ul class="achievements">
                    ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
                </ul>
                <div class="tech-tags">
                    ${exp.technologies.map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Update testimonials
 */
function updateTestimonials(data) {
    if (!data.testimonials) return;
    
    const testimonialGrid = document.querySelector('.testimonial-grid');
    if (!testimonialGrid) return;
    
    testimonialGrid.innerHTML = data.testimonials.map(t => `
        <div class="testimonial-card">
            <blockquote>"${t.quote}"</blockquote>
            <div class="testimonial-author">
                <span class="author-name">${t.author}</span>
                <span class="author-role">${t.role}</span>
            </div>
        </div>
    `).join('');
}

/**
 * Update projects
 */
function updateProjects(data) {
    if (!data.projects) return;
    
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = data.projects.map(p => `
        <div class="project-card">
            <div class="project-header">
                <span class="project-icon">${p.icon}</span>
                <h3>${p.title}</h3>
                <div class="project-links">
                    <a href="${p.github}" class="github-link" title="GitHub">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <p class="project-desc">${p.description}</p>
            <div class="tech-tags">
                ${p.technologies.map(t => `<span>${t}</span>`).join('')}
            </div>
            <div class="project-stats">
                <span>⭐ ${p.stars}</span>
                <span>🍴 ${p.forks}</span>
            </div>
        </div>
    `).join('');
}

/**
 * Update skills section
 */
function updateSkills(data) {
    if (!data.skills) return;
    
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = data.skills.map(category => `
        <div class="skill-category">
            <h3>
                <span class="category-icon">${category.icon}</span>
                ${category.category}
            </h3>
            <div class="skill-list">
                ${category.items.map(skill => `
                    <div class="skill-item">
                        <span class="skill-name">${skill.name}</span>
                        <div class="skill-bar"><div class="skill-fill" style="width: ${skill.level}%"></div></div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

/**
 * Update contact section
 */
function updateContactSection(data) {
    const personal = data.personal;
    const social = data.social;
    if (!personal || !social) return;
    
    // Update contact subtitle
    const contactSubtitle = document.querySelector('.contact-subtitle');
    if (contactSubtitle && personal.availabilityNote) {
        contactSubtitle.textContent = personal.availabilityNote;
    }
    
    // Update contact cards
    const contactGrid = document.querySelector('.contact-grid');
    if (contactGrid) {
        contactGrid.innerHTML = `
            <div class="contact-card">
                <div class="contact-icon">📧</div>
                <h3>Email</h3>
                <a href="mailto:${personal.email}">${personal.email}</a>
            </div>
            <div class="contact-card">
                <div class="contact-icon">💼</div>
                <h3>LinkedIn</h3>
                <a href="${social.linkedin}">${social.linkedinHandle}</a>
            </div>
            <div class="contact-card">
                <div class="contact-icon">🐙</div>
                <h3>GitHub</h3>
                <a href="${social.github}">${social.githubHandle}</a>
            </div>
            <div class="contact-card">
                <div class="contact-icon">𝕏</div>
                <h3>Twitter</h3>
                <a href="${social.twitter}">${social.twitterHandle}</a>
            </div>
        `;
    }
    
    // Update CTA email
    const ctaLink = document.querySelector('.cta-box a[href^="mailto"]');
    if (ctaLink && personal.email) {
        ctaLink.setAttribute('href', `mailto:${personal.email}`);
    }
}

/**
 * Update footer
 */
function updateFooter(data) {
    const personal = data.personal;
    const social = data.social;
    const footer = data.footer;
    if (!personal) return;
    
    const firstName = personal.firstName || 'Talha';
    const lastName = personal.lastName || 'Ahmed';
    const logoTextValue = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
    
    // Update footer logo
    const footerLogo = document.querySelector('.footer-logo .logo-text');
    if (footerLogo) {
        footerLogo.textContent = logoTextValue;
        footerLogo.setAttribute('data-text', logoTextValue);
    }
    
    // Update footer navigation from data
    if (data.navigation) {
        const footerNav = document.querySelector('.footer-nav');
        if (footerNav) {
            footerNav.innerHTML = data.navigation.map(item => 
                `<a href="${item.href}">${item.label}</a>`
            ).join('');
        }
    }
    
    // Update social links
    if (social) {
        const footerGithub = document.getElementById('footerGithub');
        const footerLinkedin = document.getElementById('footerLinkedin');
        const footerTwitter = document.getElementById('footerTwitter');
        
        if (footerGithub) footerGithub.href = social.github;
        if (footerLinkedin) footerLinkedin.href = social.linkedin;
        if (footerTwitter) footerTwitter.href = social.twitter;
    }
    
    // Update copyright and badges
    if (footer) {
        const footerBottom = document.querySelector('.footer-bottom p');
        if (footerBottom) {
            footerBottom.textContent = footer.copyright;
        }
        
        const footerBadges = document.querySelector('.footer-badges');
        if (footerBadges && footer.badges) {
            footerBadges.innerHTML = footer.badges.map(badge => 
                `<span class="badge">${badge.icon} ${badge.text}</span>`
            ).join('');
        }
    }
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                document.querySelector('.nav-links')?.classList.remove('active');
            }
        });
    });
}

/**
 * Header background change on scroll
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class based on scroll position
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show header based on scroll direction
        if (currentScroll > lastScroll && currentScroll > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }
}

/**
 * Typing animation for code editor
 */
function initTypingAnimation() {
    const codeContent = document.querySelector('.code-content');
    const lineNumbers = document.querySelector('.line-numbers');
    if (!codeContent) return;

    // Get dynamic data
    const data = typeof portfolioData !== 'undefined' ? portfolioData : null;
    const firstName = data?.personal?.firstName || 'Talha';
    const lastName = data?.personal?.lastName || 'Ahmed';
    const mainFileName = `${firstName}${lastName}.java`;
    
    // Get dynamic content
    const fileContents = getFileContent(mainFileName);
    if (fileContents) {
        codeContent.innerHTML = `<code>${fileContents.code}</code>`;
        
        // Update line numbers
        if (lineNumbers) {
            lineNumbers.innerHTML = '';
            for (let i = 1; i <= fileContents.lines; i++) {
                const span = document.createElement('span');
                span.textContent = i;
                lineNumbers.appendChild(span);
            }
        }
    }
    
    // Store content for animation
    const codeElement = codeContent.querySelector('code');
    if (!codeElement) return;
    
    const originalHTML = codeElement.innerHTML;
    const lines = originalHTML.split('\n');
    
    // Clear content for animation
    codeElement.innerHTML = '';
    
    let currentLine = 0;
    const typeSpeed = 5;
    
    function typeNextLine() {
        if (currentLine < lines.length) {
            codeElement.innerHTML += lines[currentLine] + '\n';
            currentLine++;
            
            // Random delay between lines for natural effect
            const delay = Math.random() * 50 + typeSpeed;
            setTimeout(typeNextLine, delay);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeNextLine, 500);
}

/**
 * Scroll-triggered animations
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate skill bars when visible
                if (entry.target.classList.contains('skill-fill')) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0';
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 100);
                }
            }
        });
    }, observerOptions);

    // Observe elements
    const animatedElements = document.querySelectorAll(
        '.feature-card, .timeline-item, .testimonial-card, .project-card, .skill-category, .contact-card'
    );
    
    animatedElements.forEach(el => {
        el.classList.add('animate-element');
        observer.observe(el);
    });

    // Observe skill fills
    document.querySelectorAll('.skill-fill').forEach(el => {
        observer.observe(el);
    });
}

/**
 * File explorer interactivity
 */
function initFileExplorer() {
    const folders = document.querySelectorAll('.folder');
    const files = document.querySelectorAll('.file');

    folders.forEach(folder => {
        const folderName = folder.querySelector('.folder-name');
        folderName?.addEventListener('click', (e) => {
            e.stopPropagation();
            folder.classList.toggle('open');
        });
    });

    files.forEach(file => {
        file.addEventListener('click', () => {
            // Remove active from all files
            files.forEach(f => f.classList.remove('active'));
            // Add active to clicked file
            file.classList.add('active');
            
            // Get file name and switch to that tab
            const fileName = file.textContent.trim();
            switchToFile(fileName);
        });
    });
}

/**
 * Editor tabs functionality
 */
function initEditorTabs() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            // Don't trigger if clicking close button
            if (e.target.classList.contains('tab-close')) {
                return;
            }
            
            const fileName = tab.getAttribute('data-file');
            if (fileName) {
                switchToFile(fileName);
            }
        });
        
        // Close button functionality
        const closeBtn = tab.querySelector('.tab-close');
        closeBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            // Don't close if it's the only tab or active tab
            const allTabs = document.querySelectorAll('.tab');
            if (allTabs.length > 1 && !tab.classList.contains('active')) {
                tab.remove();
            }
        });
    });
}

/**
 * Switch to a specific file
 */
function switchToFile(fileName) {
    const tabs = document.querySelectorAll('.tab');
    const files = document.querySelectorAll('.file');
    const codeContent = document.querySelector('.code-content code');
    const breadcrumbCurrent = document.querySelector('.breadcrumb .current');
    const lineNumbers = document.querySelector('.line-numbers');
    
    // Update tabs
    tabs.forEach(tab => {
        const tabFile = tab.getAttribute('data-file');
        if (tabFile === fileName || tab.textContent.includes(fileName)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Update file explorer
    files.forEach(file => {
        if (file.textContent.trim() === fileName) {
            file.classList.add('active');
        } else {
            file.classList.remove('active');
        }
    });
    
    // Update breadcrumb
    if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = fileName;
    }
    
    // Update code content based on file
    const fileContents = getFileContent(fileName);
    if (codeContent && fileContents) {
        codeContent.innerHTML = fileContents.code;
        
        // Update line numbers
        if (lineNumbers) {
            lineNumbers.innerHTML = '';
            for (let i = 1; i <= fileContents.lines; i++) {
                const span = document.createElement('span');
                span.textContent = i;
                lineNumbers.appendChild(span);
            }
        }
    }
}

/**
 * Get file content for different files - DYNAMIC from portfolioData
 */
function getFileContent(fileName) {
    // Get dynamic data from portfolioData
    const data = typeof portfolioData !== 'undefined' ? portfolioData : null;
    const name = data?.personal?.name || 'Talha Ahmed';
    const firstName = data?.personal?.firstName || 'Talha';
    const lastName = data?.personal?.lastName || 'Ahmed';
    const className = firstName + lastName;
    const role = data?.personal?.role || 'Senior Java Backend Engineer';
    const location = data?.personal?.location || 'San Francisco, CA';
    const yearsExp = data?.personal?.yearsExperience?.replace('+', '') || '8';
    const expertise = data?.expertise || ['Microservices', 'Distributed Systems', 'Spring Boot', 'Kubernetes', 'Event-Driven Architecture'];
    const packageName = `com.${firstName.toLowerCase()}${lastName.toLowerCase()}.portfolio`;
    
    // Build expertise list HTML
    const expertiseItems = expertise.map(e => `<span class="string">"${e}"</span>`).join(',\n        ');
    
    // Dynamic main profile file
    const mainFileName = `${className}.java`;
    
    const contents = {
        [mainFileName]: {
            lines: 52,
            code: `<span class="keyword">package</span> <span class="namespace">${packageName}</span>;

<span class="keyword">import</span> <span class="namespace">java.util.concurrent.CompletableFuture</span>;
<span class="keyword">import</span> <span class="namespace">java.util.List</span>;
<span class="keyword">import</span> <span class="namespace">lombok.Builder</span>;

<span class="comment">/**
 * ═══════════════════════════════════════════════════════════
 *  ${role}
 *  Building distributed systems that scale to millions
 * ═══════════════════════════════════════════════════════════
 * @author  ${name}
 * @version 3.0.0-RELEASE
 * @since   2016
 */</span>
<span class="annotation">@Service</span>
<span class="annotation">@Slf4j</span>
<span class="keyword">public class</span> <span class="class-name">${className}</span> <span class="keyword">implements</span> <span class="interface">Engineer</span>, <span class="interface">Architect</span>, <span class="interface">Mentor</span> {

    <span class="comment">// ═══════════ PROFILE CONSTANTS ═══════════</span>
    <span class="keyword">public static final</span> <span class="type">String</span>  NAME     = <span class="string">"${name}"</span>;
    <span class="keyword">public static final</span> <span class="type">String</span>  ROLE     = <span class="string">"${role}"</span>;
    <span class="keyword">public static final</span> <span class="type">int</span>     YOE      = <span class="number">${yearsExp}</span>;
    <span class="keyword">public static final</span> <span class="type">String</span>  LOCATION = <span class="string">"${location}"</span>;
    
    <span class="comment">// ═══════════ CORE EXPERTISE ═══════════</span>
    <span class="keyword">private final</span> <span class="type">List</span>&lt;<span class="type">String</span>&gt; expertise = List.of(
        ${expertiseItems}
    );
    
    <span class="annotation">@Override</span>
    <span class="keyword">public</span> <span class="type">CompletableFuture</span>&lt;<span class="type">Solution</span>&gt; <span class="method">architect</span>(<span class="type">Challenge</span> problem) {
        <span class="keyword">return</span> CompletableFuture.supplyAsync(() -> 
            Solution.builder()
                .scalability(<span class="type">Scalability</span>.HORIZONTAL)
                .availability(<span class="number">99.99</span>)
                .latencyP99(<span class="type">Duration</span>.ofMillis(<span class="number">15</span>))
                .throughput(<span class="string">"500K RPS"</span>)
                .build()
        );
    }
    
    <span class="annotation">@Scheduled</span>(cron = <span class="string">"0 0 * * * *"</span>)
    <span class="keyword">public void</span> <span class="method">continuousLearning</span>() {
        log.info(<span class="string">"☕ Exploring new technologies..."</span>);
    }
}`
        },
        'Experience.java': {
            lines: 62,
            code: `<span class="keyword">package</span> <span class="namespace">${packageName}</span>;

<span class="keyword">import</span> <span class="namespace">java.time.*</span>;
<span class="keyword">import</span> <span class="namespace">java.util.stream.*</span>;

<span class="comment">/**
 * ┌─────────────────────────────────────────────────┐
 *   Professional Journey & Career Milestones
 * └─────────────────────────────────────────────────┘
 * @author ${name}
 */</span>
<span class="annotation">@Repository</span>
<span class="keyword">public class</span> <span class="class-name">Experience</span> {

    <span class="keyword">private final</span> <span class="type">List</span>&lt;<span class="type">Role</span>&gt; journey = List.of(
        
        <span class="comment">// ══════════ CURRENT ROLE ══════════</span>
        Role.builder()
            .company(<span class="string">"TechCorp Inc."</span>)
            .title(<span class="string">"Senior Backend Engineer"</span>)
            .period(<span class="string">"2021 → Present"</span>)
            .impact(List.of(
                <span class="string">"🚀 Led monolith → microservices (80% faster deploys)"</span>,
                <span class="string">"💰 Architected $2B+ payment processing system"</span>,
                <span class="string">"👥 Mentored 6 engineers to senior level"</span>,
                <span class="string">"📉 Cut infrastructure costs by 40%"</span>
            ))
            .build(),
        
        <span class="comment">// ══════════ PREVIOUS ROLES ══════════</span>
        Role.builder()
            .company(<span class="string">"CloudScale Solutions"</span>)
            .title(<span class="string">"Backend Developer"</span>)
            .period(<span class="string">"2018 → 2021"</span>)
            .impact(List.of(
                <span class="string">"📊 Real-time analytics: 1M+ events/min"</span>,
                <span class="string">"🔐 OAuth2/OIDC for 10M+ users"</span>,
                <span class="string">"🌍 Multi-region DR architecture"</span>
            ))
            .build(),
            
        Role.builder()
            .company(<span class="string">"DataFlow Systems"</span>)
            .title(<span class="string">"Software Engineer"</span>)
            .period(<span class="string">"2016 → 2018"</span>)
            .impact(List.of(
                <span class="string">"🔗 RESTful APIs for B2B platform"</span>,
                <span class="string">"🧪 Testing framework (70% fewer bugs)"</span>,
                <span class="string">"⚡ 5x database query optimization"</span>
            ))
            .build()
    );
    
    <span class="keyword">public</span> <span class="type">Duration</span> <span class="method">getTotTalhaperience</span>() {
        <span class="keyword">return</span> <span class="type">Duration</span>.between(
            LocalDate.of(<span class="number">2016</span>, <span class="number">6</span>, <span class="number">1</span>),
            LocalDate.now()
        );
    }
}`
        },
        'Projects.java': {
            lines: 58,
            code: `<span class="keyword">package</span> <span class="namespace">${packageName}</span>;

<span class="keyword">import</span> <span class="namespace">java.util.stream.*</span>;
<span class="keyword">import</span> <span class="namespace">lombok.*</span>;

<span class="comment">/**
 * ╔═══════════════════════════════════════════════════════════╗
 *   Open Source Contributions & Featured Projects
 * ╚═══════════════════════════════════════════════════════════╝
 * @author ${name}
 */</span>
<span class="annotation">@Component</span>
<span class="keyword">public class</span> <span class="class-name">Projects</span> {

    <span class="keyword">public static final</span> <span class="type">List</span>&lt;<span class="type">Project</span>&gt; OPEN_SOURCE = List.of(
    
        <span class="comment">// ★★★ Most Popular ★★★</span>
        Project.builder()
            .name(<span class="string">"Distributed Cache Framework"</span>)
            .description(<span class="string">"Sub-ms latency, 100K+ QPS"</span>)
            .tech(<span class="string">"Java 17"</span>, <span class="string">"Netty"</span>, <span class="string">"Raft"</span>)
            .stars(<span class="number">2300</span>).forks(<span class="number">340</span>)
            .build(),
            
        Project.builder()
            .name(<span class="string">"API Rate Limiter"</span>)
            .description(<span class="string">"Token bucket + sliding window"</span>)
            .tech(<span class="string">"Java 17"</span>, <span class="string">"Redis"</span>, <span class="string">"Lua"</span>)
            .stars(<span class="number">1800</span>).forks(<span class="number">215</span>)
            .build(),
            
        Project.builder()
            .name(<span class="string">"Event Sourcing Framework"</span>)
            .description(<span class="string">"CQRS + automatic snapshots"</span>)
            .tech(<span class="string">"Spring Boot"</span>, <span class="string">"Kafka"</span>)
            .stars(<span class="number">890</span>).forks(<span class="number">128</span>)
            .build(),
            
        Project.builder()
            .name(<span class="string">"JWT Auth Library"</span>)
            .description(<span class="string">"Refresh rotation + fingerprinting"</span>)
            .tech(<span class="string">"Spring Security"</span>, <span class="string">"JWT"</span>)
            .stars(<span class="number">1200</span>).forks(<span class="number">187</span>)
            .build()
    );
    
    <span class="keyword">public</span> <span class="type">long</span> <span class="method">getTotalStars</span>() {
        <span class="keyword">return</span> OPEN_SOURCE.stream()
            .mapToLong(Project::getStars)
            .sum(); <span class="comment">// → 6,190 ⭐</span>
    }
}`
        },
        'Skills.json': {
            lines: 42,
            code: `{
  <span class="string">"profile"</span>: {
    <span class="string">"name"</span>:     <span class="string">"${name}"</span>,
    <span class="string">"title"</span>:    <span class="string">"${role}"</span>,
    <span class="string">"yoe"</span>:      <span class="number">${yearsExp}</span>
  },
  
  <span class="string">"languages"</span>: {
    <span class="string">"Java 17+"</span>:     <span class="number">95</span>,
    <span class="string">"Kotlin"</span>:       <span class="number">75</span>,
    <span class="string">"Go"</span>:           <span class="number">60</span>,
    <span class="string">"TypeScript"</span>:   <span class="number">70</span>
  },
  
  <span class="string">"frameworks"</span>: {
    <span class="string">"Spring Boot"</span>:  <span class="number">95</span>,
    <span class="string">"Spring Cloud"</span>: <span class="number">90</span>,
    <span class="string">"Micronaut"</span>:    <span class="number">70</span>
  },
  
  <span class="string">"databases"</span>: {
    <span class="string">"PostgreSQL"</span>:   <span class="number">90</span>,
    <span class="string">"Redis"</span>:        <span class="number">90</span>,
    <span class="string">"MongoDB"</span>:      <span class="number">80</span>,
    <span class="string">"Elasticsearch"</span>:<span class="number">75</span>,
    <span class="string">"Cassandra"</span>:    <span class="number">65</span>
  },
  
  <span class="string">"cloud"</span>: {
    <span class="string">"Kubernetes"</span>:   <span class="number">90</span>,
    <span class="string">"Docker"</span>:       <span class="number">95</span>,
    <span class="string">"AWS"</span>:          <span class="number">85</span>,
    <span class="string">"GCP"</span>:          <span class="number">70</span>,
    <span class="string">"Terraform"</span>:    <span class="number">75</span>
  },
  
  <span class="string">"messaging"</span>: {
    <span class="string">"Kafka"</span>:        <span class="number">90</span>,
    <span class="string">"RabbitMQ"</span>:     <span class="number">80</span>,
    <span class="string">"gRPC"</span>:         <span class="number">85</span>
  }
}`
        },
        'README.md': {
            lines: 45,
            code: `<span class="comment"># 👋 Hi, I'm ${name}</span>

<span class="string">## ${role}</span>

<span class="keyword">Building scalable backend systems that power</span>
<span class="keyword">millions of users worldwide.</span>

<span class="comment">───────────────────────────────────────────</span>

<span class="string">### 🚀 What I Do</span>

<span class="keyword">→</span> Design <span class="type">distributed systems</span> at scale
<span class="keyword">→</span> Build <span class="type">microservices</span> with Spring Boot
<span class="keyword">→</span> Architect <span class="type">event-driven</span> platforms
<span class="keyword">→</span> Optimize for <span class="type">high availability</span>

<span class="string">### 📊 By the Numbers</span>

<span class="number">${yearsExp}+</span>  Years of Experience
<span class="number">50M+</span> Users Served
<span class="number">99.99%</span> Uptime Achieved
<span class="number">$2B+</span> Transactions Processed

<span class="string">### 🛠️ Tech Stack</span>

<span class="type">Languages:</span>  Java, Kotlin, Go
<span class="type">Framework:</span>  Spring Boot, Spring Cloud
<span class="type">Databases:</span>  PostgreSQL, Redis, MongoDB
<span class="type">Cloud:</span>      AWS, Kubernetes, Docker
<span class="type">Messaging:</span>  Kafka, RabbitMQ, gRPC

<span class="string">### 📫 Let's Connect</span>

<span class="annotation">@${firstName.toLowerCase()}${lastName.toLowerCase()}</span> on GitHub
<span class="annotation">/in/${firstName.toLowerCase()}${lastName.toLowerCase()}-dev</span> on LinkedIn

<span class="comment">───────────────────────────────────────────</span>
<span class="comment">☕ Powered by caffeine and clean code</span>`
        }
    };
    
    // Check if fileName matches the dynamic main file or is TalhaAhmed.java (legacy)
    if (contents[fileName]) {
        return contents[fileName];
    }
    
    // Handle legacy TalhaAhmed.java requests - redirect to dynamic main file
    if (fileName === 'TalhaAhmed.java' && contents[mainFileName]) {
        return contents[mainFileName];
    }
    
    // Default content for new files
    const ext = fileName.split('.').pop();
    if (ext === 'java') {
        return {
            lines: 8,
            code: `<span class="keyword">public class</span> <span class="class-name">${fileName.replace('.java', '')}</span> {
    <span class="comment">// Your code here</span>
    
    <span class="keyword">public static void</span> <span class="function">main</span>(<span class="class-name">String</span>[] args) {
        <span class="class-name">System</span>.out.<span class="function">println</span>(<span class="string">"Hello, World!"</span>);
    }
}`
        };
    } else if (ext === 'json') {
        return {
            lines: 4,
            code: `{
  <span class="string">"name"</span>: <span class="string">"${fileName.replace('.json', '')}"</span>,
  <span class="string">"version"</span>: <span class="string">"1.0.0"</span>
}`
        };
    } else if (ext === 'js') {
        return {
            lines: 8,
            code: `<span class="comment">// ${fileName}</span>

<span class="keyword">const</span> <span class="function">init</span> = () => {
    console.<span class="function">log</span>(<span class="string">'Hello, World!'</span>);
};

<span class="function">init</span>();`
        };
    }
    
    return {
        lines: 2,
        code: `<span class="comment">// ${fileName}</span>
<span class="comment">// Start coding here...</span>`
    };
}

/**
 * Update active tab in editor
 */
function updateActiveTab(fileName) {
    switchToFile(fileName);
}

/**
 * AI Chat demo interactions
 */
function initChatDemo() {
    const chatInput = document.querySelector('.chat-input input');
    const sendBtn = document.querySelector('.send-btn');
    const messagesContainer = document.querySelector('.chat-messages');

    const responses = [
        {
            keywords: ['experience', 'work', 'job'],
            response: `Talha has worked at leading tech companies including TechCorp, CloudScale, and DataFlow. 
                       His expertise spans distributed systems, microservices architecture, and high-performance computing.`
        },
        {
            keywords: ['skills', 'tech', 'stack'],
            response: `Core technologies: Java 17+, Spring Boot, Kubernetes, Kafka, PostgreSQL, Redis. 
                       Cloud: AWS, GCP. Also proficient in Kotlin, Go, and various DevOps tools.`
        },
        {
            keywords: ['project', 'open source'],
            response: `Notable projects include a Distributed Cache Framework (2.3k⭐), 
                       an API Rate Limiter (1.8k⭐), and an Event Sourcing Framework for Spring Boot.`
        },
        {
            keywords: ['contact', 'hire', 'email'],
            response: `You can reach Talha at Talha@TalhaAhmed.dev or connect on LinkedIn (/in/TalhaAhmed-dev) 
                       and GitHub (@TalhaAhmed). He's open to senior backend roles and consulting opportunities.`
        },
        {
            keywords: ['education', 'degree'],
            response: `Talha holds a BS in Computer Science from Stanford University 
                       and is a certified AWS Solutions Architect and Kubernetes Administrator.`
        }
    ];

    function getResponse(query) {
        const lowerQuery = query.toLowerCase();
        
        for (const item of responses) {
            if (item.keywords.some(keyword => lowerQuery.includes(keyword))) {
                return item.response;
            }
        }
        
        return `I can tell you about Talha's experience, skills, projects, or contact information. 
                What would you like to know?`;
    }

    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isUser ? 'user' : 'assistant'}`;
        messageDiv.innerHTML = `
            <span class="avatar">${isUser ? '👤' : '🤖'}</span>
            <div class="message-content">${content}</div>
        `;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function handleSend() {
        const query = chatInput.value.trim();
        if (!query) return;

        // Add user message
        addMessage(query, true);
        chatInput.value = '';

        // Simulate typing delay
        setTimeout(() => {
            const response = getResponse(query);
            addMessage(response);
        }, 800);
    }

    sendBtn?.addEventListener('click', handleSend);
    chatInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
}

/**
 * Chat minimize functionality
 */
function initChatMinimize() {
    const chatPanel = document.getElementById('aiChatPanel');
    const minimizeBtn = document.getElementById('chatMinimizeBtn');
    const chatHeader = document.getElementById('chatHeader');
    
    if (minimizeBtn && chatPanel) {
        minimizeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            chatPanel.classList.toggle('minimized');
        });
        
        // Also allow clicking header to expand when minimized
        chatHeader?.addEventListener('click', (e) => {
            if (chatPanel.classList.contains('minimized') && e.target !== minimizeBtn) {
                chatPanel.classList.remove('minimized');
            }
        });
    }
}

/**
 * New file button functionality
 */
function initNewFileButton() {
    const newFileBtn = document.getElementById('newFileBtn');
    const folderContents = document.querySelector('.folder.open .folder.open .folder-contents');
    const editorTabs = document.querySelector('.editor-tabs');
    
    if (newFileBtn) {
        newFileBtn.addEventListener('click', () => {
            const fileName = prompt('Enter new file name:', 'NewFile.java');
            if (fileName && fileName.trim()) {
                createNewFile(fileName.trim(), folderContents, editorTabs);
            }
        });
    }
}

/**
 * Create a new file in the explorer
 */
function createNewFile(fileName, folderContents, editorTabs) {
    // Determine file icon based on extension
    const ext = fileName.split('.').pop().toLowerCase();
    let iconClass = 'java';
    let icon = '☕';
    
    if (ext === 'json') {
        iconClass = 'json';
        icon = '{ }';
    } else if (ext === 'md') {
        iconClass = 'md';
        icon = '📝';
    } else if (ext === 'xml') {
        iconClass = 'xml';
        icon = '📄';
    } else if (ext === 'ts' || ext === 'tsx') {
        iconClass = 'ts';
        icon = '🔷';
    } else if (ext === 'js' || ext === 'jsx') {
        iconClass = 'js';
        icon = '🟨';
    }
    
    // Create file element in explorer
    if (folderContents) {
        const fileDiv = document.createElement('div');
        fileDiv.className = 'file';
        fileDiv.innerHTML = `<span class="file-icon ${iconClass}">${icon}</span>${fileName}`;
        
        fileDiv.addEventListener('click', () => {
            document.querySelectorAll('.file').forEach(f => f.classList.remove('active'));
            fileDiv.classList.add('active');
            switchToFile(fileName);
        });
        
        folderContents.appendChild(fileDiv);
    }
    
    // Create tab for the new file
    if (editorTabs) {
        const tabDiv = document.createElement('div');
        tabDiv.className = 'tab';
        tabDiv.setAttribute('data-file', fileName);
        tabDiv.innerHTML = `
            <span class="tab-icon">${icon}</span>
            <span class="tab-name">${fileName}</span>
            <span class="tab-close">×</span>
        `;
        
        tabDiv.addEventListener('click', (e) => {
            if (!e.target.classList.contains('tab-close')) {
                switchToFile(fileName);
            }
        });
        
        const closeBtn = tabDiv.querySelector('.tab-close');
        closeBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            const allTabs = document.querySelectorAll('.tab');
            if (allTabs.length > 1) {
                tabDiv.remove();
                // Switch to first remaining tab
                const remainingTab = document.querySelector('.tab');
                if (remainingTab) {
                    switchToFile(remainingTab.getAttribute('data-file'));
                }
            }
        });
        
        editorTabs.appendChild(tabDiv);
    }
    
    // Switch to the new file
    switchToFile(fileName);
}

/**
 * Animate skill bars on scroll
 */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute('data-width');
                
                if (targetWidth && targetWidth !== '0' && targetWidth !== '0%' && targetWidth !== '0px') {
                    // Small delay for visual effect
                    setTimeout(() => {
                        bar.style.width = targetWidth;
                    }, 150);
                }
                
                observer.unobserve(bar);
            }
        });
    }, { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    skillBars.forEach(bar => {
        // Get target width from data attribute or inline style
        let targetWidth = bar.getAttribute('data-width');
        
        // If no data-width, check the inline style
        if (!targetWidth || targetWidth === '0' || targetWidth === '0%' || targetWidth === '0px') {
            const styleWidth = bar.style.width;
            if (styleWidth && styleWidth !== '0' && styleWidth !== '0%' && styleWidth !== '0px') {
                targetWidth = styleWidth;
                bar.setAttribute('data-width', targetWidth);
            }
        }
        
        // Set initial width to 0 for animation
        if (targetWidth && targetWidth !== '0' && targetWidth !== '0%' && targetWidth !== '0px') {
            bar.style.width = '0';
            observer.observe(bar);
        }
    });
}

/**
 * Parallax effect for background elements
 */
function initParallax() {
    const bgGlow = document.querySelector('.bg-glow');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (bgGlow) {
            bgGlow.style.transform = `translateX(-50%) translateY(${scrolled * 0.3}px)`;
        }
    });
}

/**
 * Add CSS for animated elements
 */
const style = document.createElement('style');
style.textContent = `
    .animate-element {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .animate-element.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .header {
        transition: transform 0.3s ease, background-color 0.3s ease;
    }
    
    .header.scrolled {
        background: rgba(10, 10, 11, 0.95);
        border-bottom-color: rgba(39, 39, 42, 0.8);
    }
    
    .nav-links.active {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: rgba(10, 10, 11, 0.98);
        padding: 24px;
        gap: 20px;
        border-bottom: 1px solid var(--border-color);
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
    }
    
    /* VS Code editor hover effects */
    .vscode-editor {
        transition: transform 0.5s ease, box-shadow 0.5s ease;
    }
    
    .vscode-editor:hover {
        box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.15),
            0 30px 100px rgba(0, 0, 0, 0.7),
            0 0 120px rgba(99, 102, 241, 0.15);
    }
    
    /* Metric bar animations */
    .metric-fill {
        transition: width 1.5s ease-out;
    }
    
    /* Code syntax animation */
    .code-content code {
        display: block;
    }
    
    /* Skill bar transition */
    .skill-fill {
        transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
document.head.appendChild(style);

/**
 * Dynamic Content Renderer
 * Uses portfolioData from data.js to render dynamic content
 */
function initDynamicContent() {
    if (typeof portfolioData === 'undefined') {
        console.warn('portfolioData not found. Using static content.');
        return;
    }

    // Update personal info
    updatePersonalInfo();
    
    // Update skills section dynamically
    renderSkills();
    
    // Re-initialize skill bars after dynamic render
    setTimeout(initSkillBars, 100);
}

function updatePersonalInfo() {
    const data = portfolioData.personal;
    
    // Update page title
    document.title = `${data.name} | ${data.role}`;
    
    // Update logo text
    const logoTexts = document.querySelectorAll('.logo-text');
    logoTexts.forEach(el => {
        el.textContent = `${data.firstName.toLowerCase()}.${data.lastName.toLowerCase()}`;
    });
}

function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid || !portfolioData.skills) return;
    
    skillsGrid.innerHTML = portfolioData.skills.map(category => `
        <div class="skill-category">
            <h3>
                <span class="category-icon">${category.icon}</span>
                ${category.category}
            </h3>
            <div class="skill-list">
                ${category.items.map(skill => `
                    <div class="skill-item">
                        <span class="skill-name">${skill.name}</span>
                        <div class="skill-bar">
                            <div class="skill-fill" data-width="${skill.level}%" style="width: 0%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    // Animate bars after a short delay to allow rendering
    setTimeout(() => {
        animateSkillBars();
    }, 200);
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill[data-width]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute('data-width');
                
                if (targetWidth) {
                    setTimeout(() => {
                        bar.style.width = targetWidth;
                    }, 100 + Math.random() * 200); // Stagger animation
                }
                
                observer.unobserve(bar);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '50px'
    });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Call dynamic content initialization after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initDynamicContent, 50);
    });
} else {
    setTimeout(initDynamicContent, 50);
}

/**
 * Console Easter Egg
 */
console.log(`
%c👨‍💻 Talha Ahmed - Senior Java Backend Engineer

%cLooking for the source code? 
I appreciate your curiosity!

Feel free to reach out: Talha@TalhaAhmed.dev

Built with vanilla HTML, CSS, and JavaScript.
Inspired by Cursor's beautiful design.
`, 
'font-size: 18px; font-weight: bold; color: #6366f1;',
'font-size: 12px; color: #a1a1aa;'
);
