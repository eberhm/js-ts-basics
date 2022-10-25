
import { callAPI, callAPIPromisified } from "./async"

const lessons = {
"modules": {
    "Require": 1,
    "Imports": 1,
},
"Array and Object destructuring" : 1,
"Arrow functions": 1,
"Promises" : 0,
    "Event Loop": 0,
    "Async Await": 0,
"Data Structures": 0,
    "Map": 0, 
    "Set": 0,
    "Hash":0,
    "Weak versions": 0,
"Classes": 0,
"Functional": 0,
    "Currying": 0,
    "Partial Application": 0
}


console.log('start')
callAPI('sync 1', (response: string) => {
    console.log(response)
    callAPI(response + 'sync 2', (response: string) => {
        console.log(response)
        callAPI(response + 'sync 3', (response: string) => {
            console.log(response)
            callAPI(response + 'sync 4', (response: string) => {
                console.log(response)
                callAPI(response + 'sync 5', (response: string) => {
                    console.log(response)
                })
            })
        })
    })
});
console.log('end')

callAPIPromisified('sync 1')
    .then((response: string) => {
        console.log(response)
        return callAPIPromisified(response + 'sync 2')
    })
    .then((response: string) => {
        console.log(response)
        return callAPIPromisified(response + 'sync 3')
    })
    .then((response: string) => {
        console.log(response)
        return callAPIPromisified(response + 'sync 4')
    }).then((response: string) => {
        console.log(response)
        return callAPIPromisified(response + 'sync 6')
    })
    .then((response) => console.log(response))