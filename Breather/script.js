const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime/5)*2;
const hold = totalTime/5;

breatheAnimation();

function breatheAnimation(){
    // console.log('Breathe In');
    text.innerText = 'breathe In'
    container.className= 'container grow';

    setTimeout( () =>{
        // console.log('hold');
        text.innerText = 'hold'

        setTimeout(()=>{
        //  console.log('breathe out!') 
         text.innerText = 'breathe out!' 
         container.className = 'container shrink';
          
        }, hold);
    }, breatheTime);
}

setInterval(breatheAnimation, totalTime);