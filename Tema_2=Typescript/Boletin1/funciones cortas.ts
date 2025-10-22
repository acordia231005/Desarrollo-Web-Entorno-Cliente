//Forma normal
function suma(a: number, b: number){
    const result = a + b;
    return result;
}

//Forma Flecha 
const suma2 = (a: number, b: number) => a + b;

suma(5,5);
suma2(5,5);

const arrayPrueba = [2,4,6,8,10];

//Forma normal(filter)
const arrayMayorCinco1 = [];
for (let i = 0; i < arrayPrueba.length; i++) {
    if (arrayPrueba[i] > 5) {
        arrayMayorCinco1.push(arrayPrueba[i]);
    }
}

//Forma Flecha (filter)
const arrayMayorCinco2 = arrayPrueba.filter(data => data > 5);

//Forma normal(map)
const arrayDoble1 = [];

for (let i = 0; i < arrayPrueba.length; i++) {
    arrayDoble1.push(arrayPrueba[i] * 2)
}

//Forma flecha(map)
const arrayDoble2 = arrayPrueba.map(data => data * 2);

// .filter y .map
const dobleymayor5 = arrayPrueba
        .filter(data => data > 5)
        .map(data => data * 2);

// forma normal(reduce)
let total1 = 0;
for (let i = 0; i < arrayPrueba.length; i++) {
    total1 = total1 + arrayPrueba[i]
    
}

// forma flecha(reduce)        0 = suma o resta, 1 = multiplicar o dividir
const total = arrayPrueba.reduce((inc, data) => inc + data, 0);


// forma normal(forEach)
for (let i = 0; i < arrayPrueba.length; i++) {
    console.log( (i + 1) + (":") + arrayPrueba[i]);
}

// forma flecha(forEach)
arrayPrueba.forEach((data, i) => console.log((i + 1) + (":") + arrayPrueba[i]))

// forma unica(some)
console.log(arrayPrueba.some(data => data > 0));

// forma unica(every)
console.log(arrayPrueba.every(data => data > 0));