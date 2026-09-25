const ventas = [
    { vendedor: "Ana", producto: "Laptop", monto: 2500000 },
    { vendedor: "Luis", producto: "Mouse", monto: 80000 },
    { vendedor: "Ana", producto: "Monitor", monto: 900000 },
    { vendedor: "Carlos", producto: "Teclado", monto: 150000 },
    { vendedor: "Luis", producto: "Audífonos", monto: 120000 },
    { vendedor: "Ana", producto: "Teclado", monto: 150000 }
];


function vendedorMonto(ventas) {
    
    const resultado = ventas.reduce((acumulador, venta)=>{

        if (acumulador[venta.vendedor]) {
            
            acumulador[venta.vendedor] += venta.monto;

            console.log("si "+venta.vendedor+venta.monto);
            
        } else{
            acumulador [venta.vendedor] = venta.monto;
            console.log("no "+venta.vendedor+venta.monto);
        }

        return acumulador;
    },{}) 

    return resultado;
}

console.log(vendedorMonto(ventas));
