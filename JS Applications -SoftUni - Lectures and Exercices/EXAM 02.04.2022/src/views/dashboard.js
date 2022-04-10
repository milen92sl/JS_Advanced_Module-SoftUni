import { html } from '../../node_modules/lit-html/lit-html.js';
import * as petsService from '../api/pets.js';


const dashboardTemplate = (pets) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${petsList(pets)}
    </div>
</section>
`;

const petsList = (pets) => {
    if (pets.length == 0) {
        return html`<div>
                    <p class="no-pets">No pets in dashboard</p>
                    </div>` 
    } else {
        return pets.map(cardTemplate);
    }
}


const cardTemplate = (pet) => html`
    <div class="animals-board">
        <article class="service-img">
            <img class="animal-image-cover" src=${pet.image}>
        </article>
        <h2 class="name">${pet.name}</h2>
        <h3 class="breed">${pet.breed}</h3>
        <div class="action">
            <a class="btn" href="/details/${pet._id}">Details</a>
        </div>
    </div>

`;

export async function dashboardPage(ctx) {
    const pets = await petsService.getAll();
    ctx.render(dashboardTemplate(pets));
}