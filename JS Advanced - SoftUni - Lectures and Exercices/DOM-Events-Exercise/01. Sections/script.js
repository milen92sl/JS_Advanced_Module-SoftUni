function create(input) {
   let parentElement = document.getElementById('content');
   let elements = input;

   for (let element of elements) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      let text = document.createTextNode(element);

      p.appendChild(text);
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', function(event){
         event.target.children[0].style.display = 'block';
      });
      parentElement.appendChild(div);
   }

}