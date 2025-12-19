# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly:

1. **Do NOT** open a public issue
2. Email the maintainers directly with details
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## Response Timeline

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 7 days
- **Resolution**: Depends on severity

## Scope

This is a static portfolio website. Security considerations include:

- XSS vulnerabilities in dynamic content
- Dependency vulnerabilities (if any are added)
- Docker image security

## Best Practices

When deploying this portfolio:

1. **HTTPS**: Always serve over HTTPS in production
2. **CSP**: Consider adding Content Security Policy headers
3. **Updates**: Keep Docker base images updated
4. **Sanitization**: If adding user input, sanitize properly

Thank you for helping keep this project secure!
