let lista = [
    500,
    300,
    100,
    400,
    200,
    600,
];

lista.sort((a, b) =>  a - b);

function savedata(){
    const inputAge = document.getElementById('Age').value;  
    const ageValue = lista.push(inputAge); 
  }

  function displayData() 
  {
    const content = [...lista] ;
    document.getElementById('display').innerHTML = "Edades : " + content;
  }
   
const mitadLista = parseInt(lista.length / 2);

function esPar (number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento

        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;

}


let mediana;

function calcularMediana(lista){
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
    
        mediana = promedioElemento1y2;
    }
    else {
        mediana = lista[mitadLista];
      
    }
    const display = document.getElementById("display");
     display.innerText = "La mediana es " + mediana;
}
