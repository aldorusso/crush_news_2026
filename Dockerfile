# ===========================================
# CRUSH NEWS - Dockerfile
# ===========================================
# Por defecto construye para PRODUCCIÓN
# Para desarrollo usar: docker build --target development

# ===========================================
# Stage 1: Dependencies & Build
# ===========================================
FROM node:20-slim AS builder

# Instalar dependencias del sistema necesarias
RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    libcairo2-dev \
    libpango1.0-dev \
    libjpeg-dev \
    libgif-dev \
    librsvg2-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copiar archivos de dependencias primero (mejor cache)
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm ci --legacy-peer-deps

# Copiar el resto del código
COPY . .

# Limpiar cache de Gatsby si existe
RUN rm -rf .cache public

# Build de Gatsby
ENV NODE_ENV=production
ENV GATSBY_TELEMETRY_DISABLED=1
RUN npm run build

# ===========================================
# Stage 2: Development (opcional)
# Usar con: docker build --target development
# ===========================================
FROM node:20-slim AS development

RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    libcairo2-dev \
    libpango1.0-dev \
    libjpeg-dev \
    libgif-dev \
    librsvg2-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci --legacy-peer-deps

COPY . .

EXPOSE 8000

ENV GATSBY_TELEMETRY_DISABLED=1
CMD ["npm", "run", "develop", "--", "-H", "0.0.0.0"]

# ===========================================
# Stage 3: Production (DEFAULT)
# Nginx sirviendo archivos estáticos
# ===========================================
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
