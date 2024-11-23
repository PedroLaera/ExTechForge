 /*Crie uma interface chamada Documento com as propriedades titulo (string) e conteudo (string).

Implemente essa interface em uma classe chamada Texto e crie um método exibir() que retorna uma 
string com o título e o conteúdo formatados da seguinte forma: "Título: [titulo], Conteúdo: [conteudo]".*/

interface Propriedades {
    titulo: string;
    conteudo: string;
}

class Texto implements Propriedades {
    titulo: string;
    conteudo: string;

    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    
    exibir(){
        console.log(`Título: ${this.titulo}, Conteúdo:${this.conteudo}.`);
    }
}

const propert1 = new Texto("principal título", "titulo secundario");
propert1.exibir(); 