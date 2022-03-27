import { html } from '../../node_modules/lit-html/lit-html.js';

import * as gamesService from '../api/games.js';
import { commentsView } from './comments.js';

const detailsTemplate = (game, commetsSection, commentFormSection, onDelete) => html`<!--Details Page-->
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>
        ${commetsSection}

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${game.isOwner
        ? html`
        <div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>` 
        : nothing}
        
    </div>

    <!-- Bonus -->
    ${commentFormSection}
</section>
`;

export async function detailsPage(ctx) {
    const gameId = ctx.params.id;
    const [game, commetsSection] = await Promise.all([
        gamesService.getById(gameId),
        commentsView(gameId)
    ]);

    
    if(ctx.user){
        game.isOwner = ctx.user._id == game._ownerId;
    }
    const commentFormSection = commentFormView(ctx, game.isOwner);
    
    ctx.render(detailsTemplate(game, commetsSection, commentFormSection, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this game?');
        if(choice){
            await gamesService.deleteById(gameId);
            ctx.page.redirect('/');
        }
    }
}