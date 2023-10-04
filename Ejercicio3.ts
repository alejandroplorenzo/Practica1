const hora: string = "10:30 pm";

//La función recibe un string de entrada con la hora en formato am / pm y tiene como salida el formato 24 horas
export function cambiohora(horainput: string): string{
    let horaoutput: string[] = [];
    //Detecta si la hora introducida es pm y lo cambia a 24 horas, en caso contrario devuleve la hora introducida sin el am
    if(horainput.slice(6,8) === "pm" || horainput.slice(5,7) === "pm"){
        let aux: string[] = [];
        aux = horainput.split('');
        let aux2: string = "";
        aux2 = [aux[0], aux[1]].join('');
        let num: number = parseInt(aux2) + 12;
        if(num === 24){
            return "00" + aux[2] + aux[3] + aux[4];
        }
        horaoutput = [num.toString() + aux[2] + aux[3] + aux[4]];
        return horaoutput.toString();
    }
    return horainput.slice(0,5);       
}

console.log(cambiohora(hora));