import {data} from '../data.js';
let list = document.querySelector('.list');
let hours = document.querySelectorAll('.hours span');
let previous =  document.querySelectorAll('.previous span');



list.addEventListener('click',(e) => {
    let link = e.target.innerText.toLowerCase();
   
    Array.from(list.children).forEach(elem => {
        if(!elem.children[0].classList.contains("active") && elem.children[0].innerText.toLowerCase() == link){
            elem.children[0].classList.add("active");  
        }
        else {
            elem.children[0].classList.remove("active");
        }
    })
   
    for(let i = 0; i < data.length; i++){
        hours[i].innerText = data[i].timeframes[link].current;
        previous[i].innerText = data[i].timeframes[link].previous;
    }
})

