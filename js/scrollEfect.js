export function scrollBar(){
    window.onscroll = ()=>{
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.querySelector(".bar").style.width = scrolled + "%";
        
    }
    
};

export function scrollTop(){
    const scrollIcon = document.querySelector('.scrollTop ');
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 100){
        scrollIcon.classList.add('show');
        
    }else{
        scrollIcon.classList.remove('show');
    }
    
})


const scrollTop = document.querySelector('.scrollTop');
scrollTop.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

};