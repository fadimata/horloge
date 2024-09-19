/* setInterval (1000)
const heure = document.getElementsByClassName('.hr');
const minute = document.getElementsByClassName('.min');
const seconde = document.getElementsByClassName('.sec');

function getHorloge(){
    const H = new date();
    const heures =(minutes +  H.getMinute()) / 120
    const minutes =(secondes +  H.getMinute()) / 60
    const secondes = H.getSecondes() / 60
}

function setRotation (element, rotation){
element.style.setProperty('--rotation', rotationRatio * 360)
} 
 */

 

let heure = document.querySelector('.hr');
let minute = document.querySelector('.mn');
let second = document.querySelector('.sec');

setInterval(()=>{
const H = new Date();

const dheures = H.getHours() * 30;
const dminutes = H.getMinutes() * 6;
const dseconds = H.getSeconds() * 6;

heure.style.transform = `rotateZ(${dheures +(dminutes/12)}deg)` ;
minute.style.transform = `rotateZ(${dminutes}deg)` ;
second.style.transform = `rotateZ(${dseconds}deg)` ;
},1000)  
