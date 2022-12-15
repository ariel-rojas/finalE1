const preguntas = [
    "Ecuación de Euler",
    "Conservación de la masa",
    "Teoremas de Bernoulli",
    "Teorema del momento",
    "Tensor de velocidades",
    "Teorema de Kelvin",
    "Teorema de Helmholtz",
    "Modelo del tornado",
    "Teorema del círculo",
    "Teorema de Blasius",
    "Fuerza de Magnus",
    "Transformación conforme. Condición de Kutta",
    "Teorema del círculo",
    "Flujos potenciales"
]

const pregunta = document.querySelector('.pregunta');
const boton = document.querySelector('.btn')
console.log(boton.className)
document.addEventListener('click', (e) =>{
    console.log(e.target.className)
    if(e.target.className == boton.className){
        e.preventDefault
        const item = preguntas[Math.floor(Math.random()*preguntas.length)]
        console.log(item)
        pregunta.innerText = item
    }
})
