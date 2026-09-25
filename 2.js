const ventas = [
    { producto: "Pan", precio: 3000, cantidad: 2 },
    { producto: "Leche", precio: 4500, cantidad: 1 },
    { producto: "Arroz", precio: 6000, cantidad: 3 },
    { producto: "Huevos", precio: 12000, cantidad: 1 }
];

function calcularVentas(ventas) {
    
    let total = ventas.reduce((acumulador, ventas)=>{
        let subtotal = ventas.cantidad * ventas.precio;
        return acumulador += subtotal;
    },0)

    return total;
}

console.log(calcularVentas(ventas))