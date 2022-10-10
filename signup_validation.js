let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

const p_word = document.querySelectorAll(".sign_password"),
showHide = document.querySelectorAll(".showHidePw"),
r_word = document.querySelectorAll(".SR_password"),
r_showHide = document.querySelectorAll(".r-showHidePw");

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
r_showHide.forEach(e_icon => {
    e_icon.addEventListener("click", () =>{
        r_word.forEach(pass =>{
            if (pass.type ==="password"){
                pass.type="text";
                r_showHide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash","uil-eye");
                })
            }
            else{
                pass.type ="password";
                r_showHide.forEach(icon =>{
                    icon.classList.replace("uil-eye","uil-eye-slash");
                })
            }
        })
    })
})

function validation(){
    // console.log("validate");
    let username = document.getElementById("sign_user").value;
    let email = document.getElementById("sign_email").value;
    let s_password = document.getElementById("sign_password").value;
    let r_password = document.getElementById("SRpassword").value;
    // let input_captcha = document.getElementById("captcha").value; 

    if (username.trim() ==""){
        alert("user name should not be empty.");
        return false;
    }
    else if (email.trim() == ""){
        alert("email field should not be empty.");
        return false;
    }
    else if (s_password.trim() == "" || s_password.length < 8) {
        alert("password should not be empty and minimum 8 mixing charecters.");
        return false;
    }
    else if (r_password.trim() == "" || r_password.length < 8){
        alert("Re-password should not be empty and minimum 8 mixing charecters.");
        return false;
    }
    else {
        console.log("else part")
        if (email_check(email) != true){
            if (s_password == r_password){
                if (pattern.test(s_password)){
                    localStorage.setItem(email.toString(),s_password.toString());
                    // console.log(login_data.size);
                    alert("Your successfully registered, please login your account");
                    return true;
                }
                else{
                    alert("Password should be 8 charecters with minimum 2 uppercase and lowercase letters, digits,and special charecters.");
                    return false;
                }

            }
            else{
                alert("both password should be equal.");
                return false;
            }
        }
        else{
            alert("Your email already exists. please log in your account");
            return false;
        }

        

    }

};

function email_check(email){
    console.log("email check")

    if (typeof (Storage) !== "undefined"){
        for(let i=0;i<localStorage.length;i++ ){
            if (localStorage.key(i) == email){
                return true;
            }
        }
    }
    else{
        alert("local storage not support.");
        return false;
    }

};
