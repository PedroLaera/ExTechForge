/*Implemente uma classe abstrata FavoriteManager que gerencia listas de itens favoritos. Ela deve ter métodos 
abstratos addFavorite(item: string): void e getFavorites(): string[].

Crie duas subclasses: MoviesFavoriteManager e BooksFavoriteManager.
MoviesFavoriteManager deve gerenciar uma lista de filmes favoritos sem itens duplicados e retornar a lista em ordem alfabética. Dica: pesquisar pelo método 
sort para arrays em JavaScript
BooksFavoriteManager deve gerenciar uma lista de livros favoritos, mas sempre que um novo item é adicionado, ele deve ser inserido no início da lista. */

abstract class FavoriteManager {

    abstract addFavorites(item: string): void;

    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    private favorites: Set<string> = new Set();

    addFavorites(item: string): void {
        this.favorites.add(item);
        console.log(`Filme ${item} add aos favoritos.`);
    }
    getFavorites(): string[] {
        return Array.from(this.favorites).sort();
    }
}

class BooksFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];

    addFavorites(item: string): void {
        this.favorites.unshift(item);
        console.log(`Livro ${item} add aos favoritos.`);
    }
    getFavorites(): string[] {
        return this.favorites;
    }
}
const movieManager = new MoviesFavoriteManager();
movieManager.addFavorites("teste1");
movieManager.addFavorites("teste2");
movieManager.addFavorites("teste3");
console.log("Filmes favoritos:", movieManager.getFavorites());

const bookManager = new BooksFavoriteManager();
bookManager.addFavorites("teste4");
bookManager.addFavorites("teste5");
bookManager.addFavorites("teste6");
console.log("favoritos:", bookManager.getFavorites());
