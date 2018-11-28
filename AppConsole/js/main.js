"use strit"

class Nodo {
	constructor(valor) {
		this.izquierdo = null;
		this.derecho = null;
		this.valor = valor;
	}
	getIzquierdo() {
		return this.izquierdo;
	}
	getDerecho() {
		return this.derecho;
	}
	setIzquierdo(izquierdo) {
		this.izquierdo = izquierdo;
	}
	setDerecho(derecho) {
		this.derecho = derecho;
	}
}
class MetodosArbol{
	constructor(){
		this.raiz = null;
	}

	preOrden(nodo){
		if (!this.raiz) {
			console.log("No existe raiz");
		};

		console.log(this.raiz);
		preOrden(this.raiz.getIzquierdo());
		preOrden(this.raiz.getIDerecho());
	}
	
}
class MiArbol{
	
}
