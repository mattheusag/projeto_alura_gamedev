
class Personagem extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)

        this.yInicial = height - this.altura
        this.y = this.yInicial 

        this.velocidadeDoPulo = 0 
        this.gravidade = 3 

    }

    pula(){
        this.velocidadeDoPulo =  -30
    }

    aplicaGravidade(){
        this.y = this.y + this.velocidadeDoPulo 
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

        if(this.y > this.yInicial){ // para que ele nao caia infinitamente
            this.y = this.yInicial //garanto com isso qu toda vez que meu y passar de this.yInicial, ele volte para this.yInicial 
        }
    }
// x da personagem, y da personagem, largura e altura do personagem
    estaColidindo(inimigo){
        const precisao = .65 // o hitbox dos dois é maior do que o tamanho reald eles, para corrigir isso precisamos aplicar essa constante, original é .7
        const colisao = collideRectRect(
            this.x, 
            this.y,
            this.largura * precisao, 
            this.altura * precisao, 
            inimigo.x, 
            inimigo.y, 
            inimigo.largura * precisao, 
            inimigo.altura * precisao
        )
        return colisao
    }
}