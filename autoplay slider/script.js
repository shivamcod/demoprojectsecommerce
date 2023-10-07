let sliders = document.getElementsByClassName('slides');
let dotlinks = document.getElementsByClassName('dots');
let currentslide = 0;

document.getElementById("next").addEventListener("click", () => {
    changeslide(currentslide + 1);
});

document.getElementById("prev").addEventListener("click", () => {
    changeslide(currentslide - 1);
});

function changeslide(moveto){
    if(moveto >= sliders.length){
        moveto = 0;
    }
    if(moveto < 0){
        moveto = sliders.length -1;
    }

    sliders[currentslide].classList.toggle("active");
    dotlinks[currentslide].classList.toggle("activedot");
    sliders[moveto].classList.toggle("active");
    dotlinks[moveto].classList.toggle("activedot");
    currentslide = moveto;
}

document.querySelectorAll(".dots").forEach((bullet, bulletindex) => {
    bullet.addEventListener("click", () => {
        if(currentslide !== bulletindex){
            changeslide(bulletindex);
        }
    });
});

window.onload = setInterval(function(){
    changeslide(currentslide + 1)
},3000);



