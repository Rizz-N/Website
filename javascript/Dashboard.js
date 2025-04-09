// Carousel
const imageBor =
document.querySelector('.carousel')
const slider =
document.querySelectorAll('.slide');

let currentIndex = 0;

function nextSlide(){
    currentIndex++;
    if (currentIndex >= slider.length){
        currentIndex = 0;
    }
    updateCarousel();
}
function updateCarousel(){
    const offset = -currentIndex * 100;
    imageBor.style.transform = `translateX(${offset}%)`;
}
setInterval(nextSlide, 5000)

// Navbar 2
const navItem =
document.querySelectorAll('.sec-navbar ul li a');

navItem.forEach(item =>{
    item.addEventListener('click',(e) =>
    {
        // e.preventDefault();

        navItem.forEach(nav => 
            nav.classList.remove('active'));
            item.classList.add('active');
    });
});

// navbar scroll active
document.addEventListener("scroll", () => {
    const itemSec = 
    document.querySelectorAll('.item_container');

        let sesiAktiv = null;

        itemSec.forEach((div) => {
            const rect =
            div.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2){
              sesiAktiv = div.id;  
            }
        });

        navItem.forEach((link) => {
            if(
                link.getAttribute("href").slice(1) === sesiAktiv
            ){
                link.classList.add("active");
            }else{
                link.classList.remove("active");
            }
        });
});
