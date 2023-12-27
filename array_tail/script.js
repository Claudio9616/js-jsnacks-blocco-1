// 1 chiedo all'utente quanti elemnti vuole nella sua lista
// 2 creo un ali sta vuota che sarà riempita in seguito
// 3 creo un ciclo che mi randomizza quali numeri devono essere inseriti nella lista vuota
// per quante volte l'utente mi ha chiesto di farlo
// 4 stampo in console gli ultimi 5 numeri

// 1
let number = parseInt(prompt('quanti elementi vuoi che contenga la lista?'))
// 2
let userNumber = []
// 3
for (let i = 1; i <= number; i++){
    userNumber.push(Math.floor(Math.random() * 100) + 1)
}
// 4
console.log(userNumber)
console.log(userNumber[number - 1])
console.log(userNumber[number - 2])
console.log(userNumber[number - 3])
console.log(userNumber[number - 4])
console.log(userNumber[number - 5])