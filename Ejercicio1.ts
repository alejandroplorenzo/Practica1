const entrada: number[] = [2,8,7,1,67,24];
const tamanio : number = entrada.length;

//La función recive un array de números y el tamaño de dicho array
export function bubbleSort (arr: number[], tam: number): number[]{
    if (tam === 0){
        return arr;
    }
    //Mediante repetidas comparaciones de los numeros adyacentes se ordenan los elementos del array
    for(let i = 0; i<tam-1; i++){
        if(arr[i] > arr[i+1]){
            const aux: number = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = aux;
        }
    }
    return bubbleSort(arr, tam-1);
}

console.log(bubbleSort(entrada, tamanio));