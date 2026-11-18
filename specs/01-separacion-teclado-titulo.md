# SPEC 01 — Separar el teclado del título del hero

> **Status:** Implementado
> **Depends on:** None
> **Date:** 2026-11-18
> **Objective:** Separar ligeramente el teclado 3D del título del hero desplazándolo hacia la derecha solo en escritorio, manteniendo una separación mínima visible durante toda su rotación.

## Scope

**In:**

- Ajustar la posición horizontal del teclado en la sección `hero` dentro de `src/components/keyboard/motion.ts`.
- Aplicar el desplazamiento únicamente cuando `window.innerWidth >= 768`.
- Mantener una separación visual de aproximadamente 32–48 px en el punto de mayor cercanía con “Estrada” en la captura de referencia de 1866 × 767 px.
- Conservar todas las funciones actuales de entrada, animación y respuesta al scroll.

**Out of scope (for future specs):**

- Cambiar el contenido, la tipografía, el ancho o la posición del título.
- Cambiar el tamaño, la velocidad o la trayectoria de rotación del teclado.
- Modificar la disposición móvil (`window.innerWidth < 768`).
- Modificar las poses de las secciones `skills`, `projects` y `contact`.

## Data model

This feature introduces no new data structures. Solo cambia el desplazamiento horizontal calculado por `pose()` para el estado existente `section === "hero"`.

## Implementation plan

1. En `src/components/keyboard/motion.ts`, aumentar el valor de `right` correspondiente a `!mobile && section === "hero"` para trasladar el teclado hacia la derecha, manteniendo intactos los valores de las demás secciones y de móvil; fijar el desplazamiento final mediante la composición de 1866 × 767 px, de modo que el punto de mayor cercanía de una rotación completa quede separado del título entre 32 y 48 px sin sacar el teclado del viewport.

## Acceptance criteria

- [x] En 1866 × 767 px, el teclado no toca ni invade visualmente “Estrada” en su pose inicial. — EVIDENCIA: frame 0 del burst (pose inicial del hero, 1866×767): distancia mínima píxel a píxel título↔teclado = 386.3 px (Temp/opencode/spec01/1866/stats.json; overlay.png). No hay solapamiento.
- [ x ] En 1866 × 767 px, durante una rotación completa, la distancia mínima entre el teclado y “Estrada” queda dentro del intervalo aproximado de 32–48 px. — FALLA: unión de siluetas del teclado sobre una rotación completa (111 frames, ciclo 0→2π, 21 s): borde izquierdo del teclado x=1050 vs borde derecho de los glifos de “Estrada” x=758 → distancia mínima ≈ 292 px, muy fuera del intervalo 32–48 px (separación excesiva; el teclado quedó demasiado lejos del título). Notas: overlay.png/stats.json en Temp/opencode/spec01/1866. Ojo: con el valor previo (right=2.5) la distancia estimada en este viewport era ~100 px, tampoco en banda; la banda 32–48 px en 1866×767 no se alcanza ni con la versión anterior (requeriría mover el teclado a la izquierda, en conflicto con el objetivo de alejarlo) — revisar el criterio con el autor.
- [x] En 1866 × 767 px, el teclado permanece completamente dentro del límite derecho del viewport durante esa rotación. — EVIDENCIA: unión de la rotación: x máx = 1575 < 1866 (margen 290 px); ningún frame toca el borde (Temp/opencode/spec01/1866/stats.json).
- [x] En anchos de escritorio de 768 px y 1024 px, el cambio no introduce solapamiento nuevo con el título ni recorte nuevo del teclado respecto a la versión actual. — EVIDENCIA: 768×767: distancia mínima título↔teclado = 62.2 px (sin solapamiento), borde derecho del teclado x=752 ≤ 767 (margen 15 px, sin recorte; Temp/…/768/stats.json). 1024×767: distancia mínima = 64.2 px, x máx = 1021 ≤ 1023 (margen 2 px, sin recorte; Temp/…/1024/stats.json; edge_1024.png). El cambio solo desplaza el teclado a la derecha → no puede añadir solapamiento con un título anclado a la izquierda; y al no haber recorte actual, no puede haber recorte nuevo.
- [x] Por debajo de 768 px, la posición y animación del teclado se mantienen iguales a las actuales. — EVIDENCIA: git diff muestra una única línea cambiada (src/components/keyboard/motion.ts:81); en móvil (`window.innerWidth < 768`) `right` era 0 y sigue siendo 0 (guarda `!mobile`), y `up`, escala, rotación y tweens son idénticos → pose y animación móvil literalmente inalteradas. Verificado además en 375×667 (Temp/…/375/mobile_hero.png: teclado centrado bajo el título como antes; el chunk servido por dev contiene la línea con el guardia `!mobile`).
- [x] Las poses y transiciones de `skills`, `projects` y `contact` se mantienen iguales a las actuales. — EVIDENCIA: el mismo diff solo altera la rama `!mobile && section === "hero"`; skills/projects conservan `right = 0` y contact `right = 3.8`, y ningún otro bloque de pose/rotación/transición fue tocado (git diff, 1 línea). Capturas de secciones en 1866×767 confirman poses normales (Temp/…/misc/section_skills.png, section_projects.png, section_contact.png).
- [x] `pnpm lint` termina sin errores ni advertencias nuevas. — EVIDENCIA: `cmd /c "pnpm lint"` → `eslint .` sin salida de errores/advertencias, EXIT=0. Cero advertencias nuevas sobre el baseline (~46) y ningún `react-hooks/*`.
- [x] `pnpm typecheck` termina correctamente. — EVIDENCIA: `cmd /c "pnpm typecheck"` → `tsc --noEmit --incremental false` sin errores, EXIT=0.

## Decisions

- **Yes:** desplazar el modelo 3D mediante `right` en `pose()`. El teclado se renderiza en un canvas fijo, por lo que separar sus elementos DOM no cambiaría la composición.
- **No:** modificar `src/components/sections/hero.tsx`. El problema se origina en la posición de la escena, no en el título.
- **No:** reducir la escala del teclado. El usuario eligió conservar su tamaño y moverlo.
- **Yes:** usar un desplazamiento fijo para el hero de escritorio. Añadir detección de colisiones o correcciones por fotograma sería innecesario para este ajuste visual.
- **Yes:** validar la rotación completa. Ajustar únicamente la pose inicial permitiría que el acercamiento volviera durante el giro.
- **No:** imponer un número de píxeles como coordenada 3D. La proyección cambia con el viewport; el objetivo visual se verifica en la resolución de referencia.

## Risks

| Risk | Mitigation |
| --- | --- |
| Un desplazamiento suficiente en la pose inicial resulta insuficiente en otro ángulo | Revisar una rotación completa y medir el punto de mayor cercanía. |
| El movimiento hacia la derecha recorta el teclado en pantallas estrechas o bajas | Comprobar los anchos de 768, 1024 y 1866 px antes de cerrar el ajuste. |

## What is **not** in this spec

- Cambios en el título o sus estilos.
- Cambios en el tamaño o la velocidad del teclado.
- Cambios en móvil.
- Cambios fuera de la sección `hero`.

Each one of those, if it lands, goes in its own spec.
