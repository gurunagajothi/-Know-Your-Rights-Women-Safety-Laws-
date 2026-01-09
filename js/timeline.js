const events = document.querySelectorAll('.event');
window.addEventListener('scroll',()=>{
events.forEach(e=>{
if(e.getBoundingClientRect().top < window.innerHeight - 100){
e.classList.add('show');
}
})
})
