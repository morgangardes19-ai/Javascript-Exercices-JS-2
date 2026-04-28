// ============== EXERCICE 1 ============

// let imageRecup = document.querySelector(".image");


// imageRecup.addEventListener("mouseover", handleMouseoverOnImage);


// function handleMouseoverOnImage () {
//     // console.log(imageRecup.src);
//     imageRecup.src = "./image1_2.jpg"

// }




// // <!-- ============ EXERCICE 2 ============== -->

// let inputName = document.querySelector("#lastname");
// console.log(inputName);

// inputName.addEventListener("focusout", handleFocusOutOnInput);

// function handleFocusOutOnInput(){
//     // console.log("hello");
//     alert("Merci de votre participation");
// }









// <!-- ============ EXERCICE 3 ================= -->       ========> issue

// let inputName = document.querySelector("#lastname");
// console.log(inputName);

// inputName.addEventListener("keydown", handleKeypressOnInput);

// function handleKeypressOnInput() {
//     alert(inputName);
// }









// ================== EXERCICE 4 =================     ==========> même issue

// let clickButton = document.querySelector("button");
// console.log("clickButton");

// clickButton.addEventListener("reset", clickOnButton)

// function clickOnButton() {
    
// }











// ================== EXERCICE 5 ====================  ============> issue

let imagesRecup = document.querySelectorAll("images");
// console.log(imagesRecup);


imagesRecup.addEventListener("mouseover", handleMouseoverOnImage);


function handleMouseoverOnImage (evenement) {
    // console.log(imagesRecup.src);

    let Mouseover = evenement.target;



    // imagesRecup.src = "./image1_2.jpg"

}