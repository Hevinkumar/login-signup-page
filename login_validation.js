// var login_data = new Map();
// login_data.set("hevin@gmail.com","12345");
// login_data.set("hevinkumar@gmail.com","hevin@1234");
// login_data.set("abcd@gmail.com","abcd@1234");
// import { create_captcha } from "./captcha";

// create_captcha();

const p_word = document.querySelectorAll(".password"),
    showHide = document.querySelectorAll(".showHidePw");

    showHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            p_word.forEach(text => {
                if (text.type === "password") {
                    text.type = "text";
                    showHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash","uil-eye");
                    })
                }
                else{
                    text.type ="password";
                    showHide.forEach(icon =>{
                        icon.classList.replace("uil-eye","uil-eye-slash");
                    })
                }
            });
        });
    });

    

function form_validation() {
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // const captcha = document.getElementById("preview-captcha");
    const input_captcha = document.getElementById("captcha").value;


    if (username.trim() == "" ){
        alert("Username should not be empty");
        return false;
    }
    else if (password.trim() == ""){
        alert("password field should not be empty");
        return false;
    }
    else if (input_captcha.trim()==""){
        alert("please enter the captcha");
        return false;
    }
    else {
            if (email_check(username) == true){
                if (localStorage.getItem(username) == password){
                    if (input_captcha == captcha_String){
                        alert("You successfully loged in")
                        return true;
                    }
                    else{
                        alert("captcha should be equal");
                        create_captcha();
                        return false;
                    }                    
                    
                }
                else{
                    alert("Your password is incorrect");
                    return false;
                }
            
            }
            else {
                alert("user name invalid");
                return false;
            }
        
    }

}

//her after sign up validation


function email_check(email){

    if (typeof (Storage) !== "undefined"){
        for(let i=0;i<localStorage.length;i++ ){
            if (localStorage.key(i) == email){
                return true;
            }
        }
    }
    else{
        alert("local storage not support.");
    }

};
// for(let[key,value] of login_data){
//     console.log(key+" "+value);
// }
