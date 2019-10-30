const btnDesafiar = document.getElementById('btn_desafiar');
const valueSelect = document.getElementById('numero_desafio');
const loading = document.getElementById('loading');

//esconder desafio 01
const containerIdade = document.getElementById('container_idade');
containerIdade.style.display = 'none';
containerIdade.style.marginTop = '30px';

//esconder desafio 02
const containerUser = document.getElementById('container_user');
containerUser.style.display = 'none';
containerUser.style.marginTop = '30px';

btnDesafiar.onclick = function () {
    //limpar conteúdo dos desafios
    containerIdade.style.display = 'none';
    containerUser.style.display = 'none';

    //condicionais para seleção de desafio
    if (valueSelect.value == 1) {
        desafioIdade();
    }
    else if (valueSelect.value == 2) {
        desafioUser();
    }
}

//desafio 01/
function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        if (idade > 18) {
            setTimeout(() => resolve(), 2000);
        }
        else {
            setTimeout(() => reject(), 2000);
        }
    });
}

//desafio 01/
function desafioIdade() {
    const conteudoIdade = document.getElementById('conteudo_idade');
    const btnIdade = document.getElementById('btn_idade');
    containerIdade.style.display = 'block';

    btnIdade.onclick = function () {
        conteudoIdade.innerText = "";
        loading.classList.remove('hidden');

        const idadeValue = document.getElementById('input_idade');
        let idade = idadeValue.value;

        checaIdade(idade)
            .then(function () {
                conteudoIdade.innerText = `${idade} é maior que 18`;
                idadeValue.value = "";
            })
            .catch(function () {
                conteudoIdade.innerText = `${idade} é menor que 18`;
                idadeValue.value = "";
            })
            .then(function () {
                loading.classList.add('hidden');
            });
    }
}

function desafioUser() {
    const btnUser = document.getElementById('btn_user');
    const conteudoUser = document.getElementById('conteudo_user');
    const userName = document.querySelector('#container_user h4');
    const errorUser = document.getElementById('error_user');
    containerUser.style.display = 'block';

    btnUser.onclick = function () {
        loading.classList.remove('hidden');

        const userValue = document.getElementById('input_user');
        let user = userValue.value;

        conteudoUser.innerHTML = "";
        errorUser.innerText = "";

        axios.get(`https://api.github.com/users/${user}/repos`)
            .then(function (response) {
                userName.innerText = `Repositório(s) de ${user}`;
                userValue.value = "";
                var repos = response.data;
                for (repo of repos) {
                    var li = document.createElement('li');

                    li.innerText = repo.name;
                    conteudoUser.appendChild(li);
                }
            })
            .catch(function (error) {
                if (error.response.status === 404) {
                    userName.innerText = "";
                    errorUser.style.color = '#cc0000'
                    errorUser.innerText = `Usuário '${user}' não existe.`;
                    userValue.value = "";
                }
            })
            .then(function () {
                loading.classList.add('hidden');
            });
    }
}