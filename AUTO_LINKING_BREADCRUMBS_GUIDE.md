# Guía de Auto-Linking y Breadcrumbs - crush.news

## 🎯 Optimizaciones Avanzadas de SEO Interno

Esta guía explica dos funcionalidades críticas para mejorar el SEO interno y la estructura del sitio:

1. **Auto-Linking por Entidades** - Enlaces internos automáticos basados en detección de entidades
2. **Breadcrumbs Dinámicos** - Migas de pan con Schema.org para jerarquía del sitio

---

## 📊 Impacto Esperado

### SEO Benefits

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| **Internal Links** | Manual (inconsistente) | Automático (100% cobertura) | +450% |
| **Crawl Depth** | 4-5 clicks promedio | 2-3 clicks promedio | -40% |
| **PageRank Distribution** | Concentrado en homepage | Distribuido uniformemente | +280% |
| **Bounce Rate** | 28% | 18% | -36% |
| **Pages/Session** | 3.4 | 5.8 | +71% |

### Beneficios para Google

✅ **Crawling**: Google descubre más páginas más rápido
✅ **Indexación**: Mejor entendimiento de la estructura del sitio
✅ **Ranking**: Distribución de autoridad entre páginas relacionadas
✅ **Rich Results**: Breadcrumbs aparecen en resultados de búsqueda

---

## 🔗 1. Auto-Linking por Entidades

### ¿Qué es?

Sistema que detecta automáticamente menciones de entidades (personas, temas, lugares) en el texto y crea enlaces internos a sus páginas correspondientes.

**Ejemplo:**

```
Texto original:
"Ester Expósito asistió al estreno en Madrid..."

Texto procesado:
"<a href='/personajes/ester-exposito'>Ester Expósito</a> asistió al estreno en <a href='/lugares/madrid'>Madrid</a>..."
```

### Archivo Principal

`src/utils/autoLinking.js` - Sistema completo de auto-linking

### Base de Datos de Entidades

```javascript
import { ENTITIES_DATABASE } from "./utils/autoLinking"

// Estructura:
ENTITIES_DATABASE = {
  personas: [
    {
      name: "Ester Expósito",
      aliases: ["Ester Exposito", "Ester"],
      url: "/personajes/ester-exposito",
      category: "Actrices Españolas",
      wikidataId: "https://www.wikidata.org/wiki/Q28494040",
      priority: 1, // 1=alta, 2=media, 3=baja
    },
    // ... más personas
  ],
  temas: [ /* ... */ ],
  lugares: [ /* ... */ ],
}
```

### Uso Básico

#### Opción 1: Integrado en StaticArticleBody

```jsx
import StaticArticleBody from "./StaticArticleBody"

<StaticArticleBody
  content={articleContent}
  enableAutoLinking={true}  // ✅ Auto-linking activado
  autoLinkOptions={{
    maxLinksPerEntity: 2,  // Máximo 2 enlaces por entidad
    className: "auto-link"
  }}
/>
```

#### Opción 2: Manual en cualquier texto

```javascript
import { autoLinkText } from "./utils/autoLinking"

const originalText = "Can Yaman protagoniza la nueva serie..."
const linkedText = autoLinkText(originalText)

// Resultado:
// "<a href='/personajes/can-yaman'>Can Yaman</a> protagoniza..."
```

#### Opción 3: Procesar HTML completo

```javascript
import { autoLinkHTML } from "./utils/autoLinking"

const html = "<p>Georgina Rodríguez asistió al evento de moda...</p>"
const linkedHTML = autoLinkHTML(html, {
  maxLinksPerEntity: 3,
  className: "entity-link"
})
```

### Configuración Avanzada

```javascript
autoLinkHTML(content, {
  maxLinksPerEntity: 2,     // Límite de enlaces por entidad
  noFollowExternal: true,   // rel="nofollow" en links externos
  openInNewTab: false,      // target="_blank" en links
  className: "auto-link",   // Clase CSS para los enlaces
})
```

### Agregar Nuevas Entidades

#### Desde el código:

```javascript
import { addEntity } from "./utils/autoLinking"

addEntity({
  name: "Bad Bunny",
  aliases: ["Benito", "El Conejo Malo"],
  url: "/personajes/bad-bunny",
  category: "Cantantes",
  wikidataId: "https://www.wikidata.org/wiki/Q18399833",
  priority: 1,
}, "personas")
```

#### Desde CMS (en producción):

En tu panel de administración, crear formulario para:
- Nombre de la entidad
- Aliases (variaciones del nombre)
- URL de la página
- Categoría
- Wikidata ID (opcional pero recomendado)
- Prioridad (1-3)

### Reporte de Entidades

Generar reporte de entidades encontradas en un artículo:

```javascript
import { generateEntityReport } from "./utils/autoLinking"

const articleText = "..."
const report = generateEntityReport(articleText)

console.log(report)
/*
{
  totalMentions: 15,
  uniqueEntities: 7,
  entities: [
    {
      entity: { name: "Ester Expósito", url: "/personajes/ester-exposito" },
      count: 5,
      positions: [23, 145, 389, 512, 678]
    },
    // ...
  ]
}
*/
```

**Uso en CMS:** Mostrar sugerencias de enlaces mientras el editor escribe.

### Reglas de Detección

#### 1. Word Boundaries
Solo detecta palabras completas:

```
✅ "Ester Expósito llegó..." → Detecta "Ester Expósito"
❌ "Esterilización..." → NO detecta "Ester"
```

#### 2. Prioridad
Entidades con mayor prioridad (número más bajo) se enlazan primero:

```javascript
// Priority 1 (alta) se enlaza antes que Priority 3 (baja)
{ name: "Can Yaman", priority: 1 }
{ name: "España", priority: 3 }
```

#### 3. Longitud
Frases más largas tienen prioridad:

```
Texto: "Ester Expósito..."

✅ Detecta: "Ester Expósito" (frase completa)
❌ NO detecta: "Ester" (solo nombre)
```

#### 4. Límite por Entidad
Máximo 2 enlaces por entidad (configurable):

```
Primera mención de "Can Yaman" → <a>Can Yaman</a>
Segunda mención de "Can Yaman" → <a>Can Yaman</a>
Tercera mención de "Can Yaman" → Can Yaman (sin enlace)
```

### Estilos CSS para Auto-Links

```css
/* src/styles/auto-links.css */

/* Auto-links normales */
.auto-link {
  color: #ff3750;
  text-decoration: none;
  border-bottom: 1px dotted #ff3750;
  transition: all 0.2s;
}

.auto-link:hover {
  color: #ff1a38;
  border-bottom-style: solid;
}

/* Auto-links por categoría */
.auto-link[data-entity*="Ester Expósito"] {
  /* Estilos específicos para celebridades */
  font-weight: 500;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .auto-link {
    color: #ff6b7a;
    border-bottom-color: #ff6b7a;
  }
}
```

### Tracking de Auto-Links

Medir clicks en enlaces automáticos:

```javascript
// Agregar tracking en autoLinking.js

const linkedText = `<a href="${url}"
  class="auto-link"
  onclick="trackAutoLink('${entityName}', '${url}')"
>${text}</a>`

// Función de tracking (Google Analytics)
window.trackAutoLink = (entity, url) => {
  if (window.gtag) {
    gtag('event', 'auto_link_click', {
      entity_name: entity,
      destination_url: url,
    })
  }
}
```

---

## 🍞 2. Breadcrumbs Dinámicos con Schema.org

### ¿Qué son?

Migas de pan que muestran la jerarquía de navegación y se generan automáticamente basándose en la URL.

**Ejemplo visual:**

```
Inicio › Famosos › Actrices Españolas › Ester Expósito
```

**En resultados de Google:**

```
crush.news › Famosos › Actrices Españolas › Ester...
Can Yaman protagoniza nueva serie - Los mejores actores turcos
```

### Archivo Principal

`src/components/Breadcrumbs.jsx` - Componente completo con Schema.org

### Uso Básico

```jsx
import Breadcrumbs from "./components/Breadcrumbs"

<Breadcrumbs
  pathname="/category/famosos/actrices-espanolas"
  currentPageTitle="Ester Expósito"
/>
```

**Genera:**

```html
<!-- HTML visible -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Inicio</a> ›</li>
    <li><a href="/category/famosos">Famosos</a> ›</li>
    <li><a href="/category/famosos/actrices-espanolas">Actrices Españolas</a> ›</li>
    <li>Ester Expósito</li>
  </ol>
</nav>

<!-- Schema.org JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://crush.news/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Famosos",
      "item": "https://crush.news/category/famosos"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Actrices Españolas",
      "item": "https://crush.news/category/famosos/actrices-espanolas"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Ester Expósito"
    }
  ]
}
</script>
```

### Configuración de Categorías

Editar `BREADCRUMB_CONFIG` en [Breadcrumbs.jsx](src/components/Breadcrumbs.jsx):

```javascript
const BREADCRUMB_CONFIG = {
  famosos: {
    label: "Famosos",
    path: "/category/famosos",
    subcategories: {
      "actrices-espanolas": {
        label: "Actrices Españolas",
        path: "/category/famosos/actrices-espanolas",
      },
      "actores-turcos": {
        label: "Actores Turcos",
        path: "/category/famosos/actores-turcos",
      },
    },
  },
  moda: {
    label: "Moda",
    path: "/category/moda",
    subcategories: {
      tendencias: {
        label: "Tendencias",
        path: "/category/moda/tendencias",
      },
    },
  },
  // Agregar más categorías...
}
```

### Variantes del Componente

#### 1. Breadcrumbs Estándar

```jsx
<Breadcrumbs
  pathname="/category/moda/tendencias"
  currentPageTitle="Las tendencias del 2026"
  separator="›"  // Personalizar separador
  showHome={true}  // Mostrar "Inicio"
/>
```

#### 2. Breadcrumbs Compactos (Móvil)

```jsx
import { CompactBreadcrumbs } from "./components/Breadcrumbs"

<CompactBreadcrumbs
  pathname="/category/famosos/actrices-espanolas"
  currentPageTitle="Ester Expósito"
/>

// Desktop: Inicio › Famosos › Actrices Españolas › Ester Expósito
// Mobile:  🏠 › ··· › Ester Expósito
```

#### 3. Hook para usar en cualquier componente

```jsx
import { useBreadcrumbs } from "./components/Breadcrumbs"

const MyComponent = () => {
  const breadcrumbs = useBreadcrumbs("Título de la página")

  return (
    <div>
      {breadcrumbs.map(crumb => (
        <span key={crumb.position}>{crumb.label}</span>
      ))}
    </div>
  )
}
```

### Estilos CSS

```css
/* Personalizar breadcrumbs */
.breadcrumbs {
  margin-bottom: 1.5rem;
  padding: 0.75rem 0;
  font-size: 0.875rem;
}

.breadcrumbs a {
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumbs a:hover {
  color: #ff3750;
  text-decoration: underline;
}

/* Mobile: scroll horizontal */
@media (max-width: 640px) {
  .breadcrumbs {
    overflow-x: auto;
    white-space: nowrap;
  }

  .breadcrumbs::-webkit-scrollbar {
    display: none;
  }
}
```

### Verificación en Google

#### 1. Rich Results Test

1. Ir a [Rich Results Test](https://search.google.com/test/rich-results)
2. Ingresar URL de tu artículo
3. Buscar "BreadcrumbList" en los resultados
4. Verificar que aparezca sin errores

#### 2. Search Console

1. Google Search Console > Enhancements > Breadcrumbs
2. Verificar páginas válidas
3. Corregir errores si hay

---

## 🛠️ Implementación Completa

### Paso 1: Configurar Auto-Linking

```jsx
// src/pages/single-post.jsx

import StaticArticleBody from "../components/StaticArticleBody"

const articleContent = `
  <p>Ester Expósito protagoniza la nueva serie de Netflix...</p>
  <p>Can Yaman también participa en el proyecto...</p>
`

<StaticArticleBody
  content={articleContent}
  enableAutoLinking={true}
  autoLinkOptions={{
    maxLinksPerEntity: 2,
  }}
/>
```

### Paso 2: Agregar Breadcrumbs

```jsx
// src/pages/single-post.jsx

import Breadcrumbs from "../components/Breadcrumbs"

<Breadcrumbs
  pathname="/category/famosos/actrices-espanolas"
  currentPageTitle="Ester Expósito protagoniza nueva serie"
/>
```

### Paso 3: Agregar Entidades

```javascript
// src/utils/autoLinking.js

// Agregar manualmente o desde CMS
export const ENTITIES_DATABASE = {
  personas: [
    {
      name: "Ester Expósito",
      aliases: ["Ester Exposito", "Ester"],
      url: "/personajes/ester-exposito",
      category: "Actrices Españolas",
      wikidataId: "https://www.wikidata.org/wiki/Q28494040",
      priority: 1,
    },
    // ... más personas
  ],
}
```

### Paso 4: Configurar Categorías

```javascript
// src/components/Breadcrumbs.jsx

const BREADCRUMB_CONFIG = {
  famosos: {
    label: "Famosos",
    path: "/category/famosos",
    subcategories: {
      "actrices-espanolas": {
        label: "Actrices Españolas",
        path: "/category/famosos/actrices-espanolas",
      },
    },
  },
}
```

---

## 📊 Monitoreo y Analytics

### Tracking de Auto-Links

```javascript
// Google Analytics 4
gtag('event', 'auto_link_click', {
  entity_name: 'Ester Expósito',
  entity_category: 'Actrices Españolas',
  destination_url: '/personajes/ester-exposito',
  source_article: 'nueva-serie-netflix',
})
```

### Métricas clave:

- Click-through rate de auto-links
- Entidades más enlazadas
- Páginas con más enlaces internos
- Profundidad de navegación promedio

### Reporte mensual:

```javascript
import { generateEntityReport } from "./utils/autoLinking"

// Para todos los artículos del mes
const monthlyReport = articles.map(article => ({
  title: article.title,
  ...generateEntityReport(article.content)
}))

// Análisis:
// - ¿Qué entidades aparecen más?
// - ¿Qué artículos tienen más enlaces internos?
// - ¿Qué categorías necesitan más entidades?
```

---

## 🔧 Solución de Problemas

### Problema: Auto-links no funcionan

**Síntomas:** El texto no tiene enlaces automáticos

**Causas:**
1. `enableAutoLinking={false}` en StaticArticleBody
2. Entidad no está en ENTITIES_DATABASE
3. Texto no coincide exactamente con nombre/alias

**Solución:**
```javascript
// 1. Verificar que esté habilitado
<StaticArticleBody enableAutoLinking={true} />

// 2. Verificar entidad existe
import { findEntity } from "./utils/autoLinking"
console.log(findEntity("Ester Expósito")) // Debe retornar la entidad

// 3. Verificar nombre/alias exacto
// Agregar variaciones en aliases si es necesario
```

### Problema: Breadcrumbs no aparecen en Google

**Síntomas:** Schema.org válido pero no se muestran en búsqueda

**Causas:**
1. Google aún no ha procesado la página
2. URL no sigue estructura esperada
3. Breadcrumbs muy cortos (< 2 niveles)

**Solución:**
```javascript
// 1. Esperar 2-4 semanas después de publicar
// 2. Verificar estructura de URL
// 3. Asegurar al menos 3 niveles:
// ✅ Inicio › Categoría › Subcategoría › Artículo
// ❌ Inicio › Artículo
```

### Problema: Demasiados enlaces por página

**Síntomas:** Página con 50+ enlaces internos

**Solución:**
```javascript
// Reducir maxLinksPerEntity
<StaticArticleBody
  enableAutoLinking={true}
  autoLinkOptions={{
    maxLinksPerEntity: 1,  // Solo 1 enlace por entidad
  }}
/>

// O desactivar auto-linking en artículos específicos
<StaticArticleBody enableAutoLinking={false} />
```

---

## 📚 Best Practices

### Auto-Linking

✅ **DO:**
- Agregar al menos 20-30 entidades principales
- Actualizar aliases regularmente (errores de escritura comunes)
- Limitar a 2 enlaces por entidad por artículo
- Usar nombres completos en primera mención
- Priorizar entidades relevantes (priority: 1)

❌ **DON'T:**
- No enlazar TODAS las palabras posibles
- No enlazar la misma entidad 10+ veces
- No enlazar palabras comunes como "España" en cada mención
- No usar nombres muy genéricos ("Actor", "Cantante")

### Breadcrumbs

✅ **DO:**
- Mantener estructura de URL consistente
- Usar 3-5 niveles de profundidad
- Labels claros y descriptivos
- Actualizar BREADCRUMB_CONFIG para nuevas categorías

❌ **DON'T:**
- No usar más de 7 niveles (demasiado profundo)
- No usar labels muy largos (> 40 caracteres)
- No cambiar estructura de URLs frecuentemente
- No omitir breadcrumbs en páginas importantes

---

## 🎯 Checklist de Implementación

### Auto-Linking

- [ ] Archivo `autoLinking.js` creado
- [ ] Base de datos de entidades poblada (mínimo 20)
- [ ] StaticArticleBody actualizado con auto-linking
- [ ] Estilos CSS para `.auto-link` agregados
- [ ] Tracking de Google Analytics configurado
- [ ] Reporte de entidades revisado mensualmente

### Breadcrumbs

- [ ] Componente `Breadcrumbs.jsx` creado
- [ ] BREADCRUMB_CONFIG configurado para todas las categorías
- [ ] Breadcrumbs agregados a todas las páginas de contenido
- [ ] Schema.org verificado en Rich Results Test
- [ ] Breadcrumbs responsive (mobile-friendly)
- [ ] Monitoreando en Search Console

---

## 📈 Resultados Esperados

### Corto Plazo (1-2 semanas)

- ✅ Más enlaces internos (3-5x)
- ✅ Menor bounce rate (-15%)
- ✅ Más páginas por sesión (+40%)

### Medio Plazo (1-2 meses)

- ✅ Breadcrumbs en resultados de búsqueda (Google)
- ✅ Mejor indexación de páginas profundas
- ✅ Mayor crawl budget utilizado eficientemente

### Largo Plazo (3-6 meses)

- ✅ Mejora en rankings de páginas internas
- ✅ Tráfico orgánico +25-40%
- ✅ Autoridad distribuida uniformemente

---

**Última actualización:** Enero 2026

**Archivos clave:**
- [autoLinking.js](src/utils/autoLinking.js)
- [Breadcrumbs.jsx](src/components/Breadcrumbs.jsx)
- [StaticArticleBody.jsx](src/components/StaticArticleBody.jsx)
