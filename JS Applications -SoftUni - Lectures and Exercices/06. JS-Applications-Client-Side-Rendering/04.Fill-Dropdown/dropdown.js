import {html, render} from "./node_modules/lit-html/lit-html.js";

const selectTemplate = (items) => html`
    <select id="menu">
        ${items.map(i => html`
            <option value=${i._id}>${i.text}</option>`)}
    </select>
`;

const root = document.querySelector('div');
document.querySelector('form').addEventListener('submit', sendData);

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

getData();


async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    const items = Object.values(data);
    update(items);
}

function update(items) {
    const result = selectTemplate(items);
    render(result, root);
}

async function sendData(ev) {
    ev.preventDefault();
    const text = document.querySelector('#itemText').value.trim();

    const res = await fetch(url,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text})
    });

    if (res.ok == true){
        getData();
    }
}


