let imagemCenario
let imagemPersonagem
let imagemInimigo
let imagemInimigoGrande
let imagemInimigoVoador
let imagemGameOver
let alturaDaPersonagem = 135
let cenario
let personagem
let inimigo 
let inimigoGrande
let inimigoVoador
let pontuacao
let inimigoAtual = 0



const matrizInimigo = [
	[0, 0],
	[104, 0],
	[208, 0],
	[312, 0],
	[0, 104],
	[104, 104],
	[208, 104],
	[312, 104],
	[0, 208],
	[104, 208],
	[208, 208],
	[312, 208],
	[0, 312],
	[104, 312],
	[208, 312],
	[312, 312],
	[0, 418],
	[104, 418],
	[208, 418],
	[312, 418],
	[0, 522],
	[104, 522],
	[208, 522],
	[312, 522],
	[0, 626],
	[104, 626],
	[208, 626],
	[312, 626],
  ]
const matrizInimigoGrande = [
	[0,0],
	[400,0],
	[800,0],
	[1200,0],
	[1600,0],
	[0,400],
	[400,400],
	[800,400],
	[1200, 400],
	[1600, 400],
	[0,800],
	[400, 800],
	[800, 800],
	[1200, 800],
	[1600, 800],
	[0, 1200],
	[400, 1200],
	[800, 1200],
	[1200, 1200],
	[1600, 1200], 
	[0, 1600],
	[400, 1600],
	[800, 1600],
	[1200, 1600],
	[1600, 1600],
	[0, 2000],
	[400, 2000],
	[800, 2000],
  ]
const matrizPersonagem = this.matriz = [ 
	[0,0],  [220,0],  [440,0], [660,0],
	[0,270], [220,270], [440,270], [660,270],
	[0,540], [220,540], [440,540], [660,540],
	[0,810], [220,810], [440,810], [660,810]
  ]
  const matrizInimigoVoador =  [
	[0,0],
	[200, 0],
	[400, 0],
	[0, 150],
	[200, 150],
	[400, 150],
	[0, 300],
	[200, 300],
	[400, 300],
	[0, 450],
	[200, 450],
	[400, 450],
	[0, 600],
	[200, 600],
	[400, 600],
	[0, 750],
  ]

const inimigos = []

  // essa matriz é o mapeamento da imagem da personagem. A imagem da personagem é composta de 16 figuras diferentes que simulam a movimentação. 

 // o loadImage e loadSound são funções do p5.js , conseguimos acessar por conta do nosso acesso a biblioteca no index.html
function preload() {
	imagemCenario = loadImage ('imagens/cenario/floresta.png')
	imagemGameOver = loadImage ('imagens/assets/game-over.png')
	imagemPersonagem = loadImage ('imagens/personagem/correndo.png')
	imagemInimigoGrande = loadImage ('imagens/inimigos/troll.png')
	imagemInimigoVoador = loadImage ('imagens/inimigos/gotinha-voadora.png')
	somDoPulo = loadSound('sons/somPulo.mp3') 
	somDoJogo = loadSound('sons/trilha_jogo.mp3')

	imagemInimigo = loadImage ('imagens/inimigos/gotinha.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	cenario = new Cenario(imagemCenario, 3) // aqui é minha velocidade
	pontuacao = new Pontuacao()

	personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270) // aumentar o 110 e o 135 eventualmente
	const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width-52, 30, 52, 52, 104, 104, 10, 200)  // instanciar  aumentar o 52 e o 52 eventualmente
	const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10, 0) // matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay
	const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 0)
	
		inimigos.push(inimigo)
		inimigos.push(inimigoGrande)
		inimigos.push(inimigoVoador)
	frameRate(40) // velocidade de carregamento 
	
  }

  function keyPressed() { // função observadora nativa do p5 
	  if (key === 'ArrowUp') {
		  personagem.pula()
		  somDoPulo.play()
	  } else if (key === 'm') { // Minha alteração no projeto para tocar musica apenas se pressionar a tecla m
		somDoJogo.play()
	} else if (key === 'n') { // Mutar o jogo com a tecla n
		somDoJogo.stop()
	}

 }
  
  function draw() {
	cenario.exibe() // chamar exibe
	cenario.move() // chamar move

	pontuacao.exibe()
	pontuacao.adicionarPonto()
	
	personagem.exibe()
	personagem.aplicaGravidade()


	const inimigo = inimigos[inimigoAtual] // Para saber qual será nosso inimigo atual na tela
	const inimigoVisivel = inimigo.x < -inimigo.largura // saber se ele já passou todo

	inimigo.exibe()
	inimigo.move()

	if (inimigoVisivel){
		inimigoAtual++
		if (inimigoAtual > 2) {
			inimigoAtual = 0
		}
		inimigo.velocidade = parseInt(random(5,30))
	}



	if (personagem.estaColidindo(inimigo)){
		image(imagemGameOver, width/2 - 200, height/3)
		noLoop()
		}
	}

	

  