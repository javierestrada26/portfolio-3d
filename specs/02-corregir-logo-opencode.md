# SPEC 02 — Restaurar el logo de OpenCode en el teclado 3D

> **Status:** Implemented
> **Depends on:** None
> **Date:** 2026-11-18
> **Objective:** Restaurar el logo blanco de OpenCode en su tecla verde del teclado 3D corrigiendo las dimensiones y el color explícitos de su SVG.

## Why this spec exists

La configuración `SkillNames.OPENCODE` ya se aplica correctamente: la tecla usa el verde `#97DF7D` y `/assets/keyboard/logos/opencode.svg` responde con HTTP 200. El problema está en el asset: al no declarar `width` ni `height`, Three.js/WebGL rechaza su textura con `INVALID_VALUE: bad image data` y deja visible únicamente la tecla verde. Una prueba aislada confirmó que el SVG original produce el error WebGL 1281 y que el mismo SVG con dimensiones explícitas se carga sin errores.

## Scope

**In:**

- Modificar únicamente `public/assets/keyboard/logos/opencode.svg`.
- Declarar `width="512"` y `height="512"` en el elemento raíz del SVG.
- Sustituir `fill="currentColor"` por `fill="#ffffff"`.
- Conservar el `viewBox="0 0 24 24"`, el `fill-rule="evenodd"`, el título y el trazado actuales del logo.
- Conservar el tamaño actual del plano del logo (`0.52`) y el color verde `#97DF7D` de la tecla.

**Out of scope (for future specs):**

- Modificar `src/data/constants.ts`, cuya entrada de OpenCode ya es correcta.
- Cambiar el cargador de texturas de `@chibi3d/runtime` o añadir un fallback genérico.
- Normalizar otros SVG que ya se muestran correctamente.
- Cambiar el tamaño del logo, el color de la tecla, la disposición del teclado o cualquier otra skill.
- Recuperar la skill de Vue o alterar el orden actual de las teclas.

## Data model

This feature introduces no new data structures. Se reutiliza `SKILLS[SkillNames.OPENCODE]` y su ruta existente `keyboardIcon: "/assets/keyboard/logos/opencode.svg"`; solo cambia el contenido del asset.

## Implementation plan

1. En `public/assets/keyboard/logos/opencode.svg`, añadir al elemento raíz las dimensiones explícitas `width="512"` y `height="512"`, fijar `fill="#ffffff"` y conservar sin cambios el resto del SVG, de modo que el asset sea compatible con la carga directa de texturas de Three.js y mantenga la convención blanca de los demás logos.

## Acceptance criteria

- [x] El elemento raíz de `public/assets/keyboard/logos/opencode.svg` declara `width="512"`, `height="512"` y `fill="#ffffff"`. — *Verificado (2026-11-18): lectura del archivo y respuesta HTTP 200 de `/assets/keyboard/logos/opencode.svg` con el contenido corregido.*
- [x] El SVG conserva su `viewBox`, su regla de relleno y el mismo trazado de OpenCode. — *Verificado: el cambio solo afectó al tag raíz; `viewBox="0 0 24 24"`, `fill-rule="evenodd"`, `<title>` y `<path>` intactos.*
- [x] La tecla de OpenCode muestra el logo blanco sobre el fondo verde `#97DF7D`, sin aparecer como una tecla vacía. — *Verificado en `http://localhost:3000` (Playwright, 1440×900, caché deshabilitada): zoom de la tecla verde clara con el logo blanco cuadrado visible. Captura: `%TEMP%\opencode\opencode-key-crop.png`.*
- [x] Al cargar la escena, la consola no registra `WebGL: INVALID_VALUE: texSubImage2D: bad image data` para la textura de OpenCode. — *Verificado con hooks sobre `texImage2D`/`texSubImage2D`: cero subidas fallidas en carga sin caché. El único caso restante ocurría con el SVG viejo servido desde la caché HTTP (dims 150×150), cubierto por el riesgo de caché de este spec.*
- [x] El logo conserva el tamaño visual definido por el plano actual de `0.52`, sin cambios en la posición ni en la disposición de la tecla. — *Verificado: ningún archivo de código del teclado fue modificado; solo cambió el asset SVG.*
- [x] Los demás logos, colores de teclas y datos de `SKILLS` permanecen sin cambios. — *Verificado: `git status` muestra como único cambio de este spec `public/assets/keyboard/logos/opencode.svg`; el resto de logos se ven correctos en la misma captura.*

## Decisions

- **Yes:** añadir dimensiones explícitas de 512 × 512 al SVG. La prueba aislada eliminó el error WebGL y todas las demás texturas SVG locales siguen esta convención.
- **Yes:** usar blanco fijo (`#ffffff`). Mantiene la consistencia con el resto de logos y evita la rasterización negra de `currentColor`.
- **No:** modificar el cargador de Three.js o `@chibi3d/runtime`. El fallo pertenece al asset y no justifica un cambio global.
- **No:** cambiar `src/data/constants.ts`. La tecla verde y la petición HTTP 200 demuestran que la configuración y la ruta ya se resuelven correctamente.
- **No:** cambiar el tamaño del logo ni el verde de la tecla. El usuario decidió conservar el diseño actual.
- **No:** normalizar los demás SVG. Ya funcionan y quedan fuera de esta corrección mínima.

## Risks

| Risk | Mitigation |
| --- | --- |
| La caché de `/assets/*` puede seguir mostrando el SVG anterior después del despliegue | Verificar primero con caché deshabilitada y considerar el tiempo de caché configurado antes de interpretar el resultado visual. |

## What is **not** in this spec

- Cambios en el runtime o en el cargador de texturas.
- Cambios en `SKILLS` o en otras teclas.
- Cambios de tamaño, posición o color de la tecla.
- Cambios en el trazado del logo de OpenCode.

Each one of those, if it lands, goes in its own spec.
