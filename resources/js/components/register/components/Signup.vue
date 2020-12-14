<template>
    <div>
        <form @submit="submitForm" class="loginForm">
            <input type="text" placeholder="이름" v-model="name" />
            <span class="errorMsg">{{ nameErrMsg }}</span>
            <input type="text" placeholder="이메일" v-model="email" />
            <span class="errorMsg">{{ emailErrMsg }}</span>
            <input type="text" placeholder="휴대폰 번호" v-model="phone" />
            <span class="errorMsg">{{ phoneErrMsg }}</span>
            <input type="password" placeholder="비밀번호" v-model="password" />
            <span class="errorMsg">{{ passwordErrMsg }}</span>
            <button>회원가입</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            nameErrMsg: "",
            email: "",
            emailErrMsg: "",
            phone: "",
            phoneErrMsg: "",
            password: "",
            passwordErrMsg: ""
        };
    },
    watch: {
        name: function() {
            if (!this.name.length) {
                this.nameErrMsg = "이름을 입력해주세요.";
            } else {
                this.nameErrMsg = "";
            }
        },
        email: function() {
            const isMail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
            if (!isMail.test(this.email) && this.email.length) {
                this.emailErrMsg = "올바른 이메일이 아닙니다.";
            } else if (!this.email.length) {
                this.emailErrMsg = "이메일을 입력해주세요.";
            } else {
                this.emailErrMsg = "";
            }
        },
        phone: function() {
            const isPhone = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
            if (!isPhone.test(this.phone) && this.phone.length) {
                this.phoneErrMsg = "올바른 휴대폰 번호가 아닙니다..";
            } else if (!this.phone.length) {
                this.phoneErrMsg = "휴대폰 번호를 입력해주세요.";
            } else {
                this.phoneErrMsg = "";
            }
        },
        password: function() {
            if (!this.password.length) {
                this.passwordErrMsg = "비밀번호를 입력해주세요.";
            } else if (this.password.length < 8) {
                this.passwordErrMsg = "8자이상 입력해주세요.";
            } else {
                this.passwordErrMsg = "";
            }
        }
    },

    methods: {
        submitForm(e) {
            e.preventDefault();
        }
    }
};
</script>
