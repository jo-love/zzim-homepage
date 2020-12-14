<template>
    <div class="service">
        <section class="slickContainer">
            <VueSlickCarousel v-bind="settings">
                <div class="list">
                    <div class="background item1"></div>
                </div>
                <div class="list">
                    <div class="background item2"></div>
                </div>
                <div class="list">
                    <div class="background item3"></div>
                </div>
            </VueSlickCarousel>
        </section>
        <section class="summarySection">
            <div class="mainTitle">Summary.</div>
            <div class="descriptionBox">
                <div class="description">
                    찜은 현재 소셜커머스 영역에서 사업을 전개하고 있으며
                    <br />혼자가 아닌 누군가와 함께 한다는 즐거움을 목표로
                    정보를 공유하는 징검다리 역할을 하고 있습니다.
                </div>
                <div class="listBox">
                    <div
                        class="logoList"
                        v-for="item in data.items"
                        :key="item.id"
                    >
                        <span>{{ item.title }}</span>
                        <img :src="item.logo" />
                    </div>
                </div>
            </div>
        </section>
        <div v-for="item in data.items" :key="item.id">
            <Platform :data="item" />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Platform from "./Platform.vue";

export default {
    name: "MyComponent",
    components: { VueSlickCarousel, Platform },
    created() {
        axios
            .get("/mock/data.json")
            .then(response => {
                this.data = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    },
    data() {
        return {
            data: "",
            settings: {
                arrows: true,
                dots: true,
                dotsClass: "slick-dots custom-dot-class",
                edgeFriction: 0.35,
                infinite: true,
                autoplay: true,
                speed: 500,
                autoplaySpeed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        };
    }
};
</script>
