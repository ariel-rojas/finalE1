const preguntas = [
    "a) Expresar la fórmula del método de Euler y dar la definición de error de truncado para ese método. ¿Qué es el error global? Dar una idea esquemática de cómo se acota ese error. ¿De qué depende ese error? \nb) ¿Cómo se define un método multipasos? En ese caso, ¿Cómo se define convergencia del método?",
    "Expresar el método de Euler y definir el error de truncado del método. Enunciar y demostrar la expresión de error global del método de Euler.",
    "Dada f: R → R y el problema de valores iniciales \nx′(t) = f(x(t)), t ∈ [0, 1] \nx(0) = 1 \ndonde f es Lipschitz. Dado t_i = i*h, 0 ≤ i ≤ N, h = 1/N, considere el siguiente método de un paso: \nx_(i+1) = x_i + h*ϕ(x_i, h), x_0 = 1 \ncon ϕ(x_i, h) = (3/5)*f(x) + (2/5)*f(x + (5/4)*h*f(x))"
];

const pregunta = document.querySelector('.pregunta');
const boton = document.querySelector('.btn');

document.addEventListener('click', (e) => {
    if(e.target.className === boton.className){
        e.preventDefault(); // Add parentheses to correctly call the function
        const item = preguntas[Math.floor(Math.random() * preguntas.length)];
        pregunta.innerText = item;
    }
});
