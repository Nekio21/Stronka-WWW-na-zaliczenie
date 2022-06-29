const przycisk = document.querySelector(".belka_przycisk");
const menu = document.querySelector(".nav_przedkliku");	
	
przycisk.addEventListener('click',e=>{
	menu.classList.toggle('nav_pokliku');
});