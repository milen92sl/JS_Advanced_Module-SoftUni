// Problem 1: 
function solve(input){
    let obj = {};

    let inputL = input.length;
    for(let i = 0; i < inputL; i+=2){
        let productName = input[i];
        let calories = Number(input[i + 1]);
        obj[productName] = calories;
    }
    console.log(obj)
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);


// Problem 2: 
function constructionCrew(worker){

    if(worker.dizziness){

        worker.levelOfHydrated += 0.1 * worker.experience * worker.weight;
        worker.dizziness = false;
    }

    return worker;
}
    constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });

// Problem 3: 
function carFactory(object) {

    let resultCar = {};
    let engine = {};
    let carriage = {};

    resultCar.model = object.model;

    if (object.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (object.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (object.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }

    carriage.type = object.carriage;
    carriage.color = object.color;

    if(object.wheelsize % 2 === 0){
        object.wheelsize--;
    }

    resultCar.engine = engine;
    resultCar.carriage = carriage;
    resultCar.wheels = [object.wheelsize, object.wheelsize, object.wheelsize, object.wheelsize];

    return resultCar;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14});


// Problem 4:
function heroicInv(arr) {
    const result = [];
    arr.forEach((el) => {
        let [name, level, items] = el.split(" / ");
        result.push({
            name, //short of name: name,
            level: Number(level),
            items: items ? items.split(", ") : []
        });
    });
    console.log(JSON.stringify(result));
}
heroicInv(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);


// Problem 5:

function lowestPricesInCities(input){

    let products = [];

    while(input.length > 0){
        let [town, product, price] = input.shift().split(' | ');

        if(products.filter(x=> x.product === product).length > 0){
            let obj = products.find(x=>x.product === product)

            if(obj.price > Number(price)){
                obj.price = Number(price);
                obj.town = town;
            }

        }else {
            let obj = {product, town, price: Number(price)};
            products.push(obj);
        }
    }
    for (let product of products) {
        console.log(`${product.product} -> ${product.price} (${product.town})`);
    }
}
    lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);

// Problem 6:
function storeCatalog(array) {

    let result = array.sort((a, b) => a.localeCompare(b))

    let current = [];
    let firstChar = '';

    for (let i = 0; i < result.length; i++) {
        current = result[i].split(' : ');
        if (result[i][0] !== firstChar) {
            console.log(result[i][0]);
        }
        console.log(`  ${current[0]}: ${current[1]}`);
        firstChar = result[i][0];
    }
}
storeCatalog(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);




// Problem 7:

function townsToJson(arr) {
    const result = [];
    const splitted = arr[0].split("|");
    const town = splitted[1].trim();
    const latitude = splitted[2].trim();
    const longitude = splitted[3].trim();

    for (let i = 1; i < arr.length; i++) {
        const obj = {};
        const splittedEntry = arr[i].split("|");
        obj[town] = splittedEntry[1].trim();
        obj[latitude] = Number(Number(splittedEntry[2].trim()).toFixed(2));
        obj[longitude] = Number(Number(splittedEntry[3]).toFixed(2));

        result.push(obj);
    }
    return JSON.stringify(result);
}
console.log(townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));

// Problem 8:

function rectangle(width, height, color) {
    return {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1, color.length),
        calcArea: function () {
            return width * height;
        }
    }
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

// Problem 10:
function solve() {
    let fighter = (name) => {
        return {
            name,
            health: 100,
            stamina: 100,
            fight() {
                this.stamina -= 1;
                console.log(`${this.name} slashes at the foe!`);
            }
        }
    }
    let mage = (name) => {
        return {
            name,
            health: 100,
            mana: 100,
            cast(spellName) {
                this.mana -= 1;
                console.log(`${name} cast ${spellName}`)
            }
        }
    }
    return { fighter: fighter, mage: mage };
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);

