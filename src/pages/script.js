let lista = [];
let cadena = "";

function mostrar_nombre() {
    event.preventDefault();
    let elemento = document.getElementById('txtNombre');
    let nombre = elemento.value;
    cadena += "<li>" + nombre + "</li>";
    console.log(cadena);
    document.getElementById('lista').innerHTML = cadena;
}
