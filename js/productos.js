const productos = [
    {id:1, nombre:"Torta con Frutilla", descripcion:"Unas de las mejoras Tortas para disfrutar el verano en Familia", precio:700, imagen:"cocinero1.png",},
    {id:2, nombre:"Torta Merengue",descripcion:"", precio:300, imagen:"cocina4.png",},
    {id:3, nombre:"Arcoiris", descripcion:"", precio:200, imagen:"cocina3.png",},
    {id:4, nombre:"Torta de Casamiento", descripcion:"", precio:500, imagen:"cocina2.png",},
    {id:5, nombre:"Masitas Especiales",descripcion:"", precio:300, imagen:"cocina5.png",},
    {id:6, nombre:"Torta Bomba",descripcion:"", precio:230, imagen:"cocina6.png",},
    {id:7, nombre:"Huevos Pascua",descripcion:"", precio:50, imagen:"cocina7.png",},
    {id:8, nombre:"Equipos",descripcion:"", precio:120, imagen:"cocina8.png",},
];

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);