<template>
    <div class="Description">
        <div class="teams">
            <div class="description activeMenu">
                <h3>팀 소개</h3>
                <ul v-for="text in content.team" :key="text">
                    <li>{{ text }}</li>
                </ul>
                <h3>주요업무</h3>
                <ul v-for="text in content.work" :key="text">
                    <li>{{ text }}</li>
                </ul>
                <h3>자격요건</h3>
                <ul v-for="text in content.qualification" :key="text">
                    <li>{{ text }}</li>
                </ul>
                <h3>우대사항</h3>
                <ul v-for="text in content.treatment" :key="text">
                    <li>{{ text }}</li>
                </ul>
                <h3>지원방법</h3>
                <p>
                    '지원하기'버튼을 눌러서 이력서, 자유로운 형식의
                    자기소개서(PDF), Github ID(필수 아님)을 보내주세요.
                </p>
                <div class="apply">
                    <a href="">지원하기</a>
                    <p>
                        이름, 나이 연락처, 학력 사항 지원분야는 꼭 적어 주세요.
                        자기 소개서는 자기 자신을 가장 잘 드러낼 수 있는 방법을
                        택해 주세요. "저는 엄격한 아버지와 자상한 어머니 밑에서
                        자라난~"으로 시작하는 형식적인 자기소개는 정중히
                        사양합니다. 문서양식은 PDF만 받습니다.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import contentData from "./content.json";
export default {
    created() {
        this.content = contentData.server;
    },

    props: ["isSelected"],
    data() {
        return {
            propsIsSelected: this.isSelected,
            content: {}
        };
    },
    watch: {
        isSelected() {
            if (this.isSelected === 1) {
                this.content = contentData.server;
            }
            if (this.isSelected === 2) {
                this.content = contentData.ios;
            }
            if (this.isSelected === 3) {
                this.content = contentData.android;
            }
            if (this.isSelected === 4) {
                this.content = contentData.data;
            }
        }
    }
};
</script>
<style></style>
