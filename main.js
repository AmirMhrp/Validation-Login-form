const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const sigininMsg = document.querySelector(".signin-status");
const siginBtn = document.querySelector(".signin-button");

siginBtn.addEventListener("click", signIn);

function signIn(event) {
    event.preventDefault();
    usernameMsg.innerText = "";
    passwordMsg.innerText = "";
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    let ifSendData = true;

    if (usernameValue.length === 0 || usernameValue.indexOf("@") === -1 || usernameValue.indexOf(".") === -1) {
        usernameMsg.innerText = "Please Enter a Valid Email";
        ifSendData = false;
    }

    if (passwordValue.length === 0) {
        passwordMsg.innerText = "Please Enter Your Password";
        ifSendData = false;
    } else if (passwordValue.length <= 4) {
        passwordMsg.innerText = "Your Password is too short";
        ifSendData = false;
    }

    if (ifSendData) {
        const body = JSON.stringify({
            username: usernameValue,
            password: passwordValue,
        })
        const headers = {
            "Content-Type": "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: body,
            headers: headers
        })
            .then(response => {
                if(response.ok) {
                    sigininMsg.innerText = "You Signed In Successfully"
                }
            })
    }
}

//show and hide password

const passField = document.querySelector("#pass");
const showbtn = document.querySelector(".show");

showbtn.addEventListener("click", btn);

function btn () {
    if (passField.type === "password") {
        passField.type = "text";
        showbtn.textContent = "Hide";
        showbtn.style.color = "#084c61";
        showbtn.style.cursor = "pointer";
    } else {
        passField.type = "password";
        showbtn.textContent = "Show";
        showbtn.style.color = "#084c61";
        showbtn.style.cursor = "pointer";
    }
}