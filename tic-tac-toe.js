let original_status;
let moves;
var AlternatePlay=[];
let gameOver=false;

document.addEventListener("DOMContentLoaded",() => {

	let divs = document.getElementById("board").querySelectorAll("div");
	divs.forEach(addSquare);
	divs.forEach(addXorO);
	divs.forEach(addhoverStyle);
	helpChooseWin(divs);
	moves=divs;
	restartGame();
});	


//Adds the square class to each box
function addSquare (item){
	item.className="square";
}//end addSquare


//Displays X and its style in a particular box 
function addX(playX){
	playX.className="square X";
	playX.innerHTML="X";
}//end addX


//Displays O and its style in a particular box
function addO (playO){
	playO.className="square O";
	playO.innerHTML="O";
}//end addO


//Helps to choose the winner 
function helpChooseWin(){
	if(AlternatePlay.length>4){
		let ultimateWinner=chooseWinner();
		showWinner(ultimateWinner);
	}//end if
		
}// end helpChooseWin

//Adds X or O when a box is clicked
function addXorOEvent(element){
	while(element.innerHTML==="" && gameOver===false){
		if (AlternatePlay.length<1 || AlternatePlay[AlternatePlay.length-1].innerHTML==="O"){
			addX(element);
			AlternatePlay.push(element);
		}else{
			AlternatePlay.push(element);
			addO(element);
		}//end else
		helpChooseWin();
	}//end while
	
}//end addXorOEvent

//Sets up the click event
function addXorO(element){
	element.addEventListener("click",function (){
		addXorOEvent(element);
	});

}// end addXorO


//Adds hover event to the boxes
function addhoverStyle(square){
	square.addEventListener("mouseenter",function(){
		square.classList.add("hover");
	});

	square.addEventListener("mouseout", function (){
		square.classList.remove("hover");
	});
}//end addhoverStyle


//Checks if there has been a draw
function checkDraw(){
	let draw=true;
	moves.forEach(function(x){
		if(x.innerHTML==="")
			draw= false;	
	});
	return draw;
}//end checkDraw

		
	
//Displays a message about the winner
function showWinner(winner){
	original_status=document.getElementById("status").innerHTML;
	if (winner==="X"){
		document.getElementById("status").innerHTML="Congratulations! X is the Winner!" ;
		document.getElementById("status").classList.add("you-won"); 
		gameOver=true;
	}else if (winner==="O"){
		document.getElementById("status").innerHTML="Congratulations! O is the Winner!" ;
		document.getElementById("status").classList.add("you-won");
		gameOver=true;
	}else{
		if(checkDraw() && winner==="No winner yet")
			document.getElementById("status").innerHTML="Draw!!!!!!!!!!!";
	}//end else
}//end showWinner


	
//Chooses the winner ,that is, the player with all 3 X's or O's in a row
function chooseWinner(){

	let i=0;
	let win;
	
	switch(true){

		case moves[i].innerHTML!=="" && moves[i].innerHTML===moves[i+1].innerHTML&&moves[i].innerHTML===moves[i+2].innerHTML:
			win=moves[i].innerHTML;
			break;

		case moves[i+6].innerHTML!=="" && moves[i+6].innerHTML===moves[i+3].innerHTML&&moves[i+6].innerHTML===moves[i].innerHTML:
			win=moves[i].innerHTML;
			break;

		case moves[i+7].innerHTML!=="" && moves[i+7].innerHTML===moves[i+6].innerHTML&&moves[i+7].innerHTML===moves[i+8].innerHTML:
			win=moves[i+7].innerHTML;
			break;

		case moves[i+8].innerHTML!=="" && moves[i+8].innerHTML===moves[i+2].innerHTML && moves[i+8].innerHTML===moves[i+5].innerHTML:
			win=moves[i+5].innerHTML;
			break;

		case moves[i+1].innerHTML!=="" && moves[i+1].innerHTML===moves[i+4].innerHTML && moves[i+1].innerHTML===moves[i+7].innerHTML:
			win=moves[i+1].innerHTML;
			break;

		case moves[i+4].innerHTML!=="" && moves[i+4].innerHTML===moves[i].innerHTML&& moves[i+4].innerHTML===moves[i+8].innerHTML:
			win=moves[i].innerHTML;
			break;

		case moves[i+2].innerHTML!=="" && moves[i+2].innerHTML===moves[i+4].innerHTML &&moves[i+2].innerHTML ===moves[i+6].innerHTML:
			win=moves[i+2].innerHTML;
			break;

		case moves[i+5].innerHTML!=="" && moves[i+5].innerHTML===moves[i+4].innerHTML&& moves[i+3].innerHTML===moves[i+5].innerHTML:
			win=moves[i+3].innerHTML;
			break;

		default:
			win="No winner yet";
	}//end switch
	return win;
}	//end chooseWinner


//Resets the game state when the New Game button is clicked
function restartGame(){
	let button=document.getElementsByClassName("btn");
	for (let i=0;i<button.length;i++){
		button[i].addEventListener("click", function(){
			document.getElementById("status").innerHTML=original_status;
			document.getElementById("status").classList.remove("you-won");
			moves.forEach(removeXorO);
			AlternatePlay=[];
			gameOver=false;

		});

	}	//end for
}//end restartGame

//Removes X or O values from the boxes
function removeXorO(play){
		play.innerHTML="";

}//end removeXorO


