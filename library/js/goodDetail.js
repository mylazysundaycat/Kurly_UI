window.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    var number = $(".inp").val();
    const price = document.getElementById("gd_price");
    const data_price = price.getAttribute("data-price");
    const total_price = document.getElementById("won");
    total_price.innerHTML = (
      parseInt(data_price) * parseInt($(".inp").val())
    ).toLocaleString("ko-KR");

    //수량 감소 버튼 클릭
    $(".down").click(function () {
      if (parseInt($(".inp").val()) <= 1) {
        $(".inp").val(1);
        alert("수량");
        return;
      }
      number--;
      $(".inp").val(number);

      changeTotalPrice();
    });

    //수량 증가 버튼 클릭
    $(".up").click(function () {
      number++;
      $(".inp").val(number);

      changeTotalPrice();
    });

    //수량 입력시 총 가격 변경
    function changeTotalPrice() {
      total_price.innerHTML = (
        parseInt(data_price) * parseInt($(".inp").val())
      ).toLocaleString("ko-KR");
    }

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

    // 모달 열기
    function openModal() {
      modalContainer.style.display = "flex";
    }

    //  모달 닫기 버튼
    function closeModal() {
      modalContainer.style.display = "none";
      background.style.display = "none";
      mainBackground.style.display = "flex";
    }

    modalCloseBtn.addEventListener("click", closeModal);

    document.querySelectorAll(".gr_thumb").forEach((item) => {
      console.log("click");
      item.addEventListener("click", openModal);
    });

    // 모달 데이터 바인딩
    const mr = document.getElementById("modal_review_img");
    const mr_product_name = document.getElementById("gr_a_product_name");
    const mr_review = document.getElementById("gr_a_content_detail");

    let n = 0;
    document
      .getElementById("modal_next_btn")
      .addEventListener("click", function () {
        if (n >= modalMockData.length) {
          n = 0;
        }
        changeModalContent();
        n = n + 1;
      });

    document
      .getElementById("modal_prev_btn")
      .addEventListener("click", function () {
        if (n <= 0) {
          n = modalMockData.length;
        }
        changeModalContent();
        n = n - 1;
      });

    function changeModalContent() {
      mr.setAttribute("src", modalMockData[n].src);
      mr_product_name.innerHTML = modalMockData[n].good_title;
      mr_review.innerHTML = modalMockData[n].good_review;
    }
  });
  const modalMockData = [
    {
      id: 1,
      src: "/library/img/gd_product_3.jpg",
      good_title: "테스트 상품1",
      good_review: "테스트 리뷰1",
    },
    {
      id: 2,
      src: "/library/img/gd_product_2.jpg",
      good_title: "테스트 상품2",
      good_review: "테스트 리뷰2",
    },
    {
      id: 3,
      src: "/library/img/gd_product_3.jpg",
      good_title: "테스트 상품3",
      good_review: "테스트 리뷰3",
    },
    {
      id: 4,
      src: "/library/img/gd_product_2.jpg",
      good_title: "테스트 상품4",
      good_review: "테스트 리뷰4",
    },
    {
      id: 5,
      src: "/library/img/gd_product_3.jpg",
      good_title: "테스트 상품5",
      good_review: "테스트 리뷰5",
    },
    {
      id: 6,
      src: "/library/img/gd_product_2.jpg",
      good_title: "테스트 상품6",
      good_review: "테스트 리뷰6",
    },
    {
      id: 7,
      src: "/library/img/gd_product_2.jpg",
      good_title: "테스트 상품7",
      good_review: "테스트 리뷰7",
    },
    {
      id: 8,
      src: "/library/img/gd_product_3.jpg",
      good_title: "테스트 상품8",
      good_review: "테스트 리뷰8",
    },
  ];
});
