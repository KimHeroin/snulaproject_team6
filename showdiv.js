
function page_reset(){
  all_page = document.querySelectorAll(".category");
  for (let i = 0; i < all_page.length; i++) {
    all_page[i].style.display = "none";
  }
}

function show_cat(idx) {
  var pushed_cat = document.getElementsByClassName("category")[idx];
  page_reset();
  pushed_cat.style.display = "block";

}
