// const adviceUrl = "https://api.adviceslip.com/advice";
const adviceId = document.querySelector(".title span");
const adviceContent = document.querySelector("q");
const button = document.querySelector("button");

button.addEventListener("click",buttonFunction);
fetchApi();
//fetch from the api
function fetchApi(){
    const adviceUrl = `https://api.adviceslip.com/advice/${Math.floor(Math.random()*150)}`;
    fetch(adviceUrl).then(res=> {
            return res.json();
    }).then(data=>{
        // console.log(data.slip)
        adviceId.innerHTML = data.slip.id;
        adviceContent.innerHTML = data.slip.advice;
    }).catch(()=>{
        adviceId.innerHTML = "#";
        adviceContent.innerHTML = "Server Error, please try again";
    })    
}
function buttonFunction(){
    fetchApi();
}
