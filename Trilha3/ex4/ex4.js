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
/*Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer()
para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível
de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais.
*/
var Animal = /** @class */ (function () {
    function Animal() {
        this.energia = 0;
    }
    Animal.prototype.comer = function () {
        this.energia += 10;
    };
    Animal.prototype.energiaAnimal = function () {
        console.log("Energia atual: ".concat(this.energia));
    };
    Animal.prototype.statusEnergia = function (valor) {
        this.energia += valor;
    };
    return Animal;
}());
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leao.prototype.cacar = function () {
        console.log("O leão está caçando...");
        this.statusEnergia(-15);
        this.statusEnergia(20);
    };
    return Leao;
}(Animal));
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Passaro.prototype.comer = function () {
        console.log("O pássaro está se alimentando...");
        this.statusEnergia(15);
    };
    return Passaro;
}(Animal));
function alimentar(animais) {
    animais.forEach(function (animal) {
        animal.comer();
        animal.energiaAnimal();
    });
}
var leao = new Leao();
var passaro = new Passaro();
passaro.comer();
leao.cacar();
alimentar([leao, passaro]);
