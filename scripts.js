function send() {

    let names = document.getElementById("name").value
    let age = document.getElementById("age").value;
    let language = document.getElementById("language").value;

    if (names == "" || age == "" || language == "") {
        alert('Precisa preencher todos os campos')
    } else {
        alert(`Olá ${names}, você tem ${age} anos e já está aprendendo ${language}!`);


        let liked = window.prompt(`Você gosta de estudar ${language}? Responda com o número 1 para SIM ou 2 para NÃO.`, '1');


        while (liked != 1 && liked != 2) {
            liked = window.prompt(`Você gosta de estudar ${language}? Responda com o número 1 para SIM ou 2 para NÃO.`, '1');

        }

        if (liked == 1) {
            alert('Muito bom! Continue estudando e você terá muito sucesso.')

        } else if (liked == 2) {
            alert('Ahh que pena... Já tentou aprender outras linguagens?')
        }
    }
}



