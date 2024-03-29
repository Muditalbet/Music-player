<?php
	include('php/session.php')
?>

<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="Home.css">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>
			Home
		</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	</head>
	<body class="body1" onload = "load()">
	   <div class="Header">
		    <div id="heading">
				<div class="MainHeading">Player</div>
				<div class="Comment"><div class = "test">Welcome</div> <div class = "test" style = "color:red"><?php  echo $login_session;?></div></div>
			</div>
		    <div class="logout">
				<a href="php/logout.php" id="signout">Sign Out</a>
		    </div>
	   </div>
	   <div class="MainBox">
		   <div>
				<audio id = "player">
			  		<source src="" type="audio/mpeg">
			 		Your browser does not support the audio element.
				 </audio>
			</div>
		   <div class = "AlbumArea">
				<div id = "oneL" class="song_photo" onclick = "redirect(2)">	
					<img id = "left1" src = "files/photos/lalala.jpeg">
				</div>
				<div id = "twoL" class="song_photo" onclick = "redirect(1)">
					<img id = "left2" src = "files/photos/bad_guy.png">
				</div>
				<div id = "fiveR" class="song_photo" onclick = "redirect(-2)">
					<img id = "right1" src = "files/photos/fractures.jpg">
				</div>
				<div id = "fourR" class="song_photo" onclick = "redirect(-1)">
					<img id = "right2" src = "files/photos/new.jpg">
				</div>
				<div id = "threeC" class="song_photo" onclick = "pp()">
					<img id = "centerA" src = "files/photos/Slow_down.jpg">
				</div>
			</div>	
					 
	   </div>
	   
	   <div class="Footer">
		   <div class="Player">
			<div class="Song_Info">
				<div class="SongPhoto"><img id="AlbumArt" src="files/photos/Slow_down.jpg" ></div>
				<div class="SongName" id = "song">Slow Down</div>
			</div>
			<div class="mainSide">
				<div class="Player_Song_Slider">
					<input id = "songRange" type="range" min="1" max="100" value="0" >
				</div>
				   <div class="Player_Buttons">
					   <div class="Player_Buttons_Shuffle" onclick = "shuffle()">
						   <img class="one" src="svg/025-shuffle.svg">
					   </div>
					   <div class="Player_Buttons_Back" onclick = "back()">
						   <img class="two" src="svg/011-back.svg" >
					   </div>
					   <div class="Player_Buttons_Play" onclick = "pp()">
						   <img class="three" id = "bThree" src="svg/013-play.svg">
					   </div>
					   <div class="Player_Buttons_Next" onclick = "next()">
						   <img class="four" src="svg/001-next.svg">
					   </div>
					   <div class="Player_Buttons_loop" onclick = "Loop()">
						   <img class="five" src="svg/005-loop.svg" >					
					   </div>
					   <div class="Player_Buttons_Volume" onclick = "volume()">
						<img class="six" src="svg/034-volume-adjustment.svg" >
						</div>
						<div class="Player_Volume_Slider">
						<input type="range" min="1" max="100" value="100" id="Range">
						</div>
				   </div>
				   
			   </div>
			</div>
	   </div> 
	   <script type="text/javascript" src="Home.js"></script>
	   <script src = "js/playerfunction.js"></script>
	   <script src = "js/colors.js"></script> 
	</body>
</html>
