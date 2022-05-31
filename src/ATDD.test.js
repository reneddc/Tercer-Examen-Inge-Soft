import fs from "fs";

describe("ATDD", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });
  it("Monto Venta", () => {
    let botonCambio = document.querySelector("#boton-cambio");
    let montoVenta = document.querySelector("#monto-venta");
    montoVenta.value = 5;
    botonCambio.click();
    expect(montoVenta.value).toEqual(5);
  });
});  