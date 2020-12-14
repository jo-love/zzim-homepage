<template>
    <form class="loginForm">
        <svg id="figure" viewBox="0 0 120 120">
            <path
                d="M0,150 C0,65 120,65 120,150"
                fill="
                #FAF4E8"
                stroke="black"
                stroke-width="2"
            />
            <circle
                cx="60"
                cy="60"
                r="40"
                fill="#FAF4E8"
                stroke="#000"
                stroke-width="2"
            />
            <g class="eyes">
                <circle :cx="leftEye.x" :cy="leftEye.y" r="5" fill="#000" />
                <circle :cx="rightEye.x" :cy="rightEye.y" r="5" fill="#000" />
            </g>
        </svg>
        <input
            v-model="email"
            type="text"
            placeholder="email"
            @input="adjustLocation"
            @keydown.tab="checkClicked"
        />
        <span class="errorMsg">{{ emailErrMsg }}</span>
        <input
            v-model="password"
            type="password"
            placeholder="Password"
            @click="[checkClicked(), stopEvent()]"
        />
        <span class="errorMsg">{{ passwordErrMsg }}</span>
        <span class="forgetPW">비밀번호를 잊으셨나요?</span>
        <button>로그인</button>
    </form>
</template>
<script>
export default {
    props: ["propsData"],
    data() {
        return {
            email: "",
            emailErrMsg: "",
            password: "",
            passwordErrMsg: "",
            leftEye: { x: 44, y: 55 },
            rightEye: { x: 76, y: 55 },
            isClicked: false
        };
    },
    watch: {
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
        adjustLocation() {
            const { length } = this.email;
            if (length === 0) {
                this.leftEye.x = 44;
                this.rightEye.x = 76;
                this.leftEye.y = 55;
                this.rightEye.y = 55;
            } else if (length < 20) {
                this.leftEye.x = 34 + length / 2;
                this.rightEye.x = 66 + length / 2;
                this.leftEye.y = 60 + length / 2;
                this.rightEye.y = 60 + length / 2;
            } else if (19 < length && 34 >= length) {
                console.log(length);
                this.leftEye.x = 36 + length / 2;
                this.rightEye.x = 68 + length / 2;
                this.leftEye.y = 80 - length / 2;
                this.rightEye.y = 80 - length / 2;
            } else if (length > 34) {
                this.leftEye.x = 53;
                this.rightEye.x = 85;
                this.leftEye.y = 63;
                this.rightEye.y = 63;
            }
        },
        checkClicked() {
            this.isClicked = true;
            this.leftEye.x = 44;
            this.rightEye.x = 76;
            this.leftEye.y = 38;
            this.rightEye.y = 38;
        },
        resetLocation() {
            this.leftEye.x = 44;
            this.rightEye.x = 76;
            this.leftEye.y = 55;
            this.rightEye.y = 55;
        },
        stopEvent(e) {
            event.stopPropagation();
        }
    }
};
</script>
