const btnRegister = document.querySelector(".btnRegister");
const btnLogin = document.querySelector(".btnLogin");

btnLogin.addEventListener("click", () => {
    let inputName = document.querySelector('.name').value;
    let inputPass = document.querySelector('.password').value;

    let dataProduct = JSON.parse(localStorage.getItem("product")) || [];

    if(inputName === '' && inputPass === '') {
        alert('vui long nhap day du thong tin')
    }else if (dataProduct.name === inputName && dataProduct.password === inputPass) {
        alert('dang nhap thanh cong');
        reset();
    }else {
        alert('thong tin chua chinh xac');
        reset();
    };
});

btnRegister.addEventListener("click", () => {
    window.location.href = "register.html";
});

function reset() {
    document.querySelector('.name').value = '';
    document.querySelector('.password').value = '';
};