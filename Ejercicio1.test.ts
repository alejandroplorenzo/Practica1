import { assertEquals } from "https://deno.land/std@0.203.0/testing/asserts.ts";
import { bubbleSort } from "./Ejercicio1.ts";

Deno.test("bubbleSort ordena de manera ascendente", () => {
  const entrada: number[] = [2, 8, 7, 1, 67, 24];
  const resultadoOrdenado: number[] = [1, 2, 7, 8, 24, 67];

  assertEquals(bubbleSort(entrada, entrada.length), resultadoOrdenado);
});