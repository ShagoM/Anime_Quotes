// Prueba de transpilación
var ArrayClass = /** @class */ (function () {
    function ArrayClass() {
        this.myArray = [1, 2, 3, 4, 5];
        for (var i = 0; i < this.myArray.length; i++) {
            console.log(this.myArray[i] * 10, i);
        }
        this.myArray.forEach(function (element) {
            console.log(element * 10);
        });
        for (var _i = 0, _a = this.myArray; _i < _a.length; _i++) {
            var element = _a[_i];
            console.log(element, 'otra manera');
        }
    }
    ArrayClass.prototype.retornarObjeto = function (miDato) {
        var datos = {
            'uno': 1,
            'dos': 2,
            'tres': 3,
            'cuatro': 4,
            'cinco': 5,
            'default': 10
        };
        return datos[miDato || 'default'];
    };
    return ArrayClass;
}());
var myObject = new ArrayClass();
var miDatoQueVino = myObject.retornarObjeto('siete');
if (miDatoQueVino) {
    console.log('Su número es: ' + miDatoQueVino);
}
else {
    console.log('Dato no válido');
}
var datoFalso = 1;
if (datoFalso == 1) {
    console.log('es 1');
}
else if (datoFalso == 2) {
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
var datosDelSanti;
(function (datosDelSanti) {
    datosDelSanti["nombre"] = "nombre";
    datosDelSanti["apellido"] = "apellido";
    datosDelSanti["documento"] = "documento";
})(datosDelSanti || (datosDelSanti = {}));
var santiObject = {
    //  llave   valor
    nombre: 'santigo',
    apellido: 'm0nsalve',
    documento: 1000345435
};
var datoQueQuiero;
if (datoQueQuiero == 'documento') {
    console.log(santiObject.documento);
}
else if (datoQueQuiero == 'nombre') {
    console.log(santiObject.nombre);
}
else {
    console.log(santiObject.apellido);
}
switch (datoQueQuiero) {
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
function cambiarString(dato) {
    var myCode2 = dato.trim();
    var myCode3 = myCode2.split(' ');
    return myCode3[0] + myCode3[1] + myCode3[2];
}
console.log(cambiarString("    Andres Felipe Tapias   "));
console.log(cambiarString("    Santgiago Monsalve Orrego   "));
console.log(cambiarString("    Martin Alonso Cortes   "));
console.log(cambiarString("    Juan José Téllez Rojas   "));
