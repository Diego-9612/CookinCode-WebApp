# Buscador de Recetas 🍕

Forkify es una aplicación web desarrollada en  con javascript, html y css, que permite buscar recetas, guardarlas como favoritas y añadir nuevas recetas personalizadas. Este proyecto reúne múltiples funcionalidades avanzadas para ofrecer una experiencia de usuario fluida e interactiva.

## 📸 Vista Previa
![image](https://github.com/user-attachments/assets/e8c665f5-d024-4f2e-a17c-f693c2d29167)
---

## 🚀 Características
- 🔍 **Búsqueda de recetas** a través de una API externa.
- 📄 **Paginación** para navegar entre múltiples resultados.
- 📋 **Visualización de recetas** con tiempo de cocción, porciones e ingredientes detallados.
- ➖➕ **Actualización dinámica de ingredientes** según el número de porciones.
- ⭐ **Guardado de recetas favoritas** en el almacenamiento local.
- 📝 **Subida de recetas personalizadas**, visibles solo para el usuario que las crea.
- 📌 **Persistencia de favoritos y recetas** incluso después de cerrar la aplicación.

---

## 📂 Estructura del Proyecto
```
Forkify/
├── public/            # Archivos estáticos
├── src/
│   ├── components/    # Componentes reutilizables
│   ├── pages/         # Páginas principales de la aplicación
│   ├── hooks/         # Hooks personalizados
│   ├── store/         # Gestión de estado
│   ├── styles/        # Estilos con Tailwind CSS
│   ├── App.jsx        # Componente principal
│   ├── main.jsx       # Punto de entrada con Vite
│   └── api.js         # Comunicación con la API externa
├── .gitignore         # Archivos a ignorar en Git
├── index.html         # Archivo base de la aplicación
├── package.json       # Dependencias y configuración
└── README.md          # Documentación del proyecto
```

---

## 🛠 Instalación y Configuración
### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/forkify.git
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Iniciar el servidor de desarrollo
```bash
npm start
```

La aplicación estará disponible en `http://localhost:1234/`.

---

## 🔗 API de Recetas
Esta aplicación consume datos de la API de [Forkify](https://forkify-api.herokuapp.com/), permitiendo obtener información sobre miles de recetas.

Para más información sobre los endpoints disponibles, visita la [documentación oficial](https://forkify-api.herokuapp.com/).

---

## 📌 Tecnologías Utilizadas
- **JavaScript** ⚛️ - Para la interfaz de usuario
- **Node.js** ⚡ - Como entorno de desarrollo
- **HTML, CSS** 🎨 - Para los estilos
- **Redux Toolkit** 🗂 - Para la gestión del estado global
- **Local Storage** 🗄 - Para almacenar recetas favoritas
- **API Fetching** 🔗 - Para obtener datos dinámicamente

## 📜 Licencia
Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo `LICENSE`.

---

## 🎯 Autor
Desarrollado con ❤️ por [Diego Guerrero - Codeweb Studio](https://github.com/Diego-9612).

---

¡Esperamos que disfrutes explorando y mejorando tus habilidades! 🚀

