



describe("TDD", () => {
    it("Ingresar el monto y mostrarlo", () => {
      let monto = devolverMonto(19);
      expect(monto).toEqual(19);
    });

    it("Ingresar el monto y devolver resta con la moneda de 5", () => {
        let cambio = devolverCambio5(19);
        expect(cambio).toEqual(14);
    });

    it("Ingresar el monto y devolver resta con la moneda de 5", () => {
        let cambio = devolverCambio2(19);
        expect(cambio).toEqual(17);
    });

    it("Ingresar el monto y devolver resta con la moneda de 1", () => {
        let cambio = devolverCambio1(19);
        expect(cambio).toEqual(18);
    });
});  

function devolverMonto(monto){
    return monto;
}

function devolverCambio5(monto){
    return monto - 5;
}

function devolverCambio2(monto){
    return monto - 2;
}