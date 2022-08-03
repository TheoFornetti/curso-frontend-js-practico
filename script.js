const navEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector("#menu-interactive")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

const cardsContainer = document.querySelector('.cards-container')

navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    console.log('funciona')
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    aside.classList.add('inactive')
}



function toggleCarritoAside(){

    mobileMenu.classList.add('inactive')
    aside.classList.toggle('inactive')

    
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Tele',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'F1',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


for(product of productList){

   const htmlCards = `<div class="product-card">
   <img class="imagenes-cartas" src= ${product.image}>
   <div class="product-info">
     <div>
       <p>$${product.price}</p>
       <p>${product.name}</p>
     </div>
     <figure>
       <img src="./icons/bt_add_to_cart.svg" alt="">
     </figure>
   </div>
   </div>`

   cardsContainer.innerHTML += htmlCards

 

}

const ImgCartas = document.querySelector(".imagenes-cartas")

ImgCartas.addEventListener("click", openInfo)
const mostrarInfo = document.querySelector(".product-informacion")

function openInfo(){
    mostrarInfo.classList.remove("inactive")
}

const btncerrar = document.querySelector(".product-detail-close")

btncerrar.addEventListener('click', closeInfo)

function closeInfo(){
    mostrarInfo.classList.add("inactive")
}

