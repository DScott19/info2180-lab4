document.addEventListener("DOMContentLoaded",() => {

	let divs = document.getElementById("board").querySelectorAll("div");
	divs.forEach(myFunction);
});	

function myFunction (item){
	item.className="square";
}


