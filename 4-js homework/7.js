let a = prompt('oyligingizni kiriting');
let f = confirm('soloq bilanmi');
let y ;
let p = 0;
if(f){
    let t = a/100*12;
    y = (a - t)*12;
}else{
    y = a*12;
}
p = y-(y/100)*90; 
alert('sizning yillik yig\'gan pulingiz - '+p.toFixed(2) );
