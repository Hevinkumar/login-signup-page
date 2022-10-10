


var captcha_String;
function create_captcha(){

    captcha_String=(Math.random()+1).toString(36).substring(2,8);
    document.getElementById("preview-captcha").innerHTML=captcha_String;

    }

create_captcha();

// export {create_captcha};


