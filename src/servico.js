// Get the modals
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");
var modal6 = document.getElementById("modal6");

// Get the buttons that open the modals
var btnModal1 = document.getElementById("openModal1");
var btnModal2 = document.getElementById("openModal2");
var btnModal3 = document.getElementById("openModal3");
var btnModal4 = document.getElementById("openModal4");
var btnModal5 = document.getElementById("openModal5");
var btnModal6 = document.getElementById("openModal6");

// Get the <span> elements that close the modals
var spanClose1 = document.getElementById("closeModal1");
var spanClose2 = document.getElementById("closeModal2");
var spanClose3 = document.getElementById("closeModal3");
var spanClose4 = document.getElementById("closeModal4");
var spanClose5 = document.getElementById("closeModal5");
var spanClose6 = document.getElementById("closeModal6");

// When the user clicks on the button, open the modal
btnModal1.onclick = function() {
    modal1.style.display = "block";
}
btnModal2.onclick = function() {
    modal2.style.display = "block";
}
btnModal3.onclick = function() {
    modal3.style.display = "block";
}
btnModal4.onclick = function() {
    modal4.style.display = "block";
}
btnModal5.onclick = function() {
    modal5.style.display = "block";
}
btnModal6.onclick = function() {
    modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanClose1.onclick = function() {
    modal1.style.display = "none";
}
spanClose2.onclick = function() {
    modal2.style.display = "none";
}
spanClose3.onclick = function() {
    modal3.style.display = "none";
}
spanClose4.onclick = function() {
    modal4.style.display = "none";
}
spanClose5.onclick = function() {
    modal5.style.display = "none";
}
spanClose6.onclick = function() {
    modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
}