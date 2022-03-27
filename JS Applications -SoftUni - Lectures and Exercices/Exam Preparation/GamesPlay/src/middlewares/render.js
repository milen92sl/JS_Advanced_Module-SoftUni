import { html, render } from '../../node_modules/lit-html/lit-html.js';


const navTemplate = () => html`
<!-- Navigation -->
<h1><a class="home" href="/">GamesPlay</a></h1>
<nav>
    <a href="/catalog">All games</a>
    <!-- Logged-in users -->
    ${user 
    ? html`<div id="user">
        <a href="/create">Create Game</a>
        <a href="/logout">Logout</a>
    </div>`
    : html `<div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`
    }     
</nav>
`;

const header = document.querySelector('.my-header');

const root = document.getElementById('main-content');


function ctxRender(content) {
    render(content, root);
}

export function appRender(ctx, next) {

    render(navTemplate(ctx.user), header);
    ctx.render = ctxRender;
    next();

}