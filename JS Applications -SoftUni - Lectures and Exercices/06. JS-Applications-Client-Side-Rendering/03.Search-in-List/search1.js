import { towns } from "./towns.js";
import { render, html } from "./node_modules/lit-html/lit-html.js";

const townsList = (towns) => html`
<ul>
   ${towns.map(townTemplate)}
</ul>
`;

const townTemplate = (town) => html`
<li>${town}</li>
`

const townsElement = document.getElementById('towns');

function update() {
   render(townsList(towns), townsElement);
}

update();

const searchBtn = document.getElementById('searchBtn');
const resultElement = document.getElementById('result');

searchBtn.addEventListener('click', search);

function search(event) {
   let matches = 0;
   const inputField = event.target.parentElement.querySelector('#searchText').value;
   const townsList = [...townsElement.querySelectorAll('li')];
   townsList.forEach(t => {
      if (t.textContent.toLocaleLowerCase().includes(inputField.toLocaleLowerCase()) && inputField != '') {
         t.classList.add('active');
         matches++;
      } else {
         t.classList.remove('active');
      }
   });

   if (matches > 0) {
      resultElement.textContent = `${matches} matches found`;
   } else {
      resultElement.textContent = '';
   }
}


