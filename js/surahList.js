const surahList = document.querySelector('.surahList'),
searchBox = document.querySelector('.searchBox input'),
sortable = document.querySelector('.sortable select');

let surahs = [];

// Fetch data from the Al-Quran API 
export async function fetchSurahList(){
    try{
        const res = await fetch(`https://api.alquran.cloud/v1/surah`);
        const data = await res.json();
        surahs = data.data;
        displaySurahs();
    }catch(err){
        console.error("Error fetching data: " + err);
    }
};

// Update the surah list based on the selected order and search input  
// function displaySurahs(){
//     surahList.innerHTML = ' ';
//     surahs
//     .filter((item)=>{
//         return item.englishName.toLowerCase().includes(searchBox.value.toLowerCase());
//     })
//     .sort((a,b)=>{
//         if(sortable.value === 'asc'){
//             return a.number - b.number;
//         }else if(sortable.value === 'desc'){
//             return b.number - a.number;
//         }
//     })
//     .forEach((item)=>{
//         surahList.innerHTML += `
//         <a href="singleSurah.html?id=${item.number}" class="surahCard">
//         <div class="leftInfo">
//             <div class="num">
//                 <span> ${item.number} </span>
//             </div>
//             <div class="name">
//                 <h3> ${item.englishName} </h3>
//                 <p>${item.englishNameTranslation} </p>
//             </div>
//         </div>
//         <div class="rightInfo">
//             <span> ${item.name}</span>
//             <p> ${item.numberOfAyahs} Verses</p>
//         </div>

//         </a>
//         `
//     }
//     )
// }


// Update the surah list based on the selected order and search input and before updating show loading if no data found then show no results found 
export function displaySurahs(){
    let html = ' ';
    if(surahs.length === 0){
        surahList.innerHTML = `<h2 class="loading">Loading...</h2>`;
    }else{
        surahs
        .filter((item)=>{
            return item.englishName.toLowerCase().includes(searchBox.value.toLowerCase());
        })
        .sort((a,b)=>{
            if(sortable.value === 'asc'){
                return a.number - b.number;
            }else if(sortable.value === 'desc'){
                return b.number - a.number;
            }
        })
        .forEach((item)=>{
            html += `
            <a href="singleSurah.html?id=${item.number}" class="surahCard">
            <div class="leftInfo">
                <div class="num">
                    <span> ${item.number} </span>
                </div>
                <div class="name">
                    <h3> ${item.englishName} </h3>
                    <p>${item.englishNameTranslation} </p>
                </div>
            </div>
            <div class="rightInfo">
                <span> ${item.name}</span>
                <p> ${item.numberOfAyahs} Verses</p>
            </div>

            </a>
            `
        }
        )
        surahList.innerHTML = html;
        if(html === ' '){
            surahList.innerHTML = `<h2 class="no-results">No Results Found</h2>`;
        }
    }
    
};


