import { Router } from "express";
import { __dirname } from "../index.js";
import { revisarCookie } from "../middlewares/authorization.js";
import { publico } from "../middlewares/authorization.js";
import { validar } from "../controllers/validar.js";
import { insert } from "../controllers/crud.js";

export const router = Router();

//Inicio
router.get("/", publico, function (req, res) {
  res.render(__dirname + "/views/pages/index");
});

//Inicio de sesión
router.post("/validar", validar, function (req, res) {
  res.render(__dirname + "/views/pages/index");
});

//Acerca de nosotros
router.get("/about", function (req, res) {
  res.render(__dirname + "/views/pages/about");
});

//Servicios
router.get("/services", function (req, res) {
  res.render(__dirname + "/views/pages/services");
});

//Realizar pedido
router.get("/reali", function (req, res) {
  res.render(__dirname + "/views/pages/pedido");
});

router.post("/pedido", insert, function (req, res) {
});

//Contactar
router.get("/contact", function (req, res) {
  res.render(__dirname + "/views/pages/contact");
});

//Error
router.get("/error", publico, function (req, res) {
  res.render(__dirname + "/views/pages/error");
});

//Administración
router.get("/home", revisarCookie, function (req, res) {
  res.render(__dirname + "/views/pages/home");
});
