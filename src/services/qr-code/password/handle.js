async function permittedCharacters() {
     let permited = []
     if(process.env.UPPERCASE_LETTERS === "true") {
     permited.push(..."ABCDEFGHIJKLMNOPQRSTUVWYZ");
}
     if(process.env.LOWERCASE_LETTERS === "true"){
     permited.push(..."abcdefghijklmnopqrstuvwyz");
}
     if(process.env.LOWERCASE_NUMBERS === "true"){
     permited.push(..."1234567890");
}
     if(process.env.SPECIAL_CHARACTERS === "true"){
     permited.push(..."!@#$%&*()-_+=");
}
return permited;
}



async function handle() {
    let characters = []
    let password = ""; 

const passwordLenght = process.env.PASSWORD_LENGTH;
characters = await permittedCharacters()
for (let i =0; i< passwordLenght; i++){
     const index = Math.floor(Math.random() * characters.length)
     password += characters [index];
}
return password;
}


export default handle