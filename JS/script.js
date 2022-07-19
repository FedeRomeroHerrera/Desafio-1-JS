//INGRESAR CANTIDAD DEL PRESTAMO
let monto = parseInt(prompt("Ingrese monto del crédito a solicitar"));
    alert("Usted pedirá un préstamo de = $" + monto)


//INGRESAR CANTIDAD DE CUOTAS
let cuotas1 = parseInt(prompt("Ingrese cantidad de cuotas a devolver el crédito"));
    alert("Ud. eligió devolver el préstamo en " + cuotas1 + " cuotas?")
    
// CALCULO DE TASA DE INTERES
let tna = 0

if (cuotas1 <= 12) {
    tna = 1.50    
} else {
    tna = 1.80
}

//Funcion para dividir cantidad en cuotas
let resultado = (monto*tna) / cuotas1;
  

//MOSTRAR RESULTADOS

console.log("La cantidad a devolver es: $" + (monto*tna))
console.log("Tasa del crédito: %"+(tna * 100 - 100))
console.log("Las cuotas son: " + cuotas1)
console.log("Usted debe pagar " + cuotas1 + " cuotas de $" + resultado)

