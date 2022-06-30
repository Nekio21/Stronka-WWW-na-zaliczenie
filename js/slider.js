const photo = document.querySelector(".photoSlider");
var opacityWartosc = getComputedStyle(photo).opacity;
var newWartosc;

var pula = [
	"../assets/zebra.jpg",
	"../assets/piosenka.jpg",
	"../assets/tlo2.jpg",
	"../assets/hatka.jpg",
	"../assets/tlo.jpg",
	"../assets/tolins.jpg",
	"../assets/kotek2.jpg",
	"../assets/zebra.jpg",
	"../assets/krowa.jpg",
	"../assets/telefon.jpg",
	"../assets/girl.jpg",
	"../assets/horwacja.jpg",
	"../assets/kotek.jpg"];

var i = 0;

function znikajLubPojawiaj(opcja){
	
	if(opcja == 1)newWartosc = 0;
	if(opcja == 0){
		photo.src = pula[i];
		i++;
		if(i ==13) i=0;
		newWartosc = 1;
	}
	photo.style.opacity = newWartosc;
}

function slide(){
	setTimeout("znikajLubPojawiaj(1)", 2000);
	
	setTimeout("znikajLubPojawiaj(0)", 3800);
	setTimeout("slide()", 5000);
}

slide();