Creacion de la tabla de pedidos

create table pedidos(
  id   int auto_increment,
  producto varchar(100),
  cantidad varchar(200),
  correo varchar(300),
  nombre varchar(100),
  whatsapp varchar(100),
  direccion varchar(500),
  primary key (id)
);