const surahs = [
  "In the name of God, the Gracious, the Merciful.",
  "Praise be to God, Lord of the Worlds.",
  "The Most Gracious, the Most Merciful.",
  "Master of the Day of Judgment.",
  "It is You we worship, and upon You we call for help.",
  "Guide us to the straight path.",
  "The path of those You have blessed, not of those against whom there is anger, nor of those who are misguided."
];

let currentSurahIndex = 0;
const quranContent = document.querySelector('.quran-content');
const playButton = document.getElementById('playButton');
let isPlaying = false;
let scrollSpeed = 1; // Default scroll speed

function displaySurah(index) {
  quranContent.innerHTML = `<p>${surahs[index]}</p>`;
}

displaySurah(currentSurahIndex);

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
