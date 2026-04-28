// ================== EXERCICE 5 ====================  ============> issue
let imagesRecup = document.querySelectorAll("images");

console.log(imagesRecup);

imagesRecup.addEventListener("mouseover", handleMouseoverOnImage);

function handleMouseoverOnImage(evenement) {
  // console.log(imagesRecup.src);

  let Mouseover = evenement.target;

  imagesRecup.src = "./image1_2.jpg"
  imagesRecup.src = "./image1_2.jpg"
  imagesRecup.src = "./image1_2.jpg"
  imagesRecup.src = "./image1_2.jpg"
  imagesRecup.src = "./image1_2.jpg"
}