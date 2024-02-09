
const center = document.querySelector('.Order_page-center');
const wing = document.querySelector('.Order_page-right');

const contentTop = center.getBoundingClientRect().top + window.scrollY -40;
const contentBottom =center.getBoundingClientRect().bottom;
const contentHeight = center.getBoundingClientRect().top + window.scrollY;
const wingBottom = wing.getBoundingClientRect().bottom;


//결제금액 스크롤
window.addEventListener('scroll', function(){
    if(window.scrollY >= contentTop && window.scrollY <=contentTop+1700){
        wing.classList.remove('fixed2');
        wing.classList.add('fixed');
    }else if(window.scrollY >= contentTop +1700 && window.scrollY <= contentTop +1900){
        wing.classList.remove('fixed');
        wing.classList.add('fixed2');
    }else{
        wing.classList.remove('fixed');
        wing.classList.remove('fixed2');
    }
});

//탭 버튼 클릭 시 배경 변경
const money = document.querySelectorAll(".Order_page-use_1"); //보유 적립금
function change_color(e){
    const btn = document.querySelectorAll(".Order_page-three_choice_btn");
    btn.forEach(function (btn,i){
        if(e.currentTarget == btn){
            btn.classList.add("active");
        }else{
            btn.classList.remove("active");
        }
    });
}


//적립금 사용 - 모두 사용 버튼 누르면 전체 금액 자동 입력 + max 초과하면 max 금액 자동입력 + 쉼표 자동 입력

function use_all(e){ // 모두사용 버튼
    const max = 2000;
    const cost = 219000;
    const point = parseInt(document.getElementById("point").value); //input 값 설정
    const btn = document.querySelectorAll(".Order_page-use_all_text");
    const pay = document.getElementById("Order_page-pay_cost");
    btn.forEach(function (btn,i) {
        if(e.currentTarget == btn){
            document.getElementById("point").value = comma(max);
            document.getElementById("point_sum").value = comma(max);
            document.getElementById("point_sum_all").value = comma(max);
            document.getElementById("final_cost_id").value = comma(cost - max);
            pay.innerText = comma(cost - max).toString()+"원 결제하기";
        }else{
        }
    });
}

function check_point(){ // 쉼표 추가, max 넘기면 max 자동 입력
    const max = 2000;
    const cost = 219000;
    const point = parseInt(document.getElementById("point").value); //input 값 설정
    const pay = document.getElementById("Order_page-pay_cost");
    if(point > max){
        document.getElementById("point").value = comma(max);
        document.getElementById("point_sum").value = comma(max);
        document.getElementById("point_sum_all").value = comma(max);
        document.getElementById("final_cost_id").value = comma(cost-max);
        pay.innerText = comma(cost - max).toString()+"원 결제하기";
    }else{
        document.getElementById("point").value = comma(point);
        document.getElementById("point_sum").value = comma(point);
        document.getElementById("point_sum_all").value = comma(point);
        document.getElementById("final_cost_id").value = comma(cost-point);
        pay.innerText = comma(cost - point).toString()+"원 결제하기";
    }
}

//, 찍는 함수 - 예제코드 참고
function comma(num) {
    var len, point, str;

    num = num + "";
    point = num.length % 3;
    len = num.length;

    str = num.substring(0, point);
    while (point < len) {
        if (str != "") str += ",";
        str += num.substring(point, point + 3);
        point += 3;
    }

    return str;
}

function navigo (){
    const nav = document.querySelector(".category-row");
    const height = nav.clientHeight;
    document.addEventListener('scroll', onScroll, { passive: true });
    function onScroll () {
        const scrollposition = pageYOffset;
        if (height<=scrollposition){
            nav.classList.add('fix')
        }
        else {
            nav.classList.remove('fix');
        }
    }
}
navigo()