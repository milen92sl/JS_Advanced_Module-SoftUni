function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let tokens = JSON.parse(document.querySelector('#inputs textarea').value).map(e => {
         return e.split(/(?:\s-\s)|(?:,\s)|\s/g);
      });

      let restaurants = {};

      for (let i = 0; i < tokens.length; i++) {

         let name = tokens[i][0];
         if (!restaurants[name]) {
            restaurants[name] = {
               workers: [],
               total: 0
            };
         }

         for (let j = 1; j < tokens[i].length; j += 2) {

            let currentWorker = {
               name: tokens[i][j],
               salary: Number(tokens[i][j + 1])
            };
            restaurants[name].workers.push(currentWorker);
            restaurants[name].total += currentWorker.salary;
         }
      }

      let restName = "";
      let maxAvg = Number.NEGATIVE_INFINITY;
      for (const key in restaurants) {
         let avg = restaurants[key].total / restaurants[key].workers.length;

         if (maxAvg < avg) {
            maxAvg = avg;
            restName = key;
         }
      }

      restaurants[restName].workers.sort((a, b) => b.salary - a.salary);
      let bestRestaurantResult = `Name: ${restName} Average Salary: ${maxAvg.toFixed(2)} Best Salary: ${restaurants[restName].workers[0].salary.toFixed(2)}`;
      let bestWorkers = restaurants[restName].workers.map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ');

      let bestRestElement = document.querySelector('#bestRestaurant p');

      bestRestElement.textContent = bestRestaurantResult;

      document.querySelector('#workers p').textContent = bestWorkers;
   }

}