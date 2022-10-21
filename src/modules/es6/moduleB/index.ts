import { greet as greetModuleA } from '../moduleA'

export function greet(name: string): void {
    greetModuleA(name)
    console.log('New greet')
}
