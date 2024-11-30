/*Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice, paymentStatus e shippingStatus.

Inicialmente, faça com que a classe Order seja responsável por adicionar itens, calcular o preço total, processar o pagamento e atualizar o status do envio.
Depois, refatore o código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.
Objetivo: Melhorar a coesão separando responsabilidades e reduzir o acoplamento.*/

// Classe que gerencia os itens no carrinho
class Cart {
    private items: { name: string, price: number }[] = [];

    addItem(name: string, price: number): void {
        this.items.push({ name, price });
    }

    calculateTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getItems(): { name: string, price: number }[] {
        return this.items;
    }
}
class Payment {
    private paymentStatus: string = "Pending";

    processPayment(amount: number): void {
        if (this.paymentStatus === "Pending") {
            this.paymentStatus = "Completed";
            console.log(`Pgmto de ${amount} feito efetuado`);
        } else {
            console.log("Pagamento ja pagp.");
        }
    }

    getPaymentStatus(): string {
        return this.paymentStatus;
    }
}
class Shipping {
    private shippingStatus: string = "Not Shipped";

    shipOrder(): void {
        if (this.shippingStatus === "Not Shipped") {
            this.shippingStatus = "Shipped";
            console.log("Pedido enviado");
        } else {
            console.log("Pedido ja foi enviado");
        }
    }

    getShippingStatus(): string {
        return this.shippingStatus;
    }
}
class Order {
    private cart: Cart = new Cart();
    private payment: Payment = new Payment();
    private shipping: Shipping = new Shipping();
    addItem(name: string, price: number): void {
        this.cart.addItem(name, price);
    }
    processPayment(): void {
        const totalPrice = this.cart.calculateTotalPrice();
        this.payment.processPayment(totalPrice);
    }
    shipOrder(): void {
        if (this.payment.getPaymentStatus() === "Completed") {
            this.shipping.shipOrder();
        } else {
            console.log("O pagamento precisa ser processado antes do envio");
        }
    }
    getOrderStatus(): void {
        console.log("ItemPedido:", this.cart.getItems());
        console.log("PrecoTotal:", this.cart.calculateTotalPrice());
        console.log("StatusPagamento:", this.payment.getPaymentStatus());
        console.log("StatusEnvio:", this.shipping.getShippingStatus());
    }
}
const order = new Order();
order.addItem("teste1", 50);
order.addItem("teste2", 80);
order.processPayment();
order.shipOrder();
order.getOrderStatus();

