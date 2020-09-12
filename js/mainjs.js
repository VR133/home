$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    var element = document.getElementById("navigare");

    
    if (wScroll > 20) {
        element.classList.add("fundal-modificat");
    }
    else {
        element.classList.remove("fundal-modificat");
    };

});
function showmenu() {
    var element = document.getElementById("left-menu");
    element.setAttribute('style', "left :"+ 0 + "px");
}
function hidemenu() {
    var element = document.getElementById("left-menu");
    element.removeAttribute('style', "left :"+ 0 + "px");
}