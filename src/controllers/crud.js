import { connection } from "../db/mysql.js";
import { app } from "../index.js";   

export async function insert(req, res) {
    //Guardamos los datos del cuerpo en variables
    let producto = req.body.producto;
    let cantidad = req.body.cantidad;
    let direccion = req.body.direccion;
    let email = req.body.email;
    let name = req.body.name;
    let number = req.body.number;

    //Guardamos la instruccion SQL en otra variable
    let guardar = "insert into pedidos (producto, cantidad, correo, nombre, whatsapp, direccion) values('"+producto+"', '"+cantidad+"', '"+email+"', '"+name+"', '"+number+"', '"+direccion+"')"

    connection.query(guardar, function(error, data){
        if (error) {
            throw error
        }if (!producto || !cantidad || !direccion || !email || !name || !number) {
            return error
        }else{
            res.redirect('/')
        }
    })
}