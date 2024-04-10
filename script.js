// const adviceContainer =document.getElementById('advice');
// const dice = document.getElementById('dice')
// const url ="https://api.adviceslip.com/advice"


// let getAdvice = () => {
//     adviceContainer.classList.remove("fade")
//     fetch(url)
//     .then(data => data.json())
//     .then(item => {
//         adviceContainer.textContent = `${item.slip}`
//         adviceContainer.classList.add("fade")
//     });
// }
// dice.addEventListener("click", getAdvice)
// getAdvice();



window.addEventListener("DOMContentLoaded",Fetchdata)
const adviceTitle = document.querySelector("#advice-id")
const  advice=document.querySelector("#advice");
const dice = document.querySelector('#dice');



async function Fetchdata (){
    const response = await fetch("https://api.adviceslip.com/advice");
    const json = await response.json();
    console.log(json);
    adviceTitle.innerText= `Advice  #${json.slip.id}`;
    advice.innerText= `"${json.slip.advice}"`;

    // Fetchdata();
}
dice.addEventListener("click", Fetchdata)
