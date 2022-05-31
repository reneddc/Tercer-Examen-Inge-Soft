import fs from "fs";

describe("ATDD", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });
  it("Monto Venta", () => {
    let botonCambio = document.querySelector("#boton-cambio");
    let montoVenta = document.querySelector("#monto-venta");
    let montoVentaResultado = document.querySelector("#resultado-monto-venta");

    montoVenta.value = 5;
    botonCambio.click();
    expect(parseInt(montoVentaResultado.innerHTML)).toEqual(5);
  });

  it("Efectivo", () => {
    let botonCambio = document.querySelector("#boton-cambio");
    let efectivo = document.querySelector("#efectivo");
    let efectivoResultado = document.querySelector("#resultado-efectivo");

    efectivo.value = 4;
    botonCambio.click();
    expect(parseInt(efectivoResultado.innerHTML)).toEqual(4);
  });

  it("Cambio", () => {
    let botonCambio = document.querySelector("#boton-cambio");
    let cambioResultado = document.querySelector("#resultado-cambio");
    let efectivo = document.querySelector("#efectivo");
    let montoVenta = document.querySelector("#monto-venta");


    efectivo.value = 4;
    montoVenta.value = 5;

    botonCambio.click();

    let resultado = parseInt(montoVenta.value) - parseInt(efectivo.value)
    expect(parseInt(cambioResultado.innerHTML)).toEqual(resultado);
  });
});  