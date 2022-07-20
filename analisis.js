// Helpers
function esPar (number) {
    return (number % 2 === 0) 
};

function calcularMediaAritmetica(lista) {

    let sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento

        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;

}

//Display 
function savedata(){
    const inputAge = document.getElementById('Age').value;  
    const ageValue = lista.push(Number(inputAge)); 
  }

  function displayData() 
{
    
  let content = [...salariosColSorted] ;
 console.log(content);
  document.getElementById('display').innerHTML = "Rango de salarios : " + content;
}



    // Calculadora de mediana

    function medianaSalarios(lista) {
        const mitadLista = parseInt(lista.length / 2);
    
        if (esPar(lista.length)) {
            let persona1 = lista[mitadLista - 1];
            let persona2 = lista[mitadLista];
        
            let mediana = calcularMediaAritmetica([
                persona1,
                persona2,
            ]);
        
            return mediana;
        }
        else {
            mediana = lista[mitadLista];
            return mediana;
          
        }
    }
    

    // Mediana General

let salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

let salariosColSorted = salariosCol.sort((a, b) =>  a - b);

let medianaGeneralCol =  medianaSalarios(salariosColSorted)

// Mediana del top 10%

let spliceStart = (salariosColSorted.length * 90 ) / 100;
let spliceCount = salariosColSorted.length - spliceStart;

let salariosColTop10 = salariosColSorted.splice(
   spliceStart,
   spliceCount,
);

let medianaTop10Col =  medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col, 
});