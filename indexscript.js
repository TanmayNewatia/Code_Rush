function icon(anchor) {
    anchor.classList.toggle("fa-sun");
    anchor.classList.toggle("fa-moon");
    var element = document.getElementsByClassName("blac");
    for(let i=0;i<element.length;i++){
        element[i].classList.toggle("dark");
    }
}
