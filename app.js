let days = document.getElementById('days') ;
let hours = document.getElementById('hours') ;
let mins = document.getElementById('mins') ;
let sec  = document.getElementById('sec') ;



setInterval(() => {
    


let time = new Date('jan 30 , 2022 , 11:00:00').getTime();
let newTime = new Date().getTime() ;
let diff = time - newTime 
console.log(diff);

let days1 = Math.floor(diff / (24* 60 * 60 * 10 * 10 * 10))
let hour1 =Math.floor(diff / (1000*60*60) % 24);
let minute1 = Math.floor(diff / (1000*60) % 60 ) ;
let seconds1 =Math.floor((diff / 1000 ) % 60) ;

days.innerText = days1 ;
hours.innerText = hour1 ;
mins.innerText = minute1 ;
sec.innerText = seconds1 ; 


}, 1000);

console.log(hour1);
console.log(days1);
console.log(minute1);
console.log(seconds1);