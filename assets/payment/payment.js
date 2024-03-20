

AOS.init({
  duration: 1000,
  once: true,
});


const btn = document.querySelector('.btnpay');
const loadings = document.querySelector('.content')

btn.addEventListener('click', function(){
  loading()
});

function loading(){
    loadings.classList.add('load')
   setTimeout(()=>{
    loadings.classList.remove('load')
   },2000)
   setTimeout(()=>{
    window.location.href = '../success/success.html'
   },2100)
}

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