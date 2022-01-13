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

const tunes = { 
    reshemFiriri : ['music/resam/1.ogg', 'music/resam/2.ogg', 'music/resam/3.ogg', 'music/resam/4.ogg', 'music/resam/5.ogg',
            'music/resam/6.ogg','music/resam/7.ogg', 'music/resam/8.ogg', 'music/resam/9.ogg', 'music/resam/10.ogg', 'music/resam/11.ogg',
            'music/resam/12.ogg', 'music/resam/13.ogg', 'music/resam/14.ogg', 'music/resam/15.ogg','music/resam/16.ogg', 'music/resam/17.ogg',
            'music/resam/18.ogg', 'music/resam/19.ogg', 'music/resam/20.ogg', 'music/resam/21.ogg', 'music/resam/22.ogg', 'music/resam/23.ogg',
            'music/resam/24.ogg', 'music/resam/25.ogg', 'music/resam/26.ogg', 'music/resam/27.ogg', 'music/resam/28.ogg', 'music/resam/29.ogg',
            'music/resam/30.ogg', 'music/resam/31.ogg', 'music/resam/32.ogg', 'music/resam/33.ogg', 'music/resam/34.ogg', 'music/resam/35.ogg',
            'music/resam/36.ogg', 'music/resam/37.ogg', 'music/resam/38.ogg', 'music/resam/39.ogg', 'music/resam/40.ogg', 'music/resam/41.ogg',
            'music/resam/42.ogg', 'music/resam/43.ogg', 'music/resam/44.ogg', 'music/resam/45.ogg', 'music/resam/46.ogg'],
    
    sayaThariBaja : ['music/sayathari/1.ogg','music/sayathari/2.ogg','music/sayathari/2.ogg','music/sayathari/4.ogg',
                'music/sayathari/5.ogg','music/sayathari/6.ogg','music/sayathari/7.ogg','music/sayathari/8.ogg','music/sayathari/9.ogg',
                'music/sayathari/10.ogg','music/sayathari/11.ogg','music/sayathari/12.ogg','music/sayathari/13.ogg','music/sayathari/14.ogg',
                'music/sayathari/15.ogg','music/sayathari/16.ogg','music/sayathari/17.ogg','music/sayathari/18.ogg','music/sayathari/19.ogg',
                'music/sayathari/20.ogg','music/sayathari/21.ogg','music/sayathari/22.ogg','music/sayathari/23.ogg','music/sayathari/24.ogg',
                'music/sayathari/25.ogg','music/sayathari/26.ogg','music/sayathari/27.ogg','music/sayathari/28.ogg','music/sayathari/29.ogg',
                'music/sayathari/30.ogg','music/sayathari/31.ogg','music/sayathari/32.ogg','music/sayathari/33.ogg','music/sayathari/34.ogg',
                'music/sayathari/35.ogg','music/sayathari/36.ogg','music/sayathari/37.ogg','music/sayathari/38.ogg','music/sayathari/39.ogg',
                'music/sayathari/40.ogg','music/sayathari/41.ogg','music/sayathari/42.ogg','music/sayathari/43.ogg','music/sayathari/44.ogg',
                'music/sayathari/45.ogg','music/sayathari/46.ogg','music/sayathari/47.ogg','music/sayathari/48.ogg','music/sayathari/49.ogg',
                'music/sayathari/50.ogg','music/sayathari/51.ogg','music/sayathari/52.ogg','music/sayathari/53.ogg','music/sayathari/54.ogg',
                'music/sayathari/55.ogg','music/sayathari/56.ogg','music/sayathari/57.ogg','music/sayathari/58.ogg','music/sayathari/60.ogg',
                'music/sayathari/61.ogg','music/sayathari/62.ogg','music/sayathari/63.ogg','music/sayathari/64.ogg','music/sayathari/65.ogg',
                'music/sayathari/66.ogg','music/sayathari/67.ogg','music/sayathari/68.ogg','music/sayathari/69.ogg']};

const homeBtn = document.getElementById('home-id')
homeBtn.addEventListener('click', ()=>{
    playAudio(otherSounds['clickSound'])
    for(let i = 0; i < home.length; i++){
        home[i].style.display = 'block';
        trophyItems.style.display = 'none';
    };

    bottomNav.style.display = 'block';
    adminPanel.style.display = 'none';
    settings.style.display = 'none';
    pianoHome.style.height = 'auto';
});

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
    };

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
    favLists(musicContainer);
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
    playAudio(otherSounds['clickSound']);
    });
};

function favLists(musicContainer){
    for(let i = 0; i < favBtns.length; i++){
        if(favBtns[i].checked == true){
            favSongs.push(musicContainer[i])
        };
    };
};

for(let i = 0; i < playBtns.length; i++){
    playBtns[i].addEventListener('click', ()=>{
        gamePlay(songs[i], i, songNames[i].innerHTML);
        playAudio(otherSounds['clickSound']);
    });
};

function chooseTune(songName){
    let songNameL = songName.toLowerCase();
          songNameL = songNameL.replaceAll(' ', '');
    let tuneNames = Object.keys(tunes);
    
    for(let i = 0; i < tuneNames.length; i ++){
        if(tuneNames[i].toLowerCase() == songNameL){
            return tunes[`${tuneNames[i]}`];
        };
    };
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
            generateTile(song_, index, songName);
    });
};

function homeDisplayNone(){
    for(let i = 0; i < home.length; i++){
        home[i].style.display = 'none';
    };
};

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
    const tune = chooseTune(songName)
    for(let i = 0; i < tune.length; i++){
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
            playAudio(tune[i]);
            displayScorePiano.innerHTML = `${score}`;
            });
        };

        moveTile(song_, index, songName);
        lavelHandler(song_, index, songName);
};


function lavelHandler(song_, index, songName){

    const bounsTime = tiles.slice(-1);
        bounsTime[0].addEventListener('click',()=>{
            setTimeout(() => {
                bonus(song_, index, songName);
            }, 1000);
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
};

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
    });

    replay.addEventListener('click', ()=>{
        // summary.style.display = 'none';
        // tiles = [];
        // gamePlay(songs[index], index, songName);
        location.reload();
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