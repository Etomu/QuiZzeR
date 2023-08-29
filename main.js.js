// change navbar styles on scroll

window.addEventListener('scroll', () => (
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
))



// show/hide faq answer

const faq = document.querySelectorAll('.faq__title');

let parent
faq.forEach(faq => {
    faq.addEventListener('click', (e) => {
        const target = e.target
        if (target.nodeName == "H4" || target.nodeName == "I") {
            parent = target.parentElement.parentElement
        } else {
            parent = target.parentElement
        }
        const icon = parent.querySelector(".faq__icon")
        if (icon.className == "uil uil-plus faq__icon") {
            icon.className = "uil uil-minus faq__icon"
        } else {
            icon.className = "uil uil-plus faq__icon"
        }
        
        const desc = parent.querySelector(".faq__desc")
        desc.classList.toggle("faq__desc__open")
    })
})


// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)