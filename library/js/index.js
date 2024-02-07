document.getElementById("bb-x-icon").addEventListener("click", function() {
    var banner = document.querySelector(".benefit-banner");
    banner.parentNode.removeChild(banner);
});


document.getElementById("cancelButton").addEventListener("click", function() {
    var popup = document.querySelector(".product-popup-p");
    popup.style.display = "none";
});

document.getElementById("addToCartButton1").addEventListener("click", function() {
    var popup = document.getElementById("product-popup-p");
    popup.style.display = "block";
});

document.getElementById("addToCartButton2").addEventListener("click", function() {
    var popup = document.getElementById("product-popup-p");
    popup.style.display = "block";
});

document.getElementById("addToCartButton3").addEventListener("click", function() {
    var popup = document.getElementById("product-popup-p");
    popup.style.display = "block";
});

document.getElementById("addToCartButton4").addEventListener("click", function() {
    var popup = document.getElementById("product-popup-p");
    popup.style.display = "block";
});