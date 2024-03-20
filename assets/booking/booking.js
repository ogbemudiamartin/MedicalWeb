
AOS.init({
    duration: 2000,
    once: true,
});

const icon = document.querySelector(".fa-solid");
const links = document.querySelector(".header-list");
const background = document.querySelector(".body");
// const iconss = document.querySelector(".fa-xmark")
console.log(links);
icon.addEventListener('click', ()=>{
    links.classList.toggle("active");
    icon.classList.toggle('fa-xmark')
    background.classList.toggle("open");
})

background.addEventListener('click', () =>{
    icon.classList.remove('fa-xmark')
    links.classList.remove('active')
    background.classList.remove('open')
 })