// ================== EXERCICE 5 ==================== 
let imagesRecup = document.querySelectorAll("img");
// console.log(imagesRecup);

imagesRecup.forEach((image) => {
  image.addEventListener("mouseover", handleMouseoverOnImage);
});

// function handleMouseoverOnImage(evenement) {
//    let Mouseover = evenement.target;
//   imagesRecup.src = "./images/image1_2.jpg";

function handleMouseoverOnImage(evenement) {
  let imageMouseover1 = evenement.target;
  imageMouseover1.src = "./images/image1_2.jpg";
}

// function handleMouseoverOnImage(evenement) {
//   let imageMouseover2 = evenement.target;
//   imageMouseover2.src = "./images/image2_2.jpg";
// }


  // imagesRecup.src = "./images/image2_2.jpg";
  // imagesRecup.src = "./images/image3_2.jpg";
  // imagesRecup.src = "./images/image4_2.jpg";
  // imagesRecup.src = "./images/image5_2.jpg";

  // console.log(imagesRecup.src);
 
// }
