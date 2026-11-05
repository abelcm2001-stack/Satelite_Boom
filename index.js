
let boton = document.getElementById("lanzar");


boton.addEventListener("click", 
    function() {

    let anchoVentana = 400;
    let altoVentana = 300;

    // Al dividir la diferencia entre dos, calculo el margen para centrarla.
    let izquierda = (screen.availWidth - anchoVentana) / 2;
    let arriba = (screen.availHeight - altoVentana) / 2;


    // ventanaSatelite le da nombre a la ventana. 
    // defino el width= le da anchura. height= le da tamaño. left= y top= coloca la ventana centro de la pantalla.
    window.open(
        "satelite.html",
        "ventanaSatelite",
        `width=${anchoVentana},height=${altoVentana},left=${izquierda},top=${arriba}`
    ); 

});