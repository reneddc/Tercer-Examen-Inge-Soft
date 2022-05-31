import sumar from "./sumador";

const form = document.querySelector("#form");
const montoVenta = document.querySelector("#monto-venta");
const efectivo = document.querySelector("#efectivo");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  let resultadoMontoVenta = document.querySelector("#resultado-monto-venta");
  let resultadoEfectivo = document.querySelector("#resultado-efectivo");
  resultadoMontoVenta.innerHTML =  montoVenta.value;
  resultadoEfectivo.innerHTML =  efectivo.value;
});
