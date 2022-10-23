function insertValues(num) {
    const input = document.getElementById ('input-Value').value 
    document.getElementById ('input-Value').value = input + num
   console.log (num)
}
 
function calculate () {
    const input = document.getElementById ('input-Value').value 
    document.getElementById ('input-Value').value = eval (input)
}

function clearInput() {
    document.getElementById ('input-Value').value = ""
}

function invertValue() {
    calculate () 
    
    const input = document.getElementById ('input-Value').value 
    document.getElementById ('input-Value').value = input * -1
}

function percentage(){

}