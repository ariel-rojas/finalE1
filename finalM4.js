const preguntas = [
    "Deducir los teoremas de Bernoulli"
    "Deducir el teorema del momento",
    "Deducir el teorema de Kelvin. Particularizar en flujos barotrópicos y baroclínicos. (ejemplo de la playa de dia y de noche)"
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
