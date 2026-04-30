# Reflexiones - Práctica 4

**Extensión elegida: Opción B — Multi-stage build**
He implementado un multi-stage build en el Dockerfile para compilar la aplicación Next.js en una imagen de Node y luego servir únicamente los archivos estáticos (`/out`) usando una imagen de Nginx Alpine. Esto reduce drásticamente el tamaño de la imagen final (de cientos de MBs a unos pocos MBs).

### 1. ¿Qué ventaja tiene disparar el pipeline con un tag en lugar de con cada push? ¿Cómo cambia el flujo de trabajo del equipo?
Disparar el pipeline con un tag asegura que solo se publiquen versiones estables y definitivas del software (releases) en lugar de cada pequeño cambio en desarrollo. Cambia el flujo de trabajo porque el equipo puede iterar libremente en `main` o `develop` y usar los tags como un control manual, deliberado y semántico para enviar versiones a producción.

### 2. ¿Cuál es la diferencia entre usar `latest` y una versión específica como `1.0.0` al desplegar en producción?
Usar `latest` es sumamente riesgoso en producción porque no garantiza inmutabilidad; la imagen detrás de la etiqueta `latest` puede cambiar en cualquier momento e introducir *breaking changes* inesperados sin previo aviso. Usar una versión específica como `1.0.0` garantiza que el entorno de producción siempre ejecutará el código exacto que fue probado y validado para esa versión, permitiendo despliegues predecibles.

### 3. El proyecto anterior ya tenía 6 tags creados. ¿Qué significaría haber tenido este workflow desde el principio?
Significaría que ahora tendríamos un historial completo de 6 imágenes Docker publicadas en GitHub Container Registry listas para usar (`1.0.0`, `1.1.0`, etc.). Esto nos habría permitido, por ejemplo, revertir un despliegue defectuoso a cualquier versión anterior de forma casi instantánea simplemente indicando el tag anterior al orquestador o contenedor.
