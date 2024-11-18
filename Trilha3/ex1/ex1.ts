/*Crie uma classe Veiculo com um método mover() que imprima "O veículo está se movendo". Crie duas subclasses Carro e Bicicleta, ambas herdam de Veiculo. 
A subclasse Carro deve sobrescrever o método mover() para imprimir "O carro está dirigindo" e Bicicleta deve sobrescrever para "A bicicleta está pedalando". 
Instancie objetos de ambas as subclasses e chame o método mover().*/ 

class Veiculo{
    public mover(){
        console.log("O veículo está se movendo...")
    }
}

class carro extends Veiculo{
    public mover(): void {
        console.log('o carro está se movendo...')
    }
}

class bicicleta extends Veiculo{
    public mover(): void {
        console.log('A bicicleta está pedalando...')
    }
}

const carro1 = new carro()
const bicicleta1 = new bicicleta()

carro1.mover()
bicicleta1.mover()