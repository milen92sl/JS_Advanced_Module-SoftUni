import { login } from '../api/api.js';
import {html} from '../lib.js'
import { notify } from './notify.js';

const loginTemplete = (onSubmit) => html`
    <section id="login">
        <form @submit=${onSubmit} id="login-form">
            <div class="container">
                <h1>Login</h1>
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn button" value="Login">
                <div class="container signin">
                    <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                </div>
            </div>
        </form>
    </section>`;

export function loginPage(ctx){
    ctx.render(loginTemplete(onSubmit))

    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);


        const email = formData.get('email');
        const password = formData.get('password');

        
        if(email == '' || password == ''){
            return notify('All fields are required')
        }
        
        await login(email, password)
        ctx.updateUserNav;
        ctx.page.redirect('/memes')
    }
}