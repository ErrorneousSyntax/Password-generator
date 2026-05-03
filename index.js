const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById("generate-btn");
const toast = document.getElementById("toast")

let result1 = document.getElementById("result-1");
let result2 = document.getElementById("result-2");


generateBtn.addEventListener("click", passwordGen);

result1.addEventListener("click", function () {
    navigator.clipboard.writeText(result1.textContent)
    showToast()
})

result2.addEventListener("click", function () {
    navigator.clipboard.writeText(result2.textContent)
    showToast()
})

function passwordGen() {
    let password1 = ""
    for (let i=0; i<16; i++){
        let num= Math.ceil(Math.random()*90)
        password1 += characters[num]
    }
    result1.textContent = password1

    let password2 = ""
    for (let i=0; i<16; i++){
        let num= Math.ceil(Math.random()*90)
        password2 += characters[num]
    }
    result2.textContent = password2
}



function showToast() {
    toast.classList.add("show")
    setTimeout(function () {
        toast.classList.remove("show")
    }, 1000)
}

