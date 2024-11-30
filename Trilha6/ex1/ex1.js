/*Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice, paymentStatus e shippingStatus.

Inicialmente, faça com que a classe Order seja responsável por adicionar itens, calcular o preço total, processar o pagamento e atualizar o status do envio.
Depois, refatore o código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.
Objetivo: Melhorar a coesão separando responsabilidades e reduzir o acoplamento.*/
// Classe que gerencia os itens no carrinho
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
    }
    Cart.prototype.addItem = function (name, price) {
        this.items.push({ name: name, price: price });
    };
    Cart.prototype.calculateTotalPrice = function () {
        return this.items.reduce(function (total, item) { return total + item.price; }, 0);
    };
    Cart.prototype.getItems = function () {
        return this.items;
    };
    return Cart;
}());
var Payment = /** @class */ (function () {
    function Payment() {
        this.paymentStatus = "Pending";
    }
    Payment.prototype.processPayment = function (amount) {
        if (this.paymentStatus === "Pending") {
            this.paymentStatus = "Completed";
            console.log("Pgmto de ".concat(amount, " feito efetuado"));
        }
        else {
            console.log("Pagamento ja pagp.");
        }
    };
    Payment.prototype.getPaymentStatus = function () {
        return this.paymentStatus;
    };
    return Payment;
}());
var Shipping = /** @class */ (function () {
    function Shipping() {
        this.shippingStatus = "Not Shipped";
    }
    Shipping.prototype.shipOrder = function () {
        if (this.shippingStatus === "Not Shipped") {
            this.shippingStatus = "Shipped";
            console.log("Pedido enviado");
        }
        else {
            console.log("Pedido ja foi enviado");
        }
    };
    Shipping.prototype.getShippingStatus = function () {
        return this.shippingStatus;
    };
    return Shipping;
}());
var Order = /** @class */ (function () {
    function Order() {
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }
    Order.prototype.addItem = function (name, price) {
        this.cart.addItem(name, price);
    };
    Order.prototype.processPayment = function () {
        var totalPrice = this.cart.calculateTotalPrice();
        this.payment.processPayment(totalPrice);
    };
    Order.prototype.shipOrder = function () {
        if (this.payment.getPaymentStatus() === "Completed") {
            this.shipping.shipOrder();
        }
        else {
            console.log("O pagamento precisa ser processado antes do envio");
        }
    };
    Order.prototype.getOrderStatus = function () {
        console.log("ItemPedido:", this.cart.getItems());
        console.log("PrecoTotal:", this.cart.calculateTotalPrice());
        console.log("StatusPagamento:", this.payment.getPaymentStatus());
        console.log("StatusEnvio:", this.shipping.getShippingStatus());
    };
    return Order;
}());
var order = new Order();
order.addItem("teste1", 50);
order.addItem("teste2", 80);
order.processPayment();
order.shipOrder();
order.getOrderStatus();
