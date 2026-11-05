
let navegador = navigator.userAgent;
let sistema = "No se identifica el sistema.";


if (navegador.includes("Windows")) {
    sistema = "Windows";
} 
else if (navegador.includes("Mac")) {
    sistema = "Mac";
} 
else if (navegador.includes("Linux")) {
    sistema = "Linux";
}


document.getElementById("bienvenida").textContent =
    "Bienvenido, estás utilizando " + sistema;


document.getElementById("conHistorial").addEventListener("click", function() {

    // assign() te lleva a Ilerna y conserva la página actual en el historial pudiendo volver atrás.
    window.opener.location.assign("https://www.ilerna.es");

});



document.getElementById("sinHistorial").addEventListener("click", function() {

    // replace() sustituye la página actual en el historial, por lo que no vuelve atrás.
    window.opener.location.replace("https://www.ilerna.es");

});


// Al pulsar este botón, inicio una cuenta atrás antes de cerrar la ventana satélite.

document.getElementById("autodestruccion").addEventListener("click", function() {

    // Inicio el contador en cinco y guardo los elementos que voy a actualizar.
    let segundos = 5;
    let cuentaAtras = document.getElementById("cuentaAtras");


    // Esta función muestra el tiempo restante y programa el siguiente paso.
    function actualizarCuentaAtras() {
        cuentaAtras.textContent =
            "La ventana se cerrará en " + segundos + " segundos...";

        // Cuando queda un segundo, espera la resta del segundo y cierra la ventana.
        if (segundos === 1) {
            setTimeout(function() {
                window.close();
            }, 1000);
            return;
        }

        // Si todavía queda más de un segundo, resto uno y repito la función.
        segundos--;
        setTimeout(actualizarCuentaAtras, 1000);
    }

    actualizarCuentaAtras();

});