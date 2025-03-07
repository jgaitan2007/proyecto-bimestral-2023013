import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Proyecto Bimestral API",
            version: "1.0.0",
            description: "API para gestionar el registro de ventas, productos en línea y otras operaciones comerciales de una empresa",
            contact: {
                name: "Joseph Ramirez",
                email: "jramirez-2023013@kinal.edu.gt"
            }
        },
        servers: [
            {
                url: "http://127.0.0.1:3001/proyectoBimestral-2023013/v1"
            }
        ]
    },
    apis: [
        "./src/auth/auth.routes.js",
        "./src/user/user.routes.js",
        "./src/gestionProductos/productos.routes.js",
        "./src/gesitoncategorias/categorias.routes.js",
        "./src/carrito/cart.routes.js",
        "./src/gestionCompras/Compras.routes.js",
        "./src/gestionFacturas/facturas.routes.js"
    ]
};

const swaggerDocs = swaggerJSDoc(options);

export { swaggerDocs, swaggerUi };