function validarFormulario() {
    let nombre = document.getElementById("nombre");
    let nombreError = document.getElementById("nombreError");
    let edad = document.getElementById("edad");
    let edadError = document.getElementById("edadError");
    let formulario = document.getElementById("form1");
    
    if (nombre.value.length < 2) {
        nombreError.className = "text-danger";
        nombreError.innerHTML = "Ingrese un valor para el Campo Nombre!";
        return false;
    } else {
        nombreError.innerHTML = "";
    }
    if (edad.value == "") {
        edadError.className = "text-danger";
        edadError.innerHTML = "Ingrese un valor para el Campo Edad!";
        return false;
    } else if (edad.value < 18) {
        edadError.className = "text-danger";
        edadError.innerHTML = "Ingrese una edad superior a 18 años!";
        return false;
    } else {
        edadError.innerHTML = "";
    }

    formulario.submit();
}

let botonFormulario = document.getElementById("btnFormulario");
botonFormulario.addEventListener("click", validarFormulario);