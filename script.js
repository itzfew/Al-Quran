document.addEventListener("DOMContentLoaded", function() {
    // Fetch Surah Yaseen text from the text file
    fetch('surah-yaseen.txt')
    .then(response => response.text())
    .then(text => {
        // Insert Surah Yaseen text into the HTML
        document.getElementById('surah-yaseen').innerHTML = text;
    })
    .catch(error => console.log('Error fetching Surah Yaseen text:', error));

    // Add event listener to Surah Yaseen heading for toggle effect
    document.getElementById('surah-yaseen-heading').addEventListener('click', function() {
        var panel = document.getElementById('surah-yaseen-panel');
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});
