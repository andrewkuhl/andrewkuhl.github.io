var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}

const filterContainer = document.querySelector(".gal-buttons");
const galleryItems = document.querySelectorAll(".gal-obj");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("gal-button")){

    // deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("active");

    // activate new 'filter-item'
    event.target.classList.add("active");

    const filterValue = event.target.getAttribute("data-filter");

    galleryItems.forEach((item) =>{

      if(item.classList.contains(filterValue) || filterValue === 'all'){
        item.classList.remove("hide");
         item.classList.add("show");
      }

      else{
        item.classList.remove("show");
        item.classList.add("hide");
      }

     });
  }
});