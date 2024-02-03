window.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    var number = $(".inp").val();

    //수량 증가 감소
    $(".down").click(function () {
      if ($(".inp").val() >= 0) {
        number--;
        $(".inp").val(number);
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
      onTabClick(e, $(this));
    });

    function onTabClick(e, element) {
      e.preventDefault();
      let scrollTop =
        $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
      $("html, body").animate({ scrollTop: scrollTop }, 600);
    }
  });
});
