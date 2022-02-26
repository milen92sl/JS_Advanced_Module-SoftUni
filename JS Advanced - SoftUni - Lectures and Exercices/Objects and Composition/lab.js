// Problem 1:

function solve(name, population, treasury){
    let record = {
    name: name,
    population : population,
    treasury : treasury,
    };
    return record;
  }
  solve('Pesho', 2233, 231);

  // Problem 2: 
function solve(input){
    let towns = {};

    for (const infoLine of input) {
       let infoArr = infoLine.split(' <-> ');
       let town = infoArr[0];
       let population = Number(infoArr[1]);
      
       if(!towns[town]){
         towns[town] = 0;
       }
       towns[town] += population;
    }
    for (const town in towns) {
      console.log(`${town} : ${towns[town]}`);
  }
}
  solve(['Istanbul <-> 100000',
  'Honk Kong <-> 2100004',
  'Jerusalem <-> 2352344',
  'Mexico City <-> 23401925',
  'Istanbul <-> 1000']);

  Example 

  let car = {
    model: 'Audi',
    year : 2020,
    facelift: true,
    honk: function(){  // Method with function expression
      console.log('Beeeep beeep!');
    },
    honk2: () => {  // Method with arrow function
      console.log('Beeep beeep2!');
    },
    honk3() {  // Object method notation
      console.log('Beeep beeep3!');
    }
}
car.honk();
car.honk2();
car.honk3();


// Problem 3: 

function solve(name, population, treasury){
    let record = {
    name: name,
    population : population,
    treasury : treasury,
    taxRate: 10,
    collectTaxes(){
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage){
      percentage /= 100;
      this.population *= percentage + 1;
    },
    applyRecession(percentage){
      percentage /= 100;
      this.treasury *= 1 - percentage;
    }
    };
    return record;
  }

  const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

