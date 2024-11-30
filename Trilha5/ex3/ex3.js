/*Implemente uma classe abstrata FavoriteManager que gerencia listas de itens favoritos. Ela deve ter métodos
abstratos addFavorite(item: string): void e getFavorites(): string[].

Crie duas subclasses: MoviesFavoriteManager e BooksFavoriteManager.
MoviesFavoriteManager deve gerenciar uma lista de filmes favoritos sem itens duplicados e retornar a lista em ordem alfabética. Dica: pesquisar pelo método
sort para arrays em JavaScript
BooksFavoriteManager deve gerenciar uma lista de livros favoritos, mas sempre que um novo item é adicionado, ele deve ser inserido no início da lista. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FavoriteManager = /** @class */ (function () {
    function FavoriteManager() {
    }
    return FavoriteManager;
}());
var MoviesFavoriteManager = /** @class */ (function (_super) {
    __extends(MoviesFavoriteManager, _super);
    function MoviesFavoriteManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.favorites = new Set();
        return _this;
    }
    MoviesFavoriteManager.prototype.addFavorites = function (item) {
        this.favorites.add(item);
        console.log("Filme ".concat(item, " add aos favoritos."));
    };
    MoviesFavoriteManager.prototype.getFavorites = function () {
        return Array.from(this.favorites).sort();
    };
    return MoviesFavoriteManager;
}(FavoriteManager));
var BooksFavoriteManager = /** @class */ (function (_super) {
    __extends(BooksFavoriteManager, _super);
    function BooksFavoriteManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.favorites = [];
        return _this;
    }
    BooksFavoriteManager.prototype.addFavorites = function (item) {
        this.favorites.unshift(item);
        console.log("Livro ".concat(item, " add aos favoritos."));
    };
    BooksFavoriteManager.prototype.getFavorites = function () {
        return this.favorites;
    };
    return BooksFavoriteManager;
}(FavoriteManager));
var movieManager = new MoviesFavoriteManager();
movieManager.addFavorites("teste1");
movieManager.addFavorites("teste2");
movieManager.addFavorites("teste3");
console.log("Filmes favoritos:", movieManager.getFavorites());
var bookManager = new BooksFavoriteManager();
bookManager.addFavorites("teste4");
bookManager.addFavorites("teste5");
bookManager.addFavorites("teste6");
console.log("favoritos:", bookManager.getFavorites());
