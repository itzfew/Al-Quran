// Function to toggle visibility of Surah list on small screens
function toggleMenu() {
    var menu = document.getElementById("surah-list");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Add event listener for clicking on the menu button
document.getElementById("menu-button").addEventListener("click", toggleMenu);

// Add event listener for clicking on a Surah link to close the menu on small screens
var surahLinks = document.querySelectorAll(".surah-link");
surahLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        var menu = document.getElementById("surah-list");
        if (window.innerWidth <= 768) { // Adjust breakpoint as needed
            menu.style.display = "none";
        }
    });
});
