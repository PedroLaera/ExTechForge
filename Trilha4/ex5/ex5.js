/*Crie uma interface LivroBiblioteca com as propriedades titulo (string), autor (string), genero (string) e disponivel (boolean).
Crie uma classe BibliotecaGestao que contenha um array de livros implementando a interface LivroBiblioteca.

Implemente os seguintes métodos:

filtrarPorGenero(genero: string): LivroBiblioteca[] - retorna um array de livros que pertencem ao gênero especificado.

buscarPorAutor(autor: string): LivroBiblioteca[] - retorna todos os livros escritos por um autor específico.

obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] - retorna uma lista de todos os livros disponíveis, ordenada alfabeticamente pelo título.*/
var BibliotecaGestao = /** @class */ (function () {
    function BibliotecaGestao(livros) {
        this.livros = livros;
    }
    BibliotecaGestao.prototype.filtrarPorGenero = function (genero) {
        return this.livros.filter(function (livros) { return livros.genero.toLowerCase() === genero.toLowerCase(); });
    };
    BibliotecaGestao.prototype.buscarPorAutor = function (autor) {
        return this.livros.filter(function (livros) { return livros.autor.toLowerCase() === autor.toLowerCase(); });
    };
    BibliotecaGestao.prototype.obterLivrosDisponiveisOrdenados = function () {
        return this.livros
            .filter(function (livros) { return livros.disponivel; })
            .sort(function (a, b) { return a.titulo.localeCompare(b.titulo); });
    };
    return BibliotecaGestao;
}());
/*const livros: LivroBiblioteca [] = [
    {titulo: "Partiu para o RedBull", autor: "Mauricio Souza", genero: "Flamenguista", disponivel: true},
    {titulo: "Feito no tacho", autor: "Vanderlei Luxemburgo", genero: "Palmeiras", disponivel: false},
    {titulo: "Ainda voltarei", autor: "Fábio Carille", genero: "Santos", disponivel: true}
];

const  = new BibliotecaGestao(livros);

console.log("Livro sobre o genero do Santos: " + LivroBiblioteca.filtrarPorGenero("Santos"));
console.log("Todos os livros escritos pelo autor Vanderlei Luxemburgo: " + LivroBiblioteca.buscarPorAutor("Vanderlei Luxemburgo"));
console.log("Lista de todos os livros disponíveis, ordenada alfabeticamente pelo título: " + LivroBiblioteca.obterLivrosDisponiveisOrdenados());*/
var livros = [
    { titulo: "era uma vez", autor: "Lal da Silva", genero: "Terror", disponivel: true },
    { titulo: "O Senhor dos Anéis", autor: "Jhon Henrique", genero: "Fantasia", disponivel: false },
    { titulo: "Pai que foi comprar cigarro", autor: "O filho do pai", genero: "Comedia", disponivel: true }
];
// Criando uma instância da BibliotecaGestao com o array de livros
var biblioteca = new BibliotecaGestao(livros);
// Filtrar livros por gênero
console.log("Livros do gênero Terror:");
console.log(biblioteca.filtrarPorGenero("Terror"));
// Buscar livros por autor
console.log("\nLivros do autor 'O filho do pai':");
console.log(biblioteca.buscarPorAutor("O filho do pai"));
// Obter livros disponíveis ordenados pelo título
console.log("\nLivros disponíveis ordenados por título:");
console.log(biblioteca.obterLivrosDisponiveisOrdenados());
