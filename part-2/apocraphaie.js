const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const apoc = ["^","-","_","|","l",",","\\","[","\`","*","]","/",".","o","0","q", "u", "<", "c","n",">","v", ")","(","%","$"] 


function printCipher(text){
    text = text.toLowerCase();
    text = text.split("");
    

    let result = '';
    for(let i = 0; i < text.length; i++){
        if(text[i] === " "){
            console.log("yes")
            let num = (Math.floor(Math.random() * 9 +1)).toString()
            result = result + num
        }else{
            let index = alpha.findIndex((letter)=>{
                return letter === text[i]
            })
            let letter = apoc[index];
            result = result + letter;

        }
    }
    console.log(result)
    return result
}

printCipher(
    "My little black rain cloud"
)