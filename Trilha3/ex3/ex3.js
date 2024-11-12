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
/*Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar().
A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite
diferentes tipos de pagamento e processe-os usando polimorfismo.*/
var Pagamento = /** @class */ (function () {
    function Pagamento() {
    }
    Pagamento.prototype.processar = function () {
        console.log('processando...!');
    };
    return Pagamento;
}());
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(nomeTitular, numeroCartao) {
        var _this = _super.call(this) || this;
        _this.nomeTitular = nomeTitular;
        _this.numeroCartao = numeroCartao;
        return _this;
    }
    PagamentoCartao.processar = function (numeroCartao) {
        var soma = 0;
        var alternar = false;
        numeroCartao = numeroCartao.replace(/\D/g, '');
        for (var i = numeroCartao.length - 1; i >= 0; i--) {
            var num = parseInt(numeroCartao[i]);
            if (alternar) {
                num *= 2;
                if (num > 9)
                    num -= 9;
            }
            soma += num;
            alternar = !alternar;
        }
        return soma % 10 === 0;
    };
    return PagamentoCartao;
}(Pagamento));
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto(valor, vencimento, codigo) {
        var _this = _super.call(this) || this;
        _this.valor = valor;
        _this.vencimento = vencimento;
        _this.codigo = codigo;
        return _this;
    }
    PagamentoBoleto.prototype.processar = function () {
        console.log("Valor: R$ ".concat(this.valor.toFixed(2)));
        console.log("Vencimento: ".concat(this.vencimento));
        console.log("C\u00F3digo do Boleto: ".concat(this.codigo));
    };
    return PagamentoBoleto;
}(Pagamento));
var cartaoAceito = new PagamentoCartao('Lal da Silva', 123456789);
var boleto1 = new PagamentoBoleto(343, 2023 - 8 - 10, 40028900);
cartaoAceito.processar();
boleto1.processar();
