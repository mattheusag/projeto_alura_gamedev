// atraves deste codigo iremos controlar a animação tanto do nosso personagem quanto dos inimigos

class Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) { // x = posicionamento dele ta tela , largura e altura é o tamanho que aparecerá na tela, o largurasSprite e alturaSprite é na imagem do mapa 
        this.matriz = matriz
        this.imagem = imagem
        this.largura = largura
        this.altura = altura
        this.x = x 
        this.y = height - this.altura // ATENÇÃO AQUI
        this.larguraSprite = larguraSprite
        this.alturaSprite = alturaSprite

        this.frameAtual = 0
    }
    
    exibe(){
        image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite) /*image é nativo do j5 os parâmetros são: a variavel, as coordenadas, e os tamanhos, posição x, y mapeada - Pegue a imagem, vá no ponto 0(substituido por this.x) e (height - altura), coloque 110 e 135 a partir desse ponto, e coloque na tela no ponto 0, 0, no tamanho 220 x 270.(substituido por this.larguraSprite e this.alturaSprite)
        Para que haja movimentação, não podemos usar mais 0,0, e sim, valores referentes a matriz. 
        Explicação do height - altura : Ferramenta do p5.js , conseguimos pegar a altura da imagem, e o topo da cabeça da menina é o ponto 0, por isso precisamos dar -135 pois é a altura dela. Com isso ela fica na posição correta (no chão) (SUBSTITUIDO POR THIS.Y)*/

        this.anima()
    }

         anima (){
        this.frameAtual++ // adiciona 1 ao frame atual 

        if(this.frameAtual >= this.matriz.length - 1){ // para limitar e não ultrapassar o maximo de imagens que temos
            this.frameAtual = 0 // reseta para o 0
        }
    }
}