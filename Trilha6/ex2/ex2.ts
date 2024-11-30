/*Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice, paymentStatus e shippingStatus.

Inicialmente, faça com que a classe Order seja responsável por adicionar itens, calcular o preço total, processar o pagamento e atualizar o status do envio.
Depois, refatore o código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.
Objetivo: Melhorar a coesão separando responsabilidades e reduzir o acoplamento.*/
class EmailNotification {
    sendEmail(user: { name: string, email: string }): void {
        console.log(`Enviando ${user.email}:`);
        console.log(`Oi ${user.name}, cadastro feito`);
    }
}
class UserManager {
    private users: { name: string, email: string }[] = [];
    private emailNotification: EmailNotification;

    constructor(emailNotification: EmailNotification) {
        this.emailNotification = emailNotification;
    }

    createUser(name: string, email: string): void {
        const user = { name, email };
        this.users.push(user);
        console.log(`User ${name} criado`);

        this.emailNotification.sendEmail(user);
    }

    getUsers(): { name: string, email: string }[] {
        return this.users;
    }
}
const emailNotification = new EmailNotification();
const userManager = new UserManager(emailNotification);

userManager.createUser("teste1", "a@a.com");
userManager.createUser("teste2", "b@b.com");
console.log("Users com cadastro", userManager.getUsers());
