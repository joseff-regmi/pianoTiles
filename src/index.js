let favSongs = [];
let isStarted = false;
let tiles = [];
let soundNote = [];
let score = 0;

const favBtns = document.getElementsByClassName('fav-btn');
const home = document.getElementsByClassName('home');
const piano = document.getElementById('piano-id');
const playBtns = document.getElementsByClassName('play-btn');
const summary = document.getElementById('score-bord-id');
const menu = document.getElementById('menu-btn-id');
const replay = document.getElementById('replay-btn-id');


const songs = {
    reshemFiriri: 'music/reshemFiriri.mp3',
    sayathari: 'music/sayathari.ogg'};

const notes = ['music/notes/A4.ogg', 'music/notes/Ab4.ogg', 'music/notes/B4.ogg', 'music/notes/Bb4.ogg', 'music/notes/C4.ogg',
                'music/notes/D4.ogg', 'music/notes/Db4.ogg', 'music/notes/E4.ogg', 'music/notes/Eb4.ogg', 'music/notes/F4.ogg',
                'music/notes/G4.ogg', 'music/notes/Gb4.ogg'];


const leftBtn = document.querySelector('.btn-left');
leftBtn.style.background = 'white';
leftBtn.addEventListener('click', ()=>{
    leftList();
});

const rightBtn = document.querySelector('.btn-right');
rightBtn.addEventListener('click', ()=>{
    rightList();
});

function sounds(){
    for(let i = 0; i<40; i++){
        const sound = new Audio(notes[i]);
        soundNote.push(sound);
    };
};

sounds();

function leftList(){
    rightBtn.style.background = 'transparent';
    leftBtn.style.background = 'white';
}

function rightList(){
    leftBtn.style.background = 'transparent';
    rightBtn.style.background = 'white';
}

for(let i = 0; i < favBtns.length; i++){
    favBtns[i].addEventListener('click', ()=>{
    favList(favBtns[i]);
})}


function favList(favBtn){
    favBtn.style.background = 'url(images/heart.png)';
    favBtn.style.backgroundSize = 'contain';
    favBtn.style.backgroundRepeat = 'no-repeat';
}

for(let i = 0; i < playBtns.length; i++){
    playBtns[i].addEventListener('click', ()=>{
        gamePlay();
    })
}

function randomGenerator(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gamePlay(){

    for(let i = 0; i < home.length; i++){
        home[i].style.display = 'none';
    }

        piano.style.width = '100%';
        piano.style.height = '100vh';
        piano.style.background = 'url(images/tilesbg.jpg)';
        piano.style.display = 'block';
        piano.style.overflow = 'hidden';

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
            startDiv.style.background = 'blue';
            startDiv.style.opacity = '0.3';
            piano.removeChild(startDiv);
            generateTile();

    })
}


function generateTile(){

    for(let i = 0; i < 40; i++){
        var tile = document.createElement('div');
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
            soundNote[i].play();
            });
        };

     const speed = setInterval(() => {
        for(let i = 0; i<tiles.length; i++){
            let positionTop = parseInt(tiles[i].style.top);
            positionTop++;
            tiles[i].style.top = `${positionTop}%`;

            tiles[i].addEventListener('click', ()=>{
                tiles[i].style.background = 'rgb(90, 195, 243)';
                tiles[i].style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset';
                tiles[i].style.opacity = '0.3';
                // isClicked = true

            });


            if(positionTop > 75 && tiles[i].style.opacity !== '0.3'){
                clearInterval(speed);
                tiles[i].style.background = 'red';
                setTimeout(() => {
                    gameOver(score);
                    for(let j = 0; j < tiles.length; j++ ){
                        piano.removeChild(tiles[j]);
                    };
                }, 2000);
            }else if(positionTop == 105){
                piano.removeChild(tiles[i]);
            }
        }

     }, 20);

    }
function gameOver(totalScore){
    summary.style.display ='block';
    summary.style.top ='0px';
    piano.style.display = 'none';

    menu.addEventListener('click', (e)=>{
        location.reload();
    })

    replay.addEventListener('click', (e)=>{
        summary.style.display = 'none';
        tiles = [];
        gamePlay();
    })


}

function bonus(){

}