/*Crie uma interface chamada Documento com as propriedades titulo (string) e conteudo (string).

Implemente essa interface em uma classe chamada Texto e crie um método exibir() que retorna uma
string com o título e o conteúdo formatados da seguinte forma: "Título: [titulo], Conteúdo: [conteudo]".*/
var Texto = /** @class */ (function () {
    function Texto(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    Texto.prototype.exibir = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", Conte\u00FAdo:").concat(this.conteudo, "."));
    };
    return Texto;
}());
var propert1 = new Texto("principal título", "titulo secundario");
propert1.exibir();
