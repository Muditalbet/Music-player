//Initially play is off i.e '0'....
var play = 0
//Initializing player element....
var player = document.getElementById("player");

function shuffle(){

}

function back(){
    player.volume = 0.1;
}

//Defining play pause function of a player
function pp(){
    var icon = document.getElementById("bThree");
    
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

function next(){
    player.volume = 0.9;
}

function loop(){

}

function redirect(name){
    player.src = name;
    play = 0;
    pp();
}