let button = document.getElementById("click");

button.onclick = () => {
    let input = document.querySelector(".input");
    let qr = document.querySelector(".qrcode");
    let qrimg = document.querySelector("#img");
    qr.style = "width: 89%;background-color: #eee;height: 220px;margin-bottom: 20px;border-radius:15px;margin-left:15px;"
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ input.value;
}


