# Guía de Optimización de Rendimiento - crush.news

## 🎯 Objetivo: Cumplir con Google Discover y Web Vitals

Esta guía explica todas las optimizaciones implementadas para que crush.news cumpla con los estándares de rendimiento de Google.

---

## 📊 Core Web Vitals - Métricas Objetivo

### 1. LCP (Largest Contentful Paint) - < 2.5s
**Qué es:** Tiempo hasta que el contenido principal es visible

**Optimizaciones aplicadas:**
- ✅ CSS crítico inline en `<head>`
- ✅ Imagen hero con `fetchpriority="high"`
- ✅ Preload de recursos críticos
- ✅ WebP/AVIF con fallback automático

### 2. FID (First Input Delay) - < 100ms
**Qué es:** Tiempo de respuesta a la primera interacción

**Optimizaciones aplicadas:**
- ✅ JavaScript diferido para scripts no-críticos
- ✅ Code splitting automático (Gatsby)
- ✅ Event delegation para reducir listeners

### 3. CLS (Cumulative Layout Shift) - < 0.1
**Qué es:** Cambios inesperados en el layout durante la carga

**Optimizaciones aplicadas:**
- ✅ `width` y `height` en todas las imágenes
- ✅ `aspect-ratio` CSS para contenedores
- ✅ Espacio reservado para anuncios (`min-height`)
- ✅ Font display: swap con tamaño de reserva

---

## 🖼️ Optimización de Imágenes

### Componentes Creados

#### 1. **OptimizedImage.jsx**
Componente base para todas las imágenes

```jsx
import { ArticleHeroImage, ThumbnailImage } from '../components/OptimizedImage'

// Imagen principal del artículo
<ArticleHeroImage
  src="/images/articulo-principal.jpg"
  alt="Descripción detallada"
  width={1200}
  height={675}
/>

// Thumbnail en listado
<ThumbnailImage
  src="/images/thumbnail.jpg"
  alt="Descripción"
  width={400}
  height={225}
/>
```

**Características:**
- `fetchpriority="high"` para imágenes hero
- `loading="lazy"` para imágenes secundarias
- `width` y `height` siempre definidos
- `aspect-ratio` para evitar CLS
- Soporte automático para WebP/AVIF

### Tamaños Recomendados de Imágenes

| Tipo | Dimensiones | Formato | Uso |
|------|-------------|---------|-----|
| Hero (destacada) | 1200x675px | WebP/AVIF | Imagen principal del artículo |
| Featured | 800x450px | WebP | Artículos destacados |
| Thumbnail | 400x225px | WebP | Listados y grid |
| Social Share | 1200x630px | JPG | Open Graph/Twitter |
| Logo | 600x150px | SVG/PNG | Header y footer |

### Código HTML Generado (Ejemplo)

```html
<img
  src="articulo.webp"
  fetchpriority="high"
  loading="eager"
  width="1200"
  height="675"
  alt="Can Yaman en el set de rodaje"
  sizes="(max-width: 768px) 100vw, 1200px"
  decoding="sync"
/>
```

---

## 📦 Gestión de Anuncios sin CLS

### Componentes Creados

#### **AdSlot.jsx** - Slots con espacio reservado

```jsx
import { SidebarAd, InArticleAd, LeaderboardAd } from '../components/AdSlot'

// Anuncio en sidebar
<SidebarAd id="sidebar-ad-1" />

// Anuncio en artículo
<InArticleAd id="in-article-1" position="middle" />

// Banner superior
<LeaderboardAd id="top-banner" />
```

**Características:**
- ✅ Espacio reservado con `min-height`
- ✅ Tamaños IAB estándar predefinidos
- ✅ Placeholder mientras carga
- ✅ Responsive automático

### Tamaños Estándar Soportados

```javascript
{
  mediumRectangle: { width: 300, height: 250 },  // Sidebar
  leaderboard: { width: 728, height: 90 },       // Top banner
  wideSkyscraper: { width: 300, height: 600 },   // Sidebar tall
  mobileBanner: { width: 320, height: 50 },      // Mobile
  billboard: { width: 970, height: 250 },        // Large top
}
```

### CSS para Anuncios

```css
.ad-container {
  min-height: 250px; /* IMPORTANTE: Evita CLS */
  min-width: 300px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
}
```

---

## 🎨 CSS Crítico

### Archivo: `src/styles/critical.css`

**Qué incluye:**
- Reset CSS mínimo
- Estilos del header
- Container y layout básico
- Imagen hero
- Título principal (h1)
- Utilidades de Tailwind más usadas
- Skeleton loaders
- Dark mode básico

**Qué NO incluye:**
- Estilos de componentes secundarios
- Animaciones complejas
- Estilos de footer
- Componentes below the fold

### Inyección Automática

El CSS crítico se inyecta automáticamente en el `<head>` mediante `gatsby-ssr.js`:

```javascript
// gatsby-ssr.js
exports.onRenderBody = ({ setHeadComponents }) => {
  const criticalCSS = fs.readFileSync('src/styles/critical.css', 'utf-8')

  setHeadComponents([
    <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
  ])
}
```

### CSS No-Crítico (Asíncrono)

Todo el CSS de Tailwind se carga de forma asíncrona:

```html
<link
  rel="preload"
  as="style"
  href="/styles/main.css"
  onload="this.onload=null;this.rel='stylesheet'"
/>
<noscript>
  <link rel="stylesheet" href="/styles/main.css" />
</noscript>
```

---

## ⚡ Optimizaciones de Gatsby

### gatsby-config.js

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      defaults: {
        formats: [`auto`, `webp`, `avif`],
        placeholder: `dominantColor`,
        quality: 85,
        breakpoints: [750, 1080, 1366, 1920],
      },
    },
  },
  `gatsby-plugin-offline`, // PWA con Service Worker
  {
    resolve: `gatsby-plugin-sitemap`,
    // Genera sitemap automático
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    // Genera robots.txt para crawlers
  },
]
```

---

## 🚀 Checklist de Implementación

### Para cada Artículo Nuevo

- [ ] Imagen principal 1200x675px mínimo
- [ ] Formato WebP o AVIF
- [ ] `fetchpriority="high"` en imagen hero
- [ ] `width` y `height` definidos
- [ ] Alt text descriptivo (< 125 caracteres)
- [ ] Schema.org NewsArticle completo
- [ ] Título < 110 caracteres
- [ ] Meta description < 160 caracteres

### Para Anuncios

- [ ] Usar componente `AdSlot`
- [ ] Tamaño IAB estándar
- [ ] Espacio reservado con `min-height`
- [ ] ID único para cada slot
- [ ] Responsive con media queries

### Para Imágenes

- [ ] Usar `OptimizedImage` o subcomponentes
- [ ] Prioridad correcta (hero vs thumbnails)
- [ ] Aspect ratio definido
- [ ] Lazy loading para imágenes secundarias
- [ ] Eager loading para imagen principal

---

## 🔍 Herramientas de Verificación

### 1. **PageSpeed Insights**
URL: https://pagespeed.web.dev/

**Qué verificar:**
- LCP < 2.5s (verde)
- FID < 100ms (verde)
- CLS < 0.1 (verde)
- Performance Score > 90

### 2. **Lighthouse (Chrome DevTools)**

```bash
# Correr Lighthouse desde terminal
npm install -g @lhci/cli
lhci autorun
```

**Métricas objetivo:**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: 100

### 3. **WebPageTest**
URL: https://www.webpagetest.org/

**Qué verificar:**
- First Byte Time < 600ms
- Start Render < 1.5s
- Speed Index < 3.0s

### 4. **Chrome User Experience Report**

```javascript
// Verificar en consola del navegador
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP:', entry);
  }
}).observe({entryTypes: ['largest-contentful-paint']});
```

---

## 📱 Optimización Móvil

### Viewport Correcto

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

### Touch Target Size

Todos los botones y enlaces tienen mínimo 48x48px de área táctil:

```css
button, a {
  min-width: 48px;
  min-height: 48px;
  padding: 12px 16px;
}
```

### Font Size Legible

```css
body {
  font-size: 16px; /* Nunca menos de 16px en móvil */
  line-height: 1.6;
}
```

---

## 🎯 Optimizaciones de Red

### DNS Prefetch

```html
<link rel="dns-prefetch" href="//www.google-analytics.com">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
```

### Preconnect para Recursos Críticos

```html
<link rel="preconnect" href="//www.google-analytics.com" crossorigin>
```

### Preload para Fuentes

```html
<link rel="preload" as="font" type="font/woff2"
      href="/fonts/inter-var.woff2" crossorigin>
```

---

## 🧪 Testing Antes de Publicar

### Checklist Pre-Publicación

1. **Rendimiento**
   ```bash
   npm run build
   npm run serve
   # Visitar localhost:9000
   # Correr Lighthouse
   ```

2. **Imágenes**
   - ✅ Todas son WebP/AVIF
   - ✅ Tamaños correctos
   - ✅ Alt text presente
   - ✅ fetchpriority en hero

3. **CSS**
   - ✅ Critical CSS < 14KB
   - ✅ CSS no-crítico async
   - ✅ No CSS bloqueante

4. **JavaScript**
   - ✅ Scripts diferidos
   - ✅ Code splitting activo
   - ✅ No JS bloqueante

---

## 📈 Monitoreo Continuo

### Google Search Console

1. Ir a **Experience > Core Web Vitals**
2. Verificar que todas las páginas sean "Good"
3. Corregir páginas "Needs Improvement"

### Real User Monitoring (RUM)

Considerar implementar:
- Google Analytics 4 (eventos de rendimiento)
- Sentry Performance Monitoring
- New Relic Browser
- Cloudflare Web Analytics

---

## 🔧 Solución de Problemas Comunes

### Problema: LCP > 2.5s

**Causas comunes:**
- Imagen hero muy pesada
- CSS crítico muy grande
- Fonts bloqueantes
- JS bloqueante

**Solución:**
1. Reducir tamaño de imagen hero (WebP, compresión)
2. Extraer solo CSS above-the-fold
3. Usar `font-display: swap`
4. Diferir JS no-crítico

### Problema: CLS > 0.1

**Causas comunes:**
- Imágenes sin width/height
- Anuncios sin espacio reservado
- Fonts sin size-adjust
- Contenido dinámico

**Solución:**
1. Agregar width/height a TODAS las imágenes
2. Usar componente `AdSlot`
3. Definir `size-adjust` en `@font-face`
4. Reservar espacio para contenido dinámico

### Problema: FID > 100ms

**Causas comunes:**
- JavaScript bloqueante
- Event listeners pesados
- Main thread ocupado

**Solución:**
1. Code splitting
2. Web Workers para tareas pesadas
3. Throttle/debounce en eventos
4. Lazy load de componentes

---

## 📚 Recursos Adicionales

- [Web.dev - Core Web Vitals](https://web.dev/vitals/)
- [Google Search Central - Page Experience](https://developers.google.com/search/docs/appearance/page-experience)
- [Gatsby Image Plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)
- [Critical CSS Generator](https://github.com/addyosmani/critical)

---

## 🎯 Próximos Pasos

1. ✅ Implementar todos los componentes de optimización
2. ✅ Generar imágenes WebP para todos los artículos
3. ✅ Configurar Service Worker (PWA)
4. ✅ Monitorear métricas en Search Console
5. ⏳ Implementar AMP (opcional para Google News)
6. ⏳ CDN para assets estáticos (Cloudflare, etc.)

---

Última actualización: Enero 2026
