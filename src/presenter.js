import sumar from "./sumador";

const form = document.querySelector("#form");
const resultadoMontoVenta = document.querySelector("#monto-venta");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  let montoVenta = document.querySelector("#resultado-monto-venta");
  resultadoMontoVenta.value;

  montoVenta.innerHTML =  resultadoMontoVenta.value;
});
