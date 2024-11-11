/*2 - Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.*/
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, pagina, jaLeu) {
        if (jaLeu === void 0) { jaLeu = false; }
        this.titulo = titulo;
        this.autor = autor;
        this.pagina = pagina;
        this.lido = jaLeu;
    }
    Livro.prototype.jaLeu = function () {
        this.lido = true;
        console.log("o livro ".concat(this.titulo, " de ").concat(this.pagina, " p\u00E1ginas, do autor ").concat(this.autor, ", ja foi lido"));
    };
    return Livro;
}());
var livro1 = new Livro('lal', 'do lal', 15);
livro1.jaLeu();
