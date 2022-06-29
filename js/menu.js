function menu(){
	var przycisk = document.querySelector('.belka_przycisk');
	
	if(przycisk){
		alert("SIEMA");
		przycisk.addEventListener('click',rozwinZwij);
	}
}

function rozwinZwij(){
	alert("GOTOWANA KUKURYDZA");
	document.getElementById("nav_pokliku_id").style.display = block;
}

menu();