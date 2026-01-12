# Guía de Security Headers - Crush.news

Esta guía documenta la implementación de headers de seguridad para proteger el sitio contra vulnerabilidades comunes (XSS, clickjacking, MIME sniffing, etc.).

## 📋 Índice

1. [Headers Implementados](#headers-implementados)
2. [Archivos de Configuración](#archivos-de-configuración)
3. [Explicación de Cada Header](#explicación-de-cada-header)
4. [Cómo Desplegar](#cómo-desplegar)
5. [Testing y Validación](#testing-y-validación)
6. [Ajustes para Google Tag Manager](#ajustes-para-google-tag-manager)
7. [Troubleshooting](#troubleshooting)

---

## Headers Implementados

```
✅ Content-Security-Policy (CSP)
✅ X-Frame-Options
✅ X-Content-Type-Options
✅ Strict-Transport-Security (HSTS)
✅ Referrer-Policy
✅ X-XSS-Protection
✅ Permissions-Policy
✅ Cache-Control (optimizado por tipo de archivo)
```

**Resultado esperado:** Calificación **A+** en [SecurityHeaders.com](https://securityheaders.com)

---

## Archivos de Configuración

### 1. Para Netlify / Gatsby Cloud
**Archivo:** `public/_headers`

Este archivo se desplegará automáticamente con tu sitio Gatsby. Netlify/Gatsby Cloud lo leerá y aplicará los headers.

**No requiere configuración adicional** - solo hacer deploy.

### 2. Para Vercel
**Archivo:** `vercel.json`

Vercel lee este archivo automáticamente desde la raíz del proyecto.

**Despliegue:**
```bash
vercel deploy
```

### 3. Para Nginx (Self-hosted)
**Archivo:** `nginx.conf.example`

Este es un **ejemplo** que debes adaptar a tu configuración existente.

**Pasos:**
1. Copia las secciones de security headers a tu archivo nginx.conf
2. Ajusta las rutas (`root`, `ssl_certificate`, etc.)
3. Prueba la configuración:
```bash
sudo nginx -t
```
4. Recarga nginx:
```bash
sudo systemctl reload nginx
```

---

## Explicación de Cada Header

### 1. Content-Security-Policy (CSP)

**Qué hace:** Previene ataques XSS (Cross-Site Scripting) controlando qué recursos puede cargar la página.

**Configuración actual:**
```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    https://www.google-analytics.com
    https://www.googletagmanager.com
    https://connect.facebook.net
    https://platform.twitter.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https: blob:;
  media-src 'self' https:;
  connect-src 'self' https://www.google-analytics.com;
  frame-src 'self' https://www.facebook.com https://platform.twitter.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
```

**Por qué estos valores:**

- `default-src 'self'` - Solo permite recursos del mismo origen
- `script-src ... 'unsafe-inline' 'unsafe-eval'` - Gatsby requiere inline scripts para hidratación
- `https://www.googletagmanager.com` - Para Google Tag Manager (cuando lo agregues)
- `https://connect.facebook.net` - Para Facebook pixel/SDK
- `https://platform.twitter.com` - Para Twitter embeds
- `img-src 'self' data: https: blob:` - Permite imágenes de cualquier HTTPS (necesario para CDNs de noticias)
- `frame-ancestors 'none'` - Previene que tu sitio sea embebido en iframes

**⚠️ IMPORTANTE:** Cuando agregues Google Tag Manager, ya está pre-configurado.

---

### 2. X-Frame-Options

**Qué hace:** Previene ataques de clickjacking (que tu sitio sea cargado en un iframe malicioso).

**Configuración:**
```
X-Frame-Options: DENY
```

**Alternativas:**
- `DENY` - Nunca permite iframes (recomendado)
- `SAMEORIGIN` - Solo permite iframes del mismo dominio
- `ALLOW-FROM https://ejemplo.com` - Permite iframes solo de un dominio específico (obsoleto)

---

### 3. X-Content-Type-Options

**Qué hace:** Previene MIME type sniffing (el navegador interpretando archivos de forma incorrecta).

**Configuración:**
```
X-Content-Type-Options: nosniff
```

**Por qué es importante:**
- Previene que un archivo `.txt` sea interpretado como JavaScript
- Protege contra ataques donde se sube un archivo malicioso con extensión incorrecta

---

### 4. Strict-Transport-Security (HSTS)

**Qué hace:** Fuerza HTTPS en todas las conexiones futuras al sitio.

**Configuración:**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

**Parámetros:**
- `max-age=31536000` - 1 año (en segundos)
- `includeSubDomains` - Aplica HSTS a todos los subdominios
- `preload` - Permite inclusión en la lista de preload de navegadores

**Precaución:**
- Solo activar si tienes HTTPS configurado correctamente
- Una vez activado, no puedes volver a HTTP fácilmente durante 1 año

**HSTS Preload List:**
Si quieres máxima seguridad, registra tu dominio en: https://hstspreload.org/

---

### 5. Referrer-Policy

**Qué hace:** Controla qué información de referrer se envía cuando los usuarios hacen clic en enlaces externos.

**Configuración:**
```
Referrer-Policy: strict-origin-when-cross-origin
```

**Significado:**
- Mismo origen: Envía URL completa
- Origen cruzado (HTTPS → HTTPS): Solo envía el origen (dominio)
- HTTPS → HTTP: No envía nada (protege privacidad)

**Alternativas:**
- `no-referrer` - Nunca envía referrer (máxima privacidad, pero rompe analytics)
- `same-origin` - Solo envía referrer al mismo dominio
- `strict-origin-when-cross-origin` - **Recomendado** (balance seguridad/funcionalidad)

---

### 6. X-XSS-Protection

**Qué hace:** Activa el filtro anti-XSS del navegador (navegadores antiguos).

**Configuración:**
```
X-XSS-Protection: 1; mode=block
```

**Nota:**
- Obsoleto en navegadores modernos (Chrome, Edge, Safari ya no lo usan)
- CSP es más efectivo
- Se mantiene por compatibilidad con navegadores antiguos

---

### 7. Permissions-Policy

**Qué hace:** Controla qué APIs del navegador puede usar el sitio (geolocalización, cámara, micrófono, etc.).

**Configuración:**
```
Permissions-Policy:
  accelerometer=(),
  camera=(),
  geolocation=(),
  gyroscope=(),
  magnetometer=(),
  microphone=(),
  payment=(),
  usb=()
```

**Significado:**
- `()` - Deshabilitado para todos (ni el sitio ni los iframes pueden usarlo)
- `self` - Solo el sitio puede usarlo
- `*` - Todos pueden usarlo

**Por qué deshabilitamos todo:**
Crush.news es un sitio de noticias, no necesita acceso a hardware del dispositivo.

**Si necesitas alguna API en el futuro:**
```
Permissions-Policy: geolocation=(self), camera=()
```

---

### 8. Cache-Control

**Qué hace:** Controla cómo y cuánto tiempo se cachean los recursos.

**Configuración por tipo de archivo:**

#### HTML (páginas)
```
Cache-Control: public, max-age=0, must-revalidate
```
- Siempre verifica si hay nueva versión (ideal para noticias)

#### Archivos estáticos (JS, CSS, imágenes en /static/)
```
Cache-Control: public, max-age=31536000, immutable
```
- Cache de 1 año (seguro porque Gatsby usa hashes en nombres)
- `immutable` - Nunca cambiará, no verificar

#### RSS/Atom Feeds
```
Cache-Control: public, max-age=3600, must-revalidate
```
- Cache de 1 hora
- Revalida antes de servir

#### Fuentes
```
Cache-Control: public, max-age=31536000, immutable
Access-Control-Allow-Origin: *
```
- Cache de 1 año
- CORS habilitado (necesario para fuentes de Google)

---

## Cómo Desplegar

### Netlify / Gatsby Cloud

1. **No requiere acción** - El archivo `public/_headers` se despliega automáticamente

2. **Verificar después del deploy:**
```bash
curl -I https://crush.news
```

3. **Deberías ver en la respuesta:**
```
content-security-policy: default-src 'self'; ...
x-frame-options: DENY
x-content-type-options: nosniff
...
```

### Vercel

1. **Deploy automático:**
```bash
git push origin main
# o
vercel deploy
```

2. **Verificar:**
```bash
curl -I https://tu-dominio.vercel.app
```

3. **Si no aparecen los headers:**
   - Verifica que `vercel.json` esté en la raíz del proyecto
   - Re-deploy: `vercel --prod`

### Nginx (Self-hosted)

1. **Editar tu archivo nginx.conf:**
```bash
sudo nano /etc/nginx/sites-available/crush.news
```

2. **Copiar las secciones de `nginx.conf.example`:**
   - Security Headers
   - Cache Control
   - Locations

3. **Probar configuración:**
```bash
sudo nginx -t
```

4. **Si todo OK, recargar:**
```bash
sudo systemctl reload nginx
```

5. **Verificar:**
```bash
curl -I https://crush.news
```

---

## Testing y Validación

### 1. SecurityHeaders.com

**URL:** https://securityheaders.com

1. Ingresa tu URL: `https://crush.news`
2. Haz clic en "Scan"
3. **Resultado esperado:** Calificación **A+**

**Si obtienes menos:**
- Revisa qué headers faltan
- Verifica que el archivo de configuración esté correcto
- Haz un hard refresh del sitio (Ctrl+Shift+R)

### 2. Mozilla Observatory

**URL:** https://observatory.mozilla.org

1. Ingresa tu URL
2. Haz clic en "Scan Me"
3. **Resultado esperado:** Calificación **A** o superior

### 3. Chrome DevTools

1. Abre tu sitio en Chrome
2. Abre DevTools (F12)
3. Ve a la pestaña **Network**
4. Recarga la página
5. Haz clic en el primer request (el HTML)
6. Ve a la pestaña **Headers**
7. **Verifica que aparezcan todos los security headers**

### 4. cURL Manual

**Verificar todos los headers:**
```bash
curl -I https://crush.news
```

**Verificar header específico:**
```bash
curl -I https://crush.news | grep -i "content-security-policy"
```

**Verificar cache de archivos estáticos:**
```bash
curl -I https://crush.news/static/imagen-ejemplo.jpg
# Debería mostrar: Cache-Control: public, max-age=31536000, immutable
```

### 5. Test de CSP

**URL:** https://csp-evaluator.withgoogle.com

1. Copia tu CSP header
2. Pégalo en el evaluador
3. **Resultado esperado:** Sin errores críticos

**Advertencias esperadas:**
- `'unsafe-inline'` en script-src (necesario para Gatsby)
- `'unsafe-eval'` en script-src (necesario para Gatsby)

---

## Ajustes para Google Tag Manager

Cuando implementes Google Tag Manager (próximamente), **ya está pre-configurado** en el CSP.

### Dominios permitidos:

```
script-src ... https://www.googletagmanager.com;
connect-src ... https://www.google-analytics.com;
```

### Si necesitas agregar más dominios:

**Ejemplo:** Agregar Facebook Pixel

1. **Netlify (_headers):**
```
Content-Security-Policy: ... script-src 'self' 'unsafe-inline' https://connect.facebook.net; ...
```

2. **Vercel (vercel.json):**
```json
{
  "key": "Content-Security-Policy",
  "value": "... script-src 'self' 'unsafe-inline' https://connect.facebook.net; ..."
}
```

3. **Nginx (nginx.conf):**
```nginx
add_header Content-Security-Policy "... script-src 'self' 'unsafe-inline' https://connect.facebook.net; ..." always;
```

### Dominios comunes para Tag Manager:

```
# Google Analytics 4
https://www.google-analytics.com
https://analytics.google.com

# Google Tag Manager
https://www.googletagmanager.com

# Facebook Pixel
https://connect.facebook.net
https://www.facebook.com

# Twitter Pixel
https://static.ads-twitter.com
https://analytics.twitter.com

# TikTok Pixel
https://analytics.tiktok.com

# Hotjar
https://static.hotjar.com
https://script.hotjar.com

# Microsoft Clarity
https://www.clarity.ms
```

---

## Troubleshooting

### Problema 1: "Refused to load script because it violates CSP"

**Causa:** Un script está bloqueado por Content-Security-Policy

**Solución:**
1. Abre DevTools Console
2. Lee el error completo: `Refused to load ... from 'https://ejemplo.com/script.js'`
3. Agrega ese dominio a `script-src` en tu CSP

**Ejemplo:**
```
script-src 'self' 'unsafe-inline' https://ejemplo.com;
```

### Problema 2: "Refused to display in a frame"

**Causa:** X-Frame-Options está bloqueando un iframe legítimo

**Solución:**
Si necesitas permitir iframes de tu mismo dominio:
```
X-Frame-Options: SAMEORIGIN
```

O deshabilita X-Frame-Options y usa CSP:
```
Content-Security-Policy: ... frame-ancestors 'self';
```

### Problema 3: Fuentes de Google no cargan

**Causa:** CSP bloqueando fonts.googleapis.com

**Verificar:**
```
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
```

**Asegurar que ambos dominios estén presentes.**

### Problema 4: Imágenes de CDN no cargan

**Causa:** CSP bloqueando imágenes externas

**Solución actual:**
```
img-src 'self' data: https: blob:;
```

Esto permite **cualquier imagen HTTPS** (recomendado para sitios de noticias con muchas fuentes de imágenes).

**Alternativa más restrictiva:**
```
img-src 'self' https://cdn1.com https://cdn2.com;
```

### Problema 5: Headers no aparecen en producción

**Verificar:**

1. **Archivo en la ubicación correcta:**
   - Netlify: `public/_headers`
   - Vercel: `vercel.json` (raíz del proyecto)
   - Nginx: `/etc/nginx/sites-available/tu-sitio`

2. **Rebuild y redeploy:**
```bash
gatsby clean
gatsby build
# Deploy
```

3. **Hard refresh en el navegador:**
```
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

4. **Verificar con curl (bypasea cache):**
```bash
curl -I https://crush.news
```

### Problema 6: HSTS rompió mi sitio

**Síntoma:** Navegador fuerza HTTPS pero tu sitio no tiene certificado

**Solución inmediata:**
1. Abre Chrome
2. Ve a `chrome://net-internals/#hsts`
3. En "Delete domain security policies", ingresa tu dominio
4. Haz clic en "Delete"

**Solución permanente:**
- Instala certificado SSL (Let's Encrypt gratis)
- Solo después, activa HSTS

### Problema 7: CSP rompió mi sitio después de agregar Tag Manager

**Síntoma:** GTM no carga o no ejecuta tags

**Causa común:** GTM inyecta scripts inline dinámicamente

**Solución:**
Agregar `'unsafe-inline'` y `'unsafe-eval'` a `script-src` (ya está configurado).

**Verificar también:**
```
connect-src 'self' https://www.google-analytics.com;
img-src 'self' data: https: blob:;
```

---

## Mejores Prácticas

### 1. Testing antes de producción

**Siempre testea en staging/desarrollo primero:**

```bash
# En _headers, agregar header solo para staging
/staging/*
  Content-Security-Policy-Report-Only: ...
```

`Content-Security-Policy-Report-Only` reporta violaciones sin bloquear.

### 2. Monitoring de violaciones

**Configurar CSP reporting:**

```
Content-Security-Policy: ... report-uri https://tu-dominio.com/csp-report;
```

**Recibir reportes de violaciones en tu servidor para ajustar CSP.**

### 3. Auditoría regular

**Cada 3 meses:**
1. Escanear con SecurityHeaders.com
2. Escanear con Mozilla Observatory
3. Revisar logs de CSP violations
4. Actualizar headers según nuevas amenazas

### 4. Documentar cambios

**Cuando modifiques CSP, documenta:**
- Qué dominio agregaste
- Por qué (qué servicio/funcionalidad)
- Cuándo lo agregaste

### 5. No deshabilitar headers sin razón

**Si algo no funciona:**
1. Identifica el header específico causante
2. Ajústalo en lugar de deshabilitarlo completamente
3. Nunca deshabilites todos los headers "por las dudas"

---

## Recursos Adicionales

### Documentación oficial:
- [MDN - Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [OWASP - Secure Headers Project](https://owasp.org/www-project-secure-headers/)
- [Google - CSP Guide](https://developers.google.com/web/fundamentals/security/csp)

### Herramientas de testing:
- [SecurityHeaders.com](https://securityheaders.com)
- [Mozilla Observatory](https://observatory.mozilla.org)
- [CSP Evaluator (Google)](https://csp-evaluator.withgoogle.com)
- [Report URI - CSP Builder](https://report-uri.com/home/generate)

### Generadores de CSP:
- [CSP Generator (Report URI)](https://report-uri.com/home/generate)
- [CSP Builder (Mozilla)](https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/scoring.md)

---

## Checklist de Implementación

```
✅ Archivos de configuración creados:
   ✅ public/_headers (Netlify)
   ✅ vercel.json (Vercel)
   ✅ nginx.conf.example (Nginx)

✅ Headers configurados:
   ✅ Content-Security-Policy
   ✅ X-Frame-Options
   ✅ X-Content-Type-Options
   ✅ Strict-Transport-Security
   ✅ Referrer-Policy
   ✅ X-XSS-Protection
   ✅ Permissions-Policy

✅ Cache-Control optimizado:
   ✅ HTML (max-age=0)
   ✅ Estáticos (max-age=31536000)
   ✅ RSS/Atom (max-age=3600)
   ✅ Fuentes (CORS habilitado)

✅ CSP pre-configurado para:
   ✅ Google Tag Manager
   ✅ Google Analytics
   ✅ Facebook Pixel
   ✅ Twitter embeds

✅ Testing realizado:
   ⬜ SecurityHeaders.com (A+)
   ⬜ Mozilla Observatory (A)
   ⬜ Chrome DevTools (headers presentes)
   ⬜ cURL (headers correctos)

✅ Documentación:
   ✅ Guía completa creada
   ✅ Ejemplos de configuración
   ✅ Troubleshooting incluido
```

---

## Soporte

Si tienes problemas con la implementación:

1. Revisa la sección [Troubleshooting](#troubleshooting)
2. Verifica que el archivo de configuración esté en la ubicación correcta
3. Haz un rebuild completo: `gatsby clean && gatsby build`
4. Verifica con curl: `curl -I https://tu-dominio.com`

**Recuerda:** Los security headers son críticos para proteger a tus usuarios. No los deshabilites sin entender las implicaciones de seguridad.

---

## Changelog

### 2024-03-18 - Implementación Inicial
- ✅ Creados archivos de configuración para Netlify, Vercel y Nginx
- ✅ Configurado CSP con pre-aprobación para GTM, GA4, Facebook, Twitter
- ✅ Implementado HSTS con preload
- ✅ Cache-Control optimizado por tipo de archivo
- ✅ Permissions-Policy restrictivo por defecto
- ✅ Documentación completa creada
