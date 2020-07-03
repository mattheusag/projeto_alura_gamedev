class Vida{
    constructor(total, inicial){
        this.total = total
        this.inicial = inicial
        this.vidas = this.inicial // qtd. de vidas maxima ao longo do jogo

        this.largura = 25
        this.altura = 25
        this.xInicial = 20
        this.y = 20
    }

    draw(){
        for(let i = 0; i < this.vidas; i ++){  // quantidade de vidas baseado na vida inicial (setada em jogo.js)
            const margem = i * 10 // margin de um coração p/ outro
            const posicao = this.xInicial * (1 + i) // a medida que os corações são desenhados, eles terão a mesma proporção 
        
        image (imagemVida, posicao + margem, this.y, this.largura, this.altura)
     }

    }


    ganhaVida(){
        if (this.vidas <= this.total){
            this.vidas++
        }
    }

    perdeVida(){
        this.vidas--
    }
}