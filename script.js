const navEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector("#menu-interactive")

navEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    console.log('funciona')
    desktopMenu.classList.toggle('inactive')
}

console.log("alo")