
// Neu würfeln (Aufruf per Button-Klick)
function neuerWurf() {

	document.getElementById('pasch').innerHTML = "";
	
	let num = 0;
	let num2 = 0;
	
	// Neue Zufallszahl bestimmen
	num = Math.random();
	num = (num * 6) + 1;
	num = Math.floor(num);

	num2 = Math.random();
	num2 = (num2 * 6) + 1;
	num2 = Math.floor(num2);



	// Ergebnis in DIV-Box schreiben

	document.getElementById('erg').innerHTML = num;
	document.getElementById('erg2').innerHTML = num2;
	
	if(num === num2){
		document.getElementById('pasch').innerHTML = "Es wurde ein Pasch gewürfelt!";
		
	}



}