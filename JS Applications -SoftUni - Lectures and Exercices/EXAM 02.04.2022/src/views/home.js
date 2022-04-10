import { html } from '../../node_modules/lit-html/lit-html.js';

import * as petsService from '../api/pets.js';

const homeTemplate = (pets) => html`
<section class="welcome-content">
    <article class="welcome-content-text">
        <h1>We Care</h1>
        <h1 class="bold-welcome">Your Pets</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
    </article>
    <article class="welcome-content-image">
        <img src="./images/header-dog.png" alt="dog">
    </article>
    ${pets.length > 0 
        ? pets.map(previewTemplate)
        : html `<p class="no-pets">No pets in dashboard</p>`
        }
</section>
`;

const previewTemplate = (pet) => html`
<div class="animals-board">
    <img class="animal-image-cover" src=${pet.image}>
    <h2 class="name">${pet.name}</h2>
    <h3 class="breed">${pet.breed}</h3>
    <div class="action">
        <a class="btn" href="/details/${pet._id}">Details</a>
    </div>
</div>
`;

export async function homePage(ctx) {

    const pets = await petsService.getRecent();
    ctx.render(homeTemplate(pets));
}