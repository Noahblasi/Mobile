# Publicación Mobile — TP5 Diseño Decolonial

Esta carpeta contiene la versión optimizada y lista para publicar del **Prototipo Mobile (390 × 844 px)** para el repositorio de GitHub:
`https://github.com/noahblasi/Mobile`  
(Publicado en: `https://noahblasi.github.io/Mobile/`)

---

## ¿Cómo funciona?

1. **Apertura automática sin parámetros**:
   - Al ingresar a `https://noahblasi.github.io/Mobile/` (sin necesidad de escribir `?version=mobile` ni tocar ningún botón), el sitio detecta automáticamente el contexto de publicación Mobile gracias a:
     - La etiqueta `<meta name="default-prototype" content="mobile">` en el `<head>`.
     - El reconocimiento de la ruta `/Mobile/`.

2. **Comportamiento según el dispositivo de visualización**:
   - **En computadoras de escritorio o laptops (> 768 px)**:  
     Se activa automáticamente el **Visualizador de Dispositivo Mobile (390 × 844 px)**, presentando el teléfono centrado en pantalla, con marco de iPhone 14/15 Pro, dynamic island y escala automática proporcional para que sea 100% visible sin generar scroll en la ventana externa.  
     El scroll se produce fluidamente en el interior de la pantalla táctil mediante la rueda del mouse o arrastre.
   - **En teléfonos celulares reales (≤ 768 px)**:  
     El prototipo se despliega a pantalla completa nativa sin marco de dispositivo externo.

3. **Características Mobile activas**:
   - Header mobile compacto con menú hamburguesa y buscador en tiempo real.
   - Escalonamiento editorial de las 3 familias del Home (01 Conocer, 02 Habitar, 03 Desobedecer) con aire lateral, sin solapamiento destructivo y con la indicación sutil `→ VER RECORRIDO`.
   - Navegación horizontal de conceptos con flechas `←` y `→`, swipe táctil y paginación por puntos de color.
   - Sistema de Drawers (fichas laterales / modales inferiores) para la consulta de conceptos y autores.
   - Grilla 2×2 en la navegación rápida del hero de *Epistemologías del Sur*.
   - Carrusel interactivo en la sección de constelaciones conceptuales.
   - Fuentes y referencias con jerarquía académica sutil y limpia.

---

## Archivos para subir a GitHub (`repo: Mobile`)

Copiar todos los archivos de esta carpeta a la raíz del repositorio `Mobile`:
- `index.html`
- `css/styles.css`
- `js/app.js`
- `js/data.js`
