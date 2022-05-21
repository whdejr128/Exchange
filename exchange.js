let currency_ratio ={
USD:{USD:1,KRW:1273.75,VND:23170.00,unit:'달러'},
KRW:{KRW:1,USD:0.00079,VND:18.19,unit:'원'},
VND:{VND:1,KRW:0.055,USD:0.000043,unit:'동'},
};

let from_currency='USD';
let to_currency='USD';


let main_button=document.querySelectorAll('.main_button')
let from = document.querySelectorAll('#from .country')
let to = document.querySelectorAll('#to .country')
let from_input=document.querySelector('#from_input')
let to_input=document.querySelector('#to_input')

from.forEach((menu)=>
menu.addEventListener('click',function(){
main_button[0].textContent=this.textContent;
from_currency=this.textContent;
convert()
document.querySelector('.from_unit').textContent=currency_ratio[from_currency].unit;
})
);

to.forEach((menu)=>
menu.addEventListener('click',function(){
main_button[1].textContent=this.textContent;
to_currency=this.textContent;
convert()
document.querySelector('.to_unit').textContent=currency_ratio[to_currency].unit;
})
);

function convert(){
to_input.value=from_input.value * currency_ratio[from_currency][to_currency]
};

function convert2(){
from_input.value=to_input.value * currency_ratio[to_currency][from_currency]
};

from_input.addEventListener('keyup',function(){
convert()
});
to_input.addEventListener('keyup',function(){
convert2()
});
