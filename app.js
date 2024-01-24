const userGemil = document.getElementById("Gemiljs");
const userPassword = document.getElementById("Pssswordjs");
const btn = document.getElementById("showUserData");
//HTML elments
let userEmail = `Your Gemail Is : \n helmyhany937@gmail.com`;
let userEmailpassword ="Your Gemail Password is : \n hany012hany ";
btn.addEventListener("click",function(){
    userGemil.innerText=userEmail
    userPassword.innerText=userEmailpassword
})


