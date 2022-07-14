const lista = [
    10,
    23,
    18,
    10,
    23,
    14,
    23,
    18,
    10,
    10,
]

function displayModa() 
  {

    const listaCount = {};
    lista.map(
        function (elemento) {
            if (listaCount[elemento]){
                listaCount[elemento] += 1;
            }
            else {
                listaCount[elemento] = 1
            }
        }
    );
    
    const arrList = Object.entries(listaCount).sort(
        function (a, b) {
           return a[1] - b[1];
        }
    );

    const moda = arrList[arrList.length - 1];

    const content = moda ;
    document.getElementById('display').innerHTML = "La moda es : " + content[0] + " Se repite " + moda[1] + " veces";
  }


function savedata(){
    const inputAge = document.getElementById('Age').value;  
    const ageValue = lista.push(inputAge); 
  }
function displayList() 
  {
    const content = [...lista] ;
    document.getElementById('display').innerHTML = "Edades : " + content;
  }



