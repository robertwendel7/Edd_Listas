class Node{
    constructor(element, next = null){
        this.element = element
        this.next = next
    }

    toString(){
        return this.next !== null
        ? this.element + " -> " + this.next.toString()
        : this.element
    }
}

class ListaLincada{
    constructor(){
        this.head = null
        this._size = 0
    }

    append(element){
        const no = new Node(element)
        if(this.size() === 0){
            this.head = no
        }else{
            let atual = this.head
            while(atual.next !== null){
                atual = atual.next
            }
            atual.next = no
        }
        this._size++
    }

    insert(posicao, element){
        const no = new Node(element)
        if(posicao === 0){
            n.next = this.head
            this.head = no
            this._size++
        }else if(posicao > 0 && posicao <=this._size()){
            let pos = 0
            let atual = this.head
            let previos = null
            while(pos< posicao){
                previos = atual
                current = current.next
                pos++ 
            }

            previos.next = no
            no.next = atual
            this._size++
        }

        
    }

    remove(element){
        const pos = this.indexOf(element)
        this.removeAt(pos)
    }

    removeAt(posicao){
        if(posicao >= this.size()){
            console.log(`Posição inválida. Escolha o intervalo de 0 até ${this.size() - 1}`)
            return
        } 

        if(posicao == 0){
            this.head = this.head.next
            this._size--
        }else if(posicao > 0 && posicao < this.size() ){
            let pos = 0
            let atual = this.head
            while(pos < posicao - 1){
                atual = atual.next
                pos++
            }
            atual.next = atual.next.next
            this._size--
        }
    }

    indexOf(element){
        if(this.size() > 0){
            let pos = 0
            let atual = this.head
            while(atual.next !== null){
                if(atual.element == element){
                    return pos
                }
                pos++
                atual = atual.next
            }
        }
        return -1
    }

    toString(){
        if(this.size() == 0){
            return "Lista vazia"
        }
        return this.head.toString()

    }

    size(){
        return this._size
    }

    isEmpty(){
        return this.size() === 0
    }

    clear(){
        this.head = null
        this._size = 0
    }



}
const lista = new ListaLincada()

function clickAdicionar(){
    let element = document.getElementById("input").value
    lista.append(element)
    console.log(lista.toString())
}

function clickRemove(){
    let element = document.getElementById("input").value
    lista.remove(element)
    console.log(lista.toString())
}

function clickRemoveAt(){
    let posicao = document.getElementById("input").value
    lista.removeAt(posicao)
    console.log(lista.removeAt())
}

function clickIndexOf(){
    let element = document.getElementById("input").value
    lista.indexOf(element)
    console.log(lista.indexOf())
}

function clickToString(){
    lista.toString()
    console.log(lista.toString())
}

function clickSize(){
    // lista.size()
    console.log(lista.size())
}

function clickClear(){
    // lista.clear()
    console.log(lista.clear())
}