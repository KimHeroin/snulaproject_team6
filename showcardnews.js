function page_reset(){
  all_page = document.querySelectorAll(".cardnews");
  for (let i = 0; i < all_page.length; i++) {
    all_page[i].style.display = "none";
  }
}

function show_cardnews(idx) {
  var pushed_cat = document.getElementsByClassName("cardnews")[idx];
  page_reset();
  pushed_cat.style.display = "inline-block";

}
