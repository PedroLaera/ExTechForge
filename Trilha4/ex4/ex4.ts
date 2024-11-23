/*Crie uma interface Livro com as propriedades titulo (string), autor (string) e disponivel (boolean).
Crie uma classe Biblioteca que contenha um array de livros que implementem Livro.
Implemente um método buscarLivrosDisponiveis() que retorne um array com todos os livros cuja propriedade disponivel seja true*/

interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca implements Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
    livros: Livro[];

    constructor(titulo: string, autor: string, disponivel: boolean, livros: Livro[]) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
        this.livros = livros;
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
      }
}

const livro1 = new Biblioteca("caba safado", "filho do caba safado", true, []);
const livro2 = new Biblioteca("sobrinho do caba", "namorada dele", false, []);
const livro3 = new Biblioteca("Final do caba safado", "Bisneto do caba", true, []);

const biblioteca = new Biblioteca("Biblioteca Principal", "Vários autores", true, [livro1, livro2, livro3]);
console.log(biblioteca.buscarLivrosDisponiveis());

