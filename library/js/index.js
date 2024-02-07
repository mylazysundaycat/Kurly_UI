document.getElementById("bb-x-icon").addEventListener("click", function() {
    var banner = document.querySelector(".benefit-banner");
    banner.parentNode.removeChild(banner);
});



document.getElementById("addToCartButton1").addEventListener("click", function() {
    var popup = document.getElementById("product-popup-p1");
    popup.style.display = "block";
});

document.getElementById("addToCartButton2").addEventListener("click", function() {
    var popup = document.getElementById("product-popup-p2");
    popup.style.display = "block";
});

document.getElementById("addToCartButton3").addEventListener("click", function() {
    var popup = document.getElementById("product-popup-p3");
    popup.style.display = "block";
});

document.getElementById("addToCartButton4").addEventListener("click", function() {
    var popup = document.getElementById("product-popup-p4");
    popup.style.display = "block";
});



document.getElementById("cancelButton1").addEventListener("click", function() {
    var popup = document.querySelector(".product-popup-p1");
    popup.style.display = "none";
});

document.getElementById("cancelButton2").addEventListener("click", function() {
    var popup = document.querySelector(".product-popup-p2");
    popup.style.display = "none";
});

document.getElementById("cancelButton3").addEventListener("click", function() {
    var popup = document.querySelector(".product-popup-p3");
    popup.style.display = "none";
});

document.getElementById("cancelButton4").addEventListener("click", function() {
    var popup = document.querySelector(".product-popup-p4");
    popup.style.display = "none";
});