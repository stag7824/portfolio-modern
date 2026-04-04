// ============================================
// PORTFOLIO DATA - Edit this file to update your portfolio
// ============================================

const portfolioData = {
    // Personal Information
    personal: {
        name: "Syed Talha Ahmed Gardazi",
        firstName: "Talha",
        lastName: "Gardazi",
        role: "Full-Stack Software Engineer",
        tagline: "Building robust backend systems",
        description: "crafting scalable solutions",
        yearsExperience: "3+",
        subtitle: "3 years of fintech experience at Bank Al Habib (1,000+ branches, 10M+ customers) building high-throughput reporting systems, loan origination platforms, and scalable microservices. Currently pursuing MSc in Autonomous Systems at ELTE, Budapest. Seeking backend/full-stack roles in Europe.",
        location: "Budapest, Hungary",
        phone: "+36 70 882 8693",
        email: "smilingtalha@gmail.com",
        website: "portfolio.bugbrew.tech",
        available: true,
        availabilityNote: "Open for backend/full-stack roles in Europe — willing to relocate."
    },

    // Social Links
    social: {
        github: "https://github.com/stag7824",
        githubHandle: "@stag7824",
        linkedin: "https://linkedin.com/in/stagify",
        linkedinHandle: "/in/stagify",
        portfolio: "https://portfolio.bugbrew.tech",
        portfolioHandle: "portfolio.bugbrew.tech",
        twitter: "stagifyy",
        twitterHandle: "@stagifyy"
    },

    // Navigation Items
    navigation: [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact", isCta: true }
    ],

    // Expertise areas (shown in code editor)
    expertise: [
        "Microservices",
        "Java/Spring Boot",
        "Node.js/TypeScript",
        "React/Next.js",
        "Docker/CI-CD",
        "GCP"
    ],

    // Mobile hero stats
    mobileStats: [
        { number: "3", label: "Years Exp" },
        { number: "10+", label: "Microservices" },
        { number: "5K+", label: "Stmts/Month" }
    ],

    // Companies/Logos section (actual organizations worked with)
    companies: [
        { name: "Bank Al Habib", icon: "assets/icons/bahl.svg" },
        { name: "Mindstorm Studios", icon: "assets/icons/mindstorm.svg" },
        { name: "The Citizens Foundation", icon: "assets/icons/tcf.svg" },
        { name: "IBA Karachi", icon: "https://www.iba.edu.pk/images/logo-iba-70years.png" },
        { name: "ELTE Budapest", icon: "https://www.elte.hu/sites/default/files/ELTE/images/2025-11/ELTE.elte_fekvo_kek_logo.png" }
    ],

    // Performance Metrics (shown in terminal demo)
    metrics: [
        { label: "API Latency", value: "15ms p99", percentage: 15, status: "good" },
        { label: "Throughput", value: "500K RPS", percentage: 95, status: "normal" },
        { label: "Uptime", value: "99.99%", percentage: 99.99, status: "good" }
    ],

    // Experience/Work History
    experience: [
        {
            company: "Bank Al Habib",
            role: "Software Engineer",
            duration: "Oct 2022 - Aug 2025",
            icon: "assets/icons/bahl.svg",
            achievements: [
                "Standardized RESTful API contracts using OpenAPI across 10+ microservices, reducing cross-team integration bugs and accelerating onboarding for new developers",
                "Built enterprise reporting platform (Java/BIRT) with server-side pagination, query optimization, and API connection pooling — reduced generation time ≈40% on 10k+ record jobs and doubled concurrent capacity",
                "Developed bank statement module (Node.js/TypeScript/Express) processing 5,000+ statements/month with audit-ready logs, scheduled jobs, PDF/CSV export, Swagger docs, and role-based access",
                "Implemented XState-driven micro-frontend for multi-step loan origination wizard, cutting user drop-off by enforcing deterministic state transitions and clear validation feedback",
                "Migrated Excel-based loan workflow to ASP.NET Core MVC + SQL Server application processing 200+ applications/month with role-based access, audit trails, and automated status tracking",
                "Designed CI/CD pipelines (GitHub Actions, GitLab CI) with automated testing, linting, and Docker builds — reduced release cycle from ~2 hours manual to ~15 minutes",
                "Built Node.js/Express advanced search endpoints with full-text indexing, faceted filters, and query caching — improved average search latency from 1.2s to <200ms",
                "Mentored 2 junior developers through code reviews, pair programming, and architecture discussions, accelerating their ramp-up to independent contributors"
            ],
            technologies: ["Node.js", "TypeScript", "NestJS", "Express", "Java", "Spring Boot", "ASP.NET Core", "XState", "SQL Server", "Docker", "GitHub Actions", "GitLab CI"]
        },
        {
            company: "Mindstorm Studios",
            role: "Game Development Intern",
            duration: "Jul 2021 - Sep 2021",
            icon: "assets/icons/mindstorm.svg",
            achievements: [
                "Prototyped gameplay mechanics and UI in Unity (C#); implemented event-driven scripts",
                "Built internal tools and optimized scenes/assets; contributed to debugging and profiling",
                "Collaborated with designers/artists in agile sprints using Git and JIRA"
            ],
            technologies: ["Unity", "C#", "Git", "JIRA"]
        },
        {
            company: "The Citizens Foundation (TCF)",
            role: "Coordinator (Volunteer)",
            duration: "Oct 2019 - Mar 2020",
            icon: "assets/icons/tcf.svg",
            achievements: [
                "Supported underprivileged students' transition to intermediate education",
                "Delivered English/Math support sessions (virtual during COVID)",
                "Mentored cohorts on study habits and scholarship navigation"
            ],
            technologies: ["Education", "Mentoring", "Virtual Teaching"]
        }
    ],

    // Testimonials
    testimonials: [
        {
            quote: "Talha is one of the most talented backend engineers I've worked with. His ability to design scalable systems while keeping code maintainable is exceptional.",
            author: "Wali Khan",
            role: "IT Officer, Bank Al Habib"
        },
        {
            quote: "Talha consistently delivers high-quality code and innovative solutions. His expertise in Node.js and TypeScript significantly improved our backend performance.",
            author: "Ms. Irma Khatri",
            role: "Team Lead, Bank Al Habib"
        },
        {
            quote: "Talha's ability to quickly grasp complex requirements and translate them into efficient code is impressive. He is a great team player and a proactive problem solver.",
            author: "Ahmed Raza",
            role: "Senior Engineer, Mindstorm Studios"
        },
        {
            quote: "Talha's ability to go above and beyond in every task he undertakes is truly commendable. He personally ensured that every student received the attention they needed to succeed.",
            author: "Ahsan Ali",
            role: "Chapter Head, The Citizens Foundation (TCF)"
        }
    ],

    // Projects
    projects: [
        {
            title: "3D Portfolio Website (Old Version)",
            icon: "🌐",
            description: "Personal portfolio with interactive 3D elements, music, and responsive design. Showcases projects and skills effectively.",
            technologies: ["Three.js", "JavaScript", "HTML5", "CSS3"],
            stars: "-",
            forks: "-",
            github: "https://github.com/stag7824/3D-portfolio.git"
        },

        {
            title: "Modern Portfolio Website (You are here!)",
            icon: "💼",
            description: "Sleek, responsive portfolio built with vanilla HTML, CSS, and JavaScript. Features dynamic sections, code editor demo, and AI chat.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            stars: "-",
            forks: "-",
            github: "https://github.com/stag7824/portfolio-modern.git"
        },

        {
            title: "Full-stack E-commerce",
            icon: "🛒",
            description: "Featured/latest product feeds, cart, and Stripe checkout with responsive UI. Implements circuit-breaker pattern for fault-tolerant API calls, SSR/ISR tuning for sub-2s initial page load, plus code splitting and lazy loading for optimized bundle size.",
            technologies: ["Next.js", "React", "Stripe", "SSR/ISR", "Circuit Breaker"],
            stars: "-",
            forks: "-",
            github: "#"
        },
        {
            title: "Learning Management System",
            icon: "📚",
            description: "Mobile app for 300+ students with JWT authentication, role-based grade tracking, and REST API backend. Integrated Twilio API for WhatsApp notifications (announcements, results), eliminating ~5 hours/week of manual communication. (No github due to private repo)",
            technologies: ["Flutter", "Django", "REST API", "Twilio", "WhatsApp API", "JWT"],
            stars: "-",
            forks: "-",
            github: "#"
        },
        {
            title: "Enterprise Reporting Platform",
            icon: "📊",
            description: "Bank reporting system with pagination and API connection pooling. Reduced generation time ≈40% on 10k+ record jobs. (No github due to private repo)",
            technologies: ["Java Quarkus", "REST", "BIRT", "SQL Server"],
            stars: "-",
            forks: "-",
            github: "#"
        },
        {
            title: "Bank Statement Module",
            icon: "🏦",
            description: "Standalone service with audit-ready logs, pagination, scheduled jobs, and export (PDF/CSV). Swagger docs and role-based access. (No github due to private repo)",
            technologies: ["Node.js", "TypeScript", "Express", "Swagger"],
            stars: "-",
            forks: "-",
            github: "#"
        }
    ],

    // Skills organized by category
    skills: [
        {
            category: "Backend",
            icon: "⚙️",
            items: [
                { name: "Java (Spring Boot / MVC / Security / Hibernate)", level: 90 },
                { name: "Node.js / Express / NestJS", level: 90 },
                { name: "TypeScript", level: 90 },
                { name: "ASP.NET Core (C#)", level: 70 },
                { name: "Python", level: 75 }
            ]
        },
        {
            category: "Frontend",
            icon: "🎨",
            items: [
                { name: "React / Next.js", level: 85 },
                { name: "Vue.js", level: 75 },
                { name: "JavaScript (ES6+)", level: 90 },
                { name: "HTML5 / CSS3", level: 85 },
                { name: "XState", level: 80 },
                { name: "Redux / Vuex", level: 80 }
            ]
        },
        {
            category: "Databases",
            icon: "🗄️",
            items: [
                { name: "SQL Server", level: 85 },
                { name: "IBM DB2", level: 80 },
                { name: "PostgreSQL", level: 85 },
                { name: "MySQL / SQLite", level: 80 },
                { name: "MongoDB", level: 75 },
                { name: "PL/SQL", level: 70 },
                { name: "Firebase / Supabase", level: 70 }
            ]
        },
        {
            category: "DevOps",
            icon: "🚀",
            items: [
                { name: "Docker", level: 85 },
                { name: "GitHub Actions / GitLab CI", level: 85 },
                { name: "GCP", level: 80 },
                { name: "Nginx / Caddy", level: 80 },
                { name: "Linux (Ubuntu / CentOS)", level: 80 },
                { name: "Git", level: 90 }
            ]
        },
        {
            category: "Testing",
            icon: "🧪",
            items: [
                { name: "JUnit", level: 85 },
                { name: "Jest", level: 85 },
                { name: "Playwright", level: 80 },
                { name: "Selenium", level: 75 }
            ]
        }
    ],

    // Feature cards content
    features: [
        {
            title: "Fintech Backend Expert",
            description: "3 years at Bank Al Habib (1,000+ branches, 10M+ customers) building reporting platforms, loan origination systems, and 10+ microservices with measurable performance wins.",
            link: "#experience",
            linkText: "View my experience →"
        },
        {
            title: "Full-Stack Proficiency",
            description: "Java (Spring Boot), Node.js/TypeScript, ASP.NET Core, React/Next.js, and modern testing (JUnit, Jest, Playwright, Selenium).",
            link: "#skills",
            linkText: "Explore my skills →"
        },
        {
            title: "DevOps & Deployment",
            description: "Docker, CI/CD pipelines (GitHub Actions, GitLab CI), GCP (certified), and production deployments on Linux (Ubuntu/CentOS) with Nginx.",
            link: "#projects",
            linkText: "See my projects →"
        }
    ],

    // AI Chat demo messages
    chatMessages: [
        {
            type: "user",
            message: "Tell me about Talha's experience"
        },
        {
            type: "assistant", 
            message: `<p><strong>Syed Talha Ahmed Gardazi</strong> is a Full-Stack Software Engineer with 3 years of fintech experience at Bank Al Habib (1,000+ branches, 10M+ customers), now pursuing MSc in Autonomous Systems at ELTE, Budapest.</p>
                <p>Key highlights:</p>
                <ul>
                    <li>Standardized OpenAPI contracts across <strong>10+ microservices</strong> at Bank Al Habib</li>
                    <li>Reduced report generation time by <strong>≈40%</strong> and doubled concurrent capacity</li>
                    <li>Built statement module processing <strong>5,000+ statements/month</strong></li>
                    <li>CI/CD pipelines cut release cycle from ~2 hours to <strong>~15 minutes</strong></li>
                    <li>Strong with Java (Spring Boot), Node.js/TypeScript, React/Next.js, and Docker</li>
                </ul>`
        }
    ],

    // Code snippet for the editor
    codeSnippet: {
        className: "TalhaGardazi",
        package: "com.talhagardazi.portfolio"
    },

    // Footer
    footer: {
        copyright: "© 2025 Syed Talha Ahmed Gardazi. Built with passion and clean code.",
        badges: [
            { icon: "🚀", text: "Java/Spring Boot" },
            { icon: "🛡️", text: "Production Ready" }
        ]
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
