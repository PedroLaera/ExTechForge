/*5 - Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.*/
var Agenda = /** @class */ (function () {
    function Agenda(compromissos) {
        this.compromissos = compromissos;
    }
    Agenda.prototype.addCompromisso = function (compromisso) {
        this.compromissos.push(compromisso);
    };
    Agenda.prototype.listarCompromisso = function () {
        return console.log(this.compromissos);
    };
    return Agenda;
}());
var agenda1 = new Agenda(['andar', 'caminhar']);
agenda1.addCompromisso('estudar');
agenda1.listarCompromisso();
