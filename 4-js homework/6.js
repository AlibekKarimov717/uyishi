let a = prompt('oyligingizni kiriting');
let f = confirm('soloq bilanmi');
let y ;
if(f){
    let t = a/100*12;
    y = (a - t)*12;
}else{
    y = a*12;
}
alert('sizning yillik daromadingiz - '+y )
