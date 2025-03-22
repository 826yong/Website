let captcha = "";

function logIn() {
    let account = document.getElementById("Account").value;
    let password = document.getElementById("Password").value;
    let verify = document.getElementById("Captcha").value.toUpperCase();

    if (!(account == "admin") || !(password =="1234")) {
        window.alert("帳號、密碼錯誤");
    }

    if (verify != captcha) {
        window.alert("驗證碼錯誤");
        genNewCaptcha();
    }

    window.location.href = "https://826yong.github.io/Probability/CrazySpin/JS_version/index.html";

}

function genNewCaptcha() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

}