

document.addEventListener('DOMContentLoaded', function() { /*로그인 알림박스*/
    document.getElementById('login_click').addEventListener('click', function () {
        let username = document.getElementById('login_id').value;
        let password = document.getElementById('login_pw').value;

        if (username.trim() === '' || password.trim() === '') {
            document.getElementById('login_null').style.display = 'block';
        } else if (username === "early" && password === "rabbit") {
            document.getElementById('login_success').style.display = 'block';
            /*이부분 수정필요, css가 깨져나옴*/window.location.href="../../index.html";
        } else {
            document.getElementById('login_error').style.display = 'block';
        }
a
    });

    document.addEventListener('click', function(event) {

        if (event.target.classList.contains('login_alert')) {
            event.target.style.display = 'none';
        }
    });

})




document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('input[name="login_id"]').addEventListener('input', function() {
        let inputValue = this.value;
        let koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
        if (koreanRegex.test(inputValue)) {
            this.value = inputValue.replace(koreanRegex, '');
            alert("아이디는 영어, 숫자, 특수문자로 이루어져 있습니다.");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('input[name="login_pw"]').addEventListener('input', function() {
        let inputValue = this.value;
        let koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
        if (koreanRegex.test(inputValue)) {
            this.value = inputValue.replace(koreanRegex, '');
            alert("비밀번호는 영어, 숫자, 특수문자로 이루어져 있습니다.");
        }
    });
});

/*
document.getElementById('login_click').addEventListener('click', function () {
    const username = document.getElementById('login_id').value;
    const password = document.getElementById('login_pw').value;

    if (username === "early" && password === "rabbit") {
        window.location.href="../../page/JoinPage.html";
    }
});
*/
