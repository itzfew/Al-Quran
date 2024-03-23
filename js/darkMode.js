const darkMod = document.querySelector('.darkMode i');

export function darkMode(){
    darkMod.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            // darkMod.innerHTML = '<i class="bi bi-sun-fill"></i>  ';
            darkMod.classList.replace('bi-moon-fill', 'bi-sun-fill');
        } else {
            // darkMod.innerHTML = '<i class="bi bi-moon-fill"></i>';
            darkMod.classList.replace('bi-sun-fill', 'bi-moon-fill');
        }
    });

}


