# Use nginx alpine - multi-platform support (works on both ARM and AMD64)
FROM nginx:alpine

# Copy the static files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY data.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

# Copy SEO and web standard files
COPY sitemap.xml /usr/share/nginx/html/
COPY robots.txt /usr/share/nginx/html/
COPY manifest.json /usr/share/nginx/html/
COPY humans.txt /usr/share/nginx/html/
COPY security.txt /usr/share/nginx/html/

# Create custom nginx config to serve on port 3000
RUN echo 'server { \
    listen 3000; \
    server_name localhost; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose port 3000
EXPOSE 3000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
