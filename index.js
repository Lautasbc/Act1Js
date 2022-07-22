const pizzas = [
    {
        id: 1,
        nombre: `Muzza`,
        ingredientes: ["Muzza", "SalsaOriginal", "Aceitunas", "CondimentoOriginal"],
        precio: 600
    },
    {
        id: 2,
        nombre: `Jamonera`,
        ingredientes: ["Muzza", "SalsaOriginal", "Aceitunas", "CondimentoOriginal", "Jamón"],
        precio: 650
    },
    {
        id: 3,
        nombre: `Napo`,
        ingredientes: ["Queso", "SalsaOriginal", "Aceitunas", "Albaca", "Tomate", "AceiteDeOliva"],
        precio: 850
    },
    {
        id: 4,
        nombre: `Chicago`,
        ingredientes: ["Muzza", "SalsaOriginal", "Carne", "Embutidos", "Salchichas", "ExtraSalsa"],
        precio: 1000
    },
    {
        id: 5,
        nombre: `Hawaiana`,
        ingredientes: ["Muzza", "SalsaOriginal", "Aceitunas", "CondimentoOriginal", "Jamón", "Piña"],
        precio: 550
    },
    {
        id: 6,
        nombre: `Mexicana`,
        ingredientes: ["Muzza", "jalapeño", "Chorizo", "frijoles"],
        precio: 750
    }

]

const actA = pizzas.forEach((element, id) => {
    if (element.id % 2 === 0){
        console.log (`El ID ${(element.id)} es par`)
    } else {
        console.log (`El ID ${(element.id)} es impar`)
    }
} )

console.log (actA)

const actB = pizzas.some((element, precio) =>{
    if (element.precio <= 600 ) {
        console.log(`Las Pizza de ${(element.nombre)} tiene un valor de ${(element.precio)}`)
    }
} 
)

console.log (actB)

const actC = pizzas.map((element, nombre) => {
    console.log (`Nuestras pizzas son: ${(element.nombre)}`)
}

)

const actD = pizzas.map((element, precio) => {
    console.log (`Nuestros precios son: ${(element.precio)}`)
} )

const actE = pizzas.map((element, precio, nombre) => {
    console.log (`Nuestra pizza ${element.nombre} vale ${(element.precio)}`)
} )