/*Crie uma classe EmailSender que envie emails para contatos e valide as informações de contato.

Implemente a validação e o envio de email na mesma classe.
Em seguida, separe a validação em uma classe ContactValidator e injete-a em EmailSender.
Objetivo: Melhorar a coesão separando a lógica de validação e reduzir o acoplamento*/
var EmailSender = /** @class */ (function () {
    function EmailSender() {
        this.emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    }
    EmailSender.prototype.validateEmail = function (email) {
        if (this.emailPattern.test(email)) {
            return true;
        }
        else {
            throw new Error("email inválido");
        }
    };
    EmailSender.prototype.sendEmail = function (to, subject, body) {
        if (this.validateEmail(to)) {
            console.log("Enviando para ".concat(to, ": ").concat(subject));
            console.log("Corpo: ".concat(body));
        }
        else {
            console.log("falhou. Endereço inválido.");
        }
    };
    return EmailSender;
}());
var emailSender = new EmailSender();
emailSender.sendEmail("a@a.com", "teste1", "Corpo teste");
emailSender.sendEmail("b@b.com", "teste2", "Corpo teste2");
