var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
function validate(){
    let reg =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let patt =/^([A-Za-z0-9]+){8,}$/;
    if(lname.value==""||fname.value==""||email.value==""||pwd.value==""||cpwd.value==""||phn.value=="")
    {
        alert("No field should be empty!");
        return false;
    }
    else if(reg.test(email.value)==false){
        alert("Enter a valid email!");
        return false;
    }
    else if(patt.test(pwd.value)==false){
        alert("Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
        return false;
    }
    else 
    {
    return true;
}
}
