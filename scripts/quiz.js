const perguntas = [
    {
        pergunta: "Quem é o maior artilheiro da história do Flamengo?",
        opcoes: ["Zico", "Gabriel Barbosa (Gabigol)", "Romário", "Fernando Viana"],
        resposta: 0
    },
    {
        pergunta: "Em qual ano o Flamengo conquistou sua primeira Copa Libertadores da América?",
        opcoes: ["1979", "1981", "1983", "1992"],
        resposta: 1
    },
    {
        pergunta: "Qual o nome do estádio onde o Flamengo manda seus jogos?",
        opcoes: ["Maracanã", "Arena da Baixada", "São Januário", "Engenhão"],
        resposta: 0
    },
    {
        pergunta: "Em 2019, o Flamengo conquistou a Copa Libertadores. Quem foi o técnico na conquista?",
        opcoes: ["Vanderlei Luxemburgo", "Jorge Jesus", "Abel Braga", "Renato Gaúcho"],
        resposta: 1
    },
    {
        pergunta: "Quem é o técnico do Flamengo na temporada de 2025?",
        opcoes: ["Jorge Jesus", "Renato Gaúcho", "Tite", "Felipe Luís"],
        resposta: 3
    },
    {
        pergunta: "Em que ano o Flamengo foi fundado?",
        opcoes: ["1895", "1912", "1899", "1900"],
        resposta: 0
    },
    {
        pergunta: "Quem foi o capitão do Flamengo durante a conquista da Libertadores de 2019?",
        opcoes: ["Everton Ribeiro", "Willian Arão", "Diego Ribas", "Rodrigo Caio"],
        resposta: 2
    },
    {
        pergunta: "Em 2009, o Flamengo conquistou o Campeonato Brasileiro. Quem era o técnico na época?",
        opcoes: ["Dorival Júnior", "Cuca", "Andrade", "Muricy Ramalho"],
        resposta: 2
    },
    {
        pergunta: "Qual jogador foi contratado pelo Flamengo em 2020 e rapidamente se destacou no ataque, marcando vários gols importantes?",
        opcoes: ["Michael", "Pedro", "Léo Pereira", "Thiago Maia"],
        resposta: 1
    },
    {
        pergunta: "Em 1981, o Flamengo conquistou o Mundial de Clubes. Qual time brasileiro foi o adversário na final?",
        opcoes: ["Chelsea", "Internacional", "Real Madrid", "Liverpool"],
        resposta: 3
    },
    {
        pergunta: "Quem foi o presidente do Flamengo no período de maior sucesso do clube, entre 2019 e 2020?",
        opcoes: ["Eduardo Bandeira de Mello", "Rodolfo Landim", "Marcos Braz", "Kleber Leite"],
        resposta: 1
    },
    {
        pergunta: "Qual é o animal que representa o mascote do Flamengo?",
        opcoes: ["Leão", "Urubu", "Águia", "Falcão"],
        resposta: 1
    },
    {
        pergunta: "Quem é o maior ídolo da história do Flamengo?",
        opcoes: ["Júnior", "Zico", "Rivaldo", "Romário"],
        resposta: 1
    },
    {
        pergunta: "Quem foi eleito o Melhor Jogador da Copa Libertadores de 2019?",
        opcoes: ["Everton Ribeiro", "Gabigol", "Bruno Henrique", "Arrascaeta"],
        resposta: 2
    },
    {
        pergunta: "Em que ano o Flamengo conquistou o Campeonato Brasileiro pela última vez antes de 2009?",
        opcoes: ["1987", "2000", "1998", "1992"],
        resposta: 3
    },
    {
        pergunta: "Qual é o nome do principal centro de treinamento do Flamengo?",
        opcoes: ["Ninho do Urubu", "CT Rubro-Negro", "Centro de Treinamento George Helal", "CT Gávea"],
        resposta: 0
    },
    {
        pergunta: "Em que ano o Flamengo conquistou a sua última Copa do Brasil?",
        opcoes: ["2022", "2024", "2017", "2019"],
        resposta: 1
    }
];

let indicePerguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta() {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    const containerQuiz = document.getElementById("quiz");
    containerQuiz.innerHTML = `
            <div class="pergunta">${perguntaAtual.pergunta}</div>
            <ul class="respostas">
                ${perguntaAtual.opcoes.map((opcao, indice) => `
                    <li><button onclick="verificarResposta(${indice})">${opcao}</button></li>
                `).join('')}
            </ul>
        `;
}

function verificarResposta(indiceSelecionado) {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    const botoes = document.querySelectorAll('.respostas button');

    if (indiceSelecionado === perguntaAtual.resposta) {
        botoes[indiceSelecionado].classList.add('correto');
        pontuacao++;
    } else {
        botoes[perguntaAtual.resposta].classList.add('correto');
        botoes[indiceSelecionado].classList.add('errado');
    }

    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        setTimeout(carregarPergunta, 1000);
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    const resultadoContainer = document.querySelector('.resultado');
    resultadoContainer.classList.remove('oculto');
    document.getElementById('pontuacao').innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;
}

function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    pontuacao = 0;
    carregarPergunta();
    document.querySelector('.resultado').classList.add('oculto');
}


carregarPergunta();