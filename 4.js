const clientes = [
    { nombre: "Marta", compras: [50000, 120000, 30000] },
    { nombre: "Jorge", compras: [10000, 15000] },
    { nombre: "Sofía", compras: [200000, 300000, 150000] },
    { nombre: "Pedro", compras: [5000] },
    { nombre: "Elena", compras: [400000, 100000] }
];

function clientesVIP(clientes) {
    
    const totales = clientes.map((cliente) =>{

        const total = cliente.compras.reduce((acumulador,valor)=>{

            acumulador += valor;

            console.log(acumulador);
            

            return acumulador

        },0);

        return {nombre: cliente.nombre, compras:total};


    });

    const usuariosvip = totales.filter(usuario => usuario.compras>=300000);

    const nombrevip = usuariosvip.map(usuario => usuario.nombre)

    return nombrevip;
}

console.log(clientesVIP(clientes));
