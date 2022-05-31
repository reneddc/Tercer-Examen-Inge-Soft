



describe("TDD", () => {
    it("Ingresar el monto y mostrarlo", () => {
      let monto = devolverMonto(19);
      expect(monto).toEqual(19);
    });

    it("Ingresar el monto y devolver resta con la moneda de 5", () => {
        let cambio = devolverMonto(19);
        expect(cambio).toEqual(14);
    });
});  

function devolverMonto(monto){
    return monto;
}