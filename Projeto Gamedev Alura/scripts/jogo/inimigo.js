

class Inimigo extends Animacao { // tudo o que eu tenho na classe animação é repassada para a classe inimigo atencao aqui

    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)

        this.velocidade = 8
    }
    move(){
        this.x = this.x - this.velocidade

        if (this.x < -this.largura ){ // para verificar se ele saiu todo da tela 
            this.x = width
        }
    }
}