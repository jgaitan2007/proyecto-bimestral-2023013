# Proyecto Bimestral

Proyecto Bimestral API para gestionar el registro de ventas, productos en línea y otras operaciones comerciales de una empresa.

## Descripción

Esta API permite gestionar usuarios, productos, categorías, carritos de compra y órdenes de compra. Está construida utilizando Node.js, Express y MongoDB, y está documentada con Swagger.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd proyecto-bimestral-2023013
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
    ```env
    PORT=3001
    URI_MONGO=mongodb://localhost:27017/proyectoBimestral-2023013
    SECRETORPRIVATEKEY=Est03sMyPub1cK3yM1sL0c0$
    ```

## Uso

1. Inicia el servidor:
    ```bash
    npm start
    ```

2. La API estará disponible en `http://127.0.0.1:3001/proyectoBimestral-2023013/v1`.

3. La documentación Swagger estará disponible en `http://127.0.0.1:3001/api-docs`.

## Endpoints

### Autenticación

- `POST /auth/register`: Registrar un nuevo usuario.
- `POST /auth/login`: Iniciar sesión.

### Usuarios

- `GET /user`: Obtener una lista de usuarios.
- `GET /user/findUser/:uid`: Obtener un usuario por ID.
- `DELETE /user/deleteUser/:uid`: Eliminar un usuario por ID.
- `PATCH /user/updatePassword/:uid`: Actualizar la contraseña de un usuario.
- `PUT /user/updateUser/:uid`: Actualizar la información de un usuario.
- `PATCH /user/updateProfilePicture/:uid`: Actualizar la foto de perfil de un usuario.
- `PUT /user/updateRoleUser/:uid`: Actualizar el rol de un usuario.

### Productos

- `POST /productos/addProduct`: Agregar un nuevo producto.
- `GET /productos/listarProductos`: Listar todos los productos.
- `GET /productos/getProductById/:id`: Obtener un producto por ID.
- `PUT /productos/updateProduct/:id`: Actualizar un producto por ID.
- `DELETE /productos/deleteProduct/:id`: Eliminar un producto por ID.
- `GET /productos/listarFueraDeStock`: Listar productos fuera de stock.
- `GET /productos/listarTopPoductos`: Listar los productos más vendidos.

### Categorías

- `POST /gestionCategorias/agregarCategorias`: Agregar una nueva categoría.
- `GET /gestionCategorias/listar`: Listar todas las categorías.
- `PUT /gestionCategorias/actualizarCategorias/:id`: Actualizar una categoría por ID.
- `DELETE /gestionCategorias/eliminarCategorias/:id`: Eliminar una categoría por ID.

### Carrito

- `POST /carrito/agregarAlCarrito`: Agregar un producto al carrito.

### Compras

- `POST /purchase/completePurchase`: Completar una compra.
- `GET /purchase/HistorialCompras`: Obtener el historial de compras.

### Facturas

- `PUT /facturas/editInvoice/:id`: Editar una factura.
- `GET /facturas/userInvoices`: Obtener facturas de un usuario.
- `GET /facturas/invoiceProducts/:id`: Obtener productos de una factura.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para obtener más detalles.
