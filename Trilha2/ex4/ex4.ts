/*4 - Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin*/

class Temperatura {
   private valor: number;

   constructor(valor: number){
      this.valor = valor;
   }

   public convFahrenheit(): number{
      return (this.valor * 9 / 5 + 32)
   }
   public convKelvin(){
      return (this.valor + 273.15)
   }
}

const temperatura1 = new Temperatura (25)
console.log('A temperatura convertidade em Fahrenheit é: ' + temperatura1.convFahrenheit() + 'F°')
console.log('A temperatura convertidade em Kelvin é: ' + temperatura1.convKelvin() + 'K°')

//operação matemárica
// F=(25×9/5)+32=77°F fahrenheit,
// K=25+273.15=298.15K kelvin

