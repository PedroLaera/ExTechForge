/*4 - Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin*/
var Temperatura = /** @class */ (function () {
    function Temperatura(valor) {
        this.valor = valor;
    }
    Temperatura.prototype.convFahrenheit = function () {
        return (this.valor * 9 / 5 + 32);
    };
    Temperatura.prototype.convKelvin = function () {
        return (this.valor + 273.15);
    };
    return Temperatura;
}());
var temperatura1 = new Temperatura(25);
console.log('A temperatura convertidade em Fahrenheit é: ' + temperatura1.convFahrenheit() + 'F°');
console.log('A temperatura convertidade em Kelvin é: ' + temperatura1.convKelvin() + 'K°');
//operação matemárica
// F=(25×9/5)+32=77°F fahrenheit,
// K=25+273.15=298.15K kelvin
