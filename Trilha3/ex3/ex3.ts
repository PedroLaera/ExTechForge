/*Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). 
A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite 
diferentes tipos de pagamento e processe-os usando polimorfismo.*/
class Pagamento {
    public processar() {
        console.log('processando...!')
    }
}

class PagamentoCartao extends Pagamento {
    private nomeTitular: string;
    private numeroCartao: number;

    constructor(nomeTitular: string, numeroCartao: number) {
        super();
        this.nomeTitular = nomeTitular;
        this.numeroCartao = numeroCartao;
    }

    static processar(numeroCartao: string): boolean {
        let soma = 0;
        let alternar = false;

        numeroCartao = numeroCartao.replace(/\D/g, '');

        for (let i = numeroCartao.length - 1; i >= 0; i--) {
            let num = parseInt(numeroCartao[i]);

            if (alternar) {
                num *= 2;
                if (num > 9) num -= 9;
            }

            soma += num;
            alternar = !alternar;
        }

        return soma % 10 === 0;
    }
}

class PagamentoBoleto extends Pagamento {
    private valor: number;
    private vencimento: number;
    private codigo: number;

    constructor(valor: number, vencimento: number, codigo:number) {
        super()
        this.valor = valor;
        this.vencimento = vencimento;
        this.codigo = codigo;
    }

    public processar(): void {
        console.log(`Valor: R$ ${this.valor.toFixed(2)}`);
        console.log(`Vencimento: ${this.vencimento}`);
        console.log(`Código do Boleto: ${this.codigo}`);
    }
}

const cartaoAceito = new PagamentoCartao('Lal da Silva', 123456789);
const boleto1 = new PagamentoBoleto(343, 2023-8-10, 40028900);

cartaoAceito.processar();
boleto1.processar();
