'use strict'

const toDoList = [
    {
        text: 'Aprire GitHub',
        done: true,
    },
    {
        text: 'Creare una repository',
        done: true,
    },
    {
        text: 'Clonare la repository su VSCode',
        done: false,
    },
    {
        text: 'Creare i file base con la consegna',
        done: false,
    },
    {
        text: 'Aprire Spotify, ed iniziare a scrivere codice',
        done: true,
    },
];
console.log(toDoList)

new Vue({
    el: '#app',
    data: {
        lista: toDoList,
        currentIndex: 0,
    }
})




/*
Descrizione:
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, senza chiedere all’utente conferma, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale (sempre visibile) e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/