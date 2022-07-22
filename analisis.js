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
function saveSalary(){
    const inpuSalary = document.getElementById('salary').value;  
    const salaryValue = lista.push(Number(inpuSalary)); 
  }
function saveTips(){
    const inputTips = document.getElementById('tips').value;  
    const tipsValue = lista.push(Number(inputTips)); 
  }

function displaySalary() 
{  
  let content = [...salariosNereaSorted] ;
    document.getElementById('display').innerHTML = "Rango de salarios : " + content;
}
function displayPromedioSalary() {
    let content =  calcularMediaAritmetica(salariosNereaSorted);
    document.getElementById("display");
    display.innerText = "El salario promedio es de " + content + " $";
  
}
function displayTips() 
{
  let content = [...tipsSorted];
    document.getElementById('display').innerHTML = "Tips : " + content;
    document.getElementById('secondDisplay').innerHTML = "Tips : " + content;
}
function displayPromedioTips() {
    let content =  calcularMediaAritmetica(tipsSorted);
    

     document.getElementById("display");
    display.innerText = "El promedio de tips es de " + content + " $";
  
    document.getElementById("secondDisplay");
    secondDisplay.innerText = "El promedio de tips es de " + content + " $";
  
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

let salariosNerea = nerea.map(
    function (persona) {
        return persona.salary;
    }
);

let salariosNereaSorted = salariosNerea.sort((a, b) =>  a - b);

let medianaGeneralNerea =  medianaSalarios(salariosNereaSorted);

// Mediana del top 10%

let spliceStart = (salariosNereaSorted.length * 90 ) / 100;
let spliceCount = salariosNereaSorted.length - spliceStart;

let salariosNereaTop10 = salariosNereaSorted.splice(
   spliceStart,
   Math.round(spliceCount),
);

let medianaTop10Nerea =  medianaSalarios(salariosNereaTop10);

console.log({
    medianaGeneralNerea,
    medianaTop10Nerea, 
});


// Tips
let tipsNerea = tips.map(
    function(date) {
        return date.amount;
    }
);
let tipsSorted = tipsNerea.sort((a, b) =>  a - b);

let medianaTips =  medianaSalarios(tipsSorted);


