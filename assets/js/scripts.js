// EJERCICIO N79811
document.getElementById("obtenerNombreEdad").addEventListener('click', () => {
	let nombre, edad, age;

	nombre = prompt("Digame su nombre ?", "");
	edad = prompt("Ahora digame su edad ?", "0");
	age = parseInt(edad);

	document.getElementById("msgOne").innerHTML = `Su nombre es: ${nombre} y su edad es: ${age}`;
});