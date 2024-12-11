function pageLoaded(){
        console.log("page loaded");
}
function greet(){
    const time = new Date().getHours()

        }
    function printWord(){
     const typing = document.querySelector("#inputBar")
        console.log(typing.value);

    }
    function checkPassword(){
        const password = document.querySelector("#password")
        const confirmPass = document.querySelector("#confirmPassword")
        const error = document.querySelector("#passwordError")
        
if(password.value !== confirmPass.value){
    error.style.display= "block"
}else{
    error.style.display= "none"
}
    }
