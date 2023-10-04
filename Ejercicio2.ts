const contrasenia1 = "clave12?";
const contrasenia2 = "ContraseñaAlejandro@123";

//Función que recive un string con la contraseña y devuelve una puntuación siguiendo los criterios
export function evaluarContrasena(contrasenia: string): number {
  //Se transforma la contraseña en un array con cada uno de los caracteres
  const array1 = contrasenia.split('');
  
  let Letra: boolean = false;
  let Numero: boolean = false;
  let numerosSeguidos: number = 0;
  let puntos: number = 0;
  let i: number = 0;
  
  for (i = 0; i < array1.length; i++) {
    const caracter = array1[i];

    if (/[a-zA-Z]/.test(caracter)) {
      //Si hay una letra ponemos el booleano como true
      Letra = true;
    } else if (/[0-9]/.test(caracter)) {
      //Si hay un numero ponemos el booleano como true
      Numero = true;
      numerosSeguidos = numerosSeguidos + 1;

      if (numerosSeguidos === 3) {
        // Si hay tres números seguidos se resta 1
        puntos = puntos - 1;
      }
    } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(caracter)) {
      // Si hay caracter especial se suma 1 
      puntos = puntos + 1;
    }
  }

  // Si hay una letra y un número se suma 1
  if (Letra && Numero) {
    puntos = puntos + 1;
  }

  // Si la contraseña supera los 20 caracteres se suma 2
  if (contrasenia.length > 20) {
    puntos = puntos + 2;
  }

  // Si la contraseña es menor a 10 caracteres se resta 1
  if (contrasenia.length < 10) {
    puntos = puntos - 1;
  }

  return puntos;
}

console.log("Puntos contraseña 1: " + evaluarContrasena(contrasenia1));
console.log("Puntos ontraseña 2: " + evaluarContrasena(contrasenia2));




  

  
  