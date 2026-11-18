# Errores encontrados

Lista de errores detectados al levantar el proyecto. Todavía no se corrige nada.
Se marcan con `[ ]` para ir tachándolos (`[x]`) uno por uno.

## Estado de corrección

- **Corregidos:** A1, A2, A3, A4, A5, B1, C1, C2, C3, C4, C5, C6.
- **Pendientes:** D (tests, no verificado).
- **A6 aceptado como warning upstream:** `@react-three/fiber` (9.8.1 y 9.8.2) crea `new THREE.Clock()` en su store. Actualizar fiber no lo elimina, y `three-stdlib` ya está en su última versión. No es un error de nuestro código; se deja sin cambios.
- **Lint:** 46 → 0 warnings. Typecheck y build OK.
- **Excepciones documentadas (disable con motivo):**
  - `use-chat-scroll.ts`: scroll del chat sincronizado con el DOM y con mensajes entrantes.
  - `remote-cursors.tsx`: texto temporal al mover el cursor y al llegar un mensaje.
  - `chat-message-list.tsx`: reintento de salto a un mensaje mientras se carga historial.
- **Decisión:** los iconos de habilidades en `experience.tsx` siguen con `<img>` (disable con motivo). Con `next/image` apareció un warning de hidratación que no pude explicar.

## Resumen de chequeos

| Chequeo | Resultado |
|---|---|
| `pnpm install` | OK |
| `pnpm lint` | 0 errores, 46 warnings |
| `pnpm typecheck` | OK |
| `pnpm build` | Compila, con 1 warning de configuración |
| `pnpm dev` + navegador | Carga, pero con errores de hidratación y errores en consola |

---

## A. Errores de ejecución (navegador / dev)

### A1. Error de hidratación en `<head>` (todas las rutas)
- [ ] **Severidad:** alta
- **Dónde se ve:** `/`, `/blogs`, `/blogs/achieving-milestone`, `/resume` y la página 404.
- **Síntoma en consola:**
  - `In HTML, whitespace text nodes cannot be a child of <head>`
  - `Hydration failed because the server rendered text didn't match the client`
  - El texto que no coincide es el CSS de Next (`__nextjs-Geist`) o el título, dentro del `<head>`.
- **Posible origen:** `src/app/layout.tsx` líneas 77-85, bloque `<head>` con espacios/saltos de línea y un `<Script>` condicional. Hay que confirmar si el problema viene de ahí o de Next en dev.
- **Efecto:** React vuelve a renderizar todo el árbol en el cliente, lo que cuesta rendimiento.

### A2. "Encountered a script tag while rendering React component"
- [ ] **Severidad:** media
- **Dónde:** todas las rutas, al cargar.
- **Síntoma:** un `<script>` dentro de un componente React no se ejecuta en el cliente.
- **Posible origen:** `src/app/layout.tsx` (`<Script>` de Umami y `GoogleAnalytics`). Con `UMAMI_SITE_ID` vacío en `.env.local` el `<Script>` de Umami no debería renderizarse, así que hay que revisar qué `<script>` lo dispara.

### A3. `NotFoundError: Failed to execute 'removeChild' on 'Node'`
- [ ] **Severidad:** media
- **Dónde:** todas las rutas, al desmontar/montar la página.
- **Síntoma:** `The node to be removed is not a child of this node.` Aparece en un chunk de `node_modules`, línea 5955.
- **Posible origen:** un componente que quita nodos del DOM a mano (Three.js, GSAP, `Particles.tsx`, teclado 3D o el preloader). Hay que localizarlo.

### A4. Warning de posición del contenedor en el scroll
- [ ] **Severidad:** baja
- **Dónde:** `/` (home).
- **Síntoma:** `Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.`
- **Posible origen:** un contenedor con scroll sin `position` (probablemente en `src/components/sections/` o en la librería de scroll). Hay que identificarlo.

### A5. Warning de `next/image` con `fill` y padre `static`
- [ ] **Severidad:** baja
- **Dónde:** página 404.
- **Síntoma:** `Image with src "/assets/404/confused-travolta.gif" has "fill" and parent element with invalid "position". Provided "static" should be one of absolute,fixed,relative.`
- **Origen revisado:** `src/components/not-found-meme.tsx` línea 46 tiene `relative`, así que el padre con `static` debe estar en otro wrapper de la página 404. Hay que buscarlo.

### A6. Warning de Three.js deprecado
- [ ] **Severidad:** baja
- **Estado:** aceptado. Ver "Estado de corrección".
- **Dónde:** home, al cargar el teclado 3D.
- **Síntoma:** `THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.`
- **Origen:** `@react-three/fiber` (`store.ts`, `clock: new THREE.Clock()`), no nuestro código. Se resolverá cuando fiber migre a `THREE.Timer`.

---

## B. Build y configuración

### B1. Warning de Cache-Control en `/_next/static/*`
- [ ] **Severidad:** media
- **Síntoma:** `Custom Cache-Control headers detected for the following routes: /_next/static/(.*). Setting a custom Cache-Control header can break Next.js development behavior.`
- **Origen:** `next.config.mjs` líneas 24-29. Next ya sirve estos archivos con caché inmutable; el header personalizado puede romper el dev.

---

## C. Lint (`pnpm lint`): 0 errores, 46 warnings

Son warnings de la línea base del proyecto (según `AGENTS.md`), pero cada uno es un posible bug o una mala práctica. Se agrupan por archivo.

### C1. Accesibilidad (`jsx-a11y` / `@next/next`)
- [ ] `src/components/header/nav/index.tsx:47`: `<img>` sin `alt`. **Es un problema de accesibilidad real, no solo de estilo.**
- [ ] `src/components/nyan-cat.tsx:94`: `<img>` en vez de `next/image`.
- [ ] `src/components/realtime/components/chat-message-list.tsx:222`: `<img>`.
- [ ] `src/components/realtime/components/edit-profile-modal.tsx:87`, `:135`: `<img>`.
- [ ] `src/components/realtime/components/quoted-message.tsx:26`: `<img>`.
- [ ] `src/components/realtime/components/user-list.tsx:104`: `<img>`.
- [ ] `src/components/realtime/online-users.tsx:268`: `<img>`.
- [ ] `src/components/realtime/remote-cursors.tsx:168`, `:319`: `<img>`.
- [ ] `src/components/sections/experience.tsx:123`: `<img>`.

### C2. Hooks: dependencias faltantes (`react-hooks/exhaustive-deps`)
- [ ] `src/components/Particles.tsx:80`, `:84`, `:88`: faltan `animate`, `initCanvas`, `onMouseMove`.
- [ ] `src/components/nyan-cat.tsx:80`: falta `randY`.
- [ ] `src/components/radial-menu/index.tsx:146`: falta `playConfettiSound`.
- [ ] `src/components/radial-menu/index.tsx:245`: falta `socket`.
- [ ] `src/components/ui/ElasticCursor.tsx:156`, `:246`, `:277`, `:355`: faltan `set`, `active`, `jelly`, `pointer`, `pos`, `vel`.
- [ ] `src/components/ui/floating-dock.tsx:115`: `timer.current` usado en el cleanup.

### C3. Funciones usadas antes de declararse (`react-hooks/immutability`)
- [ ] `src/components/Particles.tsx:59`, `:60`, `:83`: `initCanvas`, `animate` y `onMouseMove` se llaman antes de declararse. Conviene refactorizar a `useCallback` o mover la declaración.

### C4. `setState` síncrono dentro de `useEffect` (`react-hooks/set-state-in-effect`)
- [ ] `src/components/header/nav/body/body.tsx:34`
- [ ] `src/components/preloader/index.tsx:65`
- [ ] `src/components/preloader/loader.tsx:27`
- [ ] `src/components/radial-menu/right-click-hint.tsx:29`
- [ ] `src/components/realtime/components/admin-password-dialog.tsx:21`
- [ ] `src/components/realtime/components/chat-message-list.tsx:474`
- [ ] `src/components/realtime/components/edit-profile-modal.tsx:45`
- [ ] `src/components/realtime/hooks/use-chat-scroll.ts:83`, `:145`
- [ ] `src/components/realtime/hooks/use-connection-status.ts:11`
- [ ] `src/components/realtime/remote-cursors.tsx:215`, `:234`
- [ ] `src/components/scrolling-preview.tsx:66`

### C5. Refs leídos o modificados durante el render (`react-hooks/refs`, `react-hooks/immutability`)
- [ ] `src/components/ui/ElasticCursor.tsx:34`: se lee `ref.current` durante el render.
- [ ] `src/components/ui/ElasticCursor.tsx:144`, `:187`, `:207`: se modifican valores devueltos por un hook (`set`, `active`, `jelly`). Riesgo de comportamiento impredecible.
- [ ] `src/components/ui/shadcn-io/github-stars-button/index.tsx:93`, `:94`: `motionNumberRef.current` se lee en el render.
- [ ] `src/components/ui/shadcn-io/sliding-number/index.tsx:124`: `prevNumberRef.current` se lee en el render.

### C6. React Compiler omitido
- [ ] `src/components/radial-menu/index.tsx:207`: el compilador no puede conservar la memoización manual de `handleMouseUp`. La dependencia inferida es `socket`, pero el código declara `[triggerConfetti, stopChargeTone]`. Revisar las dependencias de ese `useCallback`.

---

## D. Otros puntos a revisar

- [ ] **Tests no ejecutables.** Según `AGENTS.md`, los archivos `*.test.ts` de `src/components/game/` y `src/components/keyboard/` usan `node:test`, pero no hay script de test y `node --test` falla con `ERR_MODULE_NOT_FOUND` (imports sin extensión, sin `tsx`). No lo verifiqué en esta sesión.
- [ ] **Archivos sin revisar en git:** `.playwright-mcp/` aparece como no rastreado porque lo generó mi navegador de prueba. Puede borrarse cuando quieras. `.agents/`, `AGENTS.md`, `opencode.json` y `skills-lock.json` también aparecen como no rastreados; no los toqué.
