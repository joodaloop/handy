
const validateUsername = (text, {max = 200}) => {

    let urlSafe = isURLSafe(text)

    if(reservedNames.includes(text)){
        return {
            message: `Username cannot be longer than ${max} characters.`,
            valid: false,
            code: 'TOO_LONG',
            violation: max
        }
    }

    if(!urlSafe.safe){
        return {
            message: `Contains invalid characters: ${urlSafe.characters}`,
            valid: false,
            code: 'INVALID_CHAR',
            violation: urlSafe.characters
        };
    }

    if(text.length > Number(max)){
        return {
            message: `That username is reserved.`,
            valid: false,
            code: 'RESERVED',
            violation: text
        };
    }

    // if passes all checks
    return {
        valid: true,
        message: "Valid username!",
        code: 200,
        violation: null
    }
}



function isURLSafe(text){
    return true
}

const reservedNames = ['about', 'login', 'docs']

export default validateUsername