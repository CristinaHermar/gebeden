# Gebeden

Un pequeño devocionario bilingüe (inglés / neerlandés, con opción de ver también el alemán y el latín) para usar como PWA en el móvil: Rosario, oraciones diarias, y las oraciones del Opus Dei para iniciar y terminar el rato de oración. Cada sección tiene un selector "Jump to / Ga naar" arriba para saltar directo a una oración sin tener que recorrer toda la página.

## Contenido

- **Daily Prayers / Dagelijks** — Kruisteken, Credo, Onze Vader, Weesgegroet, Eer aan de Vader, Fátima-gebed, Salve Regina, Veni Sancte Spiritus.
- **Rosary / Rozenkrans** — estructura completa (oraciones de apertura, patrón de cada tientje, las 20 misterios en 4 grupos, oración de cierre), con un aviso automático de "los misterios de hoy" según el día de la semana.
- **Opus Dei** — oración para empezar y para terminar el rato de oración, enseñadas por san Josemaría Escrivá (fuente: opusdei.org; traducción propia al neerlandés y al latín).

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `gebeden`).
2. Sube estos archivos a la raíz del repositorio:
   `index.html`, `styles.css`, `app.js`, `prayers-data.js`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`.
3. En el repositorio, ve a **Settings → Pages**.
4. En "Source", selecciona la rama `main` y la carpeta `/ (root)`. Guarda.
5. Espera un par de minutos; GitHub te dará una URL del tipo
   `https://TU-USUARIO.github.io/gebeden/`.

## Cómo instalarlo como app en el celular

- **iPhone (Safari):** abre la URL → botón de compartir → "Añadir a pantalla de inicio".
- **Android (Chrome):** abre la URL → menú (⋮) → "Añadir a pantalla de inicio" / "Instalar app".

Una vez instalada, funciona sin conexión (el `sw.js` guarda una copia local de la app).

## Personalizar

- **Textos**: todo el contenido está en `prayers-data.js`, en un solo objeto por oración con las claves `en`, `nl`, `de`, `la`. Añadir una oración nueva es copiar un bloque y cambiar el texto.
- **Colores**: en `styles.css`, arriba del todo, las variables `--wine`, `--gold`, `--parchment` controlan toda la paleta.
- **Ícono**: `icon-192.png` / `icon-512.png` son un cruz simple sobre fondo vino; reemplázalos por tu propio diseño si quieres (mismo tamaño).

## Nota sobre las traducciones

Las oraciones tradicionales (Credo, Padrenuestro, Avemaría, Salve, Fátima, Veni Sancte Spiritus) usan las traducciones neerlandesas y alemanas de uso común en la liturgia católica de los Países Bajos y de Alemania/Austria. Las dos oraciones del Opus Dei para iniciar y terminar la oración no tienen traducción oficial ampliamente publicada en neerlandés, alemán ni latín, así que esas versiones son traducción propia a partir del texto en inglés de opusdei.org — no son traducciones litúrgicas oficiales.
