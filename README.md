# MarvelApp

MarvelApp es una aplicación web desarrollada con Angular que permite explorar personajes y cómics del universo Marvel. La aplicación utiliza la API de Marvel para obtener datos en tiempo real y ofrece funcionalidades como búsqueda de personajes, visualización de detalles y gestión de favoritos.

## Requisitos previos

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes requisitos:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [Angular CLI](https://angular.io/cli) (versión 19.1.6 o superior)

## Cómo ejecutar la aplicación

Sigue estos pasos para ejecutar la aplicación en tu entorno local:

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone <https://github.com/garbettbrandon/marvel-app.git>
   cd marvel-app
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```

4. Abre tu navegador y navega a `http://localhost:4200/`.

La aplicación se recargará automáticamente cada vez que modifiques los archivos fuente.

## Arquitectura del proyecto

El proyecto sigue la arquitectura modular de Angular, con una estructura organizada en módulos, componentes, servicios e interfaces. A continuación, se describe la estructura principal:

```
src/
├── app/
│   ├── app.component.ts       # Componente raíz de la aplicación
│   ├── app.config.ts          # Configuración de la aplicación
│   ├── app.routes.ts          # Definición de rutas principales
│   ├── heroes/                # Módulo para la gestión de héroes
│   │   ├── components/        # Componentes relacionados con héroes
│   │   ├── interfaces/        # Interfaces para los datos de héroes y cómics
│   │   ├── services/          # Servicios para consumir la API de Marvel
│   ├── marvel-front/          # Módulo principal de la interfaz
│       ├── components/        # Componentes de la interfaz (navbar, etc.)
│       ├── layouts/           # Layouts para organizar las vistas
│       ├── pages/             # Páginas principales (home, detalle, favoritos)
├── environments/              # Configuración de entornos (desarrollo y producción)
├── styles.css                 # Estilos globales de la aplicación
```

## Funcionalidades principales

- **Búsqueda de personajes:** Busca personajes del universo Marvel por nombre.
- **Detalles de personajes:** Visualiza información detallada de un personaje, incluyendo su descripción y cómics relacionados.
- **Gestión de favoritos:** Marca personajes como favoritos y accede a ellos fácilmente desde la página de favoritos.

## Configuración de la API de Marvel

La aplicación utiliza la API de Marvel para obtener datos. La configuración de la API se encuentra en los archivos de entorno:

- `src/environments/environment.ts` (producción)
- `src/environments/environment.development.ts` (desarrollo)

Asegúrate de que las claves de API (`apiKey`, `hash`, `ts`) estén configuradas correctamente en estos archivos.

## Scripts disponibles

- `npm start`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm test`: Ejecuta las pruebas unitarias con Karma.

## Pruebas

### Pruebas unitarias

Para ejecutar las pruebas unitarias, utiliza el siguiente comando:

```bash
ng test
```

## Recursos adicionales

- [Documentación de Angular CLI](https://angular.dev/tools/cli)
- [API de Marvel](https://developer.marvel.com/)

## Contribuciones

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request. ¡Toda ayuda es bienvenida!

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).
