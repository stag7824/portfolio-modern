# 🚀 Developer Portfolio

A modern, interactive portfolio website inspired by Cursor's sleek UI/UX design. Built with vanilla HTML, CSS, and JavaScript - no frameworks required!

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue) ![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)

## ✨ Features

- **🎨 Modern Design** - Dark theme with smooth animations and glassmorphism effects
- **💻 Interactive VS Code Editor** - Simulated code editor with syntax highlighting and file explorer
- **🤖 AI Chat Panel** - Cursor-style AI assistant demo panel
- **📱 Fully Responsive** - Works beautifully on desktop, tablet, and mobile
- **⚡ Dynamic Content** - All content driven by a single `data.js` file
- **🌟 Neon Effects** - Stunning lighting effects on the logo and branding
- **🐳 Docker Ready** - Containerized for easy deployment

## 🛠️ Tech Stack

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Nginx (for Docker deployment)

## 🚀 Quick Start

### Option 1: Open Directly
Simply open `index.html` in your browser - no build step required!

### Option 2: Using Docker

```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -p 3000:3000 portfolio
```

Then visit `http://localhost:3000`

### Option 3: Using a Local Server

```bash
# Using Python
python -m http.server 3000

# Using Node.js (npx)
npx serve -p 3000

# Using PHP
php -S localhost:3000
```

## 📝 Customization

All content is driven by the `data.js` file. Simply edit this file to customize:

- **Personal Info** - Name, role, tagline, location, email
- **Social Links** - GitHub, LinkedIn, Twitter
- **Navigation** - Menu items
- **Experience** - Work history with achievements
- **Projects** - Open source projects with stats
- **Skills** - Technical skills with proficiency levels
- **Testimonials** - Colleague quotes
- **Footer** - Copyright and badges

### Example: Updating Your Info

```javascript
const portfolioData = {
    personal: {
        name: "Your Name",
        firstName: "Your",
        lastName: "Name",
        role: "Your Role",
        email: "you@example.com",
        // ... more fields
    },
    // ... other sections
};
```

## 📁 Project Structure

```
portfolio/
├── index.html      # Main HTML structure
├── styles.css      # All styles and animations
├── script.js       # Interactive features and dynamic content
├── data.js         # All portfolio content (edit this!)
├── Dockerfile      # Docker configuration
├── .gitignore      # Git ignore rules
├── LICENSE         # MIT License
├── README.md       # This file
└── CONTRIBUTING.md # Contribution guidelines
```

## 🎯 Sections

1. **Hero** - Eye-catching intro with VS Code editor demo
2. **Trusted By** - Company logos section
3. **Features** - Key highlights with interactive demos
4. **Experience** - Timeline of work history
5. **Testimonials** - Colleague recommendations
6. **Projects** - Featured open source work
7. **Skills** - Technical skills with progress bars
8. **Contact** - Get in touch section

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by [Cursor](https://cursor.sh)
- Icons and emojis for visual elements
- Google Fonts (Inter, JetBrains Mono)

## 📧 Contact

Feel free to reach out if you have questions or want to connect!

---

⭐ Star this repo if you find it useful!
