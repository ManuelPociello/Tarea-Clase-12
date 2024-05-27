function saludo() {
    let nombre = prompt("Ingrese su nombre:");

    if (nombre === "") {
        alert("Por favor ingrese su nombre");
    } else {
        alert("Bienvenido " + nombre);
    }
}
saludo();
