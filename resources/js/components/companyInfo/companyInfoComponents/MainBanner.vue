<template>
    <div class="MainBanner">
        <div>
            <VueSlickCarousel v-bind="settings">
                <img v-for="img in imageList" :key="img.id" :src="img.imgSrc" />
            </VueSlickCarousel>
        </div>
        <p>내가 원하는 그곳을 <span class="point">찜</span>하다.</p>
    </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// css 집어넣는거 물어보기.

export default {
    name: "MyComponent",
    components: { VueSlickCarousel },

    data() {
        return {
            imageList: [
                {
                    id: 1,
                    imgSrc:
                        "https://images.unsplash.com/photo-1580508158643-4bf9f8da03c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    id: 2,
                    imgSrc:
                        "https://images.unsplash.com/photo-1549921613-8db30562bad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                },
                {
                    id: 3,
                    imgSrc:
                        "https://images.unsplash.com/photo-1516959512470-53955cd40f40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1946&q=80"
                }
            ],

            settings: {
                fade: true,
                dots: true,
                dotsClass: "slick-dots custom-dot-class",
                infinite: true,
                autoplay: true,
                speed: 500,
                autoplaySpeed: 3000,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        };
    }
};
</script>
