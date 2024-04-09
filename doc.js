document.addEventListener("DOMContentLoaded", function() {
    var accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach(function(item) {
      var heading = item.querySelector(".accordion-heading");
      var content = item.querySelector(".accordion-content");
  
      heading.addEventListener("click", function() {
        item.classList.toggle("active");
        if (content.style.display === "none" || content.style.display === "") {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });
    });
  });
  