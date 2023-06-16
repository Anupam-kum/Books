const email = document.getElementById('email')
const name = document.getElementById('Uname')
const mobile = document.getElementById('mobile')
const password = document.getElementById('password')
const signup = 

create = () => {
    const errormessage= document.getElementById('errormessage')
    const user = {
        "email": email.value,
        "name": Uname.value,
        "mobile": mobile.value,
        "password" : password.value
    }

    if(email.value !== "" && Uname.value !== "" && mobile.value != "" && password.value != ""){
        localStorage.setItem('user', JSON.stringify(user))
        window.location.href="./login.html";
    }else{
        localStorage.setItem('user', '');
        errormessage.textContent = "Your inputs are blank!!"
    }
}