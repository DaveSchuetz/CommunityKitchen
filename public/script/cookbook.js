//onchange event needs to call funtion that will take information and use ajax to send to node and a new controller to lisgten for the change
let newCB =''
function getCB(){
    const cookbook = document.getElementById('addCB')
    newCB = cookbook.options[cookbook.selectedIndex].text
    console.log(newCB)
}
function addCB(){
    console.log(newCB)
}