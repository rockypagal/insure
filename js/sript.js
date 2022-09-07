let menu = document.querySelector('.menu');
let link = document.querySelector('.nav');
menu.addEventListener('click',function () {
   
    link.classList.toggle('show');
    this.classList.toggle('cross');
})