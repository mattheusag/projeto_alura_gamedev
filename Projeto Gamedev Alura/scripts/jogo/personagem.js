
class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

        this.variacaoY = variacaoY
        this.yInicial = height - this.altura - variacaoY
        this.y = this.yInicial 

        this.velocidadeDoPulo = 0 
        this.gravidade = 6
        this.alturaDoPulo = -50
        this.pulos = 0 
        this.invencivel = false 
    }

    pula(){
        if (this.pulos < 3) {
            this.velocidadeDoPulo =  this.alturaDoPulo
            this.pulos++
        }
      
    }

    aplicaGravidade(){ //basicamente a parabola do plano cartesiano
        this.y = this.y + this.velocidadeDoPulo 
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

        if(this.y > this.yInicial){ // para que ele nao caia infinitamente
            this.y = this.yInicial //garanto com isso qu toda vez que meu y passar de this.yInicial, ele volte para this.yInicial 
            this.pulos = 0 // resetar o pulo
        }
    }

    tornarInvencivel (){
        this.invencivel = true
        setTimeout(() => { // nativo do Javascript 
            this.invencivel = false
        }, 1000) // quantos milisegundos ela vai ficar invencivel  
    }


// x da personagem, y da personagem, largura e altura do personagem
    estaColidindo(inimigo){
        if (this.invencivel) { // se estiver invencivel, ignora 
            return false
        }
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