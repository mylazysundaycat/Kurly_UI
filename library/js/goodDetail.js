window.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    var number = $(".inp").val();
    const price = document.getElementById("gd_price");
    const data_price = price.getAttribute("data-price");
    const total_price = document.getElementById("won");

    //수량 증가 감소
    $(".down").click(function () {
      if ($(".inp").val() >= 0) {
        number--;
        $(".inp").val(number);
        console.log(parseInt(data_price));
      }

      if (parseInt($(".inp").val()) <= 0) {
        alert("수량");
        $(".inp").val(1);
        return false;
      }
    });

    $(".up").click(function () {
      number++;
      $(".inp").val(number);
    });

    // 상품 상세정보 탭 이동
    $(".goods-view-infomation-tab-anchor").click(function () {
      $(".goods-view-infomation-tab-anchor").removeClass("active");
      $(this).addClass("active");
      onTabClick(e, $(this));
    });

    function onTabClick(e, element) {
      e.preventDefault();
      let scrollTop =
        $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
      $("html, body").animate({ scrollTop: scrollTop }, 600);
    }

    // 모달
    const modalContainer = document.getElementById("modalContainer");
    const background = document.getElementById("background");
    const mainBackground = document.getElementById("container");
    const modalCloseBtn = document.getElementById("modal_btnClose");

    //  open modal
    function openModal() {
      modalContainer.style.display = "flex";
    }

    //  close modal
    function closeModal() {
      modalContainer.style.display = "none";
      background.style.display = "none";
      mainBackground.style.display = "flex";
    }

    modalCloseBtn.addEventListener("click", closeModal);

    document.querySelectorAll(".gr_thumb").forEach((item) => {
      console.log("click");
      item.addEventListener("click", openModal);
      //   // document.querySelector(".gr_thumb.active").classList.remove("active");
      //   // item.classList.add("active");
      //   // document.querySelector(".goods-view-img").src = item.src;
      // });
    });
  });
});
