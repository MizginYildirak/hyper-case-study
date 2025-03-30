const thumbnails = document.querySelectorAll(".thumb");
const bigImage = document.querySelector(".bigImage");
const featuredImage = document.querySelector(".featured_image");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const newSrc = thumb.getAttribute("data-full");
    bigImage.src = newSrc;
  });
});

