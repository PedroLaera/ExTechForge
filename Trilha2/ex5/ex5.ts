/*5 - Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.*/

class Agenda {
   private compromissos: string[];

   constructor(compromissos: string[]){
      this.compromissos = compromissos;
   }

   public addCompromisso(compromisso: string): void{
      this.compromissos.push(compromisso)
   }
   public listarCompromisso(){
      return console.log(this.compromissos)
   }
}

const agenda1 = new Agenda(['andar', 'caminhar'])
agenda1.addCompromisso('estudar')
agenda1.listarCompromisso()