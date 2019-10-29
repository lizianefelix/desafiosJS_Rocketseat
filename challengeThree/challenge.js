const btnDesafiar = document.getElementById('btn_desafiar');
const valueSelect = document.getElementById('numero_desafio');

//esconder desafio 01
const container_idade = document.getElementById('container_idade');
container_idade.style.display = 'none';
container_idade.style.marginTop = '30px';

//esconder desafio 02
const container_user = document.getElementById('container_user');
container_user.style.display = 'none';
container_user.style.marginTop = '30px';

btnDesafiar.onclick = function () {
    //limpar conteúdo dos desafios
    container_idade.style.display = 'none';
    container_user.style.display = 'none';

    //condicionais para seleção de desafio
    if (valueSelect.value == 1) {
        const conteudoIdade = document.getElementById('conteudo_idade');
        const btnIdade = document.getElementById('btn_idade');
        container_idade.style.display = 'block';

        btnIdade.onclick = function () {
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
                });
        }
    }
    else if (valueSelect.value == 2) {
        const btnUser = document.getElementById('btn_user');
        const conteudoUser = document.getElementById('conteudo_user');
        const userName = document.querySelector('#container_user h4');
        const errorUser = document.getElementById('error_user');
        container_user.style.display = 'block';

        btnUser.onclick = function () {
            const userValue = document.getElementById('input_user');
            let user = userValue.value;

            conteudoUser.innerHTML = "";
            errorUser.innerText = "";

            axios.get(`https://api.github.com/users/${user}/repos`)
                .then(function (response) {
                    userName.innerText = `Repositório(s) de ${user}`;
                    userValue.value = "";
                    var repos = response.data;
                    for(repo of repos) {
                        var li = document.createElement('li');

                        li.innerText = repo.name;
                        conteudoUser.appendChild(li);
                    }
                })
                .catch(function (error) {
                    if(error.response.status === 404) {
                        errorUser.style.color = '#cc0000'
                        errorUser.innerText = `Usuário '${user}' não existe.`;
                        userValue.value = "";
                    }
                });
        }
    }
    else if (valueSelect.value == 3) {
        console.log(valueSelect.value);
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


// axios.get('https://api.github.com/users/lizianefelix')
//     .then(function (response) {
//         console.log(response.data.avatar_url);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// var minhaPromise = function() {
//     return new Promise(function(resolve, reject) {

//         var xhr = new XMLHttpRequest();

//         xhr.open('GET', 'https://api.github.com/users/lizianefelix');
//         xhr.send(null);

//         xhr.onreadystatechange = function() {
//             if(xhr.readyState === 4) {
//                 if(xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//                 else{
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     });
// }

// minhaPromise()
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.log(error);
//     })