import express from "express";
import { serverConfig } from "./config/serverConfig.config.js";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index.routes.js";
import { mongoConnection } from "./utils/mongo/mongoConnection.js";
import passport from "passport";
import initializePassport from "./utils/passport/initializePassport.service.js";
import handlebars from "express-handlebars";
import ErrorMiddleware from "./utils/middlewares/errors/ErrorMiddleware.js";
import logger from "./utils/middlewares/logs/logger.middleware.js";
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUiExpress from 'swagger-ui-express'

//CONFIG SERVER y DB
const app = express()
// app.use(logger)

const swaggerOptions = {
definition: {
    openapi: '3.0.3',
    info: {
    title: 'Documentación de API E-Commerce',
    description: 'Se describirán las diferentes rutas habilitadas para la API en su sección Productos (/api/products)',
    },
},
apis: [`${process.cwd()}/docs/**/*.yaml`],
}

const specs = swaggerJSDoc(swaggerOptions)
app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))

app.use(ErrorMiddleware)
const httpServer = app.listen(serverConfig.ExpressPort,
    () => console.log(`Servidor conectado al puerto: ${serverConfig.ExpressPort}`))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
indexRouter(app)
mongoConnection()

//CONFIG PASSPORT
initializePassport()
app.use(passport.initialize())

//config HBS!

app.engine('handlebars', handlebars.engine());
app.set('views', process.cwd() + '/views')
app.set('view engine', 'handlebars');
app.use(express.static(process.cwd() + '/public'))