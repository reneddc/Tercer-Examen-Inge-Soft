import sumar from "./sumador";

const form = document.querySelector("#form");
const montoVenta = document.querySelector("#monto-venta");
const efectivo = document.querySelector("#efectivo");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  let resultadoMontoVenta = document.querySelector("#resultado-monto-venta");
  let resultadoEfectivo = document.querySelector("#resultado-efectivo");
  let resultadoCambio = document.querySelector("#resultado-cambio");
  resultadoMontoVenta.innerHTML =  montoVenta.value;
  resultadoEfectivo.innerHTML =  efectivo.value;

  let cambio = montoVenta.value - efectivo.value;
  resultadoCambio.innerHTML =  cambio;
});
