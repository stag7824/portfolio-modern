// ============================================
// PORTFOLIO DATA - Edit this file to update your portfolio
// ============================================

const portfolioData = {
    // Personal Information
    personal: {
        name: "Talha Ahmed",
        firstName: "Talha",
        lastName: "Ahmed",
        role: "Senior Java Backend Engineer",
        tagline: "Building robust backend systems",
        description: "crafting scalable solutions",
        yearsExperience: "8+",
        subtitle: "8+ years designing distributed systems, microservices, and high-performance APIs at scale.",
        location: "San Francisco, CA",
        email: "Talha@TalhaAhmed.dev",
        website: "TalhaAhmed.dev",
        available: true,
        availabilityNote: "Open for senior backend roles, technical consulting, and interesting collaboration opportunities."
    },

    // Social Links
    social: {
        github: "https://github.com/TalhaAhmed",
        githubHandle: "@TalhaAhmed",
        linkedin: "https://linkedin.com/in/TalhaAhmed-dev",
        linkedinHandle: "/in/TalhaAhmed-dev",
        twitter: "https://twitter.com/TalhaAhmed_dev",
        twitterHandle: "@TalhaAhmed_dev"
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
        "Distributed Systems", 
        "Spring Boot",
        "Kubernetes",
        "Event-Driven Architecture"
    ],

    // Companies/Logos section
    companies: [
        { name: "TechCorp", icon: "🏢" },
        { name: "StartupX", icon: "🚀" },
        { name: "CloudScale", icon: "☁️" },
        { name: "DataFlow", icon: "📊" },
        { name: "SecureAPI", icon: "🔐" }
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
            company: "TechCorp Inc.",
            role: "Senior Backend Engineer",
            duration: "2021 - Present",
            achievements: [
                "Led migration of monolithic application to microservices, reducing deployment time by 80%",
                "Architected event-driven payment system processing $2B+ annually",
                "Mentored team of 6 engineers on best practices and system design",
                "Reduced infrastructure costs by 40% through performance optimization"
            ],
            technologies: ["Spring Boot", "Kubernetes", "Kafka", "PostgreSQL"]
        },
        {
            company: "CloudScale Solutions",
            role: "Backend Developer",
            duration: "2018 - 2021",
            achievements: [
                "Built real-time analytics pipeline processing 1M+ events per minute",
                "Implemented OAuth2/OIDC authentication serving 10M+ users",
                "Designed and deployed multi-region disaster recovery solution"
            ],
            technologies: ["Java 11", "AWS", "Redis", "Docker"]
        },
        {
            company: "DataFlow Systems",
            role: "Software Engineer",
            duration: "2016 - 2018",
            achievements: [
                "Developed RESTful APIs for B2B data integration platform",
                "Created automated testing framework reducing bug escape rate by 70%",
                "Optimized database queries resulting in 5x performance improvement"
            ],
            technologies: ["Java 8", "Spring MVC", "MySQL", "Jenkins"]
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
            title: "Distributed Cache Framework",
            icon: "🔷",
            description: "High-performance distributed caching solution with consistent hashing, automatic failover, and sub-millisecond latency. Used in production handling 100K+ QPS.",
            technologies: ["Java 17", "Netty", "Protocol Buffers", "Raft Consensus"],
            stars: "2.3k",
            forks: "340",
            github: "#"
        },
        {
            title: "API Rate Limiter",
            icon: "⚡",
            description: "Distributed rate limiting library supporting sliding window, token bucket, and leaky bucket algorithms. Zero-dependency with Redis backend option.",
            technologies: ["Java 17", "Redis", "Lua Scripts"],
            stars: "1.8k",
            forks: "215",
            github: "#"
        },
        {
            title: "Event Sourcing Framework",
            icon: "📊",
            description: "Lightweight event sourcing and CQRS framework for Spring Boot. Features automatic snapshotting, event replay, and projections.",
            technologies: ["Spring Boot", "Kafka", "PostgreSQL"],
            stars: "890",
            forks: "128",
            github: "#"
        },
        {
            title: "JWT Auth Library",
            icon: "🔐",
            description: "Production-ready JWT authentication with refresh token rotation, device fingerprinting, and automatic key rotation for Spring Security.",
            technologies: ["Spring Security", "JWT", "OAuth2"],
            stars: "1.2k",
            forks: "187",
            github: "#"
        }
    ],

    // Skills organized by category
    skills: [
        {
            category: "Languages & Frameworks",
            icon: "☕",
            items: [
                { name: "Java 17+", level: 95 },
                { name: "Spring Boot", level: 95 },
                { name: "Spring Cloud", level: 90 },
                { name: "Kotlin", level: 75 },
                { name: "Go", level: 60 }
            ]
        },
        {
            category: "Databases & Storage",
            icon: "🗄️",
            items: [
                { name: "PostgreSQL", level: 90 },
                { name: "Redis", level: 90 },
                { name: "MongoDB", level: 80 },
                { name: "Elasticsearch", level: 75 },
                { name: "Cassandra", level: 65 }
            ]
        },
        {
            category: "Cloud & DevOps",
            icon: "☁️",
            items: [
                { name: "Kubernetes", level: 90 },
                { name: "Docker", level: 95 },
                { name: "AWS", level: 85 },
                { name: "GCP", level: 70 },
                { name: "Terraform", level: 75 }
            ]
        },
        {
            category: "Messaging & Tools",
            icon: "📨",
            items: [
                { name: "Apache Kafka", level: 90 },
                { name: "RabbitMQ", level: 80 },
                { name: "gRPC", level: 85 },
                { name: "GraphQL", level: 70 },
                { name: "CI/CD", level: 90 }
            ]
        }
    ],

    // Feature cards content
    features: [
        {
            title: "Architecting at Scale",
            description: "Designed and built distributed systems handling billions of requests daily with 99.99% uptime.",
            link: "#experience",
            linkText: "View my experience →"
        },
        {
            title: "Spring Boot Mastery",
            description: "Expert in building production-ready applications with Spring Boot, Spring Cloud, and reactive programming.",
            link: "#skills",
            linkText: "Explore my skills →"
        },
        {
            title: "Cloud-Native Expert",
            description: "Building and deploying containerized applications on Kubernetes with full CI/CD automation.",
            link: "#projects",
            linkText: "See my projects →"
        }
    ],

    // AI Chat demo messages
    chatMessages: [
        {
            type: "user",
            message: "Tell me about Talha Ahmed's experience"
        },
        {
            type: "assistant", 
            message: `<p><strong>Talha Ahmed</strong> is a Senior Java Backend Engineer with 8+ years of experience building distributed systems at scale.</p>
                <p>Key highlights:</p>
                <ul>
                    <li>Led backend architecture at <strong>TechCorp</strong> serving 50M+ users</li>
                    <li>Reduced API latency by 60% through microservices optimization</li>
                    <li>Open source contributor to Spring Framework</li>
                </ul>`
        }
    ],

    // Code snippet for the editor
    codeSnippet: {
        className: "TalhaAhmed",
        package: "com.TalhaAhmed.portfolio"
    },

    // Footer
    footer: {
        copyright: "© 2025 Talha Ahmed. Built with passion and clean code.",
        badges: [
            { icon: "☕", text: "Java 17" },
            { icon: "🛡️", text: "Production Ready" }
        ]
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
