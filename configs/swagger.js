import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Api web",
            version: "1.0.0",
            description: "API web implementada en NodeJS, destinada a gestionar el registro  de ventas productos en línea y otras operaciones comerciales de una empresa",
            contact:{
                name: "Joseph Ramirez",
                email: "jramirez-2023013@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3001/proyecto-bimestral/v1"
            }
        ]
    },
    apis:[
       
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}