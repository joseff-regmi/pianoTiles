let favSongs = [];
let isStarted = false;
let tiles = [];
let songs = [];
let score = 0;
let coin = 0;
let diamond = 0;
let star = [];
let numOfTiles = 50;
let bonusTiles = [];

const favBtns = document.getElementsByClassName('fav-btn');
const pianoHome = document.getElementById('home-and-piano-id')
const home = document.getElementsByClassName('home');
const piano = document.getElementById('piano-id');
const playBtns = document.getElementsByClassName('play-btn');
const summary = document.getElementById('score-bord-id');
const menu = document.getElementById('menu-btn-id');
const replay = document.getElementById('replay-btn-id');
const displayScore = document.getElementById('song-score-id');
const displaySong = document.getElementById('song-name-id');
const songNames = document.getElementsByClassName('songs-name');
const displayScorePiano = document.getElementById('display-score-id');
const displayCoin = document.getElementById('collected-coin-id');
const displayStarPiano = document.getElementById('display-star-id');
const collectedCoinGift = document.getElementById('collected-coin-gift-id');
const collectedDiamondGift = document.getElementById('collected-diamond-gift-id');
const infoContainer = document.getElementById('info-container-id');
const musicContainer = document.getElementsByClassName('music-container');
const trophyItems = document.getElementById('trophy-items-id');
const bottomNav = document.getElementById('bottom-nav-id');
const adminPanel = document.getElementById('admin-panel-id');
const settings = document.getElementById('settings-id');
const displayTrophy = document.getElementsByClassName('display-trophy');
const soundOn = document.getElementById('radio-sound-on');
const songPath = ['music/reshem.mp3', 'music/sayathari.ogg'];
const otherSounds = {
    coinColl: 'music/coin.wav',
    gameOverSound: 'music/gameOver.wav',
    clickSound: 'music/clickSound.wav'
};

const homeBtn = document.getElementById('home-id')
homeBtn.addEventListener('click', ()=>{
    playAudio(otherSounds['clickSound'])
    for(let i = 0; i < home.length; i++){
        home[i].style.display = 'block';
        trophyItems.style.display = 'none';
    }

    bottomNav.style.display = 'block';
    adminPanel.style.display = 'none';
    settings.style.display = 'none';
    pianoHome.style.height = 'auto';
})

const trophyBtn = document.getElementById('trophy-id')
trophyBtn.addEventListener('click', ()=>{
    infoContainer.style.display = 'none';
    settings.style.display = 'none';
    adminPanel.style.display = 'none';
    trophyItems.style.display = 'block';
    pianoHome.style.height = '100vh';
    playAudio(otherSounds['clickSound']);

    for(let i = 0; i < displayTrophy.length; i++){
        displayTrophy[i].style.display = 'block';
    }

    for(let i = 0; i < musicContainer.length; i++){
        musicContainer[i].style.display = 'none';
    };
});

const admin = document.getElementById('admin-id');
admin.addEventListener('click', ()=>{
    playAudio(otherSounds['clickSound']);
    pianoHome.style.height = '100vh';
    homeDisplayNone();
    bottomNav.style.display = 'block';
    adminPanel.style.display = 'block';
    settings.style.display = 'block';
});

const leftBtn = document.querySelector('.btn-left');
leftBtn.style.background = 'white';
leftBtn.addEventListener('click', ()=>{
    leftList();
    playAudio(otherSounds['clickSound']);
});

const rightBtn = document.querySelector('.btn-right');
rightBtn.addEventListener('click', ()=>{
    rightList();
    playAudio(otherSounds['clickSound']);
});

function allSongs(){
    for(let i = 0; i < songPath.length; i++){
        const sound = new Audio(songPath[i]);
        songs.push(sound);
    };
};

allSongs();

function leftList(){
    rightBtn.style.background = 'transparent';
    leftBtn.style.background = 'white';
};

function rightList(){
    leftBtn.style.background = 'transparent';
    rightBtn.style.background = 'white';
};

for(let i = 0; i < favBtns.length; i++){
    favBtns[i].addEventListener('click', ()=>{
    favList(favBtns[i]);
    playAudio(otherSounds['clickSound'])
    });
};

function favList(favBtn){
    favBtn.style.background = 'url(images/heart.png)';
    favBtn.style.backgroundSize = 'contain';
    favBtn.style.backgroundRepeat = 'no-repeat';
};

for(let i = 0; i < playBtns.length; i++){
    playBtns[i].addEventListener('click', ()=>{
        gamePlay(songs[i], i, songNames[i].innerHTML);
        playAudio(otherSounds['clickSound'])
    });
};

function randomGenerator(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function start(song_, index, songName){
    const startDiv = document.createElement('div');
        startDiv.style.width = '25%';
        startDiv.style.height = '25%';
        startDiv.style.position = 'absolute';
        startDiv.style.bottom = '0';
        startDiv.style.left = `${25*randomGenerator(0, 3)}%`;
        startDiv.style.background = '#2fc1da';
        startDiv.style.color = 'white';
        startDiv.innerHTML = 'start';

    piano.appendChild(startDiv);

    startDiv.addEventListener('click', ()=>{
            piano.removeChild(startDiv);
            playAudio(otherSounds['clickSound']);
            song_.play();
            generateTile(song_, index, songName);
    });
};

function homeDisplayNone(){
    for(let i = 0; i < home.length; i++){
        home[i].style.display = 'none';
    };
}

function gamePlay(song_, index, songName){

        homeDisplayNone();
        piano.style.width = '100%';
        piano.style.height = '100vh';
        piano.style.background = 'url(images/tilesbg.jpg)';
        piano.style.display = 'block';
        piano.style.overflow = 'hidden';

        start(song_, index, songName);
};

function generateTile(song_, index, songName){
    for(let i = 0; i < 30; i++){
        let tile = document.createElement('div');
        tile.style.width = '25%';
        tile.style.height = '25%';
        tile.style.position = 'absolute';
        tile.style.border = '2px solid white';
        tile.style.background = 'linear-gradient(0deg, rgba(5,4,26,1) 0%, rgba(7,7,53,1) 35%, rgba(0,212,255,0.7486344879748774) 100%)';
        tile.style.left = `${25*randomGenerator(0, 3)}%`;
        tile.style.top = `-${25*i}%`;
        tiles.push(tile);
        piano.appendChild(tile);

        tile.addEventListener('click', ()=>{
            score++;
            displayScorePiano.innerHTML = `${score}`;
            });
        };

        moveTile(song_, index, songName);

        const bounsTime = tiles.slice(-1);
        bounsTime[0].addEventListener('click',()=>{
            setTimeout(() => {
                bonus(song_, index, songName);
                song_.pause();
            }, 2000);
        });
    };

function moveTile(song_, index, songName){
    const speed = setInterval(() => {
        for(let i = 0; i < tiles.length; i++){
            let positionTop = parseInt(tiles[i].style.top);
            positionTop ++;
            tiles[i].style.top = `${positionTop}%`;

            tiles[i].addEventListener('click', ()=>{
                tiles[i].style.background = 'rgb(90, 195, 243)';
                tiles[i].style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset';
                tiles[i].style.opacity = '0.3';
            });

            if(positionTop > 74 && tiles[i].style.opacity !== '0.3'){
                song_.pause();
                clearInterval(speed);
                tiles[i].style.background = 'red';
                setTimeout(() => {
                    gameOver(score, index, songName);
                }, 2000);
            };
            if(positionTop == 100 ){
                piano.removeChild(tiles[i]);
            };
        };
     }, 15);
};

function playAudio(filePath){
    if(soundOn.checked == true){
    const music = new Audio(filePath);
    music.play();
    };
}

function gameOver(totalScore, index, songName){
    playAudio(otherSounds['gameOverSound']);

    pianoHome.style.height = '100vh';
    summary.style.display ='block';
    summary.style.top ='0px';
    piano.style.display = 'none';

    displaySong.innerHTML = `${songName}`;
    displayScore.innerHTML = `${totalScore}`;
    collectedCoinGift.innerHTML = `${coin}`;
    collectedDiamondGift.innerHTML =`${diamond}`;

    menu.addEventListener('click', ()=>{
        location.reload();
        playAudio(otherSounds['clickSound']);
    });

    replay.addEventListener('click', ()=>{
        // summary.style.display = 'none';
        // tiles = [];
        // gamePlay(songs[index], index, songName);
        location.reload();
        playAudio(otherSounds['clickSound']);
    });
};

function bonus(song_, index, songName){
    for(let i = 0; i < 20; i++){
        let bonusTile = document.createElement('div');
        bonusTile.style.width = '25%';
        bonusTile.style.height = '10%';
        bonusTile.style.position = 'absolute';
        bonusTile.style.background = 'url(images/dollar.png)';
        bonusTile.style.backgroundSize = 'contain';
        bonusTile.style.backgroundRepeat = 'no-repeat';
        bonusTile.style.backgroundPosition = '50% 50%'
        bonusTile.style.left = `${25*randomGenerator(0, 3)}%`;
        bonusTile.style.top = `-${15*i}%`;
        bonusTiles.push(bonusTile);
        piano.appendChild(bonusTile);

        bonusTile.addEventListener('click', ()=>{
            playAudio(otherSounds['coinColl']);
            coin++;
            displayCoin.innerHTML = `${coin}`;
            piano.removeChild(bonusTile);
            });
        };
       moveBonus(score, index, songName);
};

function moveBonus(song_, index, songName){
    const speed = setInterval(() => {
        for(let i = 0; i < bonusTiles.length; i++){
            let positionTop = parseInt(bonusTiles[i].style.top);
            positionTop ++ ;
            bonusTiles[i].style.top = `${positionTop}%`;
        };
     }, 10);

     setTimeout(() => {
         clearInterval(speed);
         gameOver(song_, index, songName);
     }, 6000);
};