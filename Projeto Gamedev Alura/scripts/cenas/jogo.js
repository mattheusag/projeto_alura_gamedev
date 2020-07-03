class Jogo {
    constructor(){
        this.inimigoAtual = 0
    }

    setup(){
        cenario = new Cenario(imagemCenario, 3) // aqui é minha velocidade
        pontuacao = new Pontuacao()
    
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270) // aumentar o 110 e o 135 eventualmente
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width-52, 30, 52, 52, 104, 104, 10, 100)  // instanciar  aumentar o 52 e o 52 eventualmente
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15, 100) // matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100)
        
            inimigos.push(inimigo)
            inimigos.push(inimigoGrande)
            inimigos.push(inimigoVoador)

      
    }

    keyPressed(key){
        if (key === 'ArrowUp') {
            personagem.pula()
            somDoPulo.play()
        } else if (key === 'm') { // Minha alteração no projeto para tocar musica apenas se pressionar a tecla m
          somDoJogo.play()
      } else if (key === 'n') { // Mutar o jogo com a tecla n
          somDoJogo.stop()
    }
}

    draw(){
        cenario.exibe() // chamar exibe
        cenario.move() // chamar move
    
        pontuacao.exibe()
        pontuacao.adicionarPonto()
        
        personagem.exibe()
        personagem.aplicaGravidade()
    
        const inimigo = inimigos[this.inimigoAtual] // Para saber qual será nosso inimigo atual na tela
        const inimigoVisivel = inimigo.x < -inimigo.largura // saber se ele já passou todo
    
        inimigo.exibe()
        inimigo.move()
    
        if (inimigoVisivel){
            this.inimigoAtual++
            if (this.inimigoAtual > 2) {
                this.inimigoAtual = 0
            }
            inimigo.velocidade = parseInt(random(5,30))
        }
        if (personagem.estaColidindo(inimigo)){
            image(imagemGameOver, width/2 - 200, height/3)
            noLoop()
            }
    }
}
