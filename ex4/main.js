// ================== EXERCICE 4 =================     ==========> même issue
let clickButton = document.querySelector("button");
// console.log(clickButton);

clickButton.addEventListener("click", clickOnButton);

function clickOnButton() {
    // console.log(clickButton);
    let inputLastName = document.querySelector("#lastname");
    let inputFirstName = document.querySelector("#firstname");
    let inputCity = document.querySelector("#city");
    // console.log(inputLastName, inputFirstName, inputCity);

    inputLastName.value = ""
    inputFirstName.value = ""
    inputCity.value = ""
}