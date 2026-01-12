# Guía de Implementación de Schema.org para crush.news

## 📋 Índice
1. [¿Qué es Schema.org y por qué es crucial?](#qué-es-schemaorg)
2. [Componentes creados](#componentes-creados)
3. [Cómo usar en artículos](#uso-en-artículos)
4. [Entidades de Wikidata](#entidades-wikidata)
5. [Verificación y testing](#verificación)
6. [Checklist para Google News](#checklist-google-news)

---

## ¿Qué es Schema.org?

Schema.org es un vocabulario estructurado que ayuda a los motores de búsqueda a entender el contenido de tu sitio web. Para un sitio de noticias como crush.news, es **OBLIGATORIO** para:

- ✅ **Google News** - Aparecer en Google Noticias
- ✅ **Google Discover** - Mostrarse en el feed de descubrimiento
- ✅ **Knowledge Graph** - Conectar con entidades conocidas (celebridades, eventos, etc.)
- ✅ **Rich Results** - Aparecer con carruseles y snippets enriquecidos

---

## Componentes Creados

### 1. `NewsArticleSchema.jsx`

Componente para artículos de noticias individuales.

**Ubicación:** `/src/components/NewsArticleSchema.jsx`

**Props requeridas:**
```javascript
{
  headline: string,        // Título (max 110 caracteres)
  description: string,     // Descripción breve
  url: string,            // URL completa del artículo
  datePublished: string,  // ISO 8601 format
  dateModified: string,   // ISO 8601 format
  authorName: string,     // Nombre del autor
  authorUrl: string,      // URL del perfil del autor
  images: array,          // Array de URLs de imágenes (min 1200x675px)
  category: string,       // Categoría principal
  tags: array,            // Array de etiquetas
  entities: array,        // Entidades de Wikidata (opcional pero recomendado)
}
```

### 2. `WebsiteSchema.jsx`

Componente para páginas que NO son artículos (homepage, about, contact, etc.)

**Ubicación:** `/src/components/WebsiteSchema.jsx`

**Props (todas opcionales, tienen valores por defecto):**
```javascript
{
  name: "crush.news",
  description: "Noticias y cultura digital para la Generación Z",
  url: "https://crush.news",
  logoUrl: "https://crush.news/logo.png",
  socialProfiles: [...]
}
```

---

## Uso en Artículos

### Ejemplo completo en una página de artículo:

```jsx
import React from "react"
import Layout5 from "../common/layout/Layout5"
import NewsArticleSchema from "../components/NewsArticleSchema"

const MiArticulo = () => {
  const articleData = {
    headline: "Las nuevas tendencias de K-Pop en 2026",
    description: "Descubre cómo el K-Pop está evolucionando este año",
    url: "https://crush.news/kpop-tendencias-2026",
    datePublished: "2026-01-11T10:00:00+00:00",
    dateModified: "2026-01-11T15:30:00+00:00",
    authorName: "Ana Rodríguez",
    authorUrl: "https://crush.news/author/ana-rodriguez",
    images: [
      "https://crush.news/images/kpop-2026-main.jpg",
      "https://crush.news/images/kpop-2026-alt.jpg"
    ],
    category: "Pop Picks",
    tags: ["K-Pop", "Música", "Tendencias", "2026"],
    entities: [
      {
        name: "K-pop",
        wikidataId: "https://www.wikidata.org/wiki/Q213121"
      },
      {
        name: "BTS",
        wikidataId: "https://www.wikidata.org/wiki/Q13580465"
      }
    ]
  }

  return (
    <Layout5>
      <NewsArticleSchema {...articleData} />

      {/* Tu contenido aquí */}
      <h1>{articleData.headline}</h1>
      {/* ... */}
    </Layout5>
  )
}

export default MiArticulo
```

---

## Entidades de Wikidata

Las entidades conectan tu contenido con el Knowledge Graph de Google.

### ¿Cómo encontrar IDs de Wikidata?

1. Ve a [Wikidata.org](https://www.wikidata.org)
2. Busca la entidad (persona, lugar, concepto)
3. Copia el ID (ejemplo: Q213121 para K-pop)
4. Formato completo: `https://www.wikidata.org/wiki/Q213121`

### Ejemplos de entidades útiles:

```javascript
// Celebridades
{ name: "Taylor Swift", wikidataId: "https://www.wikidata.org/wiki/Q26876" }
{ name: "Bad Bunny", wikidataId: "https://www.wikidata.org/wiki/Q26876765" }

// Plataformas
{ name: "TikTok", wikidataId: "https://www.wikidata.org/wiki/Q54958752" }
{ name: "Instagram", wikidataId: "https://www.wikidata.org/wiki/Q209330" }

// Conceptos
{ name: "Generación Z", wikidataId: "https://www.wikidata.org/wiki/Q4287745" }
{ name: "Moda", wikidataId: "https://www.wikidata.org/wiki/Q11460" }
```

### Cuándo agregar entidades:

✅ **Siempre agregar:**
- Celebridades mencionadas
- Marcas conocidas
- Eventos importantes
- Ubicaciones geográficas

❌ **NO agregar:**
- Conceptos genéricos sin relevancia
- Términos muy específicos sin entrada en Wikidata

---

## Estructura de Datos en `siteData.js`

### Ejemplo de post completo con Schema.org:

```javascript
{
  id: 2,
  title: "Taylor Swift anuncia nuevo álbum",
  description: "La cantante sorprende con fecha de lanzamiento",
  excerpt: "Taylor Swift ha anunciado...",
  category: "Pop Picks",
  subcategory: "Música & Fandoms",
  tags: ["Taylor Swift", "Música", "Pop", "Noticias"],
  author: "Carlos Méndez",
  date: "2026-01-11T10:00:00+00:00",
  dateModified: "2026-01-11T15:00:00+00:00",
  image: "/images/taylor-swift-album.jpg",
  images: [
    "https://crush.news/images/taylor-swift-album-1200x675.jpg",
    "https://crush.news/images/taylor-swift-album-alt.jpg"
  ],
  url: "https://crush.news/taylor-swift-nuevo-album",
  link: "/taylor-swift-nuevo-album",
  entities: [
    {
      name: "Taylor Swift",
      wikidataId: "https://www.wikidata.org/wiki/Q26876"
    },
    {
      name: "Música pop",
      wikidataId: "https://www.wikidata.org/wiki/Q37073"
    }
  ],
  views: 0,
  comments: 0,
}
```

---

## Verificación y Testing

### 1. **Google Rich Results Test**
URL: https://search.google.com/test/rich-results

Pasos:
1. Publica tu artículo
2. Copia la URL completa
3. Pégala en Rich Results Test
4. Verifica que aparezca "NewsArticle" válido

### 2. **Schema.org Validator**
URL: https://validator.schema.org/

Pasos:
1. Copia el código fuente de tu página (View Source)
2. Pégalo en el validador
3. Verifica que no haya errores

### 3. **Verificar en el navegador**

```javascript
// Abre la consola del navegador en tu artículo
const scripts = document.querySelectorAll('script[type="application/ld+json"]');
scripts.forEach(script => {
  console.log(JSON.parse(script.textContent));
});
```

---

## Checklist para Google News

### ✅ Requisitos Técnicos

- [ ] Schema.org NewsArticle implementado
- [ ] Headline máximo 110 caracteres
- [ ] Imágenes mínimo 1200x675px
- [ ] Fecha de publicación en formato ISO 8601
- [ ] Autor con nombre y URL
- [ ] Publisher con logo
- [ ] URL canónica completa

### ✅ Requisitos de Contenido

- [ ] Artículos originales y únicos
- [ ] Mínimo 80% del contenido es texto editorial
- [ ] Sin contenido duplicado
- [ ] Actualización regular (al menos 1 artículo por semana)
- [ ] Política de privacidad visible
- [ ] Términos y condiciones
- [ ] Información de contacto

### ✅ Requisitos Técnicos del Sitio

- [ ] Sitemap XML con noticias
- [ ] robots.txt configurado correctamente
- [ ] HTTPS habilitado
- [ ] Velocidad de carga < 3 segundos
- [ ] Mobile-friendly
- [ ] Sin anuncios intersticiales

---

## Ejemplo de Sitemap para Noticias

Crear: `/static/news-sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <url>
    <loc>https://crush.news/articulo-ejemplo</loc>
    <news:news>
      <news:publication>
        <news:name>crush.news</news:name>
        <news:language>es</news:language>
      </news:publication>
      <news:publication_date>2026-01-11T10:00:00+00:00</news:publication_date>
      <news:title>Título del artículo</news:title>
      <news:keywords>keyword1, keyword2, keyword3</news:keywords>
    </news:news>
  </url>
</urlset>
```

---

## Errores Comunes a Evitar

### ❌ Error 1: Headline muy largo
```javascript
// MAL (150 caracteres)
headline: "Las increíbles tendencias de moda que están revolucionando completamente la industria en 2026 según los expertos de la Generación Z"

// BIEN (95 caracteres)
headline: "Las tendencias de moda 2026 que revolucionan la industria según la Gen Z"
```

### ❌ Error 2: Fecha sin zona horaria
```javascript
// MAL
datePublished: "2026-01-11T10:00:00"

// BIEN
datePublished: "2026-01-11T10:00:00+00:00"
```

### ❌ Error 3: Imágenes sin dimensiones mínimas
```javascript
// MAL
images: ["https://crush.news/img-small-300x200.jpg"]

// BIEN
images: ["https://crush.news/img-large-1200x675.jpg"]
```

### ❌ Error 4: Sin URL del autor
```javascript
// MAL
author: {
  "@type": "Person",
  name: "Ana Rodríguez"
}

// BIEN
author: {
  "@type": "Person",
  name: "Ana Rodríguez",
  url: "https://crush.news/author/ana-rodriguez"
}
```

---

## Próximos Pasos

1. ✅ **Crear artículos reales** en `siteData.js` con todos los campos
2. ✅ **Agregar entidades de Wikidata** a artículos existentes
3. ✅ **Generar sitemap de noticias** automáticamente
4. ✅ **Aplicar Google Search Console** para monitorear indexación
5. ✅ **Solicitar inclusión en Google News** cuando tengas 50+ artículos

---

## Recursos Útiles

- [Schema.org NewsArticle](https://schema.org/NewsArticle)
- [Google News Publisher Center](https://publishercenter.google.com/)
- [Wikidata](https://www.wikidata.org)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/article)

---

## Soporte

Si tienes dudas sobre la implementación, consulta:
- Documentación oficial de Schema.org
- Google Search Central documentation
- Ejemplos en este repositorio

Última actualización: Enero 2026
