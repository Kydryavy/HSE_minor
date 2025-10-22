function verify() {
    console.log("Проверяем число...");
    let x = parseFloat(elementNum.value);
    console.log("Введено:", x);

    if (x > 0) {
        result = "Число положительное";
    } else if (x < 0) {
        result = "Число отрицательное";
    } else {
        result = "Число равно нулю";
    }

    document.getElementById("result").value = result;
}

let result;

const elementNum = document.getElementById("num");
const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
