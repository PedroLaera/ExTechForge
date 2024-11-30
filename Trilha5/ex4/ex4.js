/*Crie uma classe abstrata VoteSystem que gerencie votos em uma competição. Ela deve ter métodos abstratos voteFor(candidate: string): void e getResults(): object.

Crie duas subclasses: Election e Poll.
Election deve permitir adicionar votos para um candidato específico e retornar o total de votos por candidato em um objeto.
Poll deve retornar uma lista dos candidatos em ordem de votos (do mais votado para o menos votado).*/
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
var VoteSystem = /** @class */ (function () {
    function VoteSystem() {
    }
    return VoteSystem;
}());
var Election = /** @class */ (function (_super) {
    __extends(Election, _super);
    function Election() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.votes = {};
        return _this;
    }
    Election.prototype.voteFor = function (candidate) {
        if (this.votes[candidate]) {
            this.votes[candidate] += 1;
        }
        else {
            this.votes[candidate] = 1;
        }
        console.log("Voto add ".concat(candidate, "."));
    };
    Election.prototype.getResults = function () {
        return this.votes;
    };
    return Election;
}(VoteSystem));
var Poll = /** @class */ (function (_super) {
    __extends(Poll, _super);
    function Poll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.votes = {};
        return _this;
    }
    Poll.prototype.voteFor = function (candidate) {
        if (this.votes[candidate]) {
            this.votes[candidate] += 1;
        }
        else {
            this.votes[candidate] = 1;
        }
        console.log("Voto add ".concat(candidate, "."));
    };
    Poll.prototype.getResults = function () {
        var sortedCandidates = Object.entries(this.votes)
            .sort(function (a, b) { return b[1] - a[1]; })
            .map(function (entry) { return ({ candidate: entry[0], votes: entry[1] }); });
        return sortedCandidates;
    };
    return Poll;
}(VoteSystem));
var election = new Election();
election.voteFor("1");
election.voteFor("2");
election.voteFor("3");
console.log("Resultado:", election.getResults());
var poll = new Poll();
poll.voteFor("a");
poll.voteFor("b");
poll.voteFor("c");
poll.voteFor("d");
poll.voteFor("e");
console.log("Resultados:", poll.getResults());
