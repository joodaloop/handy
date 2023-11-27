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

// !";#$%&'()*+,-./:;<=>?@[]^_`{|}~
// !@#$%^&*
// " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// Lowercase characters {a-z}
// Uppercase characters {A-Z}
// Numbers {0-9}
// Exclamation point {!}
// Open parenthesis {(}
// Close parenthesis {)}
// Dash {-}; this character is not supported as the first character in the user ID or password
// Period {.}; this character is not supported as the first character in the user ID or password
// Question mark {?}
// Open bracket {[}
// Close bracket {]}
// Underscore {_}; this is the only supported special character in IBM i
// Grave accent {`}
// Tilde {~}
// Semicolon {;}
// Colon {:}
// Exclamation mark {!}
// Commercial at {@} (this character is not supported when creating the IBM Business Automation Workflow administrator during installation)
// Number sign {#}
// Dollar sign {$}
// Percent sign {%}
// Circumflex accent {^}
// Ampersand {&}
// Asterisk {*}
// Plus sign {+}
// Equals sign {=}