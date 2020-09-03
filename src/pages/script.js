let lista = [];
let cadena = "";
let contador = 4;
let bandera = false;
let adiviniza = "";
const adiviniza1 = "Lorem ipsum1 ";
const adiviniza2 = "Lorem ipsum2 ";
const adiviniza3 = "Lorem ipsum3 ";
const adivinizaAcertada = "Felicidades";


function adivinar() {
    event.preventDefault();
    let elemento = document.getElementById('txtNombre');
    let cadena = elemento.value;
    /**cadena += "<p>" + nombre + "<x/p>";
    console.log(cadena);
    document.getElementById('lista').innerHTML = cadena;**/
    if (contador > 0 && bandera != true) {
        if (cadena === "chocolate") {
            bandera = true;
            adiviniza += "<p>" + adivinizaAcertada + "</p>"
            document.getElementById('lista').innerHTML = adiviniza;
        }
        else {
            contador -= 1;
            console.log(contador)
            if (contador === 3) {
                adiviniza += "<p>" + adiviniza1 + "</p>"
                document.getElementById('lista').innerHTML = adiviniza;
            }
            else if (contador === 2) {
                adiviniza += "<p>" + adiviniza2 + "</p>"
                document.getElementById('lista').innerHTML = adiviniza;
            }
            else if (contador === 1) {
                adiviniza += "<p>" + adiviniza3 + "</p>"
                document.getElementById('lista').innerHTML = adiviniza;
            }
        }
    }

}
