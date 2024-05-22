const preguntas = [
    "a) Expresar la formula del método de Euler y dar la definición de error de truncado para ese método. ¿Qué es el error global? Dar una idea esquemática de cómo se acota ese error. ¿De qué depende ese error? 
    b) Como se define un método multipasos. En ese caso, ¿Como se define convergencia del método?",
    "Ecuación de Euler.",
    "Conservación de la masa.",
    "Teoremas de Bernoulli.",
    "Teorema del momento.",
    "Tensor de velocidades.",
    "Teorema de Kelvin.",
    "Teorema de Helmholtz.",
    "Modelo del tornado.",
    "Teorema del círculo.",
    "Teorema de Blasius.",
    "Fuerza de Magnus.",
    "Transformación conforme. Condición de Kutta.",
    "Flujos potenciales.",
    'Ecuación de Navier Stokes. Flujos newtonianos y no newtonianos.',
    'Balance del momento viscoso.',
    'Disipación de Energía.',
    'Flujo de Poiseuille.',
    'Análisis dimensional. Ejemplos.',
    'Fuerza de arrastre sobre una esfera.',
    'Problema con autosimilaridad.',
    'Inestabilidad en flujos planos. Ecuación de Rayleigh. Criterio de Rayleigh.',
    'Inestabilidad de Kelvin-Helmholtz.',
    'Inestabilidad de Rayleigh-Taylor.',
    'Ondas de Gravedad. Caso profundidad infinita y finita.',
    'Flujos Compresibles. Método de las características. Relación de Rankine.'
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
