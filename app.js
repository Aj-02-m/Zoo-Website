const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#exampleInputEmail1");
const number = document.querySelector("#number");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let numberValue = number.value.trim();


    if (!nameValue || !emailValue || !numberValue) {
        alert("Please enter the details");
        form.focus();
        return;
    } else if (!isNaN(nameValue)) {
        alert("please enter name in valid format");
        name.focus();
        return;
    } else if (numberValue.length < 10 || numberValue.length > 10) {
        alert("please enter valid number");
        number.focus();
        return;
    }
    alert("Thanks for providing details, Our team will contact you shortly");
    form.reset();

})