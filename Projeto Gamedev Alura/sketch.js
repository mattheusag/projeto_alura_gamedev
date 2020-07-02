let imagemCenario;
let imagemPersonagem;
let imagemInimigo
let alturaDaPersonagem = 135;
let cenario;
// let somdojogo
let personagem
let inimigo 
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
const matrizPersonagem = this.matriz = [ 
	[0,0],  [220,0],  [440,0], [660,0],
	[0,270], [220,270], [440,270], [660,270],
	[0,540], [220,540], [440,540], [660,540],
	[0,810], [220,810], [440,810], [660,810]
  ]
  // essa matriz é o mapeamento da imagem da personagem. A imagem da personagem é composta de 16 figuras diferentes que simulam a movimentação. 

 // o loadImage e loadSound são funções do p5.js , conseguimos acessar por conta do nosso acesso a biblioteca no index.html
function preload() {
	imagemCenario = loadImage ('imagens/cenario/floresta.png')
	imagemPersonagem = loadImage ('imagens/personagem/correndo.png')
	somDoPulo = loadSound('sons/somPulo.mp3') 
	somDoJogo = loadSound('sons/trilha_jogo.mp3')

	imagemInimigo = loadImage ('imagens/inimigos/gotinha.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	cenario = new Cenario(imagemCenario, 3) // aqui é minha velocidade

	personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270)
	inimigo = new Inimigo(matrizInimigo, imagemInimigo, width-52, 52, 52, 104, 104)  // instanciar 
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

	personagem.exibe()
	personagem.aplicaGravidade()

	inimigo.exibe()
	inimigo.move()

	if (personagem.estaColidindo(inimigo)){
		noLoop()
	}
	
  }

  