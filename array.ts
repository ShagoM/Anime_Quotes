// Prueba de transpilación

class ArrayClass {
    private myArray: Array<number> =  [1,2,3,4,5];
    constructor() {
        for (let i = 0; i < this.myArray.length; i++) {
            console.log(this.myArray[i]*10, i);            
        }
        this.myArray.forEach(element => {
            console.log(element*10);
        });

        for(let element of this.myArray) {
            console.log(element, 'otra manera')
        }
    }
    retornarObjeto(miDato?: string): any {
        const datos = {
            'uno': 1,
            'dos': 2,
            'tres': 3,
            'cuatro': 4,
            'cinco': 5,
            'default': 10
        }
        return datos[miDato || 'default']
    }
}
const myObject = new ArrayClass();
const miDatoQueVino = myObject.retornarObjeto('siete');
if(miDatoQueVino) {
    console.log('Su número es: ' + miDatoQueVino);
} else {
    console.log('Dato no válido');
}
interface Gafas {
    lente: string;
    montura: string;
    alcance: number;
}
let datoFalso = 1;
if(datoFalso == 1) {
    console.log('es 1'); 
}else if(datoFalso == 2) {
    console.log('es 2'); 
}
switch (datoFalso) {
    case 1:
        console.log('es 1'); 
        break;
    case 2:
        console.log('es 2'); 
        break;
    default:
        break;
}
interface santi {
    nombre: string,
    apellido: string,
    documento: number,
}
enum datosDelSanti {
    nombre = 'nombre',
    apellido = 'apellido',
    documento = 'documento',
}
const santiObject: santi = {
//  llave   valor
    nombre: 'santigo',
    apellido: 'm0nsalve',
    documento: 1000345435,
}
var datoQueQuiero: datosDelSanti;

if(datoQueQuiero == 'documento') {
    console.log(santiObject.documento);
}else if(datoQueQuiero == 'nombre') {
    console.log(santiObject.nombre);
} else {
    console.log(santiObject.apellido);
}
switch(datoQueQuiero){
    case datosDelSanti.nombre:
        console.log(santiObject.nombre);
        break;
    case datosDelSanti.apellido:
        console.log(santiObject.apellido);
        break;
    case datosDelSanti.documento: 
        console.log(santiObject.documento);
}
console.log(santiObject[datoQueQuiero || 'default']);
function cambiarString(dato: string): string {
    const myCode2: string = dato.trim();
    const myCode3 = myCode2.split(' ');
    return myCode3[0]+myCode3[1]+myCode3[2];
}
console.log(cambiarString("    Andres Felipe Tapias   "));
console.log(cambiarString("    Santgiago Monsalve Orrego   "));
console.log(cambiarString("    Martin Alonso Cortes   "));
console.log(cambiarString("    Juan José Téllez Rojas   "));