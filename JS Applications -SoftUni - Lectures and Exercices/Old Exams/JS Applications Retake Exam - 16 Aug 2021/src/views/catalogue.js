import { getAllGames } from '../api/data.js'
import {html} from '../lib.js'

const catalogueTemplate = (games) => html`
<!-- Catalogue -->
        <section id="catalog-page">
            <h1>All Games</h1>

            ${games.length == 0
            ? html`<h3 class="no-articles">No articles yet</h3>`
            : games.map(gameTemplate)}

        </section>`

let gameTemplate = (game) => html`
    <div class="allGames">
        <div class="allGames-info">
            <img src="${game.imageUrl}">
            <h6>${game.category}</h6>
            <h2>${game.title}</h2>
            <a href="/details/${game._id}" class="details-button">Details</a>
        </div>
    </div>`

export async function cataloguePage(ctx){
    let games = await getAllGames();
    
    ctx.render(catalogueTemplate(games))
}