import { html } from "../../node_modules/lit-html/lit-html.js";

import * as albumService from '../services/albumService.js';

const catalogTemplate = (albums, user) => html`
<!--Catalog-->
<section id="catalogPage">
    <h1>All Albums</h1>
    ${album.map(x => x.albumTemplate(x, Boolean(user)))}

    ${albums.length === 0
        ? html`<p>No Albums in Catalog!</p>`
        : nothing
    }
</section>
`;

export const calatogView = (albums, user, ctx) => {
    albumService.getAll()
        .then(albums => {
            ctx.render(catalogTemplate(albums, ctx.user));
        })
}