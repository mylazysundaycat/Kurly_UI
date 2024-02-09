/*화면 너비 조정*/
  /*  window.onload = function () {
        const defaultWidth = 1440;
        const scale = window.screen.width / defaultWidth;
        if (scale !== 1) {
            document.body.style.transform = 'scale(' + scale + ')';
        }
    }
*/

    /*체크박스 모두선택*/
    function checkAll(el){
        const checkBoxes  = document.querySelectorAll('.join_chk');
        checkBoxes.forEach((row)=>{
            row.checked = el.checked;
        })
    }

/*비밀번호-비밀번호 확인 알림*/
document.addEventListener('DOMContentLoaded', function() {
    let alertDisplayed = false;
    document.addEventListener('focusout', function () {
        let username = document.getElementById('join_pw').value;
        let password = document.getElementById('repeat_pw').value;

        if (username.trim() === '' || password.trim() === '') {
            document.getElementById('join_pw').style.border = '1px solid red'; // 테두리 색상 변경
            document.getElementById('repeat_pw').style.border = '1px solid red';
            document.getElementById('warning_pw').style.display = 'block';
            document.getElementById('warning_pwSame').style.display = 'none';
            alertDisplayed = false;

        } else if  (username == password) {
            document.getElementById('join_pw').style.border = '1.5px solid green'; // 테두리 색상 변경
            document.getElementById('repeat_pw').style.border = '1.5px solid green';
            document.getElementById('warning_pwSame').style.display = 'block';
            document.getElementById('warning_pw').style.display = 'none';
            alertDisplayed = false;

        } else {
            document.getElementById('join_pw').style.border = '1.5px solid red'; // 테두리 색상 변경
            document.getElementById('repeat_pw').style.border = '1.5px solid red';
            document.getElementById('warning_pw').style.display = 'block';
            document.getElementById('warning_pwSame').style.display = 'none';

            if (!alertDisplayed) {
                alert("비밀번호와 비밀번호 확인이 일치하지 않습니다. 비밀번호를 확인해주세요.")
                alertDisplayed = true;
                document.getElementById('repeat_pw').focus();

            }
        }

    });
})

/*입력창 양식 알림 - 아이디*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('input[name="join_id"]').addEventListener('input', function() {
        let inputValue = this.value;
        let koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
        if (koreanRegex.test(inputValue)) {
            this.value = inputValue.replace(koreanRegex, '');
            alert("아이디는 영어, 숫자, 특수문자만 입력 가능합니다.");

        }
    });
});
/*입력창 양식 알림 - 비밀번호*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('input[name="join_pw"]').addEventListener('input', function() {
        let inputValue = this.value;
        let koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
        if (koreanRegex.test(inputValue)) {
            this.value = inputValue.replace(koreanRegex, '');
            alert("비밀번호는 영어, 숫자, 특수문자만 입력 가능합니다.");

        }
    });
});
/*입력창 양식 알림 - 비밀번호 확인*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('input[name="repeat_pw"]').addEventListener('input', function() {
        let inputValue = this.value;
        let koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
        if (koreanRegex.test(inputValue)) {
            this.value = inputValue.replace(koreanRegex, '');
            if (!alertDisplayed) { // 알림이 표시되지 않은 경우에만 실행
                alert("비밀번호는 영어, 숫자, 특수문자만 입력 가능합니다.");
                alertDisplayed = true; // 알림이 표시되었음을 표시
            }
        }
    });
});
/*입력창 양식 - 이름*/
document.addEventListener('DOMContentLoaded', function() {
    let alertDisplayed = false; // 알림 표시 여부를 나타내는 변수 초기화
    document.querySelector('input[name="join_name"]').addEventListener('input', function() {
        let inputValue = this.value;
        // 특수문자와 숫자를 필터링하는 정규표현식
        let nonKoreanAlphaRegex = /[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]/g;
        if (nonKoreanAlphaRegex.test(inputValue)) {
            // 정규표현식과 일치하는 문자 제거
            this.value = inputValue.replace(nonKoreanAlphaRegex, '');
            if (!alertDisplayed) { // 알림이 표시되지 않은 경우에만 실행
                alert("이름은 한글과 영문만 입력할 수 있습니다.");
                alertDisplayed = true; // 알림이 표시되었음을 표시
            }
        }
    });
});

/*입력창 양식 알림 - 이메일 확인*/
document.addEventListener('DOMContentLoaded', function() {
    let emailInput = document.getElementById('join_email');

    emailInput.addEventListener('focusout', function() {
        let inputValue = emailInput.value;
        if (inputValue.indexOf('@') === -1) {

            alert('올바른 이메일 주소를 입력하세요.');

        }
    });
});

/*입력창 양식 알림 - 핸드폰번호 확인*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('input[name="join_phone"]').addEventListener('input', function() {
        let inputValue = this.value;
        let nonNumericRegex = /[^0-9]/g;
        if (nonNumericRegex.test(inputValue)) {
            this.value = inputValue.replace(nonNumericRegex, '');
            alert("숫자만 입력할 수 있습니다.");
        }
    });
});
/*필수입력사항 체크*/
document.addEventListener('DOMContentLoaded', function() {
    // 초기화
    let alertDisplayed = false;

    document.querySelector('.join_submit').addEventListener('click', function(event) {
        event.preventDefault(); // 기본 이벤트인 폼 제출 방지
        // 주소 입력 여부 확인
        let addressNumbers = document.getElementById('address-numbers').value;
        let addressRoads = document.getElementById('address-roads').value;
        if (!addressNumbers || !addressRoads) {
            alert("주소를 입력해주세요.");
            document.getElementById('address_search').focus();

            return;

        }




                //비밀번호 일치여부
                let password = document.getElementById('join_pw').value;
                let repeatPassword = document.getElementById('repeat_pw').value;

                if (password !== repeatPassword) {
                    alert("비밀번호가 일치하지 않습니다. 비밀번호를 확인해주세요.");
                    return; // 비밀번호가 일치하지 않을 때 이후 코드 실행을 저지함
                }




                // 필수 입력사항 체크
        let requiredInputs = document.querySelectorAll('input[class=border-color]');
        alertDisplayed = false;
        requiredInputs.forEach(function(input) {
            if (!input.value.trim()) {
                if (!alertDisplayed) {
                    alert("모든 필수 입력란에 내용을 입력해주세요.");
                    alertDisplayed = true;
                }
            }
        });

        if (alertDisplayed) {
            return;
        }

        // 약관 동의 체크
        let agreementCheckboxes = document.querySelectorAll('input[id="agreement2"]');
        let agreementChecked = false;
        agreementCheckboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                agreementChecked = true;
            }
        });
        if (!agreementChecked) {
            if (!alertDisplayed) {
                alert("필수 이용약관에 동의해주세요.");
                alertDisplayed = true;
            }
            return;
        }

        // 전체 동의 체크
        let allAgreementCheckbox = document.querySelector('input[id="agreement3"]');
        if (!allAgreementCheckbox.checked) {
            if (!alertDisplayed) {
                alert("필수 이용약관에 동의해주세요.");
                alertDisplayed = true;
            }
            return;
        }

        // 모든 조건을 충족했을 때 특정 동작 수행하는 곳
        alert("가입이 완료되었습니다.");
        window.location.href = "../index.html";
    });
});

/*주소검색 버튼*/
document.addEventListener('DOMContentLoaded', function() {
    function execDaumPostcode() {
        new daum.Postcode({
            onComplete: function(data) {
                document.getElementById('address-numbers').value = data.zonecode;
                document.getElementById('address-roads').value = data.address;
                document.getElementById('address-oldAddress').value = data.jibunAddress;
                document.getElementById('address-details').focus();
            }
        }).open();
    }

    // 주소 검색 버튼 클릭 시 실행
    document.getElementById('address_search').addEventListener('click', function() {
        execDaumPostcode();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('focusout', function () {
        document.getElementById('address-numbers').style.display = 'inline-block';
        document.getElementById('address-roads').style.display = 'inline-block';
        document.getElementById('address-oldAddress').style.display = 'inline-block';
        document.getElementById('address-details').style.display = 'inline-block';


    })
})

/*상세주소 미입력시*/
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('focusout', function () {
        let password = document.getElementById('address-details').value;

        if (password.trim() === '') {
            document.getElementById('address-details').style.border = '1.5px solid red'; // 테두리 색상 변경
        } else {
                document.getElementById('address-details').style.border = '1.5px solid green'; // 테두리 색상 변경

            }

    })
})
