let number = parseInt(prompt('Ingrese la cantidad de numeros que ingresarà'))
let promedio = 0;
for (let i = 0; i < number;i++){
    let numbers = parseInt(prompt('Ingrese el numero'))
    promedio = promedio + numbers
}
console.log('El promedio de la suma entre los numeros ingresados es: ', promedio, '/',number,'=',promedio/number)
//Mollo Rivas Gianluca