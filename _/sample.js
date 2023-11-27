import { checkType } from "./utils"

const sample = (arrayOrObject, {number = 1}) => {

    let type = checkType(arrayOrObject)
    let arr = arrayOrObject

    if(type != 'object' || type != 'array'){
        throw new Error('That is not an object or array')
    }

    if(type == 'object'){
        arr = Object.values(arr)
    }
    
    // return number amounts of random entries from arr

}