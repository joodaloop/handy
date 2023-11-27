const validatePassword = (text, {allowArray, urlSafe, verbose = false}) => {
    
    let valid = true

    for(let char of text){

        let temp = true

        if(char.charCodeAt(0) > 100 
            || char.charCodeAt(0) < 0
        ){
            temp = false
        }

        if(allowArray){
            if(allowArray.includes(char)){
                temp = true
            }
        }

        else{

            if(urlSafe){
                if(urlSafe.includes(char)){
                    temp = true
                }
            }

            else if(allAllowed.includes(char)){
                temp = true
            }
        }

       temp == false ? valid = false : null

    }

    return valid
}

const allAllowed = ['!', '#', '$', '@', '%', '^', '&', '*', '(' , ')', '-', '_', '+', '=', '[', ']', '\\', '|', '']

!";#$%&'()*+,-./:;<=>?@[]^_`{|}~
!@#$%^&*