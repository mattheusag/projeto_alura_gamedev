class Cenario { // Cria um objeto cenário pra gente
	constructor (imagem, velocidade) { // o constructor vai conter tudo que precisa para criar um cenário
		this.imagem = imagem // qualquer coisa consiga acessar a imagem e não apenas o construtor. Essa função é do js
		this.velocidade = velocidade // essa velocidade tem a ver com o deslocamento dos meus backgrounds
		this.x1 = 0 // minha primeira imagem estará no 0
		this.x2 = width // para começar exatamente no mesmo ponto que a outra imagem vai terminar
	}

	exibe(){// é um metodo, para conseguirmos botar as 2 imagens na tela inicial`
	image(this.imagem, this.x1, 0, width, height) // Precisamos colocar image ao inves de background pois background só conseguimos colocar 1 imagem.
	image(this.imagem, this.x2, 0, width, height) 
	}

	move(){ // para que possamos controlar a posição inicial q
		this.x1 = this.x1 - this.velocidade // quero que o meu x1 ande para a esquerda de acordo com a velocidade que a gente escolher
		this.x2 = this.x2 - this.velocidade 
	
		if (this.x1 < -width ) { // se ele estiver 1 tela pra tras, ele vira 1 tela pra frente. Colocando -width eu garanto que ele não aparece na tela
			this.x1 = width
		}	

		if (this.x2 < -width ) {
			this.x2 = width
		}	
	}
} 