const thumbnails = document.querySelectorAll(".thumb");
const bigImage = document.querySelector(".bigImage");
const featuredImage = document.querySelector(".featured_image");
const arrowButton = document.querySelector(".arrow_button");
const numberList = document.querySelector(".number_list");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const newSrc = thumb.getAttribute("data-full");
    bigImage.src = newSrc;
  });
});

document.querySelectorAll(".number_item").forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("amount").value = item.textContent;
    numberList.style.display = "none";

    document.querySelectorAll(".number_item svg").forEach((svg) => {
      svg.remove();
    });

    if (!item.querySelector(".tick")) {
      let tick = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      tick.setAttribute("viewBox", "0 0 1024 1024");
      tick.setAttribute("width", "16");
      tick.setAttribute("height", "16");
      tick.setAttribute("aria-hidden", "true");
      tick.classList.add("tick"); 

      let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute(
        "d",
        "M833.3 246.6c25.1-24.9 65.6-24.7 90.5 0.4 22.6 22.8 24.5 58.4 5.9 83.3l-6.3 7.2-496.3 492.2c-22.8 22.6-58.2 24.5-83.2 6l-7.2-6.2-245.5-246.1c-25-25-24.9-65.5 0.1-90.5 22.8-22.7 58.3-24.7 83.4-6.1l7.1 6.2 200.4 200.8 451.1-447.2z"
      );

      tick.appendChild(path);
      item.appendChild(tick); 
    }  
  });
});

arrowButton.addEventListener("click", () => {
  numberList.style.display =
    numberList.style.display === "block" ? "none" : "block";
});
