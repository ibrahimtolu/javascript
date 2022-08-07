'use strict';

let score=20;
let highscore=0;

let scoretxt=document.querySelector('.score');
let highscoretxt=document.querySelector('.highscore');
let messagetxt=document.querySelector('.message');
let numbertxt=document.querySelector('.number');
var random=Math.trunc(Math.random() * 20)+1;


var know=function(){

   
    document.querySelector('body').style.backgroundColor= 'green';
    var random=Math.trunc(Math.random() * 20)+1;
    scoretxt.textContent=score;
    messagetxt.textContent="Tebrikler Bildiniz";
    numbertxt.textContent=random;
    if(score>highscore){
        alert("Tebrikler En Yüksek Skor");
        highscore=score;
        highscoretxt.textContent=highscore;

        

    }

}
var notknow= function(){
    messagetxt.textContent="Sayiyi bulamadiniz";
    numbertxt.textContent=random;   

}


document.querySelector('.check').addEventListener('click',btn_check);
function btn_check(e){
    
    const guess=Number(document.querySelector('.guess').value);    
    console.log("random",random);
        score--;
        console.log("kontrol");
         if(guess==random){
           know();
           

          }
          else if(!guess){
            messagetxt.textContent="Sayi Giriniz";
          }
          else if(guess!=random){


              if(score<1){
                notknow();      
      
              }
           messagetxt.textContent= guess>random ? ':Yüksek':'Düşük';           
            
              }
          
}
document.querySelector('.again').addEventListener('click',btn_restart);
function btn_restart(e){
    
    messagetxt.textContent="Tahmin ediliyor";
    numbertxt.textContent="?";
    document.querySelector('body').style.backgroundColor="aquamarine";
    return random;
}
