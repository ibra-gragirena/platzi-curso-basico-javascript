let lista = [];

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

}

// HACER QUE LA LISTA SEA AÑADIDA POR EL USER
// Traducir ese dato a numeros y retornar la media aritmetic