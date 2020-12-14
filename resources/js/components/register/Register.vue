<template>
    <div class="registerWrapper" @click="detectClickOutside">
        <div class="formBox">
            <ul class="tabs">
                <li
                    :class="activeId === 1 ? 'activeTab' : ''"
                    @click="clickTab(1)"
                >
                    로그인
                </li>
                <li
                    :class="activeId === 2 ? 'activeTab' : ''"
                    @click="clickTab(2)"
                >
                    회원가입
                </li>
            </ul>
            <div class="content" v-if="activeId === 1">
                <Login ref="login" />
            </div>
            <div class="content" v-else><Signup /></div>
        </div>
    </div>
</template>

<script>
import Login from "./components/Login";
import Signup from "./components/Signup";
export default {
    components: { Login, Signup },
    data() {
        return {
            activeId: 1
        };
    },
    methods: {
        clickTab(id) {
            this.activeId = id;
        },
        detectClickOutside() {
            this.$refs.login.resetLocation();
        }
    }
};
</script>
