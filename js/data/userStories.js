const menuStories = {
    visualizeMenu: {
        id: "US-M01",
        title: "Visualizar Menu Principal",
        description: "Eu, como jogador, desejo visualizar um menu principal ao iniciar o jogo para ter acesso às opções disponíveis.",
        scenarios: [{
            name: "Cenário 1 - Acesso ao menu principal",
            given: ["O jogador abre a aplicação do jogo"],
            when: "A página é carregada",
            then: [
                "O menu principal é exibido com o título do jogo",
                "São mostrados botões para 'Iniciar Jogo' e 'Ver Histórias do Menu'",
                "São exibidas instruções básicas de controle"
            ]
        }]
    },
    startGame: {
        id: "US-M02",
        title: "Iniciar Jogo",
        description: "Eu, como jogador, desejo clicar no botão 'Iniciar Jogo' para começar a jogar e explorar o cenário.",
        scenarios: [{
            name: "Cenário 1 - Início do jogo via botão",
            given: [
                "O jogador está no menu principal",
                "O botão 'Iniciar Jogo' está visível"
            ],
            when: "O jogador clica no botão 'Iniciar Jogo'",
            then: [
                "O menu é ocultado",
                "A tela do jogo é exibida com o cenário",
                "O personagem aparece na posição inicial",
                "Os controles de movimentação são ativados"
            ]
        }]
    },
    viewStories: {
        id: "US-M03",
        title: "Visualizar Histórias do Menu",
        description: "Eu, como jogador, desejo visualizar as histórias de usuário relacionadas ao menu para entender as funcionalidades disponíveis.",
        scenarios: [
            {
                name: "Cenário 1 - Abrir modal de histórias",
                given: [
                    "O jogador está no menu principal",
                    "O botão 'Ver Histórias do Menu' está visível"
                ],
                when: "O jogador clica no botão 'Ver Histórias do Menu'",
                then: [
                    "Um modal é exibido sobrepondo o menu",
                    "São mostradas todas as histórias de usuário do menu",
                    "Cada história exibe ID, título, descrição e cenários",
                    "Um botão de fechar (×) é exibido"
                ]
            },
            {
                name: "Cenário 2 - Fechar modal de histórias",
                given: ["O modal de histórias está aberto"],
                when: "O jogador clica no botão de fechar (×)",
                then: [
                    "O modal é ocultado",
                    "O menu principal volta a ser exibido",
                    "Os botões do menu continuam funcionais"
                ]
            }
        ]
    },
    returnMenu: {
        id: "US-M04",
        title: "Retornar ao Menu",
        description: "Eu, como jogador, desejo retornar ao menu principal durante o jogo para reiniciar ou ver as opções disponíveis.",
        scenarios: [{
            name: "Cenário 1 - Voltar ao menu durante o jogo",
            given: [
                "O jogador está jogando",
                "O botão 'Voltar ao Menu' está visível nos controles"
            ],
            when: "O jogador clica no botão 'Voltar ao Menu'",
            then: [
                "A tela do jogo é ocultada",
                "O menu principal é exibido novamente",
                "O estado do jogo é resetado",
                "Todos os botões do menu estão funcionais"
            ]
        }]
    }
};

// Histórias de Usuário do Jogo
const gameStories = {
    moveLeft: {
        id: "US-001",
        title: "Movimentação para Esquerda",
        description: "Eu, como jogador, desejo mover o personagem para esquerda para explorar o ambiente do jogo.",
        scenarios: [{
            name: "Cenário 1 - Movimentação livre para esquerda",
            conditions: [
                "Dado que o jogador está em uma área sem obstáculos à esquerda",
                "E a tecla A ou Seta Esquerda está pressionada"
            ],
            action: "Quando o jogador aciona o movimento para esquerda",
            results: [
                "Então o personagem se move para a esquerda",
                "E a animação de caminhada para esquerda é exibida",
                "E o sprite de walk-left é usado"
            ]
        }]
    },
    moveRight: {
        id: "US-002",
        title: "Movimentação para Direita",
        description: "Eu, como jogador, desejo mover o personagem para direita para avançar no jogo.",
        scenarios: [{
            name: "Cenário 1 - Movimentação livre para direita",
            conditions: [
                "Dado que o jogador está em uma área sem obstáculos à direita",
                "E a tecla D ou Seta Direita está pressionada"
            ],
            action: "Quando o jogador aciona o movimento para direita",
            results: [
                "Então o personagem se move para a direita",
                "E a animação de caminhada para direita é exibida",
                "E o sprite de walk-right é usado"
            ]
        }]
    },
    moveUp: {
        id: "US-003",
        title: "Movimentação para Cima",
        description: "Eu, como jogador, desejo mover o personagem para cima para explorar diferentes áreas.",
        scenarios: [{
            name: "Cenário 1 - Movimentação livre para cima",
            conditions: [
                "Dado que o jogador está em uma área sem obstáculos acima",
                "E a tecla W ou Seta Cima está pressionada"
            ],
            action: "Quando o jogador aciona o movimento para cima",
            results: [
                "Então o personagem se move para cima",
                "E a animação de caminhada para cima é exibida",
                "E o sprite de walk-up é usado"
            ]
        }]
    },
    moveDown: {
        id: "US-004",
        title: "Movimentação para Baixo",
        description: "Eu, como jogador, desejo mover o personagem para baixo para descer no cenário.",
        scenarios: [{
            name: "Cenário 1 - Movimentação livre para baixo",
            conditions: [
                "Dado que o jogador está em uma área sem obstáculos abaixo",
                "E a tecla S ou Seta Baixo está pressionada"
            ],
            action: "Quando o jogador aciona o movimento para baixo",
            results: [
                "Então o personagem se move para baixo",
                "E a animação de caminhada para baixo é exibida",
                "E o sprite de walk-down é usado"
            ]
        }]
    },
    collisionBox: {
        id: "US-005",
        title: "Colisão com Caixa",
        description: "Eu, como jogador, desejo colidir com caixas para interagir com objetos do cenário.",
        scenarios: [{
            name: "Cenário 1 - Personagem colide com caixa",
            conditions: [
                "Dado que existe uma caixa no cenário",
                "E o personagem está se movendo em direção à caixa"
            ],
            action: "Quando o personagem entra em contato com a caixa",
            results: [
                "Então uma interação é detectada",
                "E o sistema exibe informações sobre a colisão",
                "E a caixa pode mudar de cor para indicar a interação"
            ]
        }]
    },
    collisionGift: {
        id: "US-006",
        title: "Colisão com Presente",
        description: "Eu, como jogador, desejo colidir com presentes para coletar itens especiais.",
        scenarios: [{
            name: "Cenário 1 - Personagem colide com presente",
            conditions: [
                "Dado que existe um presente no cenário",
                "E o personagem está se movendo em direção ao presente"
            ],
            action: "Quando o personagem entra em contato com o presente",
            results: [
                "Então o presente é coletado",
                "E feedback visual é exibido",
                "E o jogador pode receber bônus ou power-ups"
            ]
        }]
    },
    collisionStar: {
        id: "US-007",
        title: "Colisão com Estrela",
        description: "Eu, como jogador, desejo colidir com estrelas para ganhar pontos ou conquistas.",
        scenarios: [{
            name: "Cenário 1 - Personagem colide com estrela",
            conditions: [
                "Dado que existe uma estrela no cenário",
                "E o personagem está se movendo em direção à estrela"
            ],
            action: "Quando o personagem entra em contato com a estrela",
            results: [
                "Então a estrela é coletada",
                "E pontos são adicionados ao placar",
                "E animação de coleta é exibida"
            ]
        }]
    }
};