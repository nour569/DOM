const whiteHeart = '\u2661';
const blackHeart = '\u2665';
const button = document.querySelector('button');
button.addEventListener('click', toggle);

function toggle() {
  const like = button.textContent;
  if(like==whiteHeart) {
    button.textContent = blackHeart;
  } else {
    button.textContent = whiteHeart;
  }
}

 


const buttonPlus=document.querySelectorAll('.plus');
const buttonMinus=document.querySelectorAll('.minus');
const count=document.querySelectorAll('.count');

let plusButtons=document.querySelectorAll(".plus");
let quantityOfArticle=document.querySelectorAll(".count");
let minusButtons=document.querySelectorAll(".minus");
let deleteButtons=document.querySelectorAll(".delete");
const prices=document.querySelectorAll(".price");
const sum=document.querySelector("#sum");


const bigDivs=document.querySelectorAll('.card');




for(let i=0;i<minusButtons.length;i++)
minusButtons[i].addEventListener('click',function(){
    if(quantityOfArticle[i].innerHTML>0){
        quantityOfArticle[i].innerHTML--;
        sum.innerHTML=parseInt(sum.innerHTML)-parseInt(prices[i].innerHTML)
    }
})
for(let i=0;i<plusButtons.length;i++)
plusButtons[i].addEventListener('click',function(){
        quantityOfArticle[i].innerHTML++;
        sum.innerHTML=parseInt(sum.innerHTML)+parseInt(prices[i].innerHTML)
    }
)
for(let i=0;i<deleteButtons.length;i++)
deleteButtons[i].addEventListener('click',function(){
            bigDivs[i].remove();
            sum.innerHTML=parseInt(sum.innerHTML)-parseInt(prices[i].innerHTML)* parseInt(quantityOfArticle[i].innerHTML)
    }

)