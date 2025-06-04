# 🍕 Cookin'Code - Buscador de Recetas Inteligente

**Cookin'Code** es una aplicación web desarrollada con JavaScript, HTML y CSS que permite buscar recetas, guardarlas como favoritas y subir recetas personalizadas. Está diseñada para ofrecer una experiencia de usuario fluida, rápida e interactiva.

---

## 🚀 Características Principales

* 🔍 **Búsqueda de recetas** mediante una API externa.
* 📄 **Paginación** para navegar entre múltiples resultados.
* 🍽️ **Visualización detallada de recetas** con ingredientes, porciones y tiempo de preparación.
* ➖➕ **Actualización dinámica de ingredientes** según el número de porciones.
* ⭐ **Guardado de recetas favoritas** usando `localStorage`.
* 📝 **Subida de recetas personalizadas**, visibles localmente para el usuario.
* ♻️ **Persistencia de datos** incluso al recargar o cerrar la aplicación.

![Documento A4 infografía del negocio limpio profesional multicolor](https://github.com/user-attachments/assets/22271428-e763-45f5-a10c-35e6019ac573)


---

## 🧱 Tecnologías Utilizadas

* **JavaScript (ES6+)** - Lógica de la aplicación
* **HTML5 y CSS3** - Estructura y diseño de la interfaz
* **Node.js** - Empaquetador para desarrollo rápido
* **Forkify API** - Fuente de datos externa
* **localStorage API** - Almacenamiento persistente de favoritos

## Diagrama 

![forkify-flowchart-part-3](https://github.com/user-attachments/assets/ccdedba7-3ccb-4b35-bb4b-6799194a4132)

---

## 📂 Estructura del Proyecto

```
Forkify/
├── public/            # Archivos estáticos
├── src/
│   ├── views/         # Vistas de UI (MVC)
│   ├── controllers/   # Lógica de control
│   ├── model.js       # Modelo de datos y estado global
│   ├── config.js      # Configuraciones generales (API, timeout, etc.)
│   └── helpers.js     # Funciones reutilizables (fetch, formateo, etc.)
├── index.html         # Archivo base
├── style.css          # Estilos generales
├── package.json       # Configuración del proyecto
└── README.md          # Documentación
```

---

## 🛠 Instalación y Ejecución Local

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/forkify.git
cd forkify
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm start
```

4. Accede a la app en tu navegador:

```
http://localhost:1234/
```

> Asegúrate de tener instalado Node.js (v14+ recomendado)

---

## 🔗 API Utilizada

Esta aplicación consume datos de la API de [Forkify](https://forkify-api.herokuapp.com/), que permite acceder a miles de recetas de cocina de diversas fuentes.

Puedes explorar más en la [documentación oficial](https://forkify-api.herokuapp.com/).

---

## 📸 Vista Previa

![Vista Previa](https://github.com/user-attachments/assets/e8c665f5-d024-4f2e-a17c-f693c2d29167)

---

## 🧩 Mejoras Futuras

* Autenticación de usuarios y almacenamiento remoto de recetas
* Favoritos sincronizados con el backend
* Filtros por categoría, dificultad o tipo de dieta
* Soporte para varios idiomas
* Tests unitarios y de integración

---

## 📝 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más información.

---

## 👨‍💻 Autor

Desarrollado por [Diego Guerrero - Codeweb Studio](https://github.com/Diego-9612)

* 💼 LinkedIn: [linkedin.com](https://www.linkedin.com/in/diego-guerrero-software/)
* 📧 Email: [diegoguerrero@umariana.edu.co](mailto:diegoguerrero@umariana.edu.co)

---

> Este proyecto fue creado como parte de una iniciativa para mejorar habilidades en desarrollo frontend, arquitectura MVC y consumo de APIs en JavaScript puro. 🚀


