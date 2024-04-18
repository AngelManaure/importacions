import { Router } from "express";
import { __dirname } from "../index.js";
import { revisarCookie } from "../middlewares/authorization.js";
import { connection } from "../db/mysql.js";

export const adminRoutes = Router();

adminRoutes.get('/home/client', revisarCookie, function(req, res){
    let obtener = 'select * from clientes'
    connection.query(obtener, function(error, lista){
        if (error) {
            throw error;
        }else{
            res.render(__dirname + '/views/pages/admin/client', {
                data: lista
            })
        }
    })
})

adminRoutes.post('/add', function(req, res){
    let data = req.body;
    let insertar = "insert into clientes(nombre, correo, whatsapp, pedido) values('"+data.name+"','"+data.email+"','"+data.number+"','"+data.pedido+"')";

    connection.query(insertar)
    res.redirect('/home/client')
})

adminRoutes.get('/delete/:id', function(req, res){
    const { id } = req.params;
    connection.query('delete from clientes where id = ?', [id], (err, rows)=>{
        if (err) {
            res.json(err);
        }else{
            res.redirect('/home/client');
        }
    })
})

adminRoutes.get('/update/:id', function(req, res){
    const { id } = req.params;
    connection.query('select * from clientes where id = ?', [id], (err, rows)=>{
        if (err) {
            throw err;
        }if(rows){
        res.render(__dirname + '/views/pages/admin/update', {
            data: rows[0]
        })
        }
    })
})

adminRoutes.post('/update/:id', function(req, res){
    const {id} = req.params;
    const newData = req.body;
    connection.query('update clientes set ? where id = ?', [newData, id], (err, rows)=>{
        if (err) {
            throw err
        }else{
        res.redirect('/home/client');
        }
    })
})

adminRoutes.get('/home/product', revisarCookie, function(req, res){
    res.render(__dirname + '/views/pages/admin/product')
})

adminRoutes.get('/home/inventory', revisarCookie, function(req, res){
    res.render(__dirname + '/views/pages/admin/inventory')
})

adminRoutes.get('/home/imports', revisarCookie, function(req, res){
    res.render(__dirname + '/views/pages/admin/imports')
})

adminRoutes.get('/home/help', revisarCookie, function(req, res){
    res.render(__dirname + '/views/pages/admin/help')
})
