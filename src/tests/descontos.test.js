const freteGratis = require("../functions/descontos");

test("freteGratis é verdadeiro para 200", () => {
  expect(freteGratis(200)).toBeTruthy();
});
