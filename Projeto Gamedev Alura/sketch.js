let imagemCenario;
let imagemPersonagem;
let alturaDaPersonagem = 135;
let cenario;
// let somdojogo
let personagem


 // o loadImage é uma função do p5.js , conseguimos acessar por conta do nosso acesso a biblioteca no index.html
function preload() {
	imagemCenario = loadImage ('imagens/cenario/floresta.png')
	imagemPersonagem = loadImage ('imagens/personagem/correndo.png')
	// somdojogo = loadSound('sons/trilha.mp3') // Não estou conseguindo carregar o som adequadamente.
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	cenario = new Cenario(imagemCenario, 3) // aqui é minha velocidade
	// somdojogo.play()
	personagem = new Personagem(imagemPersonagem)
	frameRate(40) // velocidade de carregamento 
  }
  
  function draw() {
	cenario.exibe() // chamar exibe
	cenario.move() // chamar move
	personagem.exibe()

  }

  