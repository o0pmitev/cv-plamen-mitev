const printButton = document.querySelectorAll("button");

printButton.forEach( button => {
    button.addEventListener('click', () => {
        window.print();
    })
} )