function extractText() {
    let ulElement = document.getElementById('items');

    console.log(ulElement);

    let textAreaElement = document.getElementById('result');
    textAreaElement.textContent = ulElement.textContent;
}