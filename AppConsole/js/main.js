"use strit"

class Nodo {
	constructor(valor) {
		this.siguiente = null;
		this.valor = valor;
	}
	getSiguiente() {
		return this.siguiente;
	}
	//Aquí cambia el valor que se tiene de antes
	setSiguiente(siguiente) {
		this.siguiente = siguiente;
	}
}

class Cola {
	constructor(){
		this.frente = null;
	}

    insertar(nodo) {
        if(!this.frente) {
            this.frente = nodo;
        }
        else {
            let nodoActual = this.frente;
            while(nodoActual.siguiente) {
                nodoActual = nodoActual.siguiente;
            }
            //Ya puede insertar
            nodoActual.siguiente = nodo;
        }
    }
    mostrar() {
		const nodos = [];

		let nodoActual = this.frente;
		while(nodoActual){
			nodos.push(nodoActual);
			nodoActual = nodoActual.siguiente;
		}

		return nodos;
    }
    buscar(nodo){
        if(!this.frente){
            return "La cola esta vacia";
        }
        let nodoActual = this.frente;
        while(nodoActual){
	        if(nodoActual.valor === nodo.valor){
	            return "Su valor esta en la cola";
	        }
	        nodoActual = nodoActual.getSiguiente();
        }
        return "No se encuentra el valor en la cola"
        
    }
    extraer() {
    	if (!this.frente) {
    		return "No existe ningún valor";
    	}
    	let nodoActual = this.frente;
        this.frente = this.frente.siguiente;
        return "El elemento ha sido eliminado";
    }
    tamanio() {
     if(!this.frente){
            return "La cola esta vacia";
        }
        else{
        let auxiliar = this.frente;
        let contador = 0;
        while (auxiliar !== null){
            auxiliar = auxiliar.getSiguiente();
            contador++;
        }
        return contador;
        }
    }
    vaciar() {
		 if (!this.frente) {
			return "La cola esta vacía";
		};
		while (this.frente) {
			let nodoActual = this.frente;
			this.frente = this.frente.siguiente;
		};
		return "Se ha eliminado todos los datos de la cola";
    }
}

(function(){	
	const cola = new Cola();
	const valorTxt = document.getElementById("nodoImput");
	const agregarNodoBtn = document.getElementById("btn-agregar");
	//const mostrarNodoBtn = document.getElementById("btn-mostrar");
	const buscarNodoBtn = document.getElementById("btn-buscar");
	const eliminarNodoBtn = document.getElementById("btn-eliminar");
	const tamanioNodoBtn = document.getElementById("btn-tamanio");
	const vaciarNodoBtn = document.getElementById("btn-vaciar");
	//const listaNodos = document.getElementById("lista");

	const agregarCola = function(){
		//const nuevoNodo = new Nodo(nodo);
		if (!valorTxt.value) {
			//alert("Ingrese un valor");
			//return;
			valorTxt.setAttribute("placeholder", "Ingrese un valor aquí");
			valorTxt.className = "error";
			return false;
		};
		cola.insertar(new Nodo( valorTxt.value));
		//console.log(cola);
		mostrarCola();
		valorTxt.value = '';

	}

	const mostrarCola = function(){
		lista.innerHTML=  ``;

		const elementos = cola.mostrar();
		elementos.forEach((nodo) => {
			const nuevoItem = document.createElement("li");
			const valor = document.createTextNode(nodo.valor);
			nuevoItem.appendChild(valor);
			lista.appendChild(nuevoItem);
		});
		//console.log(cola);
	}

	const buscarCola = function(){
		if (!valorTxt.value) {
			alert("No ingresó valor a buscar.");
		}
		else{
			alert(cola.buscar(new Nodo(valorTxt.value)));
        	valorTxt.value="";
		}
		
    };

	const eliminarCola = function(){
		if (!cola) {
			alert("No existe ningún valor");
		}
		alert(cola.extraer());
		mostrarCola();
		
	}

	const  contarCola = function(){
        alert(cola.tamanio());
    }

	const vaciarCola = function(){
        alert(cola.vaciar());
        mostrarCola();
    }

	agregarNodoBtn.addEventListener('click', agregarCola);
	//mostrarNodoBtn.addEventListener('click', mostrarCola);
	buscarNodoBtn.addEventListener('click', buscarCola);
	eliminarNodoBtn.addEventListener('click', eliminarCola);
	tamanioNodoBtn.addEventListener('click', contarCola);
	vaciarNodoBtn.addEventListener('click', vaciarCola);
}());

