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
        categoryBox1.style.position = "absolute";
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
        categoryBox2.style.position = "absolute";
    });

    // 마우스를 category-btn에서 뗐을 때
    categoryBtn2.addEventListener("mouseout", function() {
        categoryBox2.style.display = "none";
        categoryBox2.style.position = "";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const addToCartBtn = document.getElementById("addToCartBtn1");
    const notification = document.getElementById("noti-container1");

    // 장바구니 담기 버튼 클릭 시 알림 표시
    addToCartBtn.addEventListener("click", function() {
        // 알림 내용 설정
        notification.style.display = "block";
        // // 2초 후 알림 숨기기
        // setTimeout(function() {
        //     notification.style.display = "none";
        // }, 2000);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const notiok = document.getElementById("noti-ok1");
    const noticontainer1 = document.getElementById("noti-container1")

    notiok.addEventListener("click", function() {
        noticontainer1.style.display = "none";

    });
});



document.addEventListener("DOMContentLoaded", function() {
    const addToCartBtn = document.getElementById("addToCartBtn2");
    const notification = document.getElementById("noti-container2");

    // 장바구니 담기 버튼 클릭 시 알림 표시
    addToCartBtn.addEventListener("click", function() {
        // 알림 내용 설정
        notification.style.display = "block";
        // // 2초 후 알림 숨기기
        // setTimeout(function() {
        //     notification.style.display = "none";
        // }, 2000);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const notiok = document.getElementById("noti-ok2");
    const noticontainer1 = document.getElementById("noti-container2")

    notiok.addEventListener("click", function() {
        noticontainer1.style.display = "none";

    });
});



document.addEventListener("DOMContentLoaded", function() {
    const addToCartBtn = document.getElementById("addToCartBtn3");
    const notification = document.getElementById("noti-container3");

    // 장바구니 담기 버튼 클릭 시 알림 표시
    addToCartBtn.addEventListener("click", function() {
        // 알림 내용 설정
        notification.style.display = "block";
        // // 2초 후 알림 숨기기
        // setTimeout(function() {
        //     notification.style.display = "none";
        // }, 2000);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const notiok = document.getElementById("noti-ok3");
    const noticontainer1 = document.getElementById("noti-container3")

    notiok.addEventListener("click", function() {
        noticontainer1.style.display = "none";

    });
});


document.addEventListener("DOMContentLoaded", function() {
    const addToCartBtn = document.getElementById("addToCartBtn4");
    const notification = document.getElementById("noti-container4");

    // 장바구니 담기 버튼 클릭 시 알림 표시
    addToCartBtn.addEventListener("click", function() {
        // 알림 내용 설정
        notification.style.display = "block";
        // // 2초 후 알림 숨기기
        // setTimeout(function() {
        //     notification.style.display = "none";
        // }, 2000);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const notiok = document.getElementById("noti-ok4");
    const noticontainer1 = document.getElementById("noti-container4")

    notiok.addEventListener("click", function() {
        noticontainer1.style.display = "none";

    });
});