import { assertEquals } from "https://deno.land/std@0.203.0/testing/asserts.ts";
import { evaluarContrasena } from "./Ejercicio2.ts"; 

Deno.test("Funcion evaluarContrasena con contrasenia1", () => {
  const contrasenia1 = "clave12?";
  const resultadoEsperado = 1; 

  assertEquals(evaluarContrasena(contrasenia1), resultadoEsperado);
});

Deno.test("Funcion evaluarContrasena con contrasenia2", () => {
  const contrasenia3 = "ContraseñaAlejandro@123";
  const resultadoEsperado = 3; 

  assertEquals(evaluarContrasena(contrasenia3), resultadoEsperado);
});