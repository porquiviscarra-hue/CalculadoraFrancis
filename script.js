function obtenerValores(){

    let n1 =
        parseFloat(document.getElementById("num1").value);

    let n2 =
        parseFloat(document.getElementById("num2").value);

    return [n1, n2];
}

function mostrarResultado(valor){

    document.getElementById("resultado").innerHTML =
        "Resultado: " + valor;
}

function sumar(){

    let [n1, n2] = obtenerValores();

    mostrarResultado(n1 + n2);
}

function restar(){

    let [n1, n2] = obtenerValores();

    mostrarResultado(n1 - n2);
}

function multiplicar(){

    let [n1, n2] = obtenerValores();

    mostrarResultado(n1 * n2);
}

function dividir(){

    let [n1, n2] = obtenerValores();

    if(n2 === 0){

        mostrarResultado("No se puede dividir para 0");

    }else{

        mostrarResultado(n1 / n2);
    }
}

function potencia(){

    let [n1, n2] = obtenerValores();

    mostrarResultado(n1 ** n2);
}

function factorial(){

    let numero =
        parseInt(document.getElementById("num1").value);

    if(numero < 0){

        mostrarResultado("No existe factorial negativo");

        return;
    }

    let fact = 1;

    for(let i = 1; i <= numero; i++){

        fact *= i;
    }

    mostrarResultado(fact);
}

function irEdad(){

    window.location.href = "edad.html";
}