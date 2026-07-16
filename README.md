# Gebeden

Un pequeño devocionario bilingüe (inglés / neerlandés, con opción de ver el latín) para usar como PWA en el móvil: Rosario, oraciones diarias, y las oraciones del Opus Dei para iniciar y terminar el rato de oración.

## Contenido

- **Daily Prayers / Dagelijks** — Kruisteken, Credo, Onze Vader, Weesgegroet, Eer aan de Vader, Fátima-gebed, Salve Regina, Veni Sancte Spiritus.
- **Rosary / Rozenkrans** — estructura completa (oraciones de apertura, patrón de cada tientje, las 20 misterios en 4 grupos), con un selector arriba para elegir Gozosos / Dolorosos / Gloriosos / Luminosos; el grupo del día trae un puntito dorado.
- **Opus Dei** — oración para empezar y para terminar el rato de oración, enseñadas por san Josemaría Escrivá (fuente: opusdei.org). Se muestran en latín, con un botón "Ver traducción en español" que despliega una traducción propia (no oficial, ya que no existe una versión española ampliamente publicada de estas dos oraciones).

## Controles

- **A− / A+** en la barra superior: agranda o achica el texto de toda la app (se recuerda entre visitas).
- **+ Latin / Latijn**: muestra el texto en latín debajo de cada oración (en las pestañas Daily y Rosary; en Opus Dei el latín ya está siempre visible).

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

- **Textos**: todo el contenido está en `prayers-data.js`, en un solo objeto por oración con las claves `en`, `nl`, `la` (y `es` cuando aplica, solo en Opus Dei). Añadir una oración nueva es copiar un bloque y cambiar el texto.
- **Colores**: en `styles.css`, arriba del todo, las variables `--wine`, `--gold`, `--parchment` controlan toda la paleta.
- **Ícono**: `icon-192.png` / `icon-512.png` son una cruz simple sobre fondo vino; reemplázalos por tu propio diseño si quieres (mismo tamaño).

## Nota sobre las traducciones

Las oraciones tradicionales (Credo, Padrenuestro, Avemaría, Salve, Fátima, Veni Sancte Spiritus) usan las traducciones neerlandesas de uso común en la liturgia católica de los Países Bajos. Las dos oraciones del Opus Dei para iniciar y terminar la oración no tienen traducción oficial ampliamente publicada en neerlandés, latín ni español, así que esas versiones son traducción propia a partir del texto en inglés de opusdei.org — no son traducciones litúrgicas oficiales.
