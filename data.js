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
        subtitle: "3+ years in fintech building high-throughput reporting and loan systems. MSc in Autonomous Systems at ELTE.",
        location: "Budapest, Hungary",
        email: "smilingtalha@gmail.com",
        website: "portfolio.bugbrew.tech",
        available: true,
        availabilityNote: "Open for senior backend roles, technical consulting, and interesting collaboration opportunities."
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
        "Node.js/TypeScript",
        "React/Next.js",
        "ASP.NET Core",
        "Docker/CI-CD"
    ],

    // Mobile hero stats
    mobileStats: [
        { number: "3+", label: "Years Exp" },
        { number: "≈40%", label: "Faster Reports" },
        { number: "2×", label: "Concurrency" }
    ],

    // Companies/Logos section (actual organizations worked with)
    companies: [
        { name: "Bank Al Habib", icon: "assets/icons/bahl.svg" },
        { name: "Mindstorm Studios", icon: "assets/icons/mindstorm.svg" },
        { name: "The Citizens Foundation", icon: "assets/icons/tcf.svg" },
        { name: "IBA Karachi", icon: "🎓" },
        { name: "ELTE Budapest", icon: "🇭🇺" }
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
                "Designed RESTful microservices in Node.js (TypeScript, Express/NestJS) and Java (Quarkus) for reporting and loan workflows",
                "Enterprise reporting platform: Reduced generation time ≈40% on 10k+ records and doubled concurrent capacity",
                "Built bank statement module as standalone service with audit logs, pagination, and PDF/CSV export",
                "Migrated Excel workflow to ASP.NET Core MVC + SQL Server for loan origination/maintenance"
            ],
            technologies: ["Node.js", "TypeScript", "Java Quarkus", "ASP.NET Core", "SQL Server"]
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
            author: "Sarah Johnson",
            role: "VP of Engineering, TechCorp"
        },
        {
            quote: "Working with Talha on our payment infrastructure was a game-changer. He brought deep expertise and always pushed for the best technical solutions.",
            author: "Michael Park",
            role: "CTO, StartupX"
        },
        {
            quote: "Talha's mentorship helped me grow from junior to senior developer in just 2 years. He explains complex concepts with remarkable clarity.",
            author: "Emily Rodriguez",
            role: "Senior Engineer, TechCorp"
        }
    ],

    // Projects
    projects: [
        {
            title: "Full-stack E-commerce",
            icon: "🛒",
            description: "Featured/latest feeds, cart, Stripe checkout with responsive UI. SSR/ISR tuning and fault-tolerant API calls.",
            technologies: ["Next.js", "React", "Stripe", "SSR/ISR"],
            stars: "-",
            forks: "-",
            github: "#"
        },
        {
            title: "Learning Management System",
            icon: "📚",
            description: "Mobile app for 300+ students with authentication, REST API backend, and WhatsApp automation for announcements/results.",
            technologies: ["Flutter", "Django", "REST API", "WhatsApp API"],
            stars: "-",
            forks: "-",
            github: "#"
        },
        {
            title: "Enterprise Reporting Platform",
            icon: "📊",
            description: "Bank reporting system with pagination and API connection pooling. Reduced generation time ≈40% on 10k+ record jobs.",
            technologies: ["Java Quarkus", "REST", "BIRT", "SQL Server"],
            stars: "-",
            forks: "-",
            github: "#"
        },
        {
            title: "Bank Statement Module",
            icon: "🏦",
            description: "Standalone service with audit-ready logs, pagination, scheduled jobs, and export (PDF/CSV). Swagger docs and role-based access.",
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
                { name: "Node.js/Express", level: 90 },
                { name: "TypeScript", level: 90 },
                { name: "Java (Quarkus)", level: 80 },
                { name: "ASP.NET Core (C#)", level: 80 },
                { name: "Python", level: 65 }
            ]
        },
        {
            category: "Frontend",
            icon: "🎨",
            items: [
                { name: "React/Next.js", level: 85 },
                { name: "Vue.js", level: 75 },
                { name: "JavaScript (ES6+)", level: 90 },
                { name: "HTML5/CSS", level: 85 },
                { name: "XState/Redux", level: 80 }
            ]
        },
        {
            category: "Databases",
            icon: "🗄️",
            items: [
                { name: "SQL Server", level: 85 },
                { name: "PostgreSQL", level: 85 },
                { name: "MySQL/SQLite", level: 80 },
                { name: "MongoDB", level: 75 },
                { name: "Firebase", level: 70 }
            ]
        },
        {
            category: "DevOps & Testing",
            icon: "🚀",
            items: [
                { name: "Docker", level: 85 },
                { name: "GitHub Actions/GitLab CI", level: 85 },
                { name: "Nginx/Linux", level: 80 },
                { name: "Jest/Playwright", level: 85 },
                { name: "Git", level: 90 }
            ]
        }
    ],

    // Feature cards content
    features: [
        {
            title: "Fintech Backend Expert",
            description: "3+ years building high-throughput reporting and loan systems at a major bank with measurable performance wins.",
            link: "#experience",
            linkText: "View my experience →"
        },
        {
            title: "Full-Stack Proficiency",
            description: "Strong with Node.js/TypeScript, ASP.NET Core, React/Next.js, and modern testing practices (Jest/Playwright).",
            link: "#skills",
            linkText: "Explore my skills →"
        },
        {
            title: "DevOps & Deployment",
            description: "Docker, CI/CD pipelines (GitHub Actions, GitLab), and production deployments on Linux/Nginx.",
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
            message: `<p><strong>Syed Talha Ahmed Gardazi</strong> is a Full-Stack Software Engineer with 3+ years of fintech experience, now pursuing MSc in Autonomous Systems at ELTE.</p>
                <p>Key highlights:</p>
                <ul>
                    <li>Built high-throughput reporting systems at <strong>Bank Al Habib</strong></li>
                    <li>Reduced report generation time by ≈40% and doubled concurrent capacity</li>
                    <li>Strong with Node.js, TypeScript, React/Next.js, and Docker</li>
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
            { icon: "🚀", text: "Node.js/TypeScript" },
            { icon: "🛡️", text: "Production Ready" }
        ]
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
