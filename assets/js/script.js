document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
} );
const header = document.getElementById("header");
document.addEventListener("scroll", () => {
    var y = window.scrollY;
    if(y>500){
        
        header.classList.remove("is-transpalent");
    }else{
        header.classList.add("is-transpalent");
    }
    console.log("hhelo");
});
