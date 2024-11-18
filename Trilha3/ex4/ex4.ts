/*Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer() 
para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível 
de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais.
*/ 
class Animal {
    private energia: number;

    constructor() {
        this.energia = 0;
        }

    comer(): void {
        this.energia += 10;
    }
    
    energiaAnimal(): void {
        console.log(`Energia atual: ${this.energia}`);
    }

    protected statusEnergia(valor: number): void {
        this.energia += valor;
    }
}

class Leao extends Animal {
    cacar(): void {
        console.log("O leão está caçando...");
        this.statusEnergia(-15); 
        this.statusEnergia(20);   
    }
}

class Passaro extends Animal {
    comer(): void {
        console.log("O pássaro está se alimentando...");
        this.statusEnergia(15);   
    }
}

function alimentar(animais: Animal[]): void {
    animais.forEach(animal => {
        animal.comer();
        animal.energiaAnimal();
    });
}

const leao = new Leao();
const passaro = new Passaro();
passaro.comer()
leao.cacar()

alimentar([leao, passaro]);