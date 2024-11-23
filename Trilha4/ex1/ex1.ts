/*Crie uma interface chamada Produto que tenha as propriedades id (número), nome (string) e preco (número).
Em seguida, crie uma classe ItemLoja que implemente essa interface.
No construtor da classe, atribua valores às propriedades id, nome e preco.*/

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produto {
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

const itemLoja1 = new ItemLoja(1, "Camiseta do Lal", 19.99);
console.log(itemLoja1);