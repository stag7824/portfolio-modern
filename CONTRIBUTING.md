# Contributing to Portfolio

Thank you for your interest in contributing! This document provides guidelines and steps for contributing.

## 🌟 Ways to Contribute

- 🐛 **Bug Reports** - Found a bug? Open an issue!
- 💡 **Feature Requests** - Have an idea? We'd love to hear it!
- 📝 **Documentation** - Help improve our docs
- 🔧 **Code** - Submit a pull request

## 🚀 Getting Started

1. **Fork the repository**
   
   Click the "Fork" button at the top right of this repository.

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make your changes**
   
   Edit the files and test your changes locally by opening `index.html` in a browser.

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add awesome feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   
   Go to the original repository and click "New Pull Request".

## 📋 Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Examples:
```
feat: add dark mode toggle
fix: resolve mobile navigation issue
docs: update installation instructions
style: improve button hover effects
```

## 🎨 Code Style

- Use 4 spaces for indentation
- Use meaningful variable and function names
- Comment complex logic
- Keep functions focused and small
- Follow existing code patterns

### CSS Guidelines
- Use CSS custom properties (variables) defined in `:root`
- Mobile-first responsive design
- Use BEM-like naming for classes

### JavaScript Guidelines
- Use ES6+ features
- Use `const` and `let`, avoid `var`
- Document functions with JSDoc comments

## 🧪 Testing Your Changes

Before submitting:

1. **Test in multiple browsers** (Chrome, Firefox, Safari, Edge)
2. **Test responsiveness** at different screen sizes
3. **Check console** for any errors
4. **Validate HTML** using W3C validator
5. **Test Docker build** if you modified Dockerfile

```bash
# Test Docker build
docker build -t portfolio-test .
docker run -p 3000:3000 portfolio-test
```

## 📝 Pull Request Checklist

- [ ] Code follows the project's style guidelines
- [ ] Self-review completed
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices/responsive
- [ ] No console errors
- [ ] Documentation updated (if needed)
- [ ] Commit messages follow guidelines

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description** - Clear description of the bug
2. **Steps to reproduce** - How to trigger the bug
3. **Expected behavior** - What should happen
4. **Actual behavior** - What actually happens
5. **Screenshots** - If applicable
6. **Environment** - Browser, OS, device

## 💡 Feature Requests

When requesting features:

1. **Problem** - What problem does this solve?
2. **Solution** - Your proposed solution
3. **Alternatives** - Other solutions you considered
4. **Context** - Any additional context

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a friendly, safe, and welcoming environment for all contributors.

### Our Standards

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards others

### Enforcement

Unacceptable behavior may be reported to the project maintainers. All complaints will be reviewed and investigated.

## ❓ Questions?

Feel free to open an issue with your question or reach out to the maintainers.

---

Thank you for contributing! 🎉
