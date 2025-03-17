
// Uppgift 1
function showMessage() {
    alert("Hello, JavaScript!")
}

document.getElementById("test_knapp").addEventListener("click",showMessage);


// Uppgift 2

let bild1 = document.getElementById("byta_bild");  
let images = [
    "/Assets/Images/stock/stock1.jpg",
    "/Assets/Images/stock/stock2.jpg",
    "/Assets/Images/stock/stock3.jpg"
];

let imgIndex = 0;
let animation;  

function bytaBild() {
    imgIndex = (imgIndex + 1) % 3;
    bild1.src = images[imgIndex]; 
}

function startAnimation() {
    bild1.style.cursor = "url(/Assets/Images/ikoner/sax-cursor-sned.png), auto";

    let img_text = document.querySelector(".figurtext"); 
    img_text.style.opacity = 1;

    setTimeout(() => {
        bytaBild();
        animation = setInterval(bytaBild, 1500);
    }, 800);
}


function stopAnimation() {
    clearInterval(animation);
    bild1.style.cursor = "default";

    let img_text = document.querySelector(".figurtext"); 
    img_text.style.opacity = 0;

    bild1.src = images[0];  
}

bild1.addEventListener("mouseenter", startAnimation);
bild1.addEventListener("mouseleave", stopAnimation);


// UPPGIFT 3 A

document.addEventListener("DOMContentLoaded", function() {
    let toggleButton = document.getElementById("toggle_meny");
    let hideElements = document.querySelectorAll(".hide");
    let nav = document.querySelector("nav"); 

    toggleButton.addEventListener("click", function() {
        
        for (let i = 0; i < hideElements.length; i++) { 
            if (hideElements[i].style.display === "none") {
                hideElements[i].style.display = "flex";
            } else {
                hideElements[i].style.display = "none";
            }
        }
        if (hideElements[0].style.display === "none") {
            toggleButton.textContent = "Visa meny";
            nav.style.height = toggleButton.offsetHeight + 20 + "px"; 
            toggleButton.style.alignSelf = "end";
        } else {
            toggleButton.textContent = "Dölj meny";
            nav.style.height = "auto"; 
            toggleButton.style.alignSelf = "start";
        }
    });
});

// UPPGIFT 3B

document.addEventListener("DOMContentLoaded", function(){
    let pilUpp = document.getElementById("pil_upp");

    window.onscroll = function() {
        if (document.documentElement.scrollTop > 100) {
            pilUpp.style.display = "block";
        } else {
            pilUpp.style.display = "none";
        }
    };

    pilUpp.addEventListener("click",function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });  
    });

});

// UPPGIFT 4A

$(document).ready(function() {
    $(".toggle_läge").click(function() {

        $("body").toggleClass("light-mode");
        $("nav").toggleClass("light-mode");

        let sunIcon = $("#sun_ikon");
        if ($("body").hasClass("light-mode")) {
            
            sunIcon.attr("src", "/Assets/Images/ikoner/moon.png");
        } else {
            
            sunIcon.attr("src", "/Assets/Images/ikoner/sun.png");
        }
    });
});

// UPPGIFT 4B

$(document).ready(function() {
    let numClicks = 0;
    let knapp = $("#förstora_text");
    
    knapp.click(function() {
        numClicks++;

        $("body").css("font-size", function(index, value) {
            let currentSize = parseFloat(value);
            return (numClicks % 2 === 0) ? (currentSize * 0.909) + "px" : (currentSize * 1.10) + "px";
        });

        if (numClicks %2 === 0) {
            knapp.text("Öka textstorlek");
        } else {
            knapp.text("Minska textstorlek");
        }

    });
});

