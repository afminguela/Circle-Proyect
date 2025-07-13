# 📋 Circle Agency - Documentación del Proyecto

<div align="center">

![Circle Agency Logo](./media/logos/circle.svg)

[Circle Agency on Vercel](http://circle-proyect.vercel.app)

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
- [🚀 Deployment](#-deployment)
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

### 🛠️ Entorno de Desarrollo

🖥️ **VS Code** - IDE principal para desarrollo
- 🎨 **Live Server Extension** - Vista previa en tiempo real
- 🧩 **ES6 Code Snippets** - Productividad en JavaScript
- 🔍 **Prettier** - Formateo de código
- 🤖 **GitHub Copilot** - Asistencia de codificación con IA

🌐 **Chrome DevTools** - Testing y debugging en navegador
- 📱 **Device Simulation** - Testing responsive móvil
- 🔍 **Lighthouse** - Auditoría de rendimiento y accesibilidad
- 🐛 **Console Debugging** - Seguimiento de errores JavaScript
- 📊 **Network Panel** - Monitoreo de peticiones API

🔄 **GitHub** - Control de versiones y colaboración
- 📝 **Git Workflow** - Ramas de características y pull requests
- 📚 **Gestión de Repositorio** - Organización de código
- 🚀 **GitHub Pages** - Hosting de documentación
- 🔗 **Integración Vercel** - Despliegues automáticos

🤖 **GitHub Copilot** - Soporte de desarrollo con IA
- ⚡ **Autocompletado** - Sugerencias inteligentes
- 📝 **Documentación** - Generación automática de comentarios
- 🐛 **Resolución de Problemas** - Asistencia en resolución de errores
- 🔄 **Refactoring** - Sugerencias de optimización de código

#### 📋 Versiones Utilizadas

| Herramienta | Versión | Propósito |
|---|---|---|
| 🖥️ **VS Code** | 1.84.2 | IDE principal |
| 🌐 **Chrome** | 119.0.6045 | Testing en navegador |
| 🔄 **Git** | 2.42.0 | Control de versiones |
| 🤖 **Copilot** | v1.140.0 | Asistencia IA |

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
## ♿ Accesibilidad

### 🎯 Implementación WCAG 2.1

Este proyecto sigue las **WCAG 2.1 Guidelines** para garantizar accesibilidad universal.

#### 🏷️ HTML Semántico y ARIA

- ✅ **Elementos semánticos** → `<header>`, `<main>`, `<nav>`, `<section>`
- ✅ **ARIA labels** → Navegación y formularios etiquetados
- ✅ **Roles apropiados** → `role="alert"`, `aria-live="polite"`

#### ⌨️ Navegación por Teclado

- ✅ **Tab Navigation** → Orden lógico de elementos
- ✅ **Escape key** → Cierre de modales
- ✅ **Focus visible** → Indicadores claros

#### 🎨 Contraste y Diseño

| Elemento | Contraste | Estado |
|---|---|---|
| Texto principal | 12.63:1 | ✅ AAA |
| Enlaces | 8.59:1 | ✅ AAA |
| Errores | 5.14:1 | ✅ AAA |

#### 📱 Responsive Accesible

- ✅ **200% Zoom** → Contenido legible sin scroll horizontal
- ✅ **Unidades relativas** → `rem`, `em`, `clamp()`
- ✅ **Tipografía fluida** → Adaptable a todos los dispositivos

#### 🧪 Testing

| Herramienta | Resultado |
|---|---|
| 🔍 **axe-core** | ✅ 0 errores críticos |
| 🕯️ **Lighthouse** | ✅ 95%+ en todas las páginas |
| ⌨️ **Navegación manual** | ✅ Funcional completa |




---

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
feat: add new component or feature
hotfix: resolve an issue
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
## 🚀 Deployment

### 🌐 Vercel

El proyecto está desplegado en **Vercel** con deployment automático desde GitHub.

**🔗 URL:** [http://circle-proyect.vercel.app](http://circle-proyect.vercel.app)

#### Características del Deploy

- ✅ **Auto-deploy** → Push a `main` despliega automáticamente
- ✅ **HTTPS** → SSL certificado automático
- ✅ **CDN Global** → Distribución mundial
- ✅ **Preview** → Cada branch genera preview único

#### Proceso

1. Push al repositorio GitHub
2. Vercel detecta cambios automáticamente  
3. Build y deploy en segundos
4. Site actualizado en vivo

---

## 📄 Licencia

> Este proyecto es parte del bootcamp de **IronHack** y está creado con fines educativos.

---

<div align="center">

**Desarrollado con ❤️ usando tecnologías web modernas**

[![IronHack](https://img.shields.io/badge/IronHack-Bootcamp-blue?style=for-the-badge)](https://www.ironhack.com/)
[![MIT License](https://img.shields.io/badge/License-Educational-green?style=for-the-badge)](LICENSE)

</div>

---

# 📋 Circle Agency - Project Documentation

<div align="center">

![Circle Agency Logo](./media/logos/circle.svg)

[Circle Agency on Vercel](http://circle-proyect.vercel.app)

**A modern corporate website for a digital design studio**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Web Components](https://img.shields.io/badge/Web_Components-29ABE2?style=for-the-badge&logo=webcomponents.org&logoColor=white)](https://www.webcomponents.org/)

</div>

---

## 📖 Table of Contents

<details>
<summary>👆 Click to expand</summary>

- [🎯 Project Description](#-project-description)
- [📁 Project Structure](#-project-structure)
- [🛠️ Technologies Used](#️-technologies-used)
- [🚀 Installation and Setup](#-installation-and-setup)
- [🧩 Component Architecture](#-component-architecture)
- [🌐 API and Data Management](#-api-and-data-management)
- [🧭 Routing System](#-routing-system)
- [📱 Responsive Design](#-responsive-design)
- [✅ Form Validation](#-form-validation)
- [🐛 Solved Problems](#-solved-problems)
- [♿ Accessibility](#-accessibility)
- [🚀 Future Improvements](#-future-improvements)
- [👥 Contributing](#-contributing)
- [🚀 Deployment](#-deployment)
- [📄 License](#-license)

</details>

---

## 🎯 Project Description

> **Circle Agency** is a modern corporate website for a digital design studio specializing in UI/UX Design and web development. The project is built as a Single Page Application (SPA) with multiple pages and reusable components.

This is part of the Module 1 project from the Full Stack Web Developer CP focusing on Frontend. It consists of markup based on a Figma design with predefined materials.

### ✨ Main Features

| Feature | Description | Status |
|---|---|---|
| 📱 **Responsive Design** | Mobile-First with optimized breakpoints | ✅ Completed |
| 🧩 **Web Components** | Reusable and modular components | ✅ Completed |
| 🔍 **Real-time validation** | Form validation system | ✅ Completed |
| 💾 **Data management** | Local Storage + external API | ✅ Completed |
| 🎭 **Interactive modal** | With advanced CSS animations | ✅ Completed |
| 🧭 **Dynamic navigation** | Routing between projects | ✅ Completed |

---

## 📁 Project Structure

```bash
Circle-Proyect/
├── 📄 index.html                 # Main page
├── 📄 contact.html              # Contact page
├── 📄 project.html              # Project detail page
├── 📄 404.html                  # Error page
│
├── 📂 components/               # Reusable Web Components
│   ├── 🧩 header.js            # Navigation component
│   ├── 🧩 footer.js            # Footer
│   ├── 🧩 modal.js             # Confirmation modal
│   ├── 🧩 newsletter.js        # Newsletter subscription
│   └── 🧩 uppybtn.js           # Floating "scroll to top" button
│
├── 📂 JS/                      # JavaScript logic
│   ├── ⚡ index.js            # Loading and rendering projects
│   ├── ⚡ contact.js          # Form validation
│   └── ⚡ project.js          # Project detail page
│
├── 📂 styles/                  # Stylesheets
│   ├── 🎨 global.css          # Global styles and variables
│   ├── 🎨 contact.css         # Form styles
│   └── 🎨 project.css         # Project page styles
│
└── 📂 media/                   # Media resources
    ├── 🖼️ logos/              # Logos and favicons
    ├── 🖼️ images/             # Site images
    └── 🖼️ icons/              # Icons
```

## 🛠️ Technologies Used

### 🎨 Frontend Core
|Technology |	Version	| Purpose|
|---|----|---|
<img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&amp;logo=html5&amp;logoColor=white"> | 5	| Semantic structure|
<img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&amp;logo=css3&amp;logoColor=white"> | 3	| Styles and responsive design
<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&amp;logo=javascript&amp;logoColor=black"> |ES6+	| Logic and interactivity

### 🏗️ Modern Architecture

- 🧩 Web Components - Reusable components
- 🏷️ Custom Elements - Custom HTML elements
- 🔒 Shadow DOM - Style encapsulation (in modal)
- 📝 Template Literals - Dynamic HTML generation

### 📊 Data Management

- 🌐 Fetch API - Asynchronous HTTP requests
- 💾 Local Storage - Client-side data caching
- 📋 JSON - Data exchange format

### 📱 Responsive Design

📲 Mobile-First - Mobile-optimized design
- 📐 CSS Grid & Flexbox - Modern layouts
- 📺 Media Queries - Responsive breakpoints
- 🎨 CSS Variables - Consistent color system

### 🛠️ Development Environment

🖥️ **VS Code** - Main IDE for development
- 🎨 **Live Server Extension** - Real-time preview
- 🧩 **ES6 Code Snippets** - JavaScript productivity
- 🔍 **Prettier** - Code formatting
- 🤖 **GitHub Copilot** - AI-powered coding assistance

🌐 **Chrome DevTools** - Browser testing and debugging
- 📱 **Device Simulation** - Mobile responsive testing
- 🔍 **Lighthouse** - Performance and accessibility auditing
- 🐛 **Console Debugging** - JavaScript error tracking
- 📊 **Network Panel** - API request monitoring

🔄 **GitHub** - Version control and collaboration
- 📝 **Git Workflow** - Feature branches and pull requests
- 📚 **Repository Management** - Code organization
- 🚀 **GitHub Pages** - Documentation hosting
- 🔗 **Vercel Integration** - Automatic deployments

🤖 **GitHub Copilot** - AI development support
- ⚡ **Code Completion** - Intelligent suggestions
- 📝 **Documentation** - Automated comment generation
- 🐛 **Problem Solving** - Error resolution assistance
- 🔄 **Refactoring** - Code optimization suggestions

#### 📋 Versions Used

| Tool | Version | Purpose |
|---|---|---|
| 🖥️ **VS Code** | 1.84.2 | Primary IDE |
| 🌐 **Chrome** | 119.0.6045 | Browser testing |
| 🔄 **Git** | 2.42.0 | Version control |
| 🤖 **Copilot** | v1.140.0 | AI assistance |


## 🚀 Installation and Setup

### 📋 Prerequisites
- ✅ Modern web browser (Chrome, Firefox, Safari, Edge)
- ✅ Local web server (optional for development)

#### 💻 Installation
```bash

# 📥 Clone the repository
git clone [REPOSITORY_URL]
cd Circle-Proyect

# 🌐 Serve with a local server (optional)

# Option 1: Python 🐍
python -m http.server 8000

# Option 2: Node.js 📦
npx http-server

# Option 3: Live Server (VS Code Extension) ⚡
# Right click → "Open with Live Server"
```

### 🌍 Access
|Method|	URL| 	Description|
|---|---|---|
|🌐 Local Server|	http://localhost:8000	|Recommended for development|
|📄 Direct file|	file:///.../index.html|	Open directly in browser|

---

## 🧩 Component Architecture

### 1. 🧭 Header Component (`header.js`)

```html
<!-- Responsive navigation with hamburger menu -->
<header-component></header-component>
```
<details> <summary>📋 Header Features</summary>
✅ Animated hamburger menu for mobile
✅ Navigation with anchors (#services-section)
✅ Programmatic buttons with data-href
✅ Auto-close menu when clicking links
</details>

### 2. 🎭 Modal Component (`modal.js`)

```html
<!-- Modal with entry and exit animations -->
<modal-component id="modal"></modal-component>
```

<details> <summary>📋 Modal Features</summary>
✅ Shadow DOM for encapsulation
✅ Smooth CSS animations
✅ Close with X or click outside
✅ Public methods: showModal(), hideModal()
</details>

### 3. 🦶 Footer Component (`footer.js`)

```html
<!-- Footer with links and social media -->
<footer-component></footer-component>
```

### 4. 📧 Newsletter Component (`newsletter.js`)

```html
<!-- Newsletter subscription -->
<newsletter-component></newsletter-component>
```

### 5. ⬆️ Uppy Button (`uppybtn.js`)

```html
<!-- Floating "scroll to top" button -->
<uppy-button></uppy-button>
```

## 🌐 API and Data Management

### 🔗 Data Source
```js
const API_URL = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';
```
### 🔄 Data Flow
- 🌐 API Request → Initial API request
- 📥 Fetch Data → Get JSON data
- 💾 Store in LocalStorage → Save in browser
- 🎨 Render Components → Generate dynamic HTML
- 📱 Display on Page → Show on screen

Subsequent visits: 6. 🔄 Subsequent Visits → User returns 7. 📂 Check LocalStorage → Check cache 8. 💾 Data Exists? → If data exists, use cache; if not, go back to step 1

### 📊 Data Structure

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

#### ⚡ Main Functions
`requestProjectData()` - API Request

```js
async function requestProjectData() {
  const response = await fetch(API_URL);
  return await response.json();
}
```

`keepDataOnLocalStorage()` - Storage

```js
async function keepDataOnLocalStorage() {
  const data = await requestProjectData();
  localStorage.setItem('projectData', JSON.stringify(data));
  return data;
}
```

## 🧭 Routing System
### 🌍 URLs and Parameters
| Page	|URL|	Description|
|---|---|---
|🏠 Home	|index.html|	Main page|
|📞 Contact|	contact.html|	Contact form|
|📁 Project Detail|	project.html?id={uuid}	|Specific project detail|
|❌ 404	|404.html	|Error page|

### 🔄 Dynamic Navigation
```JS
// URL parameter extraction
function getQuerystringId() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  return params.id;
}

// Programmatic navigation
window.location.href = './project.html?id=' + projectUuid;
```

### ⚠️ Error Handling

- 🔍 **Project not found** → Redirect to 404
- 💾 **No data in Local Storage** → Redirect to 404
- 🌐 **Network error** → Redirect to 404

---

## 📱 Responsive Design

### 📏 Breakpoints

```css
/* 📱 Mobile First (Base) */
/* Styles for < 380px */

/* 💻 Tablet */
@media (min-width: 380px) and (max-width: 769px) {
  /* Tablet styles */
}

/* 🖥️ Desktop */
@media (min-width: 770px) {
  /* Desktop styles */
}
```

### 📲 Mobile-First Strategy

1. **📱 Mobile base** → Main styles for mobile
2. **⬆️ Progressive Enhancement** → Add complexity for tablet/desktop
3. **🔄 Dynamic flexbox** → `flex-direction: column` → `row`

### 📐 Project Grid

<details>
<summary>📋 View responsive implementation</summary>

```css
/* 📱 Mobile: 1 column */
.projects-container { 
  flex-direction: column; 
}

/* 💻 Tablet: 2 columns */
@media (min-width: 380px) {
  .projects-container { 
    flex-direction: row; 
    flex-wrap: wrap; 
  }
  .project-card { width: 45%; }
}

/* 🖥️ Desktop: 3 columns */
@media (min-width: 770px) {
  .project-card { width: 30%; }
}
```

</details>

---

## ✅ Form Validation

### 🔍 Real-time Validation System

#### 📝 Validated Fields

| Field | Validation | Status |
|---|---|---|
| 👤 **Full name** | Minimum 2 characters | ✅ |
| 📧 **Email** | Valid regex pattern | ✅ |
| 📞 **Phone** | Numeric format | ✅ |
| 💬 **Message** | Required field | ✅ |

#### 🔧 Implementation

<details>
<summary>📋 View validation code</summary>

```javascript
// Regex validation
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

#### 🎨 Visual Feedback

- ✅ **Green** → Valid field (`var(--Right)`)
- ❌ **Red** → Invalid field (`var(--Wrong)`)
- 📝 **Specific messages** → Detailed error per field

#### 🔄 Validation Flow

1. **👤 User modifies field** → Triggers event
2. **🎯 Event listener 'blur'** → Detects focus loss
3. **🔍 Individual validation** → Specific function
4. **✅ Valid?** → Verification
   - **Yes** → **🟢 Green border**
   - **No** → **🔴 Red border + message**
5. **📝 Submit form** → User submits
6. **🔍 checkValues()** → General validation
7. **✅ All valid?** → Final verification
   - **Yes** → **🎭 Show success modal**
   - **No** → **❌ Show general error**

---

## 🐛 Solved Problems

### 1. 🧩 Web Components + Global JavaScript

<details>
<summary>🔧 View solution</summary>

**❌ Problem:** Modal didn't show because it was in Shadow DOM

```javascript
// ❌ Didn't work
document.querySelector('#modal').style.display = 'block';

// ✅ Solution
const modalComponent = document.querySelector('#modal');
modalComponent.showModal(); // Public method of the component
```

</details>

### 2. 📊 Array Methods Confusion

<details>
<summary>🔧 View solution</summary>

**❌ Problem:** Using `split()` on arrays instead of `slice()`

```javascript
// ❌ Error
projects.reverse().split(0,3).forEach()

// ✅ Correct
projects.reverse().slice(0,3).forEach()
```

</details>

### 3. 🎨 CSS Specificity and Order

<details>
<summary>🔧 View solution</summary>

**❌ Problem:** Media queries overwritten by base rules

```css
/* ❌ Problem: base rules after media queries */
@media (min-width: 770px) {
  .container { flex-direction: row; }
}
.container { flex-direction: column; } /* Overwrites */

/* ✅ Solution: correct order */
.container { flex-direction: column; } /* Base first */
@media (min-width: 770px) {
  .container { flex-direction: row; }
}
```

</details>

### 4. ⚡ Return Statement in Async Functions

<details>
<summary>🔧 View solution</summary>

**❌ Problem:** Premature `return` stopped execution

```javascript
// ❌ Problem
function checkValues() {
  if (allValid) {
    return console.log('all ok'); // Stops here
    showModal(); // Never executes
  }
}

// ✅ Solution
function checkValues() {
  if (allValid) {
    console.log('all ok');
    showModal(); // Now executes
  }
}
```

</details>

--- 
## ♿ Accessibility

### 🎯 WCAG 2.1 Implementation

This project follows **WCAG 2.1 Guidelines** to ensure universal accessibility.

#### 🏷️ Semantic HTML and ARIA

- ✅ **Semantic elements** → `<header>`, `<main>`, `<nav>`, `<section>`
- ✅ **ARIA labels** → Navigation and forms labeled
- ✅ **Appropriate roles** → `role="alert"`, `aria-live="polite"`

#### ⌨️ Keyboard Navigation

- ✅ **Tab Navigation** → Logical element order
- ✅ **Escape key** → Modal closing
- ✅ **Focus visible** → Clear indicators

#### 🎨 Contrast and Design

| Element | Contrast | Status |
|---|---|---|
| Main text | 12.63:1 | ✅ AAA |
| Links | 8.59:1 | ✅ AAA |
| Errors | 5.14:1 | ✅ AAA |

#### 📱 Accessible Responsive

- ✅ **200% Zoom** → Readable content without horizontal scroll
- ✅ **Relative units** → `rem`, `em`, `clamp()`
- ✅ **Fluid typography** → Adaptable to all devices

#### 🧪 Testing

| Tool | Result |
|---|---|
| 🔍 **axe-core** | ✅ 0 critical errors |
| 🕯️ **Lighthouse** | ✅ 95%+ on all pages |
| ⌨️ **Manual navigation** | ✅ Complete functionality |

---

## 🚀 Future Improvements

### 🎯 Features

- [ ] 🌙 **Dark mode** → Theme toggle
- [ ] 🌍 **Internationalization** → Multiple languages
- [ ] ⚡ **Lazy loading** → Deferred image loading
- [ ] 📱 **Service Worker** → Offline functionality
- [ ] 🔧 **PWA** → Progressive Web App

### 🚀 Performance

- [ ] 📦 **Minification** → Compressed CSS and JS
- [ ] 🎯 **Bundling** → Webpack or Vite
- [ ] 🌐 **CDN** → Optimized images
- [ ] 💾 **Advanced caching** → Invalidation strategies

### 🎨 UX/UI

- [ ] 💀 **Skeleton loading** → Placeholders while loading
- [ ] 🍞 **Toast notifications** → Non-modal feedback
- [ ] ✨ **Micro-animations** → Smoother transitions
- [ ] ♿ **Accessibility** → ARIA labels and keyboard navigation

### 🛠️ Technical

- [ ] 📘 **TypeScript** → Static typing
- [ ] 🧪 **Unit tests** → Jest or Vitest
- [ ] 🔄 **CI/CD** → GitHub Actions
- [ ] 🚀 **Deployment** → Netlify or Vercel

### 🎯 Future Accessibility Improvements

#### Upcoming Implementations

- [ ] 🔊 **Audio Descriptions** → Video/audio descriptions
- [ ] 🌙 **High Contrast Mode** → Specific theme for low vision
- [ ] 🗣️ **Speech Synthesis** → Automatic content reading
- [ ] ⚡ **Reduced Motion** → Respect for `prefers-reduced-motion`
- [ ] 🌍 **Multiple Languages** → Complete i18n support

```css
/* Respect motion preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  :root {
    --Primary-default: #000000;
    --Neutral-dark: #000000;
    --background: #FFFFFF;
  }
}
```

---

## 👥 Contributing

### 📝 Commit Structure

```bash
feat: add new component or feature
hotfix: resolve an issue
style: improve responsive design
docs: update README
refactor: optimize data fetching
```

### 🧪 Local Testing

1. ✅ Verify all breakpoints
2. ✅ Test contact form
3. ✅ Navigate between projects
4. ✅ Verify components on different pages

---

## 🚀 Deployment

### 🌐 Vercel

The project is deployed on **Vercel** with automatic deployment from GitHub.

**🔗 URL:** [http://circle-proyect.vercel.app](http://circle-proyect.vercel.app)

#### Deploy Features

- ✅ **Auto-deploy** → Push to `main` deploys automatically
- ✅ **HTTPS** → Automatic SSL certificate
- ✅ **Global CDN** → Worldwide distribution
- ✅ **Preview** → Each branch generates unique preview

#### Process

1. Push to GitHub repository
2. Vercel automatically detects changes
3. Build and deploy in seconds
4. Site updated live

---

## 📄 License

> This project is part of the **IronHack** bootcamp and is created for educational purposes.

---

<div align="center">

**Developed with ❤️ using modern web technologies**

[![IronHack](https://img.shields.io/badge/IronHack-Bootcamp-blue?style=for-the-badge)](https://www.ironhack.com/)
[![MIT License](https://img.shields.io/badge/License-Educational-green?style=for-the-badge)](LICENSE)

</div>

