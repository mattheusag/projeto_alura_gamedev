

function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(40) // velocidade de carregamento 
	jogo = new Jogo()
	telaInicial = new TelaInicial()
	jogo.setup() // executa o metodo que foi criado na pasta jogo
	cenas = {   // objeto 
		jogo,  //  jogo:jogo 
		telaInicial // telaInicial:telaInicial
	}
	botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2)
  }

  function keyPressed() { // função observadora nativa do p5 
	jogo.keyPressed(key) 
	}
  
  function draw() {
	cenas[cenaAtual].draw()
	}

	

  