



describe("TDD", () => {
    it("Ingresar el monto y mostrarlo", () => {
      let monto = devolverMonto(19);
      expect(monto).toEqual(19);
    });
});  

function devolverMonto(monto){
    return monto;
}