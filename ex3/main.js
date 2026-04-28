// <!-- ============ EXERCICE 3 ================= --> 
let inputName = document.querySelector("#lastname");
// console.log(inputName);

inputName.addEventListener("keydown", handleKeypressOnInput);

function handleKeypressOnInput() {
alert(inputName.value);
}