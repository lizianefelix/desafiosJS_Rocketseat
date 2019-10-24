const btnChallenge = document.getElementById('btn_desafiar');
const valueSelect = document.getElementById('numero_desafio');

btnChallenge.onclick = function () {

    if (valueSelect.value == 1) {

        var endereco = {
            rua: "Rua dos pinheiros",
            numero: 1293,
            bairro: "Centro",
            cidade: "São Paulo",
            uf: "SP"
        };

        const { cidade, uf, bairro, rua, numero } = endereco;

        console.log(`O usuário mora em ${cidade} / ${uf}, no bairro ${bairro}, na rua "${rua}" com nº ${numero}.`);

    }
    else if (valueSelect.value == 2) {

        function pares(x, y) {

            for (let i = x; i <= y; i++) {
                if (i % 2 == 0) {
                    console.log(i);
                }
            }

        }

        pares(32, 321);
    }
    else if (valueSelect.value == 3) {

        function temHabilidade(skills) {
            const trueOrFalse = skills.indexOf('Javascript') != -1 ? true : false;

            console.log(trueOrFalse);
        }

        var skills = ["Javascript", "ReactJS", "React Native"];
        temHabilidade(skills);

    }
    else if (valueSelect.value == 4) {

        function experiencia(anos) {
            if (anos < 1) {
                console.log('Iniciante');
            }
            else if (anos < 3) {
                console.log('Intermediário');
            }
            else if (anos <= 6) {
                console.log('Avançado');
            }
            else if (anos >= 7) {
                console.log('Jedi Master');
            }
        }

        const anosEstudo = 7;
        experiencia(anosEstudo);

    }
    else if (valueSelect.value == 5) {

        const usuarios = [
            {
                nome: "Diego",
                habilidades: ["Javascript", "ReactJS", "Redux"]
            },
            {
                nome: "Gabriel",
                habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
            }
        ];

        for(usuario of usuarios) {
            let mensagem = `O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}`;

            console.log(mensagem);
        }
    }
};
