//let inp1 = document.getElementById('deb').value;
//let inp2 = document.getElementById('throt');

let btn = document.getElementById('enter');
let myform = document.querySelector('form');

myform.addEventListener('submit',(e)=>{
    
    e.preventDefault()
    console.log("clicked");
    throttling(API_throt(),1000)
    
})
async function API_throt(){
     let inp2 = document.getElementById('throt').value;
     //console.log(inp2);
     let throut = document.getElementById('disp2');
     throut.innerHTML = null;
     try {
        let res = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${inp2}`);
        let finalres = await res.json();
        finalres.meals.forEach(element => {
            throut.textContent = element.strMeal;
        });
        //console.log(`making an API Call ${inp2}`,Date.now());    
     } catch (error) {
        console.log("Something Went Wrong");
     }
}
let timer2;
function throttling(callbackfunc,delay){
let prev = 0;
return ()=>{
let now = new Date().getTime();
if(now-prev >= delay){
timer2 = setTimeout(()=>{
    prev = now;
    callbackfunc();
},delay)
}
}
}


async function API_deb(){
    let inp1 = document.getElementById('deb').value;
    let debout = document.getElementById('disp');
    try {
        let res = await fetch(`http://www.omdbapi.com/?t=${inp1}&apikey=67a33580`);
        let finalres = await res.json();
        console.log(`making an API Call ${JSON.stringify(finalres)}`,Date.now()); 
        let tit = finalres.Title;
        debout.textContent = tit;
    } catch (error) {
        console.log("Something Went Wrong");
    }
       
}
let timer1;
function debouncing(callbackfunc,delayTime){
if(timer1){
clearTimeout(timer1)
}
timer1 = setTimeout(()=>{
callbackfunc()
},delayTime)
}