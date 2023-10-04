import { assertEquals } from "https://deno.land/std@0.203.0/testing/asserts.ts";
import { cambiohora } from "./Ejercicio3.ts";

Deno.test("cambiohora debería convertir '10:30 pm' a '22:30'", () => {
  const hora = "10:30 pm";
  const resultadoEsperado = "22:30";

  assertEquals(cambiohora(hora), resultadoEsperado);
});

Deno.test("cambiohora debería convertir '12:00 pm' a '00:00'", () => {
  const hora = "12:00 pm";
  const resultadoEsperado = "00:00";

  assertEquals(cambiohora(hora), resultadoEsperado);
});
