let menu = document.querySelector('.menu');
let link = document.querySelector('.nav');
menu.addEventListener('click',function () {
   
    link.classList.toggle('show');
    this.classList.toggle('cross');
})

menu.addEventListener('click',function () {
    if(link.classList.contains('show')){
    scrollTop = document.documentElement.scrollTop;
    scrollLeft =document.documentElement.scrollLeft;
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
else{
    window.onscroll = function() {};
}
});
