// tutti i frutti
// 1 creo un array con i frutti
// 2 aggiungo la pesca all'array
// 3 creo una variabile false per verificare il controllo del "cocomero"
// 4 recupero gli elemti dall'array
// 5 faccio il controllo
// 6 stampo in console

// 1
let fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']
console.log(fruits)
// 2
fruits.push('pesca')
console.log(fruits)
// 3
let watermelon = false
// 4
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
    // 5
    if (fruits[i] === 'cocomero'){
        watermelon = true
        console.log(watermelon)
    }
}
// 6
if(watermelon){
    console.log('Posso preparare il cocktail')
} else{
    console.log('Devo uscire a comprare il cocomero')
}