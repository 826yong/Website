let captcha = "";

function showPW() {
    let visible = document.getElementById("show_password");
    let password = document.getElementById("Password");
    
    if (visible.innerHTML == "(￣o￣)") {
        password.type = "text";
        visible.innerHTML = "(⊙_⊙)";
    } else {
        password.type = "password";
        visible.innerHTML = "(￣o￣)";
    }
}

function genNewCaptcha() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    if (!canvas || !ctx) {
        console.error("Canvas not found!");
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "lightblue";
    ctx.fillRect(20, 20, canvas.width, canvas.height);

    captcha = Math.random().toString(36).substring(2, 6).toUpperCase();

    ctx.font = "24px Arial";
    ctx.fillStyle = "black";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    const x = canvas.width / 2;
    const y = canvas.height / 2 + 5;
    ctx.fillText(captcha, x, y);

    console.log("新驗證碼:", captcha);
    
}

function logIn() {
    let account = document.getElementById("Account").value;
    let password = document.getElementById("Password").value;
    let verify = document.getElementById("Captcha").value.toUpperCase();

    if ((account != "admin") || (password !="1234")) {
        window.alert("帳號、密碼錯誤");
        return;
    }

    if (verify != captcha) {
        window.alert("驗證碼錯誤");
        genNewCaptcha();
        return;
    }

    localStorage.setItem("isLoggedIn", "true");

    window.location.href = "https://826yong.github.io/Probability/CrazySpin/JS_version/index.html";

}

window.onload = function() {
    genNewCaptcha();
};