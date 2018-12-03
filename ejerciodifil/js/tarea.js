//Limpiar pantalla
console.clear();

//Declarando variables
var exam_parcial = 0;
var exam_final = 0;
var pract_calif = 0;
var trabajo = 0;
var n = 1;


//Definiendo la cantidad de números a ingresar
//var numeros = prompt('Determinar cantidad de número a ingresar:');
while (n <= 4) {
   var datos = prompt('Ingrese las notas:');
   switch(n){
       case 1:
       console.log('Ex. Parcial (' + n + '): ' + ' ' + datos );
       // datos = Number.parseInt(datos) ;
       break;
       case 2:
       console.log('Ex.Final (' + n + '): ' + ' ' + datos );
       break;
       case 3:
       console.log('Prac. Calif. (' + n + '): ' + ' ' + datos );
       break;
       case 4:
       console.log('Trabajo (' + n + '): ' + ' ' + datos );
       break;

   }
   n = n + 1;
};
