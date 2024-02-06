
    window.onload = function () {
        const defaultWidth = 1440;
        const scale = window.screen.width / defaultWidth;
        if (scale !== 1) {
            document.body.style.transform = 'scale(' + scale + ')';
        }
    }
    function checkAll(el){
        const checkBoxes  = document.querySelectorAll('.join_chk');
        checkBoxes.forEach((row)=>{
            row.checked = el.checked;
        })
    }
/*
    $('.check_pw').focusout(function () {          //비밀번호 확인 칸에서 벗어났을 때 실행.
        var pwd1 = $(".join_pw").val();            //변수 생성후 값 대입
        var pwd2 = $(".repeat_pw").val();           //변수 생성후 값 대입

        if ( pwd1 != '' && pwd2 == '' ) {          //둘다 빈칸일 경우 아무것도 하지 않음
            null;
        } else if (pwd1 != "" || pwd2 != "") {     // 빈칸이 아닐 경우
            if (pwd1 == pwd2) {                    // 비교해서 같으면
                $(".pw2_bell_s").css('color', '#0f851a');
                $(".pw2_bell_s").text("비밀번호가 동일합니다.");


            } else {        // 비교해서 같지 않으면
                $(".pw2_bell_s").css('color', '#b3130b');
                $(".pw2_bell_s").text("비밀번호가 일치하지 않습니다.");


            }
        }

    });

*/
