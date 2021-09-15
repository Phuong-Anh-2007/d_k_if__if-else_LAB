let inp = document.getElementById('inp');
let input;
function inp_value (value) {
    inp.value += value; 
    input = inp;
    console.log(input);
}

function AC() {
    inp.value ='';
}

function result() {
    eval(inp.value);
}