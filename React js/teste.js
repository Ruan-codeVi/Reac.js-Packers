let numeros = [2,5,10,11,8]
let numPares = []

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        numPares.push(numeros[i])
    }
}
console.log(numPares)