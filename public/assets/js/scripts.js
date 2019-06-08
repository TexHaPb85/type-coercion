// Change background image according to the actual time of the day

let currentTime = new Date().getHours();
let afternoonBg = 'assets/images/bg/background1.jpg';
let morningBg = 'assets/images/bg/background2.jpg';

document.body.style.backgroundImage = `url(${currentTime < 12 ? morningBg : afternoonBg}`;

//Loader script
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    //console.log(loader);
    loader.className += " hidden";
});