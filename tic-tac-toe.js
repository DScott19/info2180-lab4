document.addEventListener("DOMContentLoaded",() => {

	let divs = document.getElementById("board").querySelectorAll("div");
	divs.forEach(addSquare);
	divs.forEach(addXorO);
	divs.forEach(addhoverStyle);
	helpChooseWin(divs);
	moves=divs;
});	
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
		 if(ultimateWinner!=="No winner yet"){
			showWinner(ultimateWinner);
		}
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




/*function chooseWinner(){
	let i=0;
	let winner;
	while(i<AlternatePlay.length&&AlternatePlay.length>2){
			if(AlternatePlay[i]===AlternatePlay[i+1]===AlternatePlay[i+2]){
				winner=AlternatePlay[i];
				i=AlternatePlay.length;
			}
			else{
				i++;
			}
	}//end while*/

function showWinner(winner){
	if (winner==="X"){
		document.getElementById("status").innerHTML="Congratulations! X is the Winner!" ;
		document.getElementById("status").classList.add("you-won"); 
	}else{
		document.getElementById("status").innerHTML="Congratulations! O is the Winner!" ;
		document.getElementById("status").classList.add("you-won");
	}//end else
}	
	
function chooseWinner(){

	let i=0;
	let win;
	let winner=true;
	console.log(moves[i+2].innerHTML);
	
	/*switch(winner){*/

		if (moves[i].innerHTML===moves[i+1].innerHTML===moves[i+2].innerHTML){
			console.log(moves+"1ST");
			win=moves[i].innerHTML;
		}
		switch(winner){
		case moves[i].innerHTML===moves[i+3].innerHTML===moves[i+6].innerHTML:
			console.log(moves+"2ND");
			win=moves[i].innerHTML;
			break;
		case moves[i+6].innerHTML===moves[i+7].innerHTML===moves[i+8].innerHTML:
			console.log(moves);
			win=moves[i+6].innerHTML;
			break;
		case moves[i+2].innerHTML===moves[i+5].innerHTML===moves[i+8].innerHTML:
			console.log(moves);
			win=moves[i+2].innerHTML;
			break;
		case moves[i+1].innerHTML===moves[i+4].innerHTML===moves[i+7].innerHTML:
			console.log(moves);
			win=moves[i+1].innerHTML;
			break;
		case moves[i].innerHTML===moves[i+4].innerHTML===moves[i+8].innerHTML:
			console.log(moves);
			win=moves[i].innerHTML;
			break;
		case moves[i+2].innerHTML===moves[i+4].innerHTML===moves[i+6].innerHTML:
			console.log(moves);
			win=moves[i+2].innerHTML;
			break;
		default:
			console.log(moves+"LAST");
			win="No winner yet";
	}
	return win;
}	

