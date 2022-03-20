import {html, render} from "./node_modules/lit-html/lit-html.js";

const tbody = document.querySelector('tbody');
const input = document.querySelector(`#searchField`);
document.querySelector(`#searchBtn`).addEventListener('click', onSearch);

const rowTemplate = (studentData) => html`
    <tr class=${studentData.match ? 'select' : ''}>
        <td>${studentData.student.firstName} ${studentData.student.lastName}</td>
        <td>${studentData.student.email}</td>
        <td>${studentData.student.course}</td>
    </tr>`;

let studentsData;

async function getData(){
    const url = `http://localhost:3030/jsonstore/advanced/table`;

    const res = await fetch(url);
    const data = Object.values(await res.json());
    studentsData = data.map(s => ({student: s, match: false}));

    update();
}

getData();

function update(){
    render(studentsData.map(rowTemplate), tbody)
}

function onSearch(ev){
    const searchText = input.value.toLocaleLowerCase();

    studentsData.forEach(s => searchText && Object.values(s.student)
        .join('')
        .toLocaleLowerCase()
        .includes(searchText) ? s.match = true : s.match = false);

    update()
}

