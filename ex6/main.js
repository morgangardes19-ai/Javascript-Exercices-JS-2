// ========== EXERCICE 6 =============
let imagesRecup = document.querySelectorAll("img");

imagesRecup.forEach((image) => {
  image.addEventListener("mouseover", handleMouseoverOnImage);
});

function handleMouseoverOnImage(evenement) {
  let iMouseover = evenement.target;
//   console.log(iMouseover.src);
  iMouseover.src = iMouseover.src.replace(".jpg", "_2.jpg");
}

imagesRecup.forEach((image) => {
  image.addEventListener("mouseout", handleMouseoverOnImage);
});

function handleMouseoverOnImage(evenement) {
     let iMouseover2 = evenement.target;
      iMouseover2.src = iMouseover2.src.replace("_2.jpg", ".jpg");
}
