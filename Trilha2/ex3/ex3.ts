/*3 - Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). Adicione um método para calcular o valor total em estoque (preço * quantidade).*/

class Produto {
   private nome: string;
   public preco: number;
   public quantidade: number;

   constructor(nome: string, preco: number, quantidade: number){
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
   }

   public calcularTotal(){
      return this.preco * this.quantidade
   }

}
const produto = new Produto ('Copo do Lal', 9.00, 5)
const valorEmEstoque = produto.calcularTotal()
console.log('o valor em estoque é: ' + valorEmEstoque + ' reais')

