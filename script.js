let surahs = [];
let currentSurahIndex = 0;
const quranContent = document.querySelector('.quran-content');
const playButton = document.getElementById('playButton');
let isPlaying = false;
let scrollSpeed = 1; // Default scroll speed
const surahFiles = ['surah1.txt', 'surah2.txt', 'surah3.txt']; // Add more file names as needed

// Function to load Surah from text file
function loadSurah(filename) {
  return fetch(filename)
    .then(response => response.text())
    .catch(error => console.error('Error fetching Surah:', error));
}

// Function to display current Surah
function displaySurah(index) {
  quranContent.innerHTML = `<p>${surahs[index]}</p>`;
}

// Function to scroll to bottom
function scrollToBottom() {
  const element = quranContent;
  const scrollHeight = element.scrollHeight;
  const clientHeight = element.clientHeight;
  const maxScrollTop = scrollHeight - clientHeight;
  let scrollTop = element.scrollTop;

  if (scrollTop < maxScrollTop) {
    scrollTop += scrollSpeed;
    element.scrollTop = scrollTop;
    if (isPlaying) {
      setTimeout(scrollToBottom, 1000 / scrollSpeed);
    }
  } else {
    isPlaying = false;
    playButton.textContent = 'Play';
  }
}

// Load all Surahs
Promise.all(surahFiles.map(file => loadSurah(file)))
  .then(data => {
    surahs = data;
    displaySurah(currentSurahIndex);
  });

document.getElementById('prevButton').addEventListener('click', () => {
  if (currentSurahIndex > 0) {
    currentSurahIndex--;
    displaySurah(currentSurahIndex);
  }
});

document.getElementById('nextButton').addEventListener('click', () => {
  if (currentSurahIndex < surahs.length - 1) {
    currentSurahIndex++;
    displaySurah(currentSurahIndex);
  }
});

playButton.addEventListener('click', () => {
  if (!isPlaying) {
    isPlaying = true;
    playButton.textContent = 'Pause';
    scrollToBottom();
  } else {
    isPlaying = false;
    playButton.textContent = 'Play';
  }
});

document.getElementById('speedSelect').addEventListener('change', (event) => {
  scrollSpeed = parseFloat(event.target.value);
});
