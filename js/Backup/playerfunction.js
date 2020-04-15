//Initially play is off i.e '0'....
var play = 0;
var loaded, songs=[];
var volRange = 0; //Curerntly not visible.

//Songs Image and Src....
var imgSrc = "files/photos/";
var songSrc = "files/audios/"; 

//Creating variables for current playing music and volume....
var currentSongId = 1, currentSong, currentImg;
var currentVolume;
//Initializing player element....
var player = document.getElementById("player");
var playerVolume = document.getElementById("Range");
var songRange = document.getElementById("songRange");
var icon = document.getElementById("bThree");
var currentPlay;

function load(){ 
    // $.get("php/songs.php", function(data){
    //     loaded = data.split(" ");
    //     for(var i = 0; i<loaded.length; i+=3){
    //         songs.push([loaded[i],loaded[i+1],loaded[i+2]]);
    //         alert(songs);
    //     }
    //     });
        //Creating song boxes (id, src, imgSrc)....
        songs = [[1, 'E:/Project/Music-player/files/photos/lalala.jpeg', 'lalala'],
                [2,'E:/Project/Music-player/files/photos/Slow_down.jpg','Slow_Down'],
                [3,'E:/Project/Music-player/files/photos/sunflower.jpg','Sunflower'],
                [4, 'E:/Project/Music-player/files/photos/new.jpg', 'New']];

        for(var j=0; j<4; j++){

            var songName = "redirect('"+songSrc+songs[j][2]+".mp3', this.id)";

            var div = document.createElement("div");
            div.classList.add("dynamicLoad");
            div.id = songs[j][0];
            div.setAttribute("onclick",songName);
            div.innerHTML = "<img class = 'dynamicImg' src = '"+songs[j][1]+"'>";
            document.getElementById('loaded').appendChild(div);
        }

        //Default music when play button is played....
        player.src = songSrc+songs[0][2]+".mp3";
}

function shuffle(){

}

function back(){
    if(currentSongId > 1)
   { currentSongId--;
    var nxt = document.getElementById(currentSongId.toString());
    nxt.onclick();
    }
    //If played first song....
    else if(currentSongId == 1){
        var nxt = document.getElementById(currentSongId.toString());
        nxt.onclick();
    }
}

//Defining play pause function of a player
function pp(){
    if(play == 0)
    {
        icon.src = "svg/021-pause.svg";
        play = 1
        player.play();
    }
    else if(play == 1)
    {
        icon.src = "svg/013-play.svg"
        play = 0
        player.pause();
    }
}

function next(end = 0){

    if(currentSongId < songs.length){
    currentSongId++;

        var nxt = document.getElementById(currentSongId.toString());
        nxt.onclick();
    }
    //If played last queued song....
    else if(currentSongId == songs.length && end == 1){
        icon.src = "svg/013-play.svg"   ;
    }

}

function loop(){
   // player.value = player.currentTime;
}

function volume(){
    if(volRange == 0){
        playerVolume.style.visibility = "visible";
        volRange = 1;
    }
    else if(volRange == 1){
        playerVolume.style.visibility = "hidden";
        volRange = 0;
    }
}

//Functioning Volume Slider....
playerVolume.oninput = function(){
    currentVolume = this.value;
    player.volume = currentVolume/10;
}

//Functioning Song slider....
songRange.onchange = function(){
    player.currentTime = this.value;
}

//slider range changing according to current song....
player.onplaying = function() {
    songRange.max = player.duration;
    var myVar = setInterval(sliderPlay, 1500);
};

function sliderPlay(){
    songRange.value = player.currentTime;
    if(player.ended){
        next(1);
    }
}

function redirect(name, id){
    player.src = name;
    play = 0;
    currentSongId = id;
    pp();
}

