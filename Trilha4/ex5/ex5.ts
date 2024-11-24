/*Crie uma interface LivroBiblioteca com as propriedades titulo (string), autor (string), genero (string) e disponivel (boolean).
Crie uma classe BibliotecaGestao que contenha um array de livros implementando a interface LivroBiblioteca.

Implemente os seguintes métodos:

filtrarPorGenero(genero: string): LivroBiblioteca[] - retorna um array de livros que pertencem ao gênero especificado.

buscarPorAutor(autor: string): LivroBiblioteca[] - retorna todos os livros escritos por um autor específico.

obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] - retorna uma lista de todos os livros disponíveis, ordenada alfabeticamente pelo título.*/

interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;}
class BibliotecaGestao  {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;

    livros: LivroBiblioteca[];

    constructor(livros: LivroBiblioteca[]){
        this.livros = livros;
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livros => livros.genero.toLowerCase() === genero.toLowerCase());
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livros => livros.autor.toLowerCase() === autor.toLowerCase());
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livros => livros.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const livros: LivroBiblioteca[] = [
    { titulo: "era uma vez", autor: "Lal da Silva", genero: "Terror", disponivel: true },
    { titulo: "O Senhor dos Anéis", autor: "Jhon Henrique", genero: "Fantasia", disponivel: false },
    { titulo: "Pai que foi comprar cigarro", autor: "O filho do pai", genero: "Comedia", disponivel: true }
  ];
  
  // Criando uma instância da BibliotecaGestao com o array de livros
  const biblioteca = new BibliotecaGestao(livros);
  
  console.log("Livros do gênero Terror:");
  console.log(biblioteca.filtrarPorGenero("Terror"));
  
  console.log("\nLivros do autor 'O filho do pai':");
  console.log(biblioteca.buscarPorAutor("O filho do pai"));
  
  console.log("\nLivros disponíveis ordenados por título:");
  console.log(biblioteca.obterLivrosDisponiveisOrdenados());