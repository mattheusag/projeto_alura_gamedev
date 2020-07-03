
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
    imagemTelaInicial = loadImage ('imagens/assets/telaInicial.png')
    imagemVida = loadImage ('imagens/assets/coracao.png')
    fonteTelaInicial = loadFont ('imagens/assets/fonteTelaInicial.otf')
}