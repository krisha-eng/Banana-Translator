var btn = document.querySelector("#btn-translate");
var txt1 = document.querySelector("#txt-input");
var div = document.querySelector("#div-output")
console.log(btn);
console.log(txt1);

btn.addEventListener("click", clickHandler);

function clickHandler(){
    var input = txt1.value;
    console.log(input);
    div.innerText = input;
}




















// PRACTICE CODE

// var user = prompt("What is your name?")
// alert("Hiiiiiii " + user);

// btn.onclick = function(){
//     console.log(btn.textContent)
//     if(btn.textContent=="baby"){
//      btn.textContent="baby111"  
//      console.log(btn.textContent)
//     }
//     else if(btn.textContent=="baby111"){
//     btn.textContent="baby"
//     console.log(btn.textContent)
//     }
// }