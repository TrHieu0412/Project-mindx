//register
const phoneNumber=document.getElementById("phone-number-register").value;
const userName=document.getElementById("username-register").value;
const passWord=document.getElementById("password-register").value;
const rePassWord=document.getElementById("repassword-register").value;
const user = {
   phoneNumber: phoneNumber,
   userName: userName,
   passWord: passWord,
   rePassWord: rePassWord,
}
const json= JSON.stringify(user);
console.log(json)
localStorage.setItem( username, json);
function regis(){
    if(phoneNumber.value===""){
        alert("vui lòng nhập đầy đủ thông tin")
    }else{
        alert("đăng kí thành công")
        window.location.href="login.html"
    }
}
//login
function logIndex(){
    const userLogin=document.querySelector("#user-login").value;
    const passLogin=document.querySelector("#pass-login").value;
    const rePassLogin=document.querySelector("#repass-login").value;
    const formLar=document.querySelectorAll(".header-loginandregister").value;
    if (userLogin.value==="") {
        alert("Vui lòng nhập đầy đủ thông tin")
    } else{
        alert("Đăng nhập thành công");
        window.location.href="index.html";
        formLar.sendRequire();
    }
}
logIn()
// about
function aboutUsMore(){
    window.location.href="about.html"
}
// product
function loadMore() {
    window.location.href="product.html"
}
//contact
function sendRequire() {
    const send = document.querySelector(".send");
    const inpName = document.querySelector("#inp-i4-1");
    const inpEmail = document.querySelector("#inp-i4-2");
    if (inpName.value === "" || inpEmail.value === "") {
      alert("mời nhập đầy đủ thông tin");
    } else {
      alert("Thông tin đã được gửi");
      send.remove;
    }
  }


