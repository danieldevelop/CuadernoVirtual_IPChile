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




// EJERCICIO N79812
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




// EJERCICIO N79813
let promedioNotas = document.getElementById("btn-promedio-notas");

promedioNotas.addEventListener('click', function() {
	let notaUno = 0, notaDos = 0, notaTres = 0;
	let suma = 0, prom = 0;

	notaUno = parseFloat(prompt("Ingrese primera nota", "0"));
	notaDos = parseFloat(prompt("Ingrese segunda nota", "0"));
	notaTres = parseFloat(prompt("Ingrese tercera nota", "0"));

	suma = notaUno+notaDos+notaTres;
	prom = (suma)/3;

	document.getElementById("msgThree").innerHTML = `Su promedio es <b>${prom.toFixed(2)}</b>`;
});




// EJERCICIO N79814
function ShowText() {
	let cadena = prompt("Escriba un objeto: \n- Notebook\n- Celular\n- Perfume\n- Mueble");
	// cadena = parseInt(cadena);

	switch(cadena) {
		case "notebook":
		case "NOTEBOOK":
		case "Notebook":
			document.getElementById("msgFour").innerHTML = `Su eleccion fue <b>${cadena}</b>`;
			break;
		case "celular":
		case "CELULAR":
		case "Celular":
			document.getElementById("msgFour").innerHTML = `Su eleccion fue <b>${cadena}</b>`;
			break;
		case "perfume":
		case "PERFUME":
		case "Perfume":
			document.getElementById("msgFour").innerHTML = `Su eleccion fue <b>${cadena}</b>`;
			break;
		case "mueble":
		case "MUEBLE":
		case "Mueble":
			document.getElementById("msgFour").innerHTML = `Su eleccion fue <b>${cadena}</b>`;
			break;
		default:
			document.getElementById("msgFour").innerHTML = "No encontraron resultados."
	}

	/**
	 * Note: Condicional switch{case}, solo se puede utilizar ya sea para evaluar cadena de
	 * textos o numeros previamente convertido de String a Number
	 */
}




// EJERCICIO N79815
function NumberDigitos() {
	let numero = parseInt(prompt("Favor ingresar numeros del 1 al 99"));
	
	if (numero < 0) {
		document.getElementById("msgCinco").innerHTML = "EL numero debe ser positivo o mayor a 0";
	} else {
		if (numero >=1 && numero <=9) {
			document.getElementById("msgCinco").innerHTML = "EL numero ingresado tiene solo <b>1 DIGITO</b>";
		} else {
			if (numero >=10 && numero <=99) {
				document.getElementById("msgCinco").innerHTML = "EL numero ingresado tiene solo <b>2 DIGITO</b>";
			} else {
				document.getElementById("msgCinco").innerHTML = "EL numero ingresado es mayor a 100";	
			}
		}
	}

	/**
	 * Note: ¡Que pasaria si al ingresar tres digitos, el primero digito sea un 0, el programa lo
	 * lo cuenta como un digito adicional.
	 */
}




// EJERCICIO N79816
function NumeroMayor() {
	let num1, num2, num3 = 0;

	num1 = prompt('Ingrese primer numero',' ');
	num1 = parseInt(num1);
	num2 = prompt('Ingrese segundo numero',' ');
	num2 = parseInt(num2);
	num3 = prompt('Ingrese tercer numero',' ');
	num3 = parseInt(num3);

	document.getElementById("listNumber").innerHTML = `Numeros ingresados <ul>
		<li>Primer numero: <b>${num1}</b></li>
		<li>Segundo numero: <b>${num2}</b></li>
		<li>Tercer numero: <b>${num3}</b></li>
	</ul>`;

	if (num1 > num2 && num1 > num3) {
		document.getElementById("msgSix").innerHTML = `El numero mayor es <u>${num1}</u>`;
	} else if (num2 > num1 && num2 > num3) {
		document.getElementById("msgSix").innerHTML = `El numero mayor es <u>${num2}</u>`;
	} else if (num3 > num1 && num3 > num2) {
		document.getElementById("msgSix").innerHTML = `El numero mayor es <u>${num3}</u>`;
	}
}




// EJERCICIO N79817
function ResultadoTesting() {
	let nombre, porcentaje
	let cantidadPreguntas = 0;
	let cantidadCorrectas = 0;

	nombre = prompt("Ingrese su nombre:","");
	cantidadPreguntas = parseInt(prompt("Ingrese cantidad total de preguntas",""));
	cantidadCorrectas = parseInt(prompt("Ingrese cantidad de preguntas correctas",""));

	// Formula para el porcentaje => (cantidadX[n del total Y] / cantidadTotalY) * 100
	porcentaje = (cantidadCorrectas / cantidadPreguntas) * 100;
	porcentaje = porcentaje.toFixed(0);
	console.info(porcentaje);

	if (porcentaje >= 90) {
		var texto = `<ul>
				<li>Sr. ${nombre.toUpperCase()} segun nuestros resultados, usted esta en un <mark><b>Nivel Superior</b></mark></li>
			</ul>`;
		document.getElementById("msgSeven").innerHTML = texto;

	} else {
		if (porcentaje >= 75 && porcentaje < 90) {
			var texto = `<ul>
					<li>Sr. ${nombre.toUpperCase()} segun nuestros resultados, usted esta en un <mark><b>Nivel Medio</b></mark></li>
				</ul>`;
			document.getElementById("msgSeven").innerHTML = texto;

		} else {
			if (porcentaje >= 50 && porcentaje < 75) {
				document.getElementById("msgSeven").innerHTML = `
					<ul>
						<li>Sr. ${nombre.toUpperCase()} segun nuestros resultados, usted esta en un <mark><b>Nivel Regular</b></mark></li>
					</ul>
				`;

			} else {
				if (porcentaje < 50) {
					document.getElementById("msgSeven").innerHTML = `
						<ul>
							<li>Sr. ${nombre.toUpperCase()} segun nuestros resultados, usted esta en un <mark><b>Fuera de Nivel</b></mark></li>
						</ul>
					`;
					
				} else {
					document.getElementById("msgSeven").innerHTML = `!!Sr. ${nombre.toUpperCase()} DEBE REALIZAR EL TESTING NUEVAMENTE`;
				}
			}
		}
	}
}



