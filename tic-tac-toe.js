document.addEventListener("DOMContentLoaded",() => {

	let divs = document.getElementById("board").querySelectorAll("div");
	divs.forEach(addSquare);
	divs.forEach(addXorO);
	divs.forEach(addhoverStyle);
	helpChooseWin(divs);
	moves=divs;
	restartGame();
});	
let original_status;
let moves;
var AlternatePlay=[];


function addSquare (item){
	item.className="square";
}

function addX(playX){
	playX.className="square X";
	playX.innerHTML="X";
		
}

function addO (playO){
	playO.className="square O";
	playO.innerHTML="O";

}

function helpChooseWin(){
	if(AlternatePlay.length>4){
		 let ultimateWinner=chooseWinner();
		//if(ultimateWinner!=="No winner yet")
			showWinner(ultimateWinner);
	}
		
}


function addXorO(element){
	element.addEventListener("click",function(){
		if (AlternatePlay.length<1 || AlternatePlay[AlternatePlay.length-1].innerHTML==="O"){
				addX(element);
				AlternatePlay.push(element);
			
		}	else{
			AlternatePlay.push(element);
			addO(element);
		}
		helpChooseWin();

	});
	
}


function addhoverStyle(square){
	square.addEventListener("mouseenter",function(){
		square.classList.add("hover");
	});

	square.addEventListener("mouseout", function (){
		square.classList.remove("hover");
	})

}


function showWinner(winner){
	original_status=document.getElementById("status").innerHTML;
	if (winner==="X"){
		document.getElementById("status").innerHTML="Congratulations! X is the Winner!" ;
		document.getElementById("status").classList.add("you-won"); 
	}else if (winner==="O"){
		document.getElementById("status").innerHTML="Congratulations! O is the Winner!" ;
		document.getElementById("status").classList.add("you-won");
	}else{
		if(AlternatePlay.length>8 && winner==="No winner yet")
			document.getElementById("status").innerHTML="Draw!!!!!!!!!!!";
	}
}	
	


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
	}
	return win;
}	

function restartGame(){
	let button=document.getElementsByClassName("btn");
	console.log(button);
	for (let i=0;i<button.length;i++){
		button[i].addEventListener("click", function(){
			document.getElementById("status").innerHTML=original_status;
			document.getElementById("status").classList.remove("you-won");
			moves.forEach(removeXorO);
			
			AlternatePlay=[];
		});

	}	
}

function removeXorO(play){
		play.innerHTML="";

}
