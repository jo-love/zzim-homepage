<template>
    <header class="Header">
        <div class="nav">
            <div class="logo" @click="goToCompanyInfo">
                <img
                    src="images/zzieut.png"
                    alt="logo"
                    width="35px"
                    height="35px"
                />
            </div>
            <div class="menutab">
                <div @click="goToCompanyInfo">찌읏 소개</div>
                <div @click="goToService">서비스</div>
                <div @click="goToRecruit">채용</div>
                <div @click="goToRegister">로그인</div>
            </div>
            <div class="hamburger" @click="activeMenuHandler">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div :class="activeMenuVisible ? 'activeMenu visible' : 'activeMenu'">
            <div @click="goToCompanyInfo">찌읏 소개</div>
            <div @click="goToService">서비스</div>
            <div @click="goToRecruit">채용</div>
            <div @click="goToRegister">로그인</div>
        </div>
    </header>
</template>
<script>
export default {
    name: "Header",
    props: ["title"],
    components: {},
    created() {
        const resizing = () => {
            this.activeMenuVisible = false;
        };

        window.addEventListener("resize", () => {
            resizing();
        });
        return window.removeEventListener("resize", () => {
            resizing();
        });
    },
    data() {
        return {
            activeMenuVisible: false
        };
    },
    methods: {
        goToMain: function(event) {
            this.$router.push("/");
        },
        goToCompanyInfo: function(event) {
            this.$router.push("/companyInfo");
        },
        goToService: function(evnet) {
            this.$router.push("/service");
        },
        goToRecruit: function(event) {
            this.$router.push("/recruit");
        },
        goToRegister: function(event) {
            this.$router.push("/register");
        },
        activeMenuHandler() {
            this.activeMenuVisible = !this.activeMenuVisible;
        }
    }
};
</script>
