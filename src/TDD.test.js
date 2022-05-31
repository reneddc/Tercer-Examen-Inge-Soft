



describe("TDD", () => {
    it("Ingresar el monto y mostrarlo", () => {
      let monto = devolverMonto(19);
      expect(monto).toEqual(19);
    });

    it("Ingresar el monto y devolver resta con la moneda de 5", () => {
        let cambio = devolverCambio(19,5);
        expect(cambio).toEqual(14);
    });

    it("Ingresar el monto y devolver resta con la moneda de 5", () => {
        let cambio = devolverCambio(19,2);
        expect(cambio).toEqual(17);
    });

    it("Ingresar el monto y devolver resta con la moneda de 1", () => {
        let cambio = devolverCambio(19,1);
        expect(cambio).toEqual(18);
    });
});  

function devolverMonto(monto){
    return monto;
}

function devolverCambio(monto, moneda){
    return monto - moneda;
}