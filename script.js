/**
 * Alex Chen Portfolio - Interactive Features
 * Inspired by Cursor's modern UI/UX
 */

document.addEventListener('DOMContentLoaded', () => {
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
    if (!codeContent) return;

    // Store original content
    const originalHTML = codeContent.innerHTML;
    const lines = originalHTML.split('\n');
    
    // Clear content for animation
    codeContent.innerHTML = '';
    
    let currentLine = 0;
    const typeSpeed = 5;
    
    function typeNextLine() {
        if (currentLine < lines.length) {
            codeContent.innerHTML += lines[currentLine] + '\n';
            currentLine++;
            
            // Random delay between lines for natural effect
            const delay = Math.random() * 50 + typeSpeed;
            setTimeout(typeNextLine, delay);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeNextLine, 1000);
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
 * Get file content for different files
 */
function getFileContent(fileName) {
    const contents = {
        'AlexChen.java': {
            lines: 34,
            code: `<span class="keyword">package</span> <span class="namespace">com.alexchen.portfolio</span>;

<span class="keyword">import</span> <span class="namespace">java.util.List</span>;
<span class="keyword">import</span> <span class="namespace">java.util.Map</span>;

<span class="comment">/**
 * Senior Backend Engineer Profile
 * @author Alex Chen
 * @version 2.0.0
 */</span>
<span class="annotation">@Profile</span>(<span class="string">"production"</span>)
<span class="keyword">public class</span> <span class="class-name">AlexChen</span> <span class="keyword">implements</span> <span class="interface">Engineer</span>, <span class="interface">Architect</span> {

    <span class="keyword">private static final</span> <span class="type">String</span> NAME = <span class="string">"Alex Chen"</span>;
    <span class="keyword">private static final</span> <span class="type">String</span> ROLE = <span class="string">"Senior Java Backend Engineer"</span>;
    <span class="keyword">private static final</span> <span class="type">int</span> YEARS_EXP = <span class="number">8</span>;
    <span class="keyword">private static final</span> <span class="type">String</span> LOCATION = <span class="string">"San Francisco, CA"</span>;
    
    <span class="keyword">private</span> <span class="type">List</span>&lt;<span class="type">String</span>&gt; expertise = List.of(
        <span class="string">"Microservices"</span>, <span class="string">"Distributed Systems"</span>,
        <span class="string">"Spring Boot"</span>, <span class="string">"Kubernetes"</span>,
        <span class="string">"Event-Driven Architecture"</span>
    );
    
    <span class="annotation">@Override</span>
    <span class="keyword">public</span> <span class="type">Solution</span> <span class="method">architect</span>(<span class="type">Problem</span> challenge) {
        <span class="keyword">return</span> Solution.builder()
            .scalable(<span class="keyword">true</span>)
            .maintainable(<span class="keyword">true</span>)
            .performant(<span class="keyword">true</span>)
            .build();
    }
}`
        },
        'Experience.java': {
            lines: 45,
            code: `<span class="keyword">package</span> <span class="namespace">com.alexchen.portfolio</span>;

<span class="keyword">import</span> <span class="namespace">java.time.LocalDate</span>;
<span class="keyword">import</span> <span class="namespace">java.util.List</span>;

<span class="comment">/**
 * Professional Experience
 * @author Alex Chen
 */</span>
<span class="keyword">public class</span> <span class="class-name">Experience</span> {

    <span class="keyword">private</span> <span class="type">List</span>&lt;<span class="type">Position</span>&gt; positions = List.of(
        <span class="keyword">new</span> Position(
            <span class="string">"TechCorp Inc."</span>,
            <span class="string">"Senior Backend Engineer"</span>,
            LocalDate.of(<span class="number">2021</span>, <span class="number">1</span>, <span class="number">1</span>),
            LocalDate.now(),
            List.of(
                <span class="string">"Led microservices migration"</span>,
                <span class="string">"Architected payment system ($2B+)"</span>,
                <span class="string">"Mentored 6 engineers"</span>
            )
        ),
        <span class="keyword">new</span> Position(
            <span class="string">"CloudScale Solutions"</span>,
            <span class="string">"Backend Developer"</span>,
            LocalDate.of(<span class="number">2018</span>, <span class="number">3</span>, <span class="number">1</span>),
            LocalDate.of(<span class="number">2020</span>, <span class="number">12</span>, <span class="number">31</span>),
            List.of(
                <span class="string">"Built analytics pipeline (1M+ events/min)"</span>,
                <span class="string">"Implemented OAuth2/OIDC (10M+ users)"</span>
            )
        ),
        <span class="keyword">new</span> Position(
            <span class="string">"DataFlow Systems"</span>,
            <span class="string">"Software Engineer"</span>,
            LocalDate.of(<span class="number">2016</span>, <span class="number">6</span>, <span class="number">1</span>),
            LocalDate.of(<span class="number">2018</span>, <span class="number">2</span>, <span class="number">28</span>),
            List.of(
                <span class="string">"Developed RESTful APIs"</span>,
                <span class="string">"Created testing framework"</span>
            )
        )
    );

    <span class="keyword">public</span> <span class="type">int</span> <span class="method">getTotalYears</span>() {
        <span class="keyword">return</span> <span class="number">8</span>;
    }
}`
        },
        'Projects.java': {
            lines: 38,
            code: `<span class="keyword">package</span> <span class="namespace">com.alexchen.portfolio</span>;

<span class="keyword">import</span> <span class="namespace">java.util.List</span>;

<span class="comment">/**
 * Open Source Projects
 * @author Alex Chen
 */</span>
<span class="keyword">public class</span> <span class="class-name">Projects</span> {

    <span class="keyword">public static final</span> <span class="type">List</span>&lt;<span class="type">Project</span>&gt; FEATURED = List.of(
        Project.builder()
            .name(<span class="string">"Distributed Cache Framework"</span>)
            .stars(<span class="number">2300</span>)
            .technologies(<span class="string">"Java 17"</span>, <span class="string">"Netty"</span>, <span class="string">"Raft"</span>)
            .description(<span class="string">"High-performance caching"</span>)
            .build(),
        
        Project.builder()
            .name(<span class="string">"API Rate Limiter"</span>)
            .stars(<span class="number">1800</span>)
            .technologies(<span class="string">"Java 17"</span>, <span class="string">"Redis"</span>)
            .description(<span class="string">"Distributed rate limiting"</span>)
            .build(),
        
        Project.builder()
            .name(<span class="string">"Event Sourcing Framework"</span>)
            .stars(<span class="number">890</span>)
            .technologies(<span class="string">"Spring Boot"</span>, <span class="string">"Kafka"</span>)
            .description(<span class="string">"CQRS and event sourcing"</span>)
            .build(),
        
        Project.builder()
            .name(<span class="string">"JWT Auth Library"</span>)
            .stars(<span class="number">1200</span>)
            .technologies(<span class="string">"Spring Security"</span>, <span class="string">"JWT"</span>)
            .description(<span class="string">"Production-ready auth"</span>)
            .build()
    );
}`
        },
        'Skills.json': {
            lines: 28,
            code: `{
  <span class="string">"languages"</span>: {
    <span class="string">"Java 17+"</span>: <span class="number">95</span>,
    <span class="string">"Kotlin"</span>: <span class="number">75</span>,
    <span class="string">"Go"</span>: <span class="number">60</span>
  },
  <span class="string">"frameworks"</span>: {
    <span class="string">"Spring Boot"</span>: <span class="number">95</span>,
    <span class="string">"Spring Cloud"</span>: <span class="number">90</span>
  },
  <span class="string">"databases"</span>: {
    <span class="string">"PostgreSQL"</span>: <span class="number">90</span>,
    <span class="string">"Redis"</span>: <span class="number">90</span>,
    <span class="string">"MongoDB"</span>: <span class="number">80</span>,
    <span class="string">"Elasticsearch"</span>: <span class="number">75</span>
  },
  <span class="string">"cloud"</span>: {
    <span class="string">"Kubernetes"</span>: <span class="number">90</span>,
    <span class="string">"Docker"</span>: <span class="number">95</span>,
    <span class="string">"AWS"</span>: <span class="number">85</span>,
    <span class="string">"GCP"</span>: <span class="number">70</span>
  },
  <span class="string">"messaging"</span>: {
    <span class="string">"Apache Kafka"</span>: <span class="number">90</span>,
    <span class="string">"RabbitMQ"</span>: <span class="number">80</span>,
    <span class="string">"gRPC"</span>: <span class="number">85</span>
  }
}`
        }
    };
    
    if (contents[fileName]) {
        return contents[fileName];
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
            response: `Alex has worked at leading tech companies including TechCorp, CloudScale, and DataFlow. 
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
            response: `You can reach Alex at alex@alexchen.dev or connect on LinkedIn (/in/alexchen-dev) 
                       and GitHub (@alexchen). He's open to senior backend roles and consulting opportunities.`
        },
        {
            keywords: ['education', 'degree'],
            response: `Alex holds a BS in Computer Science from Stanford University 
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
        
        return `I can tell you about Alex's experience, skills, projects, or contact information. 
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
%c👨‍💻 Alex Chen - Senior Java Backend Engineer

%cLooking for the source code? 
I appreciate your curiosity!

Feel free to reach out: alex@alexchen.dev

Built with vanilla HTML, CSS, and JavaScript.
Inspired by Cursor's beautiful design.
`, 
'font-size: 18px; font-weight: bold; color: #6366f1;',
'font-size: 12px; color: #a1a1aa;'
);
