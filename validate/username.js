
const validateUsername = (text, {max = Infinity, verbose = false}) => {
    let valid = true
    let note = "Valid username!"
    let code = 200
    let urlSafe = isURLSafe(text)

    if(!urlSafe.safe){
        valid = false 
        note = `Contains invalid characters: ${urlSafe.characters}`
        code = 501
    }

    if(text.length > Number(max)){
        valid = false 
        note = `Username cannot be longer than ${max} characters.`
        code = 502
    }

    if(reservedNames.includes(text)){
        valid = false 
        note = `That username is reserved.`
        code = 503
    }

    if(verbose){
        return {
            message: note, 
            valid: valid,
            code: code
        }
    }

    else{
        return valid
    }
}

function isURLSafe(text){
    return true
}

const reservedNames = ['about', 'login', 'docs']

export default validateUsername