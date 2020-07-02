

class Inimigo extends Animacao { // tudo o que eu tenho na classe animação é repassada para a classe inimigo atencao aqui

    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

        this.velocidade = velocidade
        this.delay = delay 
        this.x = width + this.delay
    }
    move(){
        this.x = this.x - this.velocidade

        if (this.x < -this.largura - this.delay){ // para verificar se ele saiu todo da tela 
            this.x = width
        }
    }
}