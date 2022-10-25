

const arrowFunction = () => {
    console.log('arrow func')
}

function myConstructor(myName: string)  {
    console.log(myName)

    return {
        name: myName
    }
}



// ARROW FUNCTIONS

(name: string) => {
    return ({
        longitud: name.length
    })
};

// implicit return
(name: string) => {
    console.log('asddsaadsasd')
    return {
        longitud: name.length
    }
};





(name: string) => {
    return name.length
};


(name: string) => name.length;


const multiply = (multiplier: number) => (     (n: number) => multiplier*n      );

const doubles = multiply(2);


[1, 2, 3, 4, 5].map(doubles);

[1, 2, 3, 4, 5].filter((n) => n%2 == 1);



