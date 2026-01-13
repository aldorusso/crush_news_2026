# ===========================================
# CRUSH NEWS - Dockerfile
# ===========================================
# Por defecto construye para PRODUCCIÓN
# Para desarrollo usar: docker build --target development

# ===========================================
# Stage 1: Dependencies & Build
# ===========================================
FROM node:20-alpine AS builder

# Instalar dependencias del sistema necesarias para node-canvas y sharp
RUN apk add --no-cache \
    python3 \
    py3-pip \
    py3-setuptools \
    make \
    g++ \
    cairo-dev \
    pango-dev \
    jpeg-dev \
    giflib-dev \
    librsvg-dev \
    pixman-dev \
    pkgconfig

WORKDIR /app

# Copiar archivos de dependencias primero (mejor cache)
COPY package.json package-lock.json* ./

# Instalar dependencias (ignorar canvas si falla, es opcional)
RUN npm ci --legacy-peer-deps --ignore-scripts || npm ci --legacy-peer-deps --omit=optional

# Rebuild native modules
RUN npm rebuild || true

# Copiar el resto del código
COPY . .

# Build de Gatsby
RUN npm run build

# ===========================================
# Stage 2: Development (opcional)
# Usar con: docker build --target development
# ===========================================
FROM node:20-alpine AS development

RUN apk add --no-cache \
    python3 \
    py3-pip \
    py3-setuptools \
    make \
    g++ \
    cairo-dev \
    pango-dev \
    jpeg-dev \
    giflib-dev \
    librsvg-dev \
    pixman-dev \
    pkgconfig

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci --legacy-peer-deps --ignore-scripts || npm ci --legacy-peer-deps --omit=optional
RUN npm rebuild || true

COPY . .

EXPOSE 8000

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
