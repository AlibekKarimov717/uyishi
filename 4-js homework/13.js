let t1 = prompt('1 + 1 = ');
let t2 = confirm('NaN === NaN - bu to\'g\'rimi');
let t3 = prompt('2 + 9 = ');
let t4 = confirm('bir kun 24 soatdan tashkil topganmi');
let t5 = confirm('undefined == 0');
let s = 0;
if(t1 == 2){
    s++;
}
if(!t2){
    s++;
}
if(t3 == 11){
    s++;
}
if(t4){
    s++;
}
if(!t5){
    s++;
}