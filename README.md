# Focus Timer

Una aplicación de temporizador minimalista y elegante construida con React y Vite.

## Características

- ⏱️ **Temporizador personalizable**: Establece horas, minutos y segundos
- ▶️ **Controles intuitivos**: Play, Pause, Reset y Restart
- 🎨 **Fondo animado**: Gradientes y partículas en movimiento constante
- 🌙 **Diseño oscuro**: Perfecto para sesiones de enfoque
- ✨ **Animaciones**: El temporizador pulsa y brilla al llegar a cero
- 📱 **Responsive**: Se adapta a diferentes tamaños de pantalla

## Funcionalidades

### Temporizador
- Establece el tiempo inicial usando los campos de horas, minutos y segundos
- Inicia el conteo regresivo con el botón Play
- Pausa y retoma en cualquier momento
- Reinicia al tiempo original o cambia completamente el valor

### Animaciones
- Fondo con gradientes que se mueven suavemente
- Partículas flotantes que crean profundidad
- Animación especial cuando el temporizador llega a cero (00:00:00)

### Controles
- **Play**: Inicia el temporizador
- **Pause**: Pausa el conteo
- **Reset**: Vuelve al tiempo establecido
- **Restart**: Reinicia inmediatamente desde el tiempo establecido

## Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
1. Clona o descarga el proyecto
2. Instala las dependencias:
   ```bash
   npm install
   ```

### Desarrollo
Para ejecutar en modo desarrollo:
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173/`

### Construcción
Para crear una versión de producción:
```bash
npm run build
```

## Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de construcción rápida
- **CSS3** - Animaciones y estilos modernos

## Estructura del Proyecto

```
src/
├── Timer.tsx       # Componente principal del temporizador
├── Timer.css       # Estilos específicos del temporizador
├── App.tsx         # Componente raíz
├── App.css         # Estilos de la aplicación
├── index.css       # Estilos globales y fondo animado
└── main.tsx        # Punto de entrada
```

## Personalización

### Colores
Los colores principales se pueden modificar en `src/index.css` y `src/Timer.css`:
- Púrpura: `rgba(139, 69, 196, X)`
- Azul: `rgba(74, 144, 226, X)`
- Rojo de finalización: `rgba(255, 107, 107, X)`

### Animaciones
Las animaciones del fondo se pueden ajustar modificando:
- Duración: `animation-duration` en los keyframes
- Intensidad: valores de opacidad en los gradientes
- Movimiento: transformaciones en los keyframes

## Licencia

Este proyecto está bajo la Licencia MIT.
