
// Código del cuadrado
console.group("Cuadrados")

// Funciones 

function perimetroCuadrado(lado) {
    return lado * 4
}


function areaCuadrado(lado) {
    return lado * lado ;
}


console.groupEnd();

// Código del triangulo

console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

// Isosceles
function alturaTriangulo(lado1, lado2, base) {
    if (lado1 != lado2) {
        console.error("The sides are not equal")
    }
    else{
        
    }
}
console.groupEnd();



// Código del circulo

console.group("Circulos")

//Diámetro
function diametroCirculo(radio) {
    return radio * 2
}

//PI
const PI = Math.PI;
console.log("PI es : " + PI );


//Circunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}


console.groupEnd();

// Interacción con HTML

//SQUARE

function calculateSquarePerimeter(){
    const input = document.getElementById("inputSquare");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calculateSquareArea(){
    const input = document.getElementById("inputSquare");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
};

//CIRCLE

function calculateCirclePerimeter() {
    const input = document.getElementById("inputCircle");
    const value = input.value;

    const perimetro = perimetroCirculo(value)
    alert(perimetro);
};

function calculateCircleArea() {
    const input = document.getElementById("inputCircle");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
};

//TRANGLE

function calculateTrianglePerimeter() {
    const input1 = document.getElementById("inputTriangle1");
    const input2 = document.getElementById("inputTriangle2");
    const inputBase = document.getElementById("inputTriangleBase");
   
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const valueBase = Number(inputBase.value);

 
    const perimetro = perimetroTriangulo(value1, value2, valueBase);
    alert(perimetro);
}

function calculateTriangleArea() {
    const inputBase = document.getElementById("inputTriangleBase");
    const inputHeight = document.getElementById("inputTriangleHeight");

    const valueBase = inputBase.value;
    const valueHeight = inputHeight.value;

    const area = areaTriangulo(valueBase, valueHeight);
    alert(area);
}

//Isosceles 
function calculateIsoscelesHeight() {
}