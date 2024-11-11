/* 1 - Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.*/
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.deposito = function (valor) {
        this.saldo += valor;
    };
    ContaBancaria.prototype.saque = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            console.log('Saldo insuficiente para saque!');
            return false;
        }
    };
    return ContaBancaria;
}());
var cbanana = new ContaBancaria('lal', 1000);
cbanana.deposito(300);
cbanana.saque(1000);
console.log(cbanana.saldo);
