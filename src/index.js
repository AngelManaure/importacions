import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { router } from "./routes/index.routes.js";
import { PORT } from "./config.js";
import { adminRoutes } from "./routes/admin.routes.js";

//Servidor
export const app = express();

//Configuraciones
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
app.set('port', PORT);
app.use(router);
app.use(adminRoutes);
app.use(express.static(path.join(__dirname, 'public')));

//Servidor en linea
app.listen(PORT);
console.log(`Servidor escuchando en el puerto ${PORT}`);