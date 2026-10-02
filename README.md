# DISEÑO DECOLONIAL — ATLAS Y GLOSARIO TIPOGRÁFICO
### TP5 · Tipografía e Interfaces Digitales | Tipografía 2 (Cátedra Cosgaya — FADU UBA)
**Comisión:** PATO + JUANCHO  
**Concepto Asignado:** 22 — Epistemologías del Sur  
**Resolución:** Desktop 1440 × 1024 px (Adaptable a Mobile 390 × 844 px)

---

## 📌 ¿Cómo abrir y visualizar la web?
Podés abrir el archivo `index.html` directamente con cualquier navegador web (Chrome, Edge, Firefox, Safari) haciendo doble click sobre él, o sirviéndolo localmente:

Ruta absoluta:
```
C:\Users\Admin\.gemini\antigravity\scratch\tp5-diseno-decolonial\index.html
```

---

## 🧭 Arquitectura de la Información y Navegación

El sitio se estructura bajo la lógica de **exploración editorial situada**:

```
HOME (Atlas Conceptual)
  ↓
RUTAS (01 Conocer · 02 Habitar · 03 Desobedecer · 04 Relacionar)
  ↓
CONCEPTOS (41 entradas completas y 8 puentes compartidos)
  ↓
DETALLE EDITORIAL (22 · Epistemologías del Sur)
  ↓
RED DE RELACIONES (Diseño situado · Pluriverso · Saberes situados)
```

### 1. Las Cuatro Rutas Principales
- **01 — CONOCER:** Cuestionar las categorías heredadas de la modernidad occidental y validar otras formas de producción de conocimiento.
- **02 — HABITAR:** Vínculos situados con el territorio, el cuerpo-territorio y el cuidado colectivo de la vida (Buen vivir, Comunalidad, Reciprocidad).
- **03 — DESOBEDECER:** Prácticas emancipatorias, desobediencia epistémica y tecnológica, y resistencias frente a la colonialidad.
- **04 — RELACIONAR:** Articulación plural de saberes, justicia cognitiva, interculturalidad y diseño situado hacia el pluriverso.

### 2. Concepto Asignado Destacado: 22 — Epistemologías del Sur
Dispone de una sección editorial dedicada con 4 bloques conceptuales:
1. `01 / ¿QUÉ SON?`: Definición sustantiva y cuestionamiento a la neutralidad epistémica.
2. `02 / MÁS ALLÁ DEL MAPA`: El Sur como condición política y social de exclusión/resistencia, no meramente geográfica.
3. `03 / EN DISEÑO`: Del conocimiento a la práctica proyectual (Ampliar, Valorar, Reconocer).
4. `04 / RELACIONADOS`: Diagrama relacional interactivo conectado con *Diseño situado*, *Saber situado* y *Pluriverso*.

### 3. Ocho Conceptos Compartidos (Puentes)
*Archivo, Comunidad, Interfaz, Memoria, Representación, Sistema, Tecnología, Traducción.*  
Diseñados como un bloque de cintas tipográficas que conectan los diferentes glosarios de la cátedra.

---

## 🎨 Sistema Visual y Resoluciones de Devolución de Clase

### A. Sistema de Color Relacional
En respuesta a la devolución de cátedra (*"los colores tienen que funcionar como un sistema con relaciones internas"*):
- **Base:** Fondo crema cálido `#F6F1E3` + negro tipográfico profundo `#111111`.
- **Familia ROJOS (Habitar / Urgencia):**  
  `--red-primary: #E5241C` | `--red-dark: #B51812` | `--red-light: #FF4D45` | `--red-surface: #FBECEB`
- **Familia AZULES (Desobedecer / Resistencia):**  
  `--blue-primary: #1A56DB` | `--blue-dark: #0F3BA0` | `--blue-light: #4D7FF3` | `--blue-surface: #ECF2FE`
- **Familia AMARILLOS / OCRES (Conocer / Relacionar / Epistemologías):**  
  `--yellow-primary: #E9A800` | `--yellow-dark: #BA8400` | `--yellow-light: #FFCA36` | `--yellow-surface: #FDF7E7`

### B. Botón vs. Decoración
En respuesta a la devolución de cátedra (*"tiene que notarse claramente qué se puede tocar y qué no"*):
- **Elementos Interactivos:** Siempre poseen texto de acción explícito (`EXPLORAR →`, `ABRIR CONCEPTO ↗`, `VOLVER ←`), indicador direccional, `cursor: pointer`, cambio de fondo y micro-desplazamiento en hover.
- **Elementos Decorativos / Gráficos:** Los planos de color inclinados y citas actúan como carteles tipográficos, sin flechas ni affordances de botón.

### C. Tipografía y Retícula
- Familia tipográfica: **Space Grotesk** (Google Fonts).
- Jerarquía estricta basada en contrastes de peso, cuerpo y espaciado.
- Retícula modular fluida de 12 columnas en escritorio (1440px) y reordenamiento vertical limpio en móvil (390px).

---

## 📁 Estructura del Código
```
tp5-diseno-decolonial/
├── index.html          # Estructura semántica completa (Home + Detalle + Drawer)
├── css/
│   └── styles.css      # Sistema de diseño, variables cromáticas y responsive
├── js/
│   ├── data.js         # Base de datos con los 41 conceptos y metadatos
│   └── app.js          # Control de navegación SPA, buscador y drawer
├── test_screens/       # Capturas de verificación del sitio renderizado
└── README.md           # Documentación del proyecto
```
