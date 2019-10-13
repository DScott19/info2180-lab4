document.addEventListener("DOMContentLoaded",() => {

	let divs = document.getElementById("board").querySelectorAll("div");
	divs.forEach(addSquare);
	divs.forEach(addXorO);
});	

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


function addXorO(element){
	element.addEventListener("click",function(){
		if (AlternatePlay.length<1 || AlternatePlay[AlternatePlay.length-1]==="O"){
				addX(element);
				AlternatePlay.push("X");
			
		}	else{
			AlternatePlay.push("O");
			addO(element);
		}
	});

}
