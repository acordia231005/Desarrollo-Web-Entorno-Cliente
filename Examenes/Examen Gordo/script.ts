let nombreUsuario = prompt("Ingrese su nombre de usuario:");
let contadorRecarga = 0;
let fecha: Date = new Date() as Date;

window.onload= () => {
document.cookie = "Nombre de usuario: " + nombreUsuario;
}

// recarga de la pagina 
function recarga(): void{
    window.location.reload;
    contadorRecarga++;
    console.log(contadorRecarga);
}
recarga();

let body: HTMLBodyElement = document.getElementById("body") as HTMLBodyElement;
let h1 : HTMLHeadingElement = document.createElement("h1") as HTMLHeadingElement;
let bienvenida = "Bienvenido al dashboard de " + nombreUsuario;
h1.innerHTML = "<h1>" + bienvenida + "</h1>";
h1.appendChild(body);


// crear tarjetas
function crear_tarjeta(): void{
    let select: HTMLSelectElement = document.getElementById("tipo") as HTMLSelectElement;
    switch(select.value){
        case "incidencia":
            tarjeta_incidencia();
            break;
        case "tarea":
            tarjeta_tarea();
            break;
        case "evento":
            tarjeta_evento();
            break;
        default:
            console.error("Tipo escogida no valida");
            break;
    };
}

// Crear tarjetas de incidencia
function tarjeta_incidencia(){
    const result: HTMLParagraphElement = document.getElementById("tarjetas") as HTMLParagraphElement;
    let div: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let a: HTMLElement = document.createElement("a") as HTMLElement;
    let direccion: string ="https://www.issues.com/" + $inputById("id").value as string;
    
    a.textContent = direccion;
    div.style.backgroundColor = "light-red";
    div.textContent = "Id: " + $inputById("id").value + "<br>" +
                    "Descripcion: " + $inputById("descripcion").value + ";" +
                    "Fecha: " + fecha + ";" +
                    "Direccion: " + a ;
    div.appendChild(result);
}

// Crear tarjetas de tarea
function tarjeta_tarea(){
    const result: HTMLParagraphElement = document.getElementById("tarjetas") as HTMLParagraphElement;
    let div: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let a: HTMLElement = document.createElement("a") as HTMLElement;
    let direccion: string ="https://www.issues.com/" + $inputById("id").value as string;
    
    a.textContent = direccion;
    div.style.backgroundColor = "light-blue";
    div.textContent = "Id: " + $inputById("id").value + "<br>" +
                    "Descripcion: " + $inputById("descripcion").value + ";" +
                    "Fecha: " + fecha + ";" +
                    "Direccion: " + direccion ;
    div.appendChild(result);
}

// Crear tarjetas de evento
function tarjeta_evento(){
    const result: HTMLParagraphElement = document.getElementById("tarjetas") as HTMLParagraphElement;
    let div: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let a: HTMLElement = document.createElement("a") as HTMLElement;
    let direccion: string ="https://www.issues.com/" + $inputById("id").value as string;
    
    a.textContent = direccion;
    div.style.backgroundColor = "light-green";
    div.textContent = "Id: " + $inputById("id").value + "<br>" +
                    "Descripcion: " + $inputById("descripcion").value + ";" +
                    "Fecha: " + fecha + ";" +
                    "Direccion: " + direccion ;
    div.appendChild(result);
}

// Boton eliminar tarjetas
function eliminar(){
    let p : HTMLParagraphElement = document.getElementById("tarjetas") as HTMLParagraphElement;
    p.remove;
}

// helpers
function $inputById(id: string): HTMLInputElement{
    return document.getElementById(id) as HTMLInputElement;
}
