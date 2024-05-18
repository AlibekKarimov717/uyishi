let k = document.getElementById('pul'); 
let inp = document.getElementById('inp');
let o;
function qurs() {
    if(k.value == '$'){
        o = inp.value*12700;
    }
    else{
        o = inp.value/12700;
    }
    alert(o);
}
