/*Crie uma interface chamada ProdutoLoja com as propriedades codigo (número) e nome (string).

Crie uma classe Loja que tenha um array de produtos que implemente a interface ProdutoLoja.

Implemente um método buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined que recebe um código de produto e retorna o produto correspondente, 
caso exista; caso contrário, retorne undefined

Dica: pesquisar sobre o método find "link do Developer"*/

interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja implements ProdutoLoja{
    codigo: number;
    nome: string;
    private produtos: ProdutoLoja[];

    constructor(codigo: number,nome: string, produtos: ProdutoLoja[] = []){
        this.codigo = codigo;
        this.nome = nome;
        this.produtos = produtos;
    }
    
    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find((produto) => produto.codigo === codigo);
      }
}

const produtoLoja1 = new Loja(1, "eros lal roupas",[]);
console.log(produtoLoja1);