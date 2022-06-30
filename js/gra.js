var value = 0;

const k1 = document.getElementById("k1");
const k2 = document.getElementById("k2");
const k3 = document.getElementById("k3");

const k4 = document.getElementById("k4");
const k5 = document.getElementById("k5");
const k6 = document.getElementById("k6");

const k7 = document.getElementById("k7");
const k8 = document.getElementById("k8");
const k9 = document.getElementById("k9");

const kik = document.querySelector(".kolkoIkrzyzyk__gra");
const kikSL = document.querySelector(".kolkoIkrzyzyk__showLater");
const kikP = document.querySelector(".kolkoIKrzyzyk__przycisk");
const kikW = document.querySelector(".kolkoIKrzyzyk__Wynik");

var tab = [k1, k2, k3, k4, k5, k6, k7, k8, k9];
var tabValue = [-1,-1,-1, -1,-1,-1, -1,-1,-1];

function rob(i){
	if(tabValue[i] == -1){
		tabValue[i] = value;
		if(value == 0){
				tab[i].innerHTML = "x";
				
				if(sprawdzWygrana(value)==true){
					koniec(value);
					return;
				}
				value = 1;
			}else{
				tab[i].innerHTML = "o";
				
				if(sprawdzWygrana(value)==true){
					koniec(value);
					return;
				}
				value = 0;
			}
			
			if(sprCzyKoniec() == true){
				koniec(3);
			}
	}
}

tab[0].addEventListener('click', e=>{
	rob(0);
});
tab[1].addEventListener('click', e=>{
	rob(1);
});
tab[2].addEventListener('click',e=>{
	rob(2);
});
														
tab[3].addEventListener('click', e=>{
	rob(3);
});
tab[4].addEventListener('click', e=>{
	rob(4);
});
tab[5].addEventListener('click', e=>{
	rob(5);
});

tab[6].addEventListener('click', e=>{
	rob(6);
});
tab[7].addEventListener('click', e=>{
	rob(7);
});
tab[8].addEventListener('click', e=>{
	rob(8);
});

kikP.addEventListener('click', e=>{
	kik.style.display = "flex";
	kikSL.style.display = "none";
	tabValue = [-1,-1,-1, -1,-1,-1, -1,-1,-1];
	for(var i=0;i<9;i++){
		tab[i].innerHTML="";
	}
});

function sprawdzWygrana(dlaKogo){
	var licznik = 0;
	
	for(var i=0;i<8;i++){
		if(tabValue[i] == dlaKogo){
			licznik++;
		}else{
			licznik = 0;
		}
		if(licznik == 3) return true;
		if(i%3 == 2) licznik = 0;
	}
	
	licznik = 0;
	
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			if(tabValue[i+j*3] == dlaKogo){
				licznik++;
			}else{
				licznik = 0;
			}
			if(licznik == 3) return true;
			if(j == 2) licznik = 0;
		}
	}
	
	if(tabValue[4] == dlaKogo){
		if((tabValue[0] == dlaKogo) && (tabValue[8] == dlaKogo))return true;
		if((tabValue[2] == dlaKogo) && (tabValue[6] == dlaKogo))return true;
	}
	
	return false;
}

function sprCzyKoniec(){
	for(var i=0; i<8; i++){
		if(tabValue[i] == -1){
			return false;
		}
	}
	return true;
}

function koniec(l){
	kik.style.display = "none";
	kikSL.style.display = "flex";
	if(l == 0){
		kikW.innerHTML = "Wygrana: X";
	}else if(l == 1){
		kikW.innerHTML = "Wygrana: O";
	}else{
		kikW.innerHTML = "REMIS";
	}
}
