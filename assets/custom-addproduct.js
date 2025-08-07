document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".fixed_cart").addEventListener("click", function () {
      document.querySelector(".fixed_cart_detail").classList.add("fixed_cart_detail_show");
    });
  
    document.querySelector(".close_icon").addEventListener("click", function () {
      document.querySelector(".fixed_cart_detail").classList.remove("fixed_cart_detail_show");
    });
  });