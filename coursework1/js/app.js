/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const image1 = document.querySelector('#1');
const image2 = document.querySelector('#2');
const image3 = document.querySelector('#3');
const image4 = document.querySelector('#4');
const image5 = document.querySelector('#5');
const image6 = document.querySelector('#6');
const image7 = document.querySelector('#7');
const image8 = document.querySelector('#8');
const image9 = document.querySelector('#9');
const image10 = document.querySelector('#10');
const image11 = document.querySelector('#11');
const image12 = document.querySelector('#12');


function getDataFromHeroku() {
    for(let num = 1; num <=12; num++){
    const request = new XMLHttpRequest();
    
    request.open('get', 'https://coursework124.herokuapp.com/images/'+num);

    try {

        request.onload = () => {
            const json = JSON.parse(request.responseText);
            
            if(num === 1){
            image1.src = json[0].image;
            }
            if(num === 2){
            image2.src = json[0].image;
            }
            if(num === 3){
            image3.src = json[0].image;
            }
            if(num === 4){
            image4.src = json[0].image;
            }
            if(num === 5){
            image5.src = json[0].image;
            }
            if(num === 6){
            image6.src = json[0].image;
            }
            if(num === 7){
            image7.src = json[0].image;
            }
            if(num === 8){
            image8.src = json[0].image;
            }
            if(num === 9){
            image9.src = json[0].image;
            }
            if(num === 10){
            image10.src = json[0].image;
            }
            if(num === 11){
            image11.src = json[0].image;
            }
            if(num === 12){
            image12.src = json[0].image;
            }
            
        };

    } catch(e) {
        console.warn(e) ;
    }


    request.send();
    }
}

getDataFromHeroku();

