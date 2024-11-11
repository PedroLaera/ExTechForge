/*3 - Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). Adicione um método para calcular o valor total em estoque (preço * quantidade).*/
var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.calcularTotal = function () {
        return this.preco * this.quantidade;
    };
    return Produto;
}());
var produto = new Produto('Copo do Lal', 9.00, 5);
var valorEmEstoque = produto.calcularTotal();
console.log('o valor em estoque é: ' + valorEmEstoque + ' reais');
