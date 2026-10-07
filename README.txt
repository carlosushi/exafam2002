# Invitación Web – Bodas de Plata EXAFAM 2002

## Archivos
- `index.html` → estructura de la página.
- `styles.css` → diseño y estilos.
- `script.js` → cuenta regresiva, WhatsApp, menú y botones.
- `README.txt` → estas instrucciones.

## 1. Configurar WhatsApp
Abre `script.js` y cambia:

    const WHATSAPP_NUMBER = "51999999999";

por el número oficial que deseas utilizar.

Ejemplo:

    const WHATSAPP_NUMBER = "51987654321";

No escribas "+" ni espacios.

## 2. Fecha del evento
Actualmente:

    const EVENT_DATE = "2027-10-17T20:00:00";

Puedes cambiar la hora si es necesario.

## 3. Fotos
La versión inicial usa imágenes externas de demostración.

Para usar fotos propias:
1. Crea una carpeta llamada `img`.
2. Coloca allí tus fotos.
3. En `index.html`, reemplaza las URLs de Unsplash por rutas como:

    img/foto-promocion-2002.jpg

También puedes cambiar la imagen de fondo desde `styles.css`.

## 4. Número de promocionales registrados
Busca en `index.html`:

    <strong>95</strong>

y actualiza el número cuando sea necesario.

## 5. Cuenta de aporte
Actualmente se incluyó:
- Cuota: S/ 50.00
- Fecha límite: 31/10/2026
- Cuenta BBVA: 0011-0982-62-0200352688
- CCI: 011 982 000200352688 62

Modifica estos datos directamente en `index.html` si cambian.

## 6. Publicarla gratis en Netlify
Método simple:
1. Ingresa a https://app.netlify.com/drop
2. Arrastra toda la carpeta `exafam2002_web`.
3. Netlify generará una dirección pública.
4. Luego puedes cambiar el nombre del sitio.

## 7. Publicarla en GitHub Pages
1. Crea un repositorio.
2. Sube estos archivos.
3. Ve a Settings > Pages.
4. Selecciona la rama `main`.
5. Guarda y espera la publicación.

## Mejora recomendada
Para una versión definitiva se puede agregar:
- Logo oficial EXAFAM 2002.
- Fotos reales del año 2002.
- Galería ampliable.
- Música.
- Video de bienvenida.
- Google Maps.
- Google Forms / Google Sheets.
- Lista dinámica de participantes.
- Panel administrativo.
- QR para compartir la invitación.
