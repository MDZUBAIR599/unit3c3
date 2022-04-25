// Store the wallet amount to your local storage with key "amount"


let wallet=document.getElementById("wallet").innerText=0;

function add(){
    let a = +document.getElementById("amount").value;

    let b=+JSON.parse(localStorage.getItem("amount"))
    sum=a+b

    localStorage.setItem("amount", JSON.stringify(sum))
    wallet=document.getElementById("wallet").innerText=sum
}
