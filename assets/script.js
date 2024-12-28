$(document).ready(function () {
    /* Rotating Text - Morphtext */
    $("#js-rotating").Morphext({
        animation: "fadeInUp",
        separator: ",",
        speed: 4000,
    });
});

function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}