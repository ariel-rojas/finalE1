const preguntas = [
    "Condiciones de Cauchy-Riemmann",
    "Fórmula de Cauchy de la derivada",
    "Transformada de Fourier",
    "Teorema de los residuos",
    "Series de Fourier",
    "Fórmula de Cauchy",
    "Clasificación de singularidades",
    "Transformada de Laplace",
    "Desarrollo de Laurent",
    "Desarrollo de Taylor",
    "Probar que son equivalentes la siguientes afirmaciones: \n 1)f es derivable en a \n 2) u y v son diferenciables en a y cumplen las condiciones de Cauchy-Riemann",
    "Probar que si f= u+iv es holomorfa en A siendo u y v C2, entonces u y v son armónicas en A",
    "si U es armónica en un abierto D, existe una funcion v armónica conjugada tal que f=u+iv sea holomorfa en D?",
    "probar que si f_n son continuas en A y convergen uniformemente a f, entonces f es continua en A"
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