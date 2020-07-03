class BotaoGerenciador{
    constructor(texto, x, y){
        this.texto = texto
        this.x = x
        this.y = y
        this.botao = createButton(this.texto) // função do P5
        this.botao.mousePressed(() => this._alteraCena())
        this.botao.addClass('botao-tela-inicial') // função do P5
    }

    draw(){
        this.botao.position(this.x, this.y)
        this.botao.center('horizontal') // metodo do P5JS
    }

    _alteraCena(){
        this.botao.remove()
        cenaAtual = 'jogo'
    }
}