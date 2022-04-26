// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let walletAmount = JSON.parse(localStorage.getItem("amount"))||[];
if(walletAmount!=0){
    document.getElementById("wallet").innerText=`${walletAmount}`
}
else
{
     document.getElementById("wallet").innerText=`Wallet Balance ₹ 0`;
    
}


function bookt(){
    let count=0;
    let name=document.getElementById("user_name").value;
    let seats=document.getElementById("number_of_seats").value;

    if(seats*100<=walletAmount){
        alert("Booking successfull!");
        walletAmount = walletAmount-seats*100;
        document.getElementById("wallet").innerText=`Wallet Balance ₹ ${walletAmount}`
    } else
    {
        alert("Insufficient Balance!");
    }

    window.open("index.html");
        
}