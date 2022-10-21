
interface Address {
    street: string
    number: number
    city: string
    zipCode: string
}

interface CityZipGeo {
    city: string
    zipCode: string
    geo: string
}



export function destructuringTest({number, street: addressStreet, ...cityAndZip}: Address): CityZipGeo {
    const street = addressStreet.replace('C/', 'Calle')
    const geo = 'hello'
    console.log(`He lives in ${street}, ${number}`)

    return {
        ...cityAndZip,
        geo,
    }

}

export function destructuringArray([street, number, ...restArray]: Array<string|number>): CityZipGeo {
    console.log(`He lives in ${street}, ${number}`)
    
    return {
        city: sanitizeCity(restArray[0]),
        zipCode: restArray[1].toString(),
        geo: 'hell0',
    }
}

function sanitizeCity(city: string|number) {
    
    return city.toString()
}
