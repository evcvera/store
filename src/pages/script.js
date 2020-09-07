let lista = [];
let cadena = "";
let contador = 4;
let bandera = false;
let adiviniza = "";
let ganaste ="";
let intento="";
const adiviniza1 = "Lorem ipsum1 ";
const adiviniza2 = "Lorem ipsum2 ";
const adivinizaAcertada = "¡¡¡ Felicidades !!! seras gordo/a, pero feliz de morfar chocolate.";


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
            document.getElementById('lista').innerHTML = adiviniza;
        }
        else {
            contador -= 1;
            console.log(contador)
            if (contador === 2) {
                adiviniza +="<p><b>" + "PISTA 2" + "</b></p>" + "<p>" + adiviniza1 + "</p>" + "<hr>"
                document.getElementById('lista').innerHTML = adiviniza;
            }
            else if (contador === 1) {
                adiviniza += "<p><b>" + "PISTA 3" + "</b></p>" + "<p>" + adiviniza2 + "</p>" + "<hr>"
                document.getElementById('lista').innerHTML = adiviniza;
            }
        }
    }

    if(bandera==true){
        ganaste += "<h1>" + adivinizaAcertada + "</h1>"
        document.getElementById('felicidades').innerHTML = ganaste;
    }

    intento = "<p> Le quedan " + contador + " intentos.</p>"
    document.getElementById('intentos').innerHTML = intento;
}
