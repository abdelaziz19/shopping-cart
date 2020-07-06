var remove = document.getElementsByClassName('X')
console.log(remove)
for (var i = 0; i < remove.length; i++){
    remove[i].addEventListener('click', function(event) {
      var but = event.target
      but.parentElement.parentElement.remove();
      updatecart();
    })
}


function updatecart() {
  var total = 0;
var cartitemcont = document.getElementsByClassName('item-carts')[0]
var cartrows = cartitemcont.getElementsByClassName('itemitem')
for (var i = 0; i < cartrows.length; i++)
{
  var cartrow = cartrows[i]
  var priceelemnt = cartrow.getElementsByClassName('item-price')[0]
  var quantityelement = cartrow.getElementsByClassName('item-number')[0]
  var price = parseFloat(priceelemnt.innerText.replace('$', ''))
  var quantity =parseFloat(quantityelement.innerText)
  var total = total + (price*quantity)
 document.getElementById('thecost').innerText = total + "$";
}
if (total == 0)
document.getElementById('thecost').innerText ="0 $";
{
}
}



function updatecart1() {
  var total = 0;
var cartitemcont = document.getElementsByClassName('item-carts')[0]
var cartrows = cartitemcont.getElementsByClassName('itemitem')
for (var i = 0; i < cartrows.length; i++)
{
  var cartrow = cartrows[i]
  var priceelemnt = cartrow.getElementsByClassName('item-price')[0]
  var quantityelement = cartrow.getElementsByClassName('item-number')[0]
  var price = parseFloat(priceelemnt.innerText.replace('$', ''))
  var quantity =parseFloat(quantityelement.innerText)
  var total = total - (price*quantity)
 document.getElementById('thecost').innerText = - total + "$";
}
}


function minone(){
  var add = document.getElementsByClassName('min')
  console.log(add);

   for(let el of add){
     el.addEventListener("click",function(){
      var a = el.previousElementSibling.innerText--;
       if (el.previousElementSibling.innerText==0){
       el.previousElementSibling.innerText = 1;}
       updatecart1()
     })

   }
}
addEventListener('click',minone())



function addone(){
  var add = document.getElementsByClassName('plus')
  console.log(add);

   for(let el of add){
     el.addEventListener("click",function(){
       el.nextElementSibling.innerText++;
       updatecart();
     })
   }
}

addEventListener('click',addone())

function like(){
  var hea = document.getElementsByClassName('fa-heart');
  console.log(hea);
  for (let el of hea)
  {
    el.addEventListener("click",function(){
    if(el.style.color!=='red'){
        el.style.color='red'
        
    }
    else{  el.style.color='black'}
    })
  }
}
addEventListener('click',like())