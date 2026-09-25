const productos = [
    { nombre: "Laptop", precio: 2500000, stock: 5 },
    { nombre: "Mouse", precio: 80000, stock: 0 },
    { nombre: "Teclado", precio: 150000, stock: 8 },
    { nombre: "Monitor", precio: 900000, stock: 3 },
    { nombre: "Audífonos", precio: 120000, stock: 0 }
];

function buscarProductos(productos) {
    
     const disponible = productos.filter(producto => producto.stock >0);

    console.log(disponible)

    return disponible;
}

console.log(buscarProductos(productos));
