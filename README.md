## API Copa Mundial FIFA

API REST construida con Node.js, Express, SQLite y Zod para consultar distintas ediciones de la Copa Mundial de la FIFA.

### Requisitos

- Node.js instalado.
- `npm` o `pnpm` para instalar dependencias.

### Instalación

1. Instalar dependencias:

```bash
npm install
```

2. Crear y poblar la base de datos SQLite:

```bash
node data/createdb.js
```

3. Levantar el servidor:

```bash
npm start
```

El servidor queda disponible en `http://localhost:4321`.

### Estructura de datos

Cada mundial se guarda con esta forma:

```json
{
  "nombre": "Copa Mundial Qatar 2022",
  "anio": 2022,
  "sede": "Qatar",
  "campeon": "Argentina",
  "subcampeon": "Francia",
  "goleador": "Kylian Mbappe",
  "equipos": 32,
  "imagen": "qatar-2022.avif",
  "slug": "qatar-2022",
  "resumen": "Argentina campeon tras una final epica ante Francia.",
  "descripcion": "Primer Mundial en Medio Oriente; Argentina gano en penales su tercer titulo."
}
```

### Rutas

- `GET /` - Informacion general de la API.
- `GET /mundiales` - Lista las ediciones. Con `?include=full` devuelve todos los campos.
- `GET /mundial/:slug` - Busca una edicion por slug.
- `GET /campeon/:pais` - Devuelve los slugs de las ediciones ganadas por ese pais.
- `GET /random` - Devuelve una edicion al azar.
- `GET /search/:text` - Busca por texto en `resumen` y `descripcion`.
- `GET /imagenes/*` - Sirve las imagenes desde la carpeta `images`.

### Validaciones y respuestas

- `200 OK` cuando la consulta es exitosa.
- `400 Bad Request` cuando la validacion con Zod falla, por ejemplo en `GET /search/ab`.
- `404 Not Found` cuando no existe el recurso solicitado o la ruta no esta definida.

### Pruebas sugeridas con xh

```bash
xh GET :4321/mundiales
xh GET :4321/mundiales include==full
xh GET :4321/mundial/qatar-2022
xh GET :4321/mundial/inexistente
xh GET :4321/campeon/Argentina
xh GET :4321/random
xh GET :4321/search/final
xh GET :4321/search/ab
```

### Archivos importantes

- `data/data.json` contiene las ediciones del Mundial.
- `data/createdb.js` crea y llena la base SQLite.
- `data/CREATE.SQL` contiene la estructura de la tabla.
- `images/` debe contener al menos una imagen por edicion usando el nombre indicado en `imagen`.

### Nota de entrega

Para cumplir completamente la consigna, el proyecto debe incluir al menos 6 ediciones, las imagenes en `images/`, un `README.md` completo y un `REFERENCIAS.md` con las fuentes consultadas.
