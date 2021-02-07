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




// EJERCICIO N79818
function SumaMultiplicacion() {
	// console.info($('#inpUno').val().trim());
	var a = parseInt($("#inpUno").val().trim());
	var b = parseInt($("#inpDos").val().trim());
	var c = parseInt($("#inpTres").val().trim());

	if (a == b && b == c) {
		// $("#msgOcho").html(`La suma es ${(parseInt(a) + parseInt(b))}`);
		$("#msgOcho").html(`<ul><li>La suma es ${(a+b)}</li>
			<li>El producto es ${((a+b)*c)}</li></ul>`
		);
	} else {
		$("#msgOcho").html("!!Error, lo tres numeros no son iguales");
	}
}




// EJERCICIO N79819
function SueldoTrabajador() {
	alert("!!Este ejercicio se encuentra pendiente");
}




/**
 * EJERCICIO N79820
 * @description Calculadora basica, que recibe dos numeros o mas guardandolos en un array
 */
// function LlenarVectores(a, b) {
// 	for (var i=0; i<a.length; i++) {
// 		let arr1 = parseInt(prompt("Ingrese primer y segundo valor para el primer arreglo",""));
// 		a[i] = arr1;
// 	}
// 	for (var i=0; i<b.length; i++) {
// 		let arr2 = parseInt(prompt("Ingrese tercer y cuarto valor para el segundo arreglo",""));
// 		b[i] = arr2;
// 	}
// }

// function Suma(n1, n2, rsSuma) {
// 	for (var i=0; i<rsSuma.length; i++) {
// 		$("#msgDiez").html(`<table>
// 			<tr>
// 				<td>${n1[i]} + ${n2[i]} = ${(n1[i]+n2[i])}</td>
// 			</tr>
// 			</table>`
// 		);
// 	}
// }

// document.getElementById("calcBasicArray").addEventListener('click', () => {
// 	let num1 = new Array(2);
// 	let num2 = new Array(2);
// 	let rsSuma = new Array(2);
	
// 	LlenarVectores(num1, num2);
// 	Suma(num1, num2, rsSuma);
// });
/**
 * FIN EJERCICIO N79820
 */




/**
 * PRACTICA N79821
 * @description Desactivar el evento "onmousedown" del raton (lado derecho)
 */
function ControlRaton() {
 	if (event.button == 2) {
 		window.alert("Evento temporalmente desactivado.");
 	}
}
document.getElementById("disabledRigth").addEventListener('click', ()=> { 
	document.onmousedown = ControlRaton
});
/**
 * FIN PRACTICA N79821
 */




// EJERCICIO N79823
function quitarGuiones(inputNumber) { 
	inputNumber.value = inputNumber.value.replace(',','.'); 
}

function NotaMayorIgual() {
	let noteUno = parseFloat($("#txtNum1").val().trim());
	let noteDos = parseFloat($("#txtNum2").val().trim());
	let noteTres = parseFloat($("#txtNum3").val().trim());
	let suma = 0, prom = 0;

	suma = noteUno + noteDos + noteTres;
	prom = (suma)/3;

	// if (noteUno > notaDos && noteUno > noteTres) {
	// 	$("#msgTrece").html(`La nota mayor es ${noteUno}`);
	// } else if (noteDos > noteUno && noteDos > noteTres) {
	// 	$("#msgTrece").html(`La nota mayor es ${noteDos}`);
	// } else if (noteTres > noteUno && noteTres > noteDos) {
	// 	$("#msgTrece").html(`La nota mayor es ${noteTres}`);
	// }

	if (prom >= 7) {
		$("#msgTrece").html(`Tu promedio es ${prom.toFixed(1)} y su situacion es: <b>PROMOCIONADO</b>`);
	} else {
		if (prom >= 4) {
			$("#msgTrece").html(`Tu promedio es ${prom.toFixed(1)} y su situacion es: <b>REGULAR</b>`);
		} else {
			$("#msgTrece").html(`Tu promedio es ${prom} y usted se encuentra <b>REPROBADO</b>`)
		}
	}
	
}

