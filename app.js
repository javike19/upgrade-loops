//Iteración #1
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
for (let i = 0; i < products.length; i++) {
    if(products[i].includes("Camiseta")){
        console.log(products[i]);
    }
}

//Iteración #2
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let i = 0; i < alumns.length; i++) {
    if (alumns[i].T1 & alumns[i].T2 === true){
        console.log(alumns[i].name + " isApproved");
    } else if(alumns[i].T1 & alumns[i].T3 === true){
        console.log(alumns[i].name + " isApproved");
    } else if(alumns[i].T2 & alumns[i].T3 === true){
        console.log(alumns[i].name + " isApproved");
    }
    
}