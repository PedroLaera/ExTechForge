/*2 - Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.*/

class Livro{
   private titulo: string;
   private autor: string;
   private pagina: number;
   private lido: boolean;
   
   constructor(titulo: string, autor: string, pagina: number, jaLeu: boolean = false){
      this.titulo = titulo;
      this.autor = autor;
      this.pagina = pagina;
      this.lido = jaLeu;
   }
   public jaLeu(){
      this.lido = true
      console.log(`o livro ${this.titulo} de ${this.pagina} páginas, do autor ${this.autor}, ja foi lido`);
   }
}

const livro2 = new Livro('lal', 'do lal', 15)
livro2.jaLeu()

