// EJERCICIO N79811
document.getElementById("obtenerNombreEdad").addEventListener('click', () => {
	let nombre, edad, age;

	nombre = prompt("Digame su nombre ?", "");
	edad = prompt("Ahora digame su edad ?", "0");
	age = parseInt(edad);

	if (nombre == "" && (isNaN(age) || isNaN(age) == 0)) {
		nombre = 'Desconocido';
		document.getElementById("msgOne").innerHTML = `<ul><li>Su nombre es: ${nombre}, y su edad es: ${age}</li></ul>`;

	} else {
		document.getElementById("msgOne").innerHTML = `<ul><li>Su nombre es: ${nombre}, y su edad es: ${age}</li></ul>`;
	}
});




// EJERCICIO N798112
function imprimirArray() {
	let nombres = new Array("Pablo", "Juan");
	let apellidos = new Array("Oviedo", "Santiago");
	// let nombres = ["Pablo","Juan"];
	// let apellidos = ["Oviedo","Santiago"];
	// let data = nombres.concat(apellidos);

	for (let i=0; i<nombres.length; i++) {
			document.getElementById("msgTwo").innerHTML = `<ul><li>${nombres[i]} ${apellidos[i]}</ul></li>`;
			// document.getElementById("msgTwo").innerHTML = `<ul><li>${data}</ul></li>`;
	} 
}



// EJERCICIO N798113
let promedioNotas = document.getElementById("btn-promedio-notas");

promedioNotas.addEventListener('click', function() {
	let notaUno = 0, notaDos = 0, notaTres = 0;
	let suma = 0, prom = 0;

	notaUno = parseFloat(prompt("Ingrese primera nota", "0"));
	notaDos = parseFloat(prompt("Ingrese segunda nota", "0"));
	notaTres = parseFloat(prompt("Ingrese tercera nota", "0"));

	suma = notaUno+notaDos+notaTres;
	prom = (suma)/3;

	document.getElementById("msgThree").innerHTML = `Su promedio es ${prom.toFixed(2)}`;
});