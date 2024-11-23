/*Crie uma interface chamada ProdutoLoja com as propriedades codigo (número) e nome (string).

Crie uma classe Loja que tenha um array de produtos que implemente a interface ProdutoLoja.

Implemente um método buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined que recebe um código de produto e retorna o produto correspondente,
caso exista; caso contrário, retorne undefined

Dica: pesquisar sobre o método find "link do Developer"*/
var Loja = /** @class */ (function () {
    function Loja(codigo, nome, produtos) {
        if (produtos === void 0) { produtos = []; }
        this.codigo = codigo;
        this.nome = nome;
        this.produtos = produtos;
    }
    Loja.prototype.buscarProdutoPorCodigo = function (codigo) {
        return this.produtos.find(function (produto) { return produto.codigo === codigo; });
    };
    return Loja;
}());
var produtoLoja1 = new Loja(1, "eros lal roupas", []);
console.log(produtoLoja1);
