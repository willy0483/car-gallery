const galleryArray = [
  "cars1.jpg",
  "cars2.jpg",
  "cars3.jpg",
  "cars4.jpg",
  "cars5.jpg",
  "cars6.jpg",
  "cars7.jpg",
  "cars8.jpg",
  "cars9.jpg",
  "cars10.jpg",
];

makegallery(document.getElementById("carGallery"), galleryArray);

function makegallery() {
  const mainImage = document.createElement("div");
  mainImage.id = "mainImage";
  carGallery.appendChild(mainImage);

  const tileImages = document.createElement("div");
  tileImages.id = "tileImages";
  carGallery.appendChild(tileImages);

  const myBigImage = document.createElement("img");
  myBigImage.src = "assets/img/cars1.jpg";
  myBigImage.id = "bigImage";
  mainImage.appendChild(myBigImage);

  galleryArray.forEach(
    // arrow function modtager navn fra array og index(plads i array)
    (imgName, index) => {
      if (index > 0) {
        const mySmallImage = document.createElement("img");
        mySmallImage.src = "assets/img/" + imgName;
        mySmallImage.classList.add("tileImage");
        tileImages.appendChild(mySmallImage);

        mySmallImage.addEventListener(
          "click",

          (myClick) => {
            let megaImageUrl = myBigImage.src;
            let mySmallImageUrl = myClick.target.src;

            myBigImage.src = mySmallImageUrl;
            myClick.target.src = megaImageUrl;
          }
        );
      }
    }
  );
}
