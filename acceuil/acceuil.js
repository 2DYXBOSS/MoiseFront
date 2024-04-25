const menuImage = document.querySelector(".menuImage")
const menuhambeur = document.querySelector(".gramdmenu")
const croix = document.querySelector("#croix")
const header = document.querySelector("header")


menuImage.addEventListener('click',()=>{
    menuhambeur.classList.add("active");
    croix.src = "croix.png"
})
menuhambeur.addEventListener('click',()=>{
    menuhambeur.classList.remove("active");
    croix.src = "menu.png"

})

function oncache(iddivcache) {
    et = "." + iddivcache + ""
    let ecraid  = document.querySelector(et)
    ecraid.style.display = "none"
    
}
function ouvrie(iddivcache) {
    et = "." + iddivcache + ""
    let ecraid  = document.querySelector(et)
    ecraid.style.display = "flex"
    
}
