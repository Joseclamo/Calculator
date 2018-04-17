//Nueva variable de la clase Calculadora

let myCalc = new Calculadora();

//Usuario introduce variables por ventana
let num1 = "";
let num2 = "";

function operate(num1, num2) {
    //Realizar las operaciones
    let suma = myCalc.add(num1, num2);
    let resta = myCalc.substract(num1, num2);
    let mult = myCalc.multiply(num1, num2);
    let division = myCalc.divide(num1, num2);

    //MOSTRAR POR CONSOLA
    console.log(`NUM1: ${num1}
NUM2: ${num2}`);
    console.log(`SUMA: ${suma}
RESTA: ${resta}
MULTIPLICACIÓN: ${mult}
DIVISIÓN: ${division}`);

    //MOSTRAR EN LA PÁGINA WEB
    document.getElementById('suma').innerHTML = `Suma: ${suma}`;
    document.getElementById('resta').innerHTML = `Resta: ${resta}`;
    document.getElementById('mult').innerHTML = `Multiplicación: ${mult}`;
    document.getElementById('div').innerHTML = `División: ${division}`;
}

//Coger pulsación de botones
$('#0').click(function() {
    if (num1 == "") {
        num1 = 0;
    } else {
        num2 = 0;
    }
});
$('#1').click(function() {
    if (num1 == "") {
        num1 = 1;
    } else {
        num2 = 1;
    }
});
$('#2').click(function() {
    if (num1 == "") {
        num1 = 2;
    } else {
        num2 = 2;
    }
});
$('#3').click(function() {
    if (num1 == "") {
        num1 = 3;
    } else {
        num2 = 3;
    }
});
$('#4').click(function() {
    if (num1 == "") {
        num1 = 4;
    } else {
        num2 = 4;
    }
});
$('#5').click(function() {
    if (num1 == "") {
        num1 = 5;
    } else {
        num2 = 5;
    }
});
$('#6').click(function() {
    if (num1 == "") {
        num1 = 6;
    } else {
        num2 = 6;
    }
});
$('#7').click(function() {
    if (num1 == "") {
        num1 = 7;
    } else {
        num2 = 7;
    }
});
$('#8').click(function() {
    if (num1 == "") {
        num1 = 8;
    } else {
        num2 = 8;
    }
});
$('#9').click(function() {
    if (num1 == "") {
        num1 = 9;
    } else {
        num2 = 9;
    }
});
$('#enter').click(function() {
    operate(num1, num2);
});