/*Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice, paymentStatus e shippingStatus.

Inicialmente, faça com que a classe Order seja responsável por adicionar itens, calcular o preço total, processar o pagamento e atualizar o status do envio.
Depois, refatore o código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.
Objetivo: Melhorar a coesão separando responsabilidades e reduzir o acoplamento.*/
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.sendEmail = function (user) {
        console.log("Enviando ".concat(user.email, ":"));
        console.log("Oi ".concat(user.name, ", cadastro feito"));
    };
    return EmailNotification;
}());
var UserManager = /** @class */ (function () {
    function UserManager(emailNotification) {
        this.users = [];
        this.emailNotification = emailNotification;
    }
    UserManager.prototype.createUser = function (name, email) {
        var user = { name: name, email: email };
        this.users.push(user);
        console.log("User ".concat(name, " criado"));
        this.emailNotification.sendEmail(user);
    };
    UserManager.prototype.getUsers = function () {
        return this.users;
    };
    return UserManager;
}());
var emailNotification = new EmailNotification();
var userManager = new UserManager(emailNotification);
userManager.createUser("teste1", "a@a.com");
userManager.createUser("teste2", "b@b.com");
console.log("Users com cadastro", userManager.getUsers());
