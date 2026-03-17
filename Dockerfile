# ============================
# Stage 1: Build (Vite)
# ============================
FROM node:20-bookworm-slim AS builder

WORKDIR /app

# Install dependencies first (cache-efficient)
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps --no-audit --no-fund

# Copy application source
COPY . .

# Build static assets
RUN npm run build


# ============================
# Stage 2: Runtime (Nginx)
# ============================
FROM nginxinc/nginx-unprivileged:alpine

# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy SPA-safe Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy only the built assets
COPY --chown=nginx:nginx --from=builder /app/dist /usr/share/nginx/html


# Unprivileged Nginx listens on 8080
EXPOSE 8080

# Drop back to unprivileged user
USER nginx

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]