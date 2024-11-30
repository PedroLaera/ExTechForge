/*Crie uma classe EmailSender que envie emails para contatos e valide as informações de contato.

Implemente a validação e o envio de email na mesma classe.
Em seguida, separe a validação em uma classe ContactValidator e injete-a em EmailSender.
Objetivo: Melhorar a coesão separando a lógica de validação e reduzir o acoplamento*/

class EmailSender {
    private emailPattern: RegExp;

    constructor() {
        this.emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    }

    validateEmail(email: string): boolean {
        if (this.emailPattern.test(email)) {
            return true;
        } else {
            throw new Error("email inválido");
        }
    }

    sendEmail(to: string, subject: string, body: string): void {
        if (this.validateEmail(to)) {
            console.log(`Enviando para ${to}: ${subject}`);
            console.log(`Corpo: ${body}`);
        } else {
            console.log("falhou. Endereço inválido.");
        }
    }
}
const emailSender = new EmailSender();
emailSender.sendEmail("a@a.com", "teste1", "Corpo teste");
emailSender.sendEmail("b@b.com", "teste2", "Corpo teste2");