export { Omnivoro, Carnivoro, Herviboro }; 
 
class Mamifero {
    Comer() {
      console.log("El mamífero está comiendo.");
    }
  }
  
  class Herviboro extends Mamifero {
    Comer() {
      console.log("El hervíboro está comiendo plantas.");
    }
  }
  
  class Carnivoro extends Mamifero {
    Comer() {
      console.log("El carnívoro está comiendo carne.");
    }
  }
  
  class Omnivoro extends Mamifero {
    Comer() {
      console.log("El omnívoro está comiendo tanto plantas como carne.");
    }
  }