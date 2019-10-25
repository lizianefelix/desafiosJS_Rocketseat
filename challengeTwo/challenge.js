const btnChallenge = document.getElementById('btn_desafiar');
const valueSelect = document.getElementById('numero_desafio');
const divQuadrado = document.getElementById('div_quadrado');

btnChallenge.onclick = function () {
    var divBtn = document.getElementById('div_btn');

    divBtn.innerHTML = "";
    divQuadrado.innerHTML = "";

    if (valueSelect.value == 1 || valueSelect.value == 2) {

        var btnCreate = document.createElement('input');
        var btnDelete = document.createElement('input');

        btnCreate.setAttribute('type', 'button');
        btnCreate.setAttribute('value', 'Gerar Quadrado');
        btnCreate.setAttribute('id', 'gerar_quadrado');
        btnCreate.style.fontWeight = '500';
        btnCreate.style.backgroundColor = '#75C34B';
        btnCreate.style.color = '#fff';
        btnCreate.style.padding = '10px';
        btnCreate.style.marginRight = '5px';
        btnCreate.style.border = '0px';
        btnCreate.onclick = gerarQuadrado;

        btnDelete.setAttribute('type', 'button');
        btnDelete.setAttribute('value', 'Deletar Quadrado');
        btnDelete.setAttribute('id', 'deletar_quadrado');
        btnDelete.style.fontWeight = '500';
        btnDelete.style.backgroundColor = '#b71c1c';
        btnDelete.style.color = '#fff';
        btnDelete.style.padding = '10px';
        btnDelete.style.border = '0px';
        btnDelete.onclick = deletarQuadrado;

        divBtn.appendChild(btnCreate);
        divBtn.appendChild(btnDelete);

    }
    else if (valueSelect.value == 3) {

    }
    else if (valueSelect.value == 4) {



    }
    else if (valueSelect.value == 5) {


    }
};

//desafio 01+02
function gerarQuadrado() {
    var quadrado = document.createElement('div');

    quadrado.style.width = '100px';
    quadrado.style.height = '100px';
    quadrado.style.backgroundColor = '#E63462';
    quadrado.style.marginTop = '10px';

    divQuadrado.appendChild(quadrado);

    if (valueSelect.value == 2) {
        quadrado.onmouseover = mudarCor;
    }
}

//desafio 01+02
function deletarQuadrado() {
    divQuadrado.firstChild.remove();
}

//desafio 02
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//desafio 02
function mudarCor() {
    this.style.backgroundColor = getRandomColor();
}