// ================== EXERCICE 5 ====================
let imagesRecup = document.querySelectorAll("img");

imagesRecup.forEach((image) => {
  image.addEventListener("mouseover", handleMouseoverOnImage);
});

function handleMouseoverOnImage(evenement) {
  let iMouseover = evenement.target;
  // console.log(iMouseover.src);

  iMouseover.src = iMouseover.src.replace(".jpg", "_2.jpg");

  iMouseover.removeEventListener("mouseover", handleMouseoverOnImage);
}
