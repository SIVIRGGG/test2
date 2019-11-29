// function foo() {
//     let x = document.getElementsByTagName("input");
//     document.getElementById("textArea").innerHTML = "";
//     for (let i = 0; i < x.length; i++) {
//         document.getElementById("textArea").innerHTML += x[i].value + "/";
//     }
// }
// let input = document.getElementById('input');
// let ta = document.getElementById('textArea');
// let n = 1;
// document.getElementById('cnopka').onclick = function() {
//     if (n == 1) {
//         ta.value += input.value;
//         n++
//     } else { ta.value += ', ' + input.value; };
//     input.value = '';
// }



// let inputs = document.getElementsByClassName('input');
// let ta = document.getElementById('textArea');

// document.getElementById('cnopka').onclick = function() {

//     let q = inputs.forEach(element => element.value === ta.value);

//     ta.value += ', ' + q;

// }
// inputs.value = '';

document.getElementById('cnopka').addEventListener('click', () => {
    let q = document.getElementById('textArea').value = ` select:${document.getElementById('select').value}\n 
    input:${document.getElementById('input1').value}\n 
    input:${document.getElementById('input2').value}\n
    input:${document.getElementById('input3').value}\n
    input:${document.getElementById('input4').value}\n
    input:${document.getElementById('input5').value}\n
    input:${document.getElementById('input6').value} `;
    console.log(q);
});
q = '';