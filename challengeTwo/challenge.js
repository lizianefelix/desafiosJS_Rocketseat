const btnChallenge = document.getElementById('btn_desafiar');
const valueSelect = document.getElementById('numero_desafio');

btnChallenge.onclick = function () {

    if (valueSelect.value == 1 || valueSelect.value == 2) {

        const divBtn = document.getElementById('div_btn');
        const divQuadrado = document.getElementById('div_quadrado');
        const btnCreate = document.createElement('input');
        const btnDelete = document.createElement('input');

        btnCreate.setAttribute('type', 'button');
        btnCreate.setAttribute('value', 'Gerar Quadrado');
        btnCreate.setAttribute('id', 'gerar_quadrado');
        btnCreate.style.fontWeight = '500';
        btnCreate.style.backgroundColor = '#75C34B';
        btnCreate.style.color = '#fff';
        btnCreate.style.padding = '10px';
        btnCreate.style.marginRight = '5px';
        btnCreate.style.border = '0px';

        btnDelete.setAttribute('type', 'button');
        btnDelete.setAttribute('value', 'Deletar Quadrado');
        btnDelete.setAttribute('id', 'deletar_quadrado');
        btnDelete.style.fontWeight = '500';
        btnDelete.style.backgroundColor = '#b71c1c';
        btnDelete.style.color = '#fff';
        btnDelete.style.padding = '10px';
        btnDelete.style.border = '0px';

        divBtn.appendChild(btnCreate);
        divBtn.appendChild(btnDelete);

        const btnGerarQuadrado = document.getElementById('gerar_quadrado');
        const btnDeletarQuadrado = document.getElementById('deletar_quadrado');

        let quadrado;
        btnGerarQuadrado.onclick = function () {
            quadrado = document.createElement('div');

            quadrado.style.width = '100px';
            quadrado.style.height = '100px';
            quadrado.style.backgroundColor = '#E63462';
            quadrado.style.marginTop = '10px';

            divQuadrado.appendChild(quadrado);

            quadrado.onmouseover = function () {
                var newColor = getRandomColor();
                quadrado.style.backgroundColor = newColor;
            }

            // const legnthQuadrados = document.querySelectorAll('#div_quadrado div');
            // if (legnthQuadrados.length > 0) {
            //     for (quadrados of legnthQuadrados) {
            //         quadrados.onmouseover = function () {
            //             var newColor = getRandomColor();
            //             quadrado.style.backgroundColor = newColor;
            //         }
            //     }
            //     // if (valueSelect.value == 2) {
            //     //     quadrado.onmouseover = function () {
            //     //         quadrado.style.backgroundColor = newColor;
            //     //     }
            //     // }
            // }
        }

        btnDeletarQuadrado.onclick = function () {
            divQuadrado.firstChild.remove();
        }

        function getRandomColor() {
            var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    }
    else if (valueSelect.value == 3) {

    }
    else if (valueSelect.value == 4) {



    }
    else if (valueSelect.value == 5) {


    }
};
