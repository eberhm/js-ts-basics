// The old way: CommonJS require + module.exports = {}

// new way: ES6 import/export


// named imports

export default function hello(name: string): void {
    console.log(`Hello ${name}`)
}

export function goodbye(name: string): void {
    console.log(`Sayonara ${name}`)
}

export function greet(name: string): void {
    hello(name)
    goodbye(name)
}

// exercise: for later. Refactor this module to have one function per file without affecting .src/index.ts


