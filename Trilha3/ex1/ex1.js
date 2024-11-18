/*Crie uma classe Veiculo com um método mover() que imprima "O veículo está se movendo". Crie duas subclasses Carro e Bicicleta, ambas herdam de Veiculo.
A subclasse Carro deve sobrescrever o método mover() para imprimir "O carro está dirigindo" e Bicicleta deve sobrescrever para "A bicicleta está pedalando".
Instancie objetos de ambas as subclasses e chame o método mover().*/
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
var Veiculo = /** @class */ (function () {
    function Veiculo() {
    }
    Veiculo.prototype.mover = function () {
        console.log("O veículo está se movendo...");
    };
    return Veiculo;
}());
var carro = /** @class */ (function (_super) {
    __extends(carro, _super);
    function carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    carro.prototype.mover = function () {
        console.log('o carro está se movendo...');
    };
    return carro;
}(Veiculo));
var bicicleta = /** @class */ (function (_super) {
    __extends(bicicleta, _super);
    function bicicleta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    bicicleta.prototype.mover = function () {
        console.log('A bicicleta está pedalando...');
    };
    return bicicleta;
}(Veiculo));
var carro1 = new carro();
var bicicleta1 = new bicicleta();
carro1.mover();
bicicleta1.mover();
