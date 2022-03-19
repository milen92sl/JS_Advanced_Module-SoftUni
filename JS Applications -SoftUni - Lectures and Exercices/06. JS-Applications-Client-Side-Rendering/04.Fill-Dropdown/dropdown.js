import { html, render } from '../node_modules/lit-html/lit-html.js';

const url = `http://localhost:3030/jsonstore/advanced/dropdown`;

async function getOptions() {
    const response = await fetch(url);
    return await response.json();

}

const selectTemplete = (data) => html`
    <select id="menu">
        ${data.map(el => html`<option value = ${el._id}>${el.text}</option>`)}
    </select>
`

const options = Object.values(await getOptions());
const main = document.querySelector('div');

update(options);

function update(options) {
    const result = selectTemplete(options);
    render(result, main);
}

document.querySelector('form').addEventListener('submit', addItem);

async function addItem(ev) {
    ev.preventDefault();

    const text = document.getElementById('itemText').value;
    const optionsMenu = document.getElementById('menu');

    if(text !== '' && !optionsMenu.innerText.includes(text)){
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({text})
        })

        options.push(await response.json());
        update(options);
        document.getElementById('itemText').value = '';
    }
}