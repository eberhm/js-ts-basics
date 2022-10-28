
import { callAPI, callAPIMyPromisified, callAPIPromisified } from "./async"

const lessons = {
"modules": {
    "Require": 1,
    "Imports": 1,
},
"Array and Object destructuring" : 1,
"Arrow functions": 1,
"Promises" : 1,
    "Event Loop": 1, //send link to documentation
    "Callbacks to promises": 1,
    "Async Await": 1,
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

/*
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
                    callAPI(response + 'sync 5', (response: string) => {
                        console.log(response)
                    })
                })
            })
        })
    })
});
console.log('end')







*/



























const myFunction = () => {
    const untilSecondCall = callAPIPromisified('sync 1')
    .then((response: string) => {
        console.log(response)
        throw "my error 2"
        return callAPIPromisified(response + ' - sync 2')
    })



    untilSecondCall.then((response: string) => {
            console.log(response)
            //throw "my error 3"
            return callAPIPromisified(response + ' - sync 3')
        })
        .then((response: string) => {
            console.log(response)
            return callAPIPromisified(response + ' - sync 4')
        })
        .then((response: string) => {
            console.log(response)
        })
        .catch((e) => {
            console.log('yesssss ' + e)
            return 'managing error here';
        })


    untilSecondCall.catch((e) => {
        return callAPIPromisified(e + ' - sync 3')
    })
}


const myFunctionAsyncAwait = async () => {
    try {
        const response1 = await callAPIPromisified('sync 1')
        console.log(response1)
        
        let response2 = ''
        try {
            response2 = await callAPIPromisified(response1 + ' - sync 2')
            console.log(response2)
        } catch(e) {
            console.log(response1 + ' - ' + e + ' - sync 2')
        }
        

        const response3 = await callAPIPromisified(response2 + ' - sync 3')
        console.log(response3)

        const response4 = await callAPIPromisified(response3 + ' - sync 4')
        console.log(response4)

        return response4
    } catch (e) {
        console.log('yesssss ' + e)
        return 'managing error here';
    }
}



const fn = async () => {
    const response4 = await myFunctionAsyncAwait()
}







    
    /*
    .then((response: string) => {
        console.log(response)
        return callAPIPromisified(response + 'sync 6')
    })
    
    .then((response: any) => console.log(response))

*/