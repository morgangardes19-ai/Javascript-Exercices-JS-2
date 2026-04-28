// // <!-- ============ EXERCICE 2 ============== -->
let inputName = document.querySelector("#lastname");
// console.log(inputName);

inputName.addEventListener("focusout", handleFocusOutOnInput);

function handleFocusOutOnInput(){
    // console.log("hello");
    alert("Merci de votre participation");
}