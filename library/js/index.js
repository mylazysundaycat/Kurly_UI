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


document.addEventListener("DOMContentLoaded", function() {
    const categoryBtn1 = document.getElementById("ct-btn");
    const categoryBox1 = document.querySelector(".category-box");


    categoryBtn1.addEventListener("mouseover", function() {
        categoryBox1.style.display = "block";
        categoryBox1.style.position = "fixed";
    });

    // 마우스를 category-btn에서 뗐을 때
    categoryBtn1.addEventListener("mouseout", function() {
        categoryBox1.style.display = "none";
        categoryBox1.style.position = "";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const categoryBtn2 = document.getElementById("ct-box");
    const categoryBox2 = document.querySelector(".category-box");


    categoryBtn2.addEventListener("mouseover", function() {
        categoryBox2.style.display = "block";
        categoryBox2.style.position = "fixed";
    });

    // 마우스를 category-btn에서 뗐을 때
    categoryBtn2.addEventListener("mouseout", function() {
        categoryBox2.style.display = "none";
        categoryBox2.style.position = "";
    });
});