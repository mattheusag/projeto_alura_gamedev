
class Personagem {
    constructor(imagem){
        this.imagem = imagem
        this.matriz = [ 
            [0,0],  [220,0],  [440,0], [660,0],
            [0,270], [220,270], [440,270], [660,270],
            [0,540], [220,540], [440,540], [660,540],
            [0,810], [220,810], [440,810], [660,810]
          ]
          // essa matriz é o mapeamento da imagem da personagem. A imagem da personagem é composta de 16 figuras diferentes que simulam a movimentação. 

          this.frameAtual = 0 
    }

    exibe(){
        image(this.imagem, 0, height - alturaDaPersonagem , 110, alturaDaPersonagem, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 220, 270) /* os parâmetros são: a variavel, as coordenadas, e os tamanhos, posição x, y mapeada - Pegue a imagem, vá no ponto 0 e (height - altura), coloque 110 e 135 a partir desse ponto, e coloque na tela no ponto 0, 0, no tamanho 220 x 270.
        Para que haja movimentação, não podemos usar mais 0,0, e sim, valores referentes a matriz. 
        Explicação do height - altura : Ferramenta do p5.js , conseguimos pegar a altura da imagem, e o topo da cabeça da menina é o ponto 0, por isso precisamos dar -135 pois é a altura dela. Com isso ela fica na posição correta (no chão)*/

        this.anima()
    }

    anima (){
        this.frameAtual++ // adiciona 1 ao frame atual 

        if(this.frameAtual >= this.matriz.length - 1){ // para limitar e não ultrapassar o maximo de imagens que temos
            this.frameAtual = 0 // reseta para o 0
        }
    }
}