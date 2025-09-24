function calcular_fibonacci() {
    let num = parseInt(document.getElementById("num").value);
    let a = 0, b = 1, fib = 0;
    let resultado = "Serie de Fibonacci: ";
    for (let i = 0; i < num; i++) {
        resultado += fib + " ";
        fib = a + b;
        a = b;
        b = fib;
    }
    console.log(resultado);
}