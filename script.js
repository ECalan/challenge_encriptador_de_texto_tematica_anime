
function botonEncriptar(){
    var texto = document.getElementsByClassName("textoIngresado")[0].value;
    var mapearObjeto = {a:"ai", e:"enter", i:"imes", o:"ober", u:"ufat"};

    if(texto == ""){
        Swal.fire ({title: 'Por favor ingrese texto',
        icon: "warning",
        color: '#0A3871',
        backdrop: `rgba(0,0,0,0.4)`,
        showConfirmButton: false,
        timer: 1150});
    }
    else{
    document.querySelector(".contenidoCuadro").style.display ="none";
    document.querySelector(".areaDeCifrado").style.display ="inline-block";   
    texto = texto.replace(/a|e|i|o|u/g, function(encontrado){return mapearObjeto[encontrado]})
    document.querySelector(".mensaje").value = (texto);
    document.querySelector(".textoIngresado").value ="";
    }
}

function botonDesencriptar(){
    var texto = document.getElementsByClassName("textoIngresado")[0].value;
    var mapearObjeto = {ai:"a", enter:"e", imes:"i", ober:"o", ufat:"u"};

    if(texto == ""){
        Swal.fire ({title: 'Por favor ingrese texto',
        icon: "warning",
        color: '#0A3871',
        backdrop: `rgba(0,0,0,0.4)`,
        showConfirmButton: false,
        timer: 1150});
    }
    else{
    document.querySelector(".contenidoCuadro").style.display ="none";
    document.querySelector(".areaDeCifrado").style.display ="inline-block";
    texto = texto.replace(/ai|enter|imes|ober|ufat/g, function(encontrado){return mapearObjeto[encontrado]})
    document.querySelector(".mensaje").value = (texto);
    document.querySelector(".textoIngresado").value ="";
    }
}

function botonCopiar(){
    var contenido = document.getElementsByClassName("mensaje")[0].value;
    
    if (contenido == ""){
        Swal.fire ({title: 'No se encontraron datos',
        icon: "error",
        color: '#0A3871',
        backdrop: `rgba(0,0,0,0.4)`,
        showConfirmButton: false,
        timer: 1100});
    }
    else{
        navigator.clipboard.writeText(contenido)
        document.querySelector(".mensaje").value ="";
        Swal.fire ({title: 'Copiado',
        icon: "success",
        color: '#0A3871',
        backdrop: `rgba(0,0,0,0.4)`,
        showConfirmButton: false,
        timer: 1100});
    }
    
}

encriptar.onclick = botonEncriptar;
desencriptar.onclick = botonDesencriptar;
copiar.onclick = botonCopiar;
