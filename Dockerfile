# ===========================================
# CRUSH NEWS - Dockerfile para Desarrollo
# ===========================================
# Multi-stage build para optimizar tamaño

# Stage 1: Build
FROM node:20-alpine AS builder

# Instalar dependencias del sistema necesarias para node-canvas y sharp
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    cairo-dev \
    pango-dev \
    jpeg-dev \
    giflib-dev \
    librsvg-dev \
    pixman-dev

WORKDIR /app

# Copiar archivos de dependencias primero (mejor cache)
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm ci --legacy-peer-deps

# Copiar el resto del código
COPY . .

# Build de Gatsby
RUN npm run build

# Stage 2: Production con Nginx
FROM nginx:alpine AS production

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar los archivos estáticos generados por Gatsby
COPY --from=builder /app/public /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]

# ===========================================
# Stage alternativo: Development con hot-reload
# ===========================================
FROM node:20-alpine AS development

# Instalar dependencias del sistema
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    cairo-dev \
    pango-dev \
    jpeg-dev \
    giflib-dev \
    librsvg-dev \
    pixman-dev

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm ci --legacy-peer-deps

# El código se monta como volumen en desarrollo
# COPY . .

# Exponer puerto de desarrollo de Gatsby
EXPOSE 8000

# Comando para desarrollo con hot-reload
CMD ["npm", "run", "develop", "--", "-H", "0.0.0.0"]
