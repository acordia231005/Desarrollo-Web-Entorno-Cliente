// Ejercicio 1
function saludar(){
            var edad = window.prompt("Introduce tu edad");
            if (edad >= 18) {
                console.log("Eres mayor de edad");
            }else{
                console.log("Eres menor de edad");
            }
        }

//Ejercicio 2
function pintar_ruta(){
    console.log("El acceso a la ruta C:\\\\usuario\\tarda 1'23\", algo considerado \"lento\" en la actualidad.");
}

//Ejercicio 3
function pintar_ruta_v2(){
    var subtrng1 = "El acceso a la ruta C:\\\\usuario\\tarda 1'23\", algo";
    var subtrng2 = "considerado \"lento\" en la actualidad.";
    console.log(subtrng1 + subtrng2);
}

//Ejercicio 4
function mostrar_potencia(){
    var num = 2*Math.pow(10,-9);
    console.log("El valor de 2*10^-9 es: " + num);
}

//Ejercicio 5
function muestra_n_distintas_bases(num){
    var numDecimal = num.toString(2);
    console.log("El numero " + num + " en binario es: " + numDecimal);
}

// Ejercicio 6.  Realiza une división de cualquier número entre 0 y opera con el resultado (por ejemplo sumale 23) y muestra of resultado.
function muestra_resultado(num){
    var division = num / 0;
    var operacion = division + 23;
    console.log("El resultado de dividir " + num + " entre 0 y sumado por " + 23 + " es: " + operacion);

} 

//Ejercicio 7. Fuerza un NaN.
function fuerza_NaN(){
    var nan = 0 * "hola";
    console.log(nan);
}

//Ejercicio 8 Muestra por pantalla el máximo valor representable por un tipo Number, sumale 100 y vuelve a mostrario. ¿Ha cambiado su valor? Realiza lo mismo ahora asegurandote que encuentras una solución adecuaca para ello.
function muestra_max_value(){
    //var maxvalue = Number.MAX_VALUE; Al hacer esto no cambia.
    var max_value = Number.MAX_SAFE_INTEGER;
    console.log("El valor máximo representable por un tipo Number es: " + max_value);
    var suma = max_value + 100;
    console.log("El valor máximo representable por un tipo Number sumado a 100 es: " + suma);
}

//Ejercicio 9. Crea una variable numérica que almacene un número y otra variable cadena que
//almacene otro número.
function operaciones(num, cadena){
    var num = num;
    var cadena = cadena;
    console.log(num + cadena);
    // num + cadena = "15"
    console.log(num + Number(cadena));
    // num + Number(cadena) = 6
}

//Ejercicio 10. Crea un bloque de código en JavaScript en el que definas e inicialices dos variables.
//Cada una de ellas deben ser llamadas a pintar por consola desde fuera de dicha
//estructura. Identifica que ocurre y crea un comentario de varias líneas dentro del
//fichero .js.
function doble_variable(){
    let variable1 = 5;
console.log(variable1);
    {
        let variable2 = 10;
            console.log("Insisto " + variable1);
            console.log("Y también " + variable2);
    }
console.log("Finalmente " + variable2);
}

//Ejercicio 11.  Busca cómo crear e inicializar un array de datos en JavaScript (Se verá en temas
//siguientes) y muestra sus valores en formato tabla por consola.
function arrays(){
    let array = ["Alberto", "Juan", "Pedro", "Ana", "Maria"];
    console.table(array);
    //for (let i = 0; i < array.length; i++) {
    //    console.log(array[i]);
    //}
}

//Ejercicio 12.Realiza un bucle que de 100 vueltas que simplemente incremente un valor de diez
//en diez. Realiza un temporizador que calcule el tiempo que ha tardado en recorrer el
//bucle completamente.
function bucle_100_vueltas(){
    let inicio = new Date();
    for (let i = 0; i < 100; i++) {
        let valor = i * 10;
    }
    let fin = new Date();
    console.log("Tiempo transcurrido: " + (fin - inicio) + " ms");
}

//Ejercicio 13.  Muestra el siguiente error por pantalla “Error!. No se ha encontrado ningún valor”.
function muestra_error(){
    console.error("Error!. No se ha encontrado ningún valor");
}

//Ejercicio 14. Realiza un ejercicio que al pulsar un botón llamado Eliminar pinte un mensaje de
// confirmación para asegurarse que el usuario está seguro de su acción.
function Pintar_Confirmacion(){
    confirm("¿Estás seguro de que quieres eliminar?");
};

//Ejercicio 15.Realiza un programa en JavaScript que realice lo siguiente.
//a. Pida el nombre de usuario y este debe introducir su nombre
//b. Le pregunte al usuario si quiere abandonar el programa y este deberá
//Aceptar o Cancelar
//c. Lance una alerta con la decisión del usuario
//d. Muestre por consola “FIN DEL PROGRAMA”, en negrita subrayado y de
//color azul.
function window_practice(){
    window.prompt("Introduce tu nombre");
    confirm("¿Quieres abandonar el programa?");
    if (confirm("¿Quieres abandonar el programa?")) {
        alert("Has decidido abandonar el programa");
    } else {
        alert("Has decidido continuar en el programa");
    }
    console.log("%cFIN DEL PROGRAMA", "font-weight: bold; text-decoration: underline; color: blue;");
}

