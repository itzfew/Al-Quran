import {id, fetchSingleSurah} from './singleSurah.js';
import {darkMode} from './darkMode.js';
import {scrollBar, scrollTop} from './scrollEfect.js';



const log = document.querySelector('.log')


log.addEventListener('click', ()=>{
    window.history.back()
})

fetchSingleSurah(`https://api.alquran.cloud/v1/surah/${id}`);


// Dark mode
darkMode();

// When the user scrolls the page show scroll indicator header 
scrollBar();

// scroll top the page  
scrollTop();