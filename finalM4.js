const preguntas = [
    "Teoremas de Bernoulli",
    "Teorema del momento",
    "Teorema de Kelvin",
    "Teorema de Helmholtz,
    "Modelo del tornado"
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
