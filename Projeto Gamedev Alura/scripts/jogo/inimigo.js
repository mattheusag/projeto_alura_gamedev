

class Inimigo extends Animacao { // tudo o que eu tenho na classe animação é repassada para a classe inimigo atencao aqui

    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

        this.velocidade = velocidade
        this.x = width
    }
    move(){
        this.x = this.x - this.velocidade
    }
    aparece(){
        this.x = width
    }
}