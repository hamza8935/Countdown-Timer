
let min = 1 ;
let sec = 1 ;
let msec = 1 ;
let interval ;

let min1 = document.getElementById('min') ;
let sec1 = document.getElementById('sec') ;
let msec1 = document.getElementById('msec') ;
let btn1 = document.getElementById('btn1') ;
let btn2 = document.getElementById('btn2') ;
let btn3 = document.getElementById('btn3') ;


btn1.addEventListener('click',function () {
interval = setInterval(() => {
    
  
btn1.disabled = true ;

//function timer( ) {
    msec1.innerText = msec++ ;
    if (msec > 100) {
    
        sec1.innerText = sec++ ;
        msec = 0 ;
        
    }else if (sec > 10) {

        min1.innerText = min++ ;
        sec = 0 ;
    }
    
    
//}
}, 10)
 //interval =   setInterval(timer , 10);
})



btn2.addEventListener('click',function () {
    btn1.disabled = false ;

    clearInterval(interval)
    
})

btn3.addEventListener('click',function () {
    btn1.disabled = false ;
    msec = 0 ;
    min = 0 ;
    sec = 0 ;
    msec1.innerText = 0 ;
    min1.innerText = 0 ;
    sec1.innerText = 0 ;

    clearInterval(interval)
   
    

})


