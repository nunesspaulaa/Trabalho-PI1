$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
function alerta(){
    alert("Bem-vindo a página!")
}
let jogoPrincipal=document.querySelector("filme-principal")
function mudaFundo(){
    jogoPrincipal.style.background="background: linear-gradient(rgba(0,0,0,1),rgba(0,0,0,1) 100%), url(img/witcher3_.jpeg);"
}



