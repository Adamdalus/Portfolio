# Portfolio personal

Portfolio web personal de Adam Al-Sikhan Benito, desarrollado con React,
TypeScript y Vite. Presenta perfil, proyectos, experiencia profesional,
formación, idiomas, certificaciones y datos de contacto.

## Funcionalidades

- Diseño responsive con navegación entre secciones.
- Tarjetas de proyectos con vista ampliada de imagen.
- Líneas de tiempo interactivas para experiencia y formación, con progreso al
  desplazarse por la página.
- Formulario de contacto con campos para correo, asunto y mensaje. Al enviarlo,
  prepara un correo en la aplicación de correo configurada en el dispositivo;
  el visitante debe confirmar el envío.

## Requisitos

- Node.js
- npm

## Desarrollo

Instala las dependencias y arranca el servidor de desarrollo:

```bash
npm install
npm run dev
```

## Comandos

```bash
npm run dev      # Servidor local de desarrollo
npm run build    # Comprobación de TypeScript y compilación de producción
npm run lint     # Análisis estático con ESLint
npm run preview  # Vista previa de la compilación de producción
```

## Estructura del proyecto

```text
src/
├── assets/       # Imágenes y recursos estáticos
├── components/   # Secciones y componentes reutilizables
├── data/         # Contenido de proyectos, experiencia y perfil
├── hooks/        # Hooks compartidos
├── types/        # Tipos de TypeScript
├── App.tsx       # Composición de la página
└── index.css     # Estilos globales y responsive
```

Para añadir contenido, actualiza los datos tipados de `src/data/` y reutiliza
los componentes correspondientes.
