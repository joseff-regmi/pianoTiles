let favSongs = []
let isStarted = false;
let tiles = []
let score = 0

const favBtns = document.getElementsByClassName('fav-btn')
const home = document.getElementsByClassName('home')
const piano = document.getElementById('piano-id')
const playBtns = document.getElementsByClassName('play-btn')


const songs = {
    reshemFiriri: 'music/reshemFiriri.wav',
    sayathari: 'music/sayathari.wav'}

const notes = ['A4.aiff', 'Ab4.aiff', 'B4.aiff', 'Bb4.aiff', 'C4.aiff',
                'D4.aiff', 'Db4.aiff', 'E4.aiff', 'Eb4.aiff', 'F4.aiff',
                'G4.aiff', 'Gb4.aiff']


const leftBtn = document.querySelector('.btn-left')
leftBtn.style.background = 'white'
leftBtn.addEventListener('click', ()=>{
    leftList()
})

const rightBtn = document.querySelector('.btn-right')
rightBtn.addEventListener('click', ()=>{
    rightList()
})

function leftList(){
    rightBtn.style.background = 'transparent'
    leftBtn.style.background = 'white'
}

function rightList(){
    leftBtn.style.background = 'transparent'
    rightBtn.style.background = 'white'
}

for(let i = 0; i < favBtns.length; i++){
    favBtns[i].addEventListener('click', ()=>{
    favList(favBtns[i])
})}


function favList(favBtn){
    favBtn.style.background = 'url(images/heart.png)'
    favBtn.style.backgroundSize = 'contain'
    favBtn.style.backgroundRepeat = 'no-repeat'
}

for(let i = 0; i < playBtns.length; i++){
    playBtns[i].addEventListener('click', ()=>{
        gamePlay()
    })
}

function randomGenerator(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function gamePlay(){

    for(let i = 0; i < home.length; i++){
        home[i].style.display = 'none'
    }

        piano.style.width = '100%'
        piano.style.height = '100vh'
        piano.style.background = 'url(images/tilesbg.jpg)'
        piano.style.display = 'block'
        piano.style.overflow = 'hidden'

    const startDiv = document.createElement('div')
        startDiv.style.width = '25%'
        startDiv.style.height = '25%'
        startDiv.style.position = 'absolute'
        startDiv.style.bottom = '0'
        startDiv.style.left = `${25*randomGenerator(0, 3)}%`
        startDiv.style.background = '#2fc1da'
        startDiv.style.color = 'white'
        startDiv.innerHTML = 'start'
        piano.appendChild(startDiv)

        startDiv.addEventListener('click', ()=>{
        startDiv.style.background = 'blue'
        startDiv.style.opacity = '0.3'
        isStarted = true
        piano.removeChild(startDiv)
        generateTile()
    })
}

// let isClicked = false;

function generateTile(){

    for(let i = 0; i < 30; i++){
        var tile = document.createElement('div')
        tile.style.width = '25%'
        tile.style.height = '25%'
        tile.style.position = 'absolute'
        tile.style.border = '2px solid white'
        tile.style.background = 'linear-gradient(0deg, rgba(5,4,26,1) 0%, rgba(7,7,53,1) 35%, rgba(0,212,255,0.7486344879748774) 100%)'
        tile.style.left = `${25*randomGenerator(0, 3)}%`
        tile.style.top = `-${25*i}%`
        tiles.push(tile)
        piano.appendChild(tile)

        tile.addEventListener('click', ()=>{
            score++
            });
        };

    tiles.forEach(tile => setInterval(() => {
        let positionTop = parseInt(tile.style.top)
            positionTop++;

            if(positionTop == 105){
                clearInterval()
                piano.removeChild(tile)
            };

        tile.style.top = `${positionTop}%`

        tile.addEventListener('click', ()=>{
            tile.style.background = 'rgb(90, 195, 243)'
            tile.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'
            tile.style.opacity = '0.3';
            isClicked = true;
        })

        console.log(positionTop)

        // if(!isClicked && positionTop > 75){
        //     gameOver()
        // }
    },200))
}

function gameOver(){
    console.log('game over')
}

