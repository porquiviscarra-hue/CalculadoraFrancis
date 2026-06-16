function calcularEdad(){

    let fechaNacimiento =
        document.getElementById("fechaNacimiento").value;

    let fechaNac = new Date(fechaNacimiento);

    let hoy = new Date();

    let edad =
        hoy.getFullYear() - fechaNac.getFullYear();

    let mes =
        hoy.getMonth() - fechaNac.getMonth();

    if(mes < 0 ||
      (mes === 0 &&
       hoy.getDate() < fechaNac.getDate())){

        edad--;
    }

    document.getElementById("edadResultado").innerHTML =
        "Tu edad es: " + edad + " años";
}

function volverCalculadora(){

    window.location.href = "index.html";
}