/* 1 - Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.*/
class ContaBancaria {
    private titular: string;
    public saldo: number;

    constructor(titular: string, saldo: number){
        this.titular = titular;
        this.saldo = saldo;
    }

    public deposito(valor: number): void{
        this.saldo += valor
    }

    public saque(valor: number): boolean{
        if(valor <= this.saldo){
            this.saldo -= valor
            return true;
        } else {
            console.log('Saldo insuficiente para saque!')
            return false;
        }
    }


}
const cbanana = new ContaBancaria('lal', 1000);
cbanana.deposito(300)
cbanana.saque(1000)
console.log(cbanana.saldo)

