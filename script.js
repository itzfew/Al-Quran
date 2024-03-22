document.addEventListener("DOMContentLoaded", function() {
    // Fetch Surah Yaseen text from the text file
    fetch('surah-yaseen.txt')
    .then(response => response.text())
    .then(text => {
        // Insert Surah Yaseen text into the HTML
        document.getElementById('surah-yaseen').innerHTML = text;
    })
    .catch(error => console.log('Error fetching Surah Yaseen text:', error));
});
