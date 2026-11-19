# SPEC 03 — Restaurar los logos de Nest y Kubernetes en el teclado 3D

> **Status:** Implementado
> **Depends on:** None
> **Date:** 2026-11-18
> **Objective:** Restaurar los logos blancos de Nest y Kubernetes en sus teclas roja y azul del teclado 3D corrigiendo las dimensiones y el acabado monocromático de sus SVG.

## Why this spec exists

Las entradas `SkillNames.NEST` y `SkillNames.KUBERNETES` ya apuntan a archivos locales existentes y sus colores de tecla sí se aplican. Sin embargo, los elementos raíz de `nestjs.svg` y `kubernetes.svg` no declaran `width` ni `height`, el mismo defecto de rasterización corregido en SPEC 02 para OpenCode. Nest tampoco declara un color de relleno explícito y Kubernetes usa un exterior azul con detalles blancos, por lo que ambos assets necesitan normalización para mostrar la convención de logos blancos elegida para el teclado.

## Scope

**In:**

- Modificar únicamente `public/assets/keyboard/logos/nestjs.svg` y `public/assets/keyboard/logos/kubernetes.svg`.
- Declarar `width="512"` y `height="512"` en el elemento raíz de ambos SVG.
- Conservar los `viewBox` actuales: `0 0 264.6 255.6` para Nest y `0 0 722.8 702` para Kubernetes.
- Aplicar `fill="#ffffff"` al logo de Nest y conservar su geometría actual.
- Convertir Kubernetes a una silueta blanca con la rueda interior definida mediante espacios transparentes, reutilizando sus trazados actuales.
- Mantener las rutas `/assets/keyboard/logos/nestjs.svg` y `/assets/keyboard/logos/kubernetes.svg`.
- Conservar el plano de logo `0.52`, los colores de tecla `#FF2424` y `#0080FF`, y la disposición actual.

**Out of scope (for future specs):**

- Modificar `src/data/constants.ts`, cuyas rutas y colores de tecla ya son correctos.
- Cambiar el cargador de texturas de `@chibi3d/runtime` o añadir un fallback genérico.
- Normalizar otros SVG que ya se muestran correctamente.
- Cambiar el tamaño o la posición de los logos, los colores de las teclas o el orden de las skills.
- Renombrar los assets, añadir parámetros de versión a sus URLs o modificar las cabeceras de caché.

## Data model

This feature introduces no new data structures. Se reutilizan `SKILLS[SkillNames.NEST]` y `SKILLS[SkillNames.KUBERNETES]` con sus rutas `keyboardIcon` existentes; solo cambia el contenido de los dos assets.

## Implementation plan

1. En `public/assets/keyboard/logos/nestjs.svg`, añadir al elemento raíz `width="512"`, `height="512"` y `fill="#ffffff"`, conservando el `viewBox` y el trazado actuales, de modo que Three.js pueda rasterizar la textura y el logo se renderice en blanco sobre la tecla roja.
2. En `public/assets/keyboard/logos/kubernetes.svg`, añadir las mismas dimensiones explícitas y convertir los trazados actuales en una composición monocromática `fill="#ffffff"` con `fill-rule="evenodd"`; eliminar el relleno azul y los trazos blancos independientes para que la rueda interior quede recortada por transparencia y no se fusione con el exterior blanco, conservando el `viewBox` y la geometría del logo.

## Acceptance criteria

- [x] El elemento raíz de `public/assets/keyboard/logos/nestjs.svg` declara `width="512"`, `height="512"` y `fill="#ffffff"`, y conserva `viewBox="0 0 264.6 255.6"` y su geometría original.
- [x] El elemento raíz de `public/assets/keyboard/logos/kubernetes.svg` declara `width="512"` y `height="512"`, conserva `viewBox="0 0 722.8 702"` y ya no contiene el relleno azul `#326ce5`.
- [x] En el hero a 1440 × 900 px y con caché deshabilitada, la tecla roja de Nest muestra el logo blanco reconocible en lugar de aparecer vacía o negra.
- [x] En el mismo viewport, la tecla azul de Kubernetes muestra una silueta blanca reconocible cuya rueda interior se distingue mediante espacios transparentes, sin convertirse en un polígono macizo.
- [x] Al cargar la escena sin caché, la consola no registra `WebGL: INVALID_VALUE: texSubImage2D: bad image data` para las texturas de Nest o Kubernetes.
- [x] Las dos rutas locales responden con HTTP 200 y `src/data/constants.ts` permanece sin cambios.
- [x] El plano de logo `0.52`, los colores de tecla `#FF2424` y `#0080FF`, la disposición del teclado y los demás logos permanecen sin cambios.

## Decisions

- **Yes:** añadir dimensiones explícitas de 512 × 512 a ambos SVG. Es la convención compatible con el cargador actual y la corrección ya validada para OpenCode en SPEC 02.
- **Yes:** usar blanco fijo (`#ffffff`) para ambos logos. El usuario eligió mantener la convención visual del resto del teclado y el contraste sobre las teclas roja y azul.
- **Yes:** representar los detalles interiores de Kubernetes mediante espacio negativo. Recolorear de blanco tanto el exterior como la rueda haría desaparecer los detalles.
- **Yes:** reutilizar los trazados actuales de Kubernetes con `fill-rule="evenodd"`. Evita sustituir el diseño por otro asset y mantiene la corrección limitada al archivo existente.
- **Yes:** conservar las rutas actuales. No se modificará `constants.ts`; la verificación se hará sin caché y se tendrá en cuenta la caducidad configurada para `/assets/*`.
- **No:** modificar el cargador de Three.js o `@chibi3d/runtime`. El usuario eligió una corrección mínima de los dos assets.
- **No:** conservar los colores originales de marca. El usuario eligió explícitamente ambos logos en blanco.
- **No:** cambiar el tamaño de los planos, los colores de las teclas ni la disposición. El usuario confirmó conservar el diseño actual.
- **No:** renombrar los archivos para invalidar caché. Las URLs existentes se mantienen por decisión del usuario.

## Risks

| Risk | Mitigation |
| --- | --- |
| La caché de `/assets/*` puede seguir mostrando los SVG anteriores durante una hora | Verificar primero con caché deshabilitada y esperar la revalidación antes de interpretar un resultado en producción. |
| El espacio negativo de Kubernetes puede perder legibilidad al rasterizarse en un plano de `0.52` | Comprobar visualmente la rueda interior en el viewport de aceptación y conservar los trazados originales para evitar cambiar su geometría. |

## What is **not** in this spec

- Cambios en el runtime o en el cargador de texturas.
- Cambios en `SKILLS`, `constants.ts` o en otras teclas.
- Cambios de tamaño, posición, disposición o color de las teclas.
- Nuevas URLs, nombres de archivo o reglas de caché.
- Sustitución de los logos por diseños distintos de los trazados actuales.

Each one of those, if it lands, goes in its own spec.
