const productos = [
    { nombre: "Silla", proveedor: "MueblesSA", precio: 150000, stock: 4 },
    { nombre: "Mesa", proveedor: "MueblesSA", precio: 300000, stock: 0 },
    { nombre: "Lámpara", proveedor: "LuzTotal", precio: 80000, stock: 10 },
    { nombre: "Escritorio", proveedor: "MueblesSA", precio: 450000, stock: 2 },
    { nombre: "Bombillo", proveedor: "LuzTotal", precio: 15000, stock: 0 },
    { nombre: "Cortina", proveedor: "Decorama", precio: 60000, stock: 5 }
];

function valorInventarioPorProveedor(productos) {
    
    const nuevosProductos = productos.filter(produc => produc.stock > 0);

    const resultado = nuevosProductos.reduce((acumulador, producto)=>{

        if (acumulador[producto.proveedor]) {
            
            acumulador[producto.proveedor] += (producto.precio*producto.stock);
        

        } else {
            
            acumulador[producto.proveedor] = producto.precio*producto.stock;

            
        }
        return acumulador;        

    },{})

    return resultado;

}

console.log(valorInventarioPorProveedor(productos));
