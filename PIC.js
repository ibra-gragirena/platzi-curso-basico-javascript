
function savedata(){
    const inputAge = document.getElementById('Age').value;  
    const ageValue = lista.push(Number(inputAge)); 
  }

  function displayData() 
{
  const content = [...lista] ;
  document.getElementById('display').innerHTML = "Edades : " + content;
}

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento

        }
    );

    const promedioLista = sumaLista / lista.length;
   
    
    const display = document.getElementById("display");
     display.innerText = "La edad promedio es de " + promedioLista;
   
};

const rangoIntercuartil = lista.length / 2;


function calcularPIC(lista) {
    const listaCount = lista.sort(function (a, b) {
        return a - b;
     }
 );
 
 // Si es divisible por 4
 if (lista.length % 4 === 0){
     while (lista.length > 4){
         lista.shift();
         lista.pop();
     }
     calcularMediaAritmetica(lista);
 }
 // No divisible por 4
 else {
    while (lista.length > 5){
        lista.shift();
        lista.pop();
    }
    const datoFraccionario = Number(lista.splice(0, 1)) + Number(lista.splice(3, 1));

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento

        }
    );
    //Por lo tanto, hay 3 datos completos en el rango intercuartil, y dos datos fraccionarios. 
    //Dado que se tiene un total de 4.5 datos en el rango intercuartil, cada uno de los dos datos fraccionarios cuenta como 0.75 
    //(y por lo tanto 3×1 + 2×0.75 = 4.5 datos).
    
    const PIC = ((sumaLista) + 0.75 * (datoFraccionario)) / rangoIntercuartil;

    const display = document.getElementById("display");
    display.innerText = "La edad promedio es de " + PIC.toFixed(2);

}
}

