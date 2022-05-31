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

  it("Monto Venta", () => {
    let botonCambio = document.querySelector("#boton-cambio");
    let efectivo = document.querySelector("#efectivo");
    let efectivoResultado = document.querySelector("#resultado-efectivo");

    efectivo.value = 4;
    botonCambio.click();
    expect(parseInt(efectivoResultado.innerHTML)).toEqual(4);
  });
});  