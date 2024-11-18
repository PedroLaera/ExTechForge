/*Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(). Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea() 
para calcular a área de suas respectivas formas geométricas. Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica e imprima a área de cada uma.*/

abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica{
    constructor(private raio: number){
        super()
    }
    calcularArea(): number {
        return Math.PI * this.raio * this.raio
    }
}

class Quadrado extends FiguraGeometrica{
    constructor(private lado: number){
        super()
    }
    calcularArea(): number{
        return this.lado * this.lado
    }
}

class Triangulo extends FiguraGeometrica{
    constructor(private base: number, private altura: number){
        super()
    }
    calcularArea(): number{
        return (this.base * this.altura)/2
    }
}

function imprimirAreas(figura: FiguraGeometrica[]): void {
    figura.forEach(figura => {
        console.log(figura.calcularArea());
    });
}

const circulo1 = new Circulo(5);
const quadrado2 = new Quadrado(4);
const triangulo3 = new Triangulo(6, 8);
imprimirAreas([circulo1, quadrado2, triangulo3])