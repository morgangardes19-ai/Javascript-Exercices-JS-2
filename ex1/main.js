// ============== EXERCICE 1 ============
let imageRecup = document.querySelector(".image");

imageRecup.addEventListener("mouseover", handleMouseoverOnImage);

function handleMouseoverOnImage () {
    // console.log(imageRecup.src);
    imageRecup.src = "./image1_2.jpg"

}