const productos = [
    { nombre: "Laptop", precio: 2500000, categoria: "tecnologia" },
    { nombre: "Camisa", precio: 60000, categoria: "ropa" },
    { nombre: "Mouse", precio: 80000, categoria: "tecnologia" },
    { nombre: "Pantalón", precio: 120000, categoria: "ropa" },
    { nombre: "Monitor", precio: 900000, categoria: "tecnologia" },
    { nombre: "Zapatos", precio: 200000, categoria: "ropa" }
];

function resumenCategoria(productos) {

    resultado = productos.reduce((acumulador,produc)=>{

        if (acumulador[produc.categoria]) {
            
            acumulador[produc.categoria].total += produc.precio;
            acumulador[produc.categoria].cantidad += 1;
            
            console.log("si"+ produc.precio + "--"+ produc.categoria+acumulador[produc.categoria].cantidad);
            
        } else {
            acumulador[produc.categoria] = { cantidad: 1, total: produc.precio};
            
            console.log("no"+ produc.precio + "--"+ produc.categoria+acumulador[produc.categoria].cantidad);
        }

        return acumulador;
    },{})

    return resultado;
}

console.log(resumenCategoria(productos));
