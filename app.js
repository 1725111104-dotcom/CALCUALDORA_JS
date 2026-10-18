const pantalla = document.getElementById('pantalla');

function agregar(valor) {
    if (pantalla.textContent === '0' || pantalla.textContent === 'Error') {
        pantalla.textContent = valor;
    } else {
        pantalla.textContent += valor;
    }
}

function limpiar() {
    pantalla.textContent = '0';
}

function calcular() {
    try {

        let expresion = pantalla.textContent.replace(/x/g, '*');
        let resultado = eval(expresion);

        if (resultado === Infinity || isNaN(resultado)) {
            pantalla.textContent = 'Error';
        } else {
            pantalla.textContent = resultado;
        }
    } catch (error) {
        pantalla.textContent = 'Error';
    }
}
