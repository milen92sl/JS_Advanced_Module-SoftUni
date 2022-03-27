import { logout } from "../api/api.js";
import { page, render } from "../lib.js";
import { getUserData } from "../util.js";

const root = document.getElementById('site-content')
document.getElementById('logoutBtn').addEventListener('click', onLogout)


export function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

export function updateUserNav(){
    const userData = getUserData()
    if(userData){
        document.getElementById('user').style.display = 'inline-block'
        document.getElementById('guest').style.display = 'none'
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`
    } else{
        document.getElementById('guest').style.display = 'inline-block'
        document.getElementById('user').style.display = 'none'
    }
}

function onLogout(){
    logout();
    updateUserNav();
    page.redirect('/');
}