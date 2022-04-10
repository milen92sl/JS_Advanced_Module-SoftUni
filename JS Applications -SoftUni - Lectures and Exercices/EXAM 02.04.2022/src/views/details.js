import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as petsService from '../api/pets.js';

const detailsTemplate = (pet, onDelete, onDonate) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${pet.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: ${pet.donation}$</h4>
            </div>
            <!-- if there is no registered user, do not display div-->
            
                <!-- Only for registered user and creator of the pets-->
                ${pet.isOwner 
                ? html`<div class="actionBtn">
                <a href="/edit/${pet._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                </div>`
                : html`
                <div class="actionBtn">
                    <a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>
                </div>` }
                <!--(Bonus Part) Only for no creator and user-->
                
            </div>
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const petId = ctx.params.id;
    const pet = await petsService.getById(petId);

    if (ctx.user) {
        pet.isOwner = ctx.user._id == pet._ownerId;
    }

    ctx.render(detailsTemplate(pet, onDelete, onDonate));

    async function onDelete() {
        const choice = confirm(`Are you sure you want to delete ${pet.title}?`);
        if (choice) {
            await petsService.deleteById(petId);
            ctx.page.redirect('/');
        }
    }

    async function onDonate() {
        if (!pet.isOwner) {
            await petsService.donate(petId);
        }
    }
}