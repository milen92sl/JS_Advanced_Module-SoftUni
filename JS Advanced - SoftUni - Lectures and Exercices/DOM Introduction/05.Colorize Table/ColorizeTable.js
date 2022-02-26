function colorize() {
    // let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td');

    // rowElements.forEach(x=> {
    //     x.style.backgroundColor = 'teal';
    // });

    let rowEl = document.getElementsByTagName('tr');

    let rows = Array.from(rowEl);

    rows.forEach((x,i) => {
        if(i % 2 != 0){
            x.style.backgroundColor = 'teal';
        }
    });

}