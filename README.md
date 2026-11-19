# Calculadora Teletrabajo – proyecto APK

Tu app HTML empaquetada con Capacitor. Tailwind y la fuente Inter van incluidos en local, así que funciona sin conexión.

## Opción A: compilar en la nube (sin instalar nada)

1. Crea un repositorio en GitHub (puede ser privado) y sube todo el contenido de esta carpeta a la rama `main`.
2. Ve a la pestaña **Actions** del repositorio. El workflow "Compilar APK" se ejecuta solo al subir el código (también puedes lanzarlo con **Run workflow**).
3. Cuando termine (unos 5 minutos), entra en la ejecución y descarga el artefacto **teletrabajo-apk**. Dentro está `app-debug.apk`.
4. Pasa el APK al móvil e instálalo (Android te pedirá permitir "instalar apps de orígenes desconocidos").

## Opción B: compilar en tu ordenador con Android Studio

Requisitos: Node.js 18+ y Android Studio.

```bash
npm install
npm run build:web
npx cap add android
npx cap sync android
npx cap open android
```

En Android Studio: **Build > Build Bundle(s) / APK(s) > Build APK(s)**.

## Cambios en la app

Edita `src/index.html` y repite `npm run build:web` y `npx cap sync android` (o simplemente sube los cambios a GitHub y descarga el nuevo APK).

## Notas

- El APK generado es de tipo *debug*: sirve para instalar en tu móvil. Para publicar en Google Play hace falta firmarlo con tu propia clave (release/AAB).
- El id de la app es `com.teletrabajo.calculadora`; cámbialo en `capacitor.config.json` si quieres otro.
- Los datos se guardan en el almacenamiento local de la app, en el propio dispositivo.
