/*Crie uma interface Livro com as propriedades titulo (string), autor (string) e disponivel (boolean).
Crie uma classe Biblioteca que contenha um array de livros que implementem Livro.
Implemente um método buscarLivrosDisponiveis() que retorne um array com todos os livros cuja propriedade disponivel seja true*/
var Biblioteca = /** @class */ (function () {
    function Biblioteca(titulo, autor, disponivel, livros) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
        this.livros = livros;
    }
    Biblioteca.prototype.buscarLivrosDisponiveis = function () {
        return this.livros.filter(function (livro) { return livro.disponivel; });
    };
    return Biblioteca;
}());
var livro1 = new Biblioteca("caba safado", "filho do caba safado", true, []);
var livro2 = new Biblioteca("sobrinho do caba", "namorada dele", false, []);
var livro3 = new Biblioteca("Final do caba safado", "Bisneto do caba", true, []);
var biblioteca = new Biblioteca("Biblioteca Principal", "Vários autores", true, [livro1, livro2, livro3]);
console.log(biblioteca.buscarLivrosDisponiveis());
