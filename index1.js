
document.addEventListener("DOMContentLoaded", function() {
    const myImage = document.querySelector("img");
    

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "photo1.jpg") {
    myImage.setAttribute("src", "photo1.jpg");
  } else {
    myImage.setAttribute("src", "photo2.jpg");
  }
};
});

