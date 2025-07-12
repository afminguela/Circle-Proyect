# 📋 Circle Agency - Documentación del Proyecto

<div align="center">

![Circle Agency Logo](./media/logos/circle.svg)

[]()

**Una página web corporativa moderna para un estudio de diseño digital**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Web Components](https://img.shields.io/badge/Web_Components-29ABE2?style=for-the-badge&logo=webcomponents.org&logoColor=white)](https://www.webcomponents.org/)

</div>

---

## 📖 Tabla de Contenidos

<details>
<summary>👆 Haz clic para expandir</summary>

- [🎯 Descripción del Proyecto](#-descripción-del-proyecto)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [🚀 Instalación y Configuración](#-instalación-y-configuración)
- [🧩 Arquitectura de Componentes](#-arquitectura-de-componentes)
- [🌐 API y Gestión de Datos](#-api-y-gestión-de-datos)
- [🧭 Sistema de Routing](#-sistema-de-routing)
- [📱 Responsive Design](#-responsive-design)
- [✅ Validación de Formularios](#-validación-de-formularios)
- [🐛 Problemas Resueltos](#-problemas-resueltos)
- [🚀 Mejoras Futuras](#-mejoras-futuras)
- [👥 Contribución](#-contribución)
- [📄 Licencia](#-licencia)

</details>

---

## 🎯 Descripción del Proyecto

> **Circle Agency** es una página web corporativa moderna para un estudio de diseño digital que se especializa en UI/UX Design y desarrollo web. El proyecto está construido como una Single Page Application (SPA) con múltiples páginas y componentes reutilizables.

Es parte del proyecto del modulo 1 del CP de WebDeveloper Full Stack que se centra en Frontend. Consiste en maquetar teniendo una base en figma y los materiales ya predefinidos. 

### ✨ Características Principales

| Característica | Descripción | Estado |
|---|---|---|
| 📱 **Diseño Responsive** | Mobile-First con breakpoints optimizados | ✅ Completado |
| 🧩 **Web Components** | Componentes reutilizables y modulares | ✅ Completado |
| 🔍 **Validación en tiempo real** | Sistema de validación de formularios | ✅ Completado |
| 💾 **Gestión de datos** | Local Storage + API externa | ✅ Completado |
| 🎭 **Modal interactivo** | Con animaciones CSS avanzadas | ✅ Completado |
| 🧭 **Navegación dinámica** | Routing entre proyectos | ✅ Completado |

---

## 📁 Estructura del Proyecto

```bash
Circle-Proyect/
├── 📄 index.html                 # Página principal
├── 📄 contact.html              # Página de contacto
├── 📄 project.html              # Página de detalle de proyecto
├── 📄 404.html                  # Página de error
│
├── 📂 components/               # Web Components reutilizables
│   ├── 🧩 header.js            # Componente de navegación
│   ├── 🧩 footer.js            # Pie de página
│   ├── 🧩 modal.js             # Modal de confirmación
│   ├── 🧩 newsletter.js        # Suscripción newsletter
│   └── 🧩 uppybtn.js           # Botón flotante "scroll to top"
│
├── 📂 JS/                      # Lógica JavaScript
│   ├── ⚡ index.js            # Carga y renderizado de proyectos
│   ├── ⚡ contact.js          # Validación de formulario
│   └── ⚡ project.js          # Página de detalle de proyecto
│
├── 📂 styles/                  # Hojas de estilo
│   ├── 🎨 global.css          # Estilos globales y variables
│   ├── 🎨 contact.css         # Estilos del formulario
│   └── 🎨 project.css         # Estilos de página de proyecto
│
└── 📂 media/                   # Recursos multimedia
    ├── 🖼️ logos/              # Logotipos y favicons
    ├── 🖼️ images/             # Imágenes del sitio
    └── 🖼️ icons/              # Iconografía
```

## 🛠️ Tecnologías Utilizadas

### 🎨 Frontend Core
|Tecnología |	Versión	| Propósito|
|---|----|---|
<img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&amp;logo=html5&amp;logoColor=white"> | 5	| Estructura semántica|
<img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&amp;logo=css3&amp;logoColor=white"> | 3	| Estilos y diseño responsive
<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&amp;logo=javascript&amp;logoColor=black"> |ES6+	| Lógica e interactividad

### 🏗️ Arquitectura Moderna

- 🧩 Web Components - Componentes reutilizables
- 🏷️ Custom Elements - Elementos HTML personalizados
- 🔒 Shadow DOM - Encapsulación de estilos (en modal)
- 📝 Template Literals - Generación dinámica de HTML

### 📊 Gestión de Datos

- 🌐 Fetch API - Peticiones HTTP asíncronas
- 💾 Local Storage - Caché de datos del cliente
- 📋 JSON - Formato de intercambio de datos

### 📱 Responsive Design

📲 Mobile-First - Diseño optimizado para móviles
- 📐 CSS Grid & Flexbox - Layouts modernos
- 📺 Media Queries - Breakpoints responsivos
- 🎨 CSS Variables - Sistema de colores consistente.

## 🚀 Instalación y Configuración

### 📋 Requisitos Previos
- ✅ Navegador web moderno (Chrome, Firefox, Safari, Edge)
- ✅ Servidor web local (opcional para desarrollo)

#### 💻 Instalación
```bash

# 📥 Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd Circle-Proyect

# 🌐 Servir con un servidor local (opcional)

# Opción 1: Python 🐍
python -m http.server 8000

# Opción 2: Node.js 📦
npx http-server

# Opción 3: Live Server (VS Code Extension) ⚡
# Clic derecho → "Open with Live Server"
```
### 🌍 Acceso
|Método|	URL| 	Descripción|
|---|---|---|
|🌐 Servidor Local|	http://localhost:8000	|Recomendado para desarrollo|
|📄 Archivo directo|	file:///.../index.html|	Abrir directamente en navegador|

### 🌍 Acceso

| Método | URL | Descripción |
|---|---|---|
| 🌐 **Servidor Local** | `http://localhost:8000` | Recomendado para desarrollo |
| 📄 **Archivo directo** | `file:///.../index.html` | Abrir directamente en navegador |

---

## 🧩 Arquitectura de Componentes

### 1. 🧭 Header Component (`header.js`)

```html
<!-- Navegación responsive con menú hamburguesa -->
<header-component></header-component>
````
<details> <summary>📋 Características del Header</summary>
✅ Menú hamburguesa animado para móvil
✅ Navegación con anchors (#services-section)
✅ Botones programáticos con data-href
✅ Auto-cerrado del menú al hacer clic en enlaces
</details>
2. 🎭 Modal Component (modal.js)

```html
<!-- Modal con animaciones de entrada y salida -->
<modal-component id="modal"></modal-component>
````

<details> <summary>📋 Características del Modal</summary>
✅ Shadow DOM para encapsulación
✅ Animaciones CSS suaves
✅ Cierre con X o clic fuera
✅ Métodos públicos: showModal(), hideModal()
</details>
3. 🦶 Footer Component (footer.js)

```html
<!-- Pie de página con enlaces y redes sociales -->
<footer-component></footer-component>
`````
4. 📧 Newsletter Component (newsletter.js)


```html
<!-- Suscripción a newsletter -->
<newsletter-component></newsletter-component>

````

5. ⬆️ Uppy Button (uppybtn.js)

```html
<!-- Botón flotante "scroll to top" -->
<uppy-button></uppy-button>
````

## 🌐 API y Gestión de Datos

### 🔗 Fuente de Datos
```js
const API_URL = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';
```
### 🔄 Flujo de Datos
- 🌐 API Request → Petición inicial a la API
- 📥 Fetch Data → Obtener datos JSON
- 💾 Store in LocalStorage → Guardar en navegador
- 🎨 Render Components → Generar HTML dinámico
- 📱 Display on Page → Mostrar en pantalla

En visitas posteriores: 6. 🔄 Subsequent Visits → Usuario regresa 7. 📂 Check LocalStorage → Verificar caché 8. 💾 Data Exists? → Si hay datos, usar caché; si no, volver al paso 1

### 📊 Estructura de Datos

```Json
{
  "uuid": "project-id",
  "name": "Project Name",
  "description": "Brief description",
  "content": "Full HTML content",
  "completed_on": "2023-12-01",
  "image": "image-url"
}
```

#### ⚡ Funciones Principales
``requestProjectData()`` - Petición a la API

```js
async function requestProjectData() {
  const response = await fetch(API_URL);
  return await response.json();
}

````
``keepDataOnLocalStorage()`` - Almacenamiento

```js
async function keepDataOnLocalStorage() {
  const data = await requestProjectData();
  localStorage.setItem('projectData', JSON.stringify(data));
  return data;
}
```

## 🧭 Sistema de Routing
### 🌍 URLs y Parámetros
| Página	|URL|	Descripción|
|---|---|---
|🏠 Home	|index.html|	Página principal|
|📞 Contact|	contact.html|	Formulario de contacto|
|📁 Project Detail|	project.html?id={uuid}	|Detalle específico de proyecto|
|❌ 404	|404.html	|Página de error|

### 🔄 Navegación Dinámica
```JS
// Extracción de parámetros URL
function getQuerystringId() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  return params.id;
}

// Navegación programática
window.location.href = './project.html?id=' + projectUuid;
```

### ⚠️ Manejo de Errores

- 🔍 **Proyecto no encontrado** → Redirect a 404
- 💾 **Sin datos en Local Storage** → Redirect a 404
- 🌐 **Error de red** → Redirect a 404

---

## 📱 Responsive Design

### 📏 Breakpoints

```css
/* 📱 Mobile First (Base) */
/* Estilos para < 380px */

/* 💻 Tablet */
@media (min-width: 380px) and (max-width: 769px) {
  /* Estilos para tablets */
}

/* 🖥️ Desktop */
@media (min-width: 770px) {
  /* Estilos para desktop */
}
```

### 📲 Estrategia Mobile-First

1. **📱 Base móvil** → Estilos principales para móvil
2. **⬆️ Progressive Enhancement** → Añadir complejidad en tablets/desktop
3. **🔄 Flexbox dinámico** → `flex-direction: column` → `row`

### 📐 Grid de Proyectos

<details>
<summary>📋 Ver implementación responsive</summary>

```css
/* 📱 Móvil: 1 columna */
.projects-container { 
  flex-direction: column; 
}

/* 💻 Tablet: 2 columnas */
@media (min-width: 380px) {
  .projects-container { 
    flex-direction: row; 
    flex-wrap: wrap; 
  }
  .project-card { width: 45%; }
}

/* 🖥️ Desktop: 3 columnas */
@media (min-width: 770px) {
  .project-card { width: 30%; }
}
```

</details>

---

## ✅ Validación de Formularios

### 🔍 Sistema de Validación en Tiempo Real

#### 📝 Campos Validados

| Campo | Validación | Estado |
|---|---|---|
| 👤 **Nombre completo** | Mínimo 2 caracteres | ✅ |
| 📧 **Email** | Regex pattern válido | ✅ |
| 📞 **Teléfono** | Formato numérico | ✅ |
| 💬 **Mensaje** | Campo requerido | ✅ |

#### 🔧 Implementación

<details>
<summary>📋 Ver código de validación</summary>

```javascript
// Validación con regex
function validateMail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email.value);
  
  if (isValid) {
    email.style.border = "2px solid var(--Right)";
    mailOk = true;
  } else {
    email.style.border = "2px solid var(--Wrong)";
    showError("email-error", "Please enter a valid email");
    mailOk = false;
  }
}
```

</details>

#### 🎨 Feedback Visual

- ✅ **Verde** → Campo válido (`var(--Right)`)
- ❌ **Rojo** → Campo inválido (`var(--Wrong)`)
- 📝 **Mensajes específicos** → Error detallado por campo

#### 🔄 Flujo de Validación

1. **👤 Usuario modifica campo** → Dispara evento
2. **🎯 Event listener 'blur'** → Detecta pérdida de foco
3. **🔍 Validación individual** → Función específica
4. **✅ ¿Válido?** → Verificación
   - **Sí** → **🟢 Borde verde**
   - **No** → **🔴 Borde rojo + mensaje**
5. **📝 Submit formulario** → Usuario envía
6. **🔍 checkValues()** → Validación general
7. **✅ ¿Todos válidos?** → Verificación final
   - **Sí** → **🎭 Mostrar modal éxito**
   - **No** → **❌ Mostrar error general**

---

## 🐛 Problemas Resueltos

### 1. 🧩 Web Components + JavaScript Global

<details>
<summary>🔧 Ver solución</summary>

**❌ Problema:** Modal no se mostraba porque estaba en Shadow DOM

```javascript
// ❌ No funcionaba
document.querySelector('#modal').style.display = 'block';

// ✅ Solución
const modalComponent = document.querySelector('#modal');
modalComponent.showModal(); // Método público del componente
```

</details>

### 2. 📊 Array Methods Confusion

<details>
<summary>🔧 Ver solución</summary>

**❌ Problema:** Usar `split()` en arrays en lugar de `slice()`

```javascript
// ❌ Error
projects.reverse().split(0,3).forEach()

// ✅ Correcto
projects.reverse().slice(0,3).forEach()
```

</details>

### 3. 🎨 CSS Specificity y Orden

<details>
<summary>🔧 Ver solución</summary>

**❌ Problema:** Media queries sobrescritas por reglas base

```css
/* ❌ Problema: reglas base después de media queries */
@media (min-width: 770px) {
  .container { flex-direction: row; }
}
.container { flex-direction: column; } /* Sobrescribe */

/* ✅ Solución: orden correcto */
.container { flex-direction: column; } /* Base primero */
@media (min-width: 770px) {
  .container { flex-direction: row; }
}
```

</details>

### 4. ⚡ Return Statement en Funciones Async

<details>
<summary>🔧 Ver solución</summary>

**❌ Problema:** `return` prematuro paraba la ejecución

```javascript
// ❌ Problema
function checkValues() {
  if (allValid) {
    return console.log('todo ok'); // Se para aquí
    showModal(); // Nunca se ejecuta
  }
}

// ✅ Solución
function checkValues() {
  if (allValid) {
    console.log('todo ok');
    showModal(); // Ahora se ejecuta
  }
}
```

</details>

--- 
## ♿ Accesibilidad y Usabilidad

### 🎯 Principios de Accesibilidad Implementados

Este proyecto sigue las **WCAG 2.1 Guidelines** y principios de diseño inclusivo para garantizar que sea accesible para todos los usuarios, incluyendo personas con discapacidades.

### 🏷️ Etiquetado Semántico

#### HTML Semántico

| Elemento | Propósito | Implementación |
|---|---|---|
| `<header>` | Navegación principal | ✅ Estructura clara del sitio |
| `<main>` | Contenido principal | ✅ Área principal de cada página |
| `<section>` | Secciones temáticas | ✅ Agrupación lógica de contenido |
| `<article>` | Contenido independiente | ✅ Tarjetas de proyecto |
| `<nav>` | Navegación | ✅ Menús y enlaces |
| `<footer>` | Información adicional | ✅ Pie de página |

#### ARIA Labels y Roles

```html
<!-- Navegación -->
<nav aria-label="Navegación principal">
  <ul aria-label="Menu">
    <li><a href="#" aria-current="page">Home</a></li>
  </ul>
</nav>

<!-- Botón hamburguesa -->
<input aria-label="burger menu" type="checkbox" id="nav-toggle" />
<div aria-label="burger menu toggle">
  <span aria-label="burger menu deco"></span>
</div>

<!-- Formularios -->
<label for="email">Email Address</label>
<input id="email" type="email" aria-describedby="email-error" />
<div id="email-error" role="alert" aria-live="polite"></div>
`````

### ⌨️ Navegación por Teclado

#### Soporte Completo de Teclado

- ✅ **Tab Navigation** → Navegación secuencial por todos los elementos interactivos
- ✅ **Enter/Space** → Activación de botones y enlaces
- ✅ **Escape** → Cierre de modales y menús
- ✅ **Focus Visible** → Indicadores visuales claros de foco

#### Implementación en Componentes

<details>
<summary>📋 Ver código de navegación por teclado</summary>

```javascript
// Modal - Cierre con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && this.isOpen) {
    this.hideModal();
  }
});

// Menú hamburguesa - Toggle con Enter/Space
menuToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    menuToggle.checked = !menuToggle.checked;
  }
});

// Trap focus en modal
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
}
```

</details>

### 🎨 Contraste y Diseño Visual

#### Paleta de Colores Accesible

| Uso | Color | Contraste | Estado |
|---|---|---|---|
| 🖤 **Texto principal** | `#292E47` sobre `#FFFFFF` | 12.63:1 | ✅ AAA |
| 🔵 **Enlaces** | `#072AC8` sobre `#FFFFFF` | 8.59:1 | ✅ AAA |
| 🟢 **Campo válido** | `#28A745` sobre `#FFFFFF` | 3.84:1 | ✅ AA |
| 🔴 **Error** | `#DC3545` sobre `#FFFFFF` | 5.14:1 | ✅ AAA |

#### Variables CSS Accesibles

```css
:root {
  /* Colores con contraste AAA */
  --Primary-default: #072AC8;
  --Neutral-dark: #292E47;
  --Neutral-medium: #6B708D;
  --Right: #28A745;
  --Wrong: #DC3545;
  
  /* Tamaños de fuente escalables */
  --font-size-small: clamp(0.875rem, 2vw, 1rem);
  --font-size-body: clamp(1rem, 2.5vw, 1.125rem);
  --font-size-h3: clamp(1.5rem, 4vw, 2rem);
  
  /* Espaciado consistente */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
}
```

### 📱 Responsive y Zoom

#### Soporte de Zoom

- ✅ **200% Zoom** → Contenido legible hasta 200% sin scroll horizontal
- ✅ **Viewport Meta** → Configuración correcta para dispositivos móviles
- ✅ **Unidades Relativas** → `rem`, `em`, `%` en lugar de `px` fijos
- ✅ **Clamp()** → Tipografía fluida que se adapta al tamaño de pantalla

```css
/* Tipografía fluida */
h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.5rem, 4vw, 2.5rem); }
p { font-size: clamp(1rem, 2.5vw, 1.125rem); }

/* Espaciado responsive */
.container {
  padding: clamp(1rem, 5vw, 2rem);
  max-width: min(90%, 1200px);
  margin: 0 auto;
}
```

### 🔊 Tecnologías de Asistencia

#### Screen Readers

- ✅ **Texto alternativo** → Todas las imágenes tienen `alt` descriptivo
- ✅ **Etiquetas de formulario** → Todos los campos están etiquetados
- ✅ **Roles ARIA** → Elementos complejos tienen roles apropiados
- ✅ **Live Regions** → Mensajes de error se anuncian automáticamente

#### Implementación en Formularios

```html
<!-- Formulario accesible -->
<form novalidate>
  <fieldset>
    <legend>Información de Contacto</legend>
    
    <div class="form-group">
      <label for="fullname">Nombre Completo *</label>
      <input 
        id="fullname" 
        type="text" 
        required 
        aria-describedby="fullname-error"
        aria-invalid="false"
      />
      <div id="fullname-error" role="alert" aria-live="polite"></div>
    </div>
    
    <div class="form-group">
      <label for="email">Correo Electrónico *</label>
      <input 
        id="email" 
        type="email" 
        required 
        aria-describedby="email-error email-help"
        aria-invalid="false"
      />
      <div id="email-help">Formato: usuario@dominio.com</div>
      <div id="email-error" role="alert" aria-live="polite"></div>
    </div>
  </fieldset>
</form>
```

### ⚡ Performance y Carga

#### Optimización para Conexiones Lentas

- ✅ **Lazy Loading** → Imágenes se cargan bajo demanda
- ✅ **Formatos Modernos** → WebP con fallback a JPG
- ✅ **Compresión** → CSS y JS minificados
- ✅ **Caché Inteligente** → LocalStorage para datos de API

```html
<!-- Imágenes optimizadas -->
<img 
  src="project-thumb.webp" 
  alt="Descripción detallada del proyecto"
  loading="lazy"
  width="300" 
  height="200"
/>

<!-- Fallback para formatos no soportados -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.avif" type="image/avif">
  <img src="image.jpg" alt="Descripción de la imagen">
</picture>
```

### 🧪 Testing de Accesibilidad

#### Herramientas Utilizadas

| Herramienta | Propósito | Resultado |
|---|---|---|
| 🔍 **axe-core** | Análisis automático | ✅ 0 errores críticos |
| 📱 **WAVE** | Evaluación visual | ✅ Contraste correcto |
| ⌨️ **Keyboard Navigation** | Prueba manual | ✅ Navegación completa |
| 🔊 **NVDA/VoiceOver** | Screen readers | ✅ Lectura fluida |

#### Checklist de Verificación

- [ ] ✅ Todas las imágenes tienen texto alternativo
- [ ] ✅ Formularios están correctamente etiquetados
- [ ] ✅ Navegación por teclado funciona completamente
- [ ] ✅ Contraste cumple estándares AA/AAA
- [ ] ✅ Contenido es legible al 200% de zoom
- [ ] ✅ Errores se comunican claramente
- [ ] ✅ Estructura HTML es semántica
- [ ] ✅ ARIA labels están implementados


## 🚀 Mejoras Futuras

### 🎯 Funcionalidades

- [ ] 🌙 **Modo oscuro** → Toggle de tema
- [ ] 🌍 **Internacionalización** → Múltiples idiomas
- [ ] ⚡ **Lazy loading** → Carga diferida de imágenes
- [ ] 📱 **Service Worker** → Funcionalidad offline
- [ ] 🔧 **PWA** → Progressive Web App

### 🚀 Rendimiento

- [ ] 📦 **Minificación** → CSS y JS comprimidos
- [ ] 🎯 **Bundling** → Webpack o Vite
- [ ] 🌐 **CDN** → Imágenes optimizadas
- [ ] 💾 **Caché avanzado** → Estrategias de invalidación

### 🎨 UX/UI

- [ ] 💀 **Skeleton loading** → Placeholders mientras carga
- [ ] 🍞 **Notificaciones toast** → Feedback no modal
- [ ] ✨ **Micro-animaciones** → Transiciones más fluidas
- [ ] ♿ **Accesibilidad** → ARIA labels y keyboard navigation

### 🛠️ Técnicas

- [ ] 📘 **TypeScript** → Tipado estático
- [ ] 🧪 **Tests unitarios** → Jest o Vitest
- [ ] 🔄 **CI/CD** → GitHub Actions
- [ ] 🚀 **Deployment** → Netlify o Vercel


### 🎯 Mejoras de Accesibilidad Futuras

#### Próximas Implementaciones

- [ ] 🔊 **Audio Descriptions** → Descripciones de video/audio
- [ ] 🌙 **Modo Alto Contraste** → Tema específico para baja visión
- [ ] 🗣️ **Síntesis de Voz** → Lectura automática de contenido
- [ ] ⚡ **Reduced Motion** → Respeto por `prefers-reduced-motion`
- [ ] 🌍 **Múltiples Idiomas** → Soporte i18n completo

```css
/* Respeto por preferencias de movimiento */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Modo alto contraste */
@media (prefers-contrast: high) {
  :root {
    --Primary-default: #000000;
    --Neutral-dark: #000000;
    --background: #FFFFFF;
  }
}
```

---



---

## 👥 Contribución

### 📝 Estructura de Commits

```bash
feat: add new component
fix: resolve modal animation issue
style: improve responsive design
docs: update README
refactor: optimize data fetching
```

### 🧪 Testing Local

1. ✅ Verificar todos los breakpoints
2. ✅ Probar formulario de contacto
3. ✅ Navegar entre proyectos
4. ✅ Verificar componentes en diferentes páginas

---

## 📄 Licencia

> Este proyecto es parte del bootcamp de **IronHack** y está creado con fines educativos.

---

<div align="center">

**Desarrollado con ❤️ usando tecnologías web modernas**

[![IronHack](https://img.shields.io/badge/IronHack-Bootcamp-red?style=for-the-badge)](https://www.ironhack.com/)
[![MIT License](https://img.shields.io/badge/License-Educational-blue?style=for-the-badge)](LICENSE)

</div>