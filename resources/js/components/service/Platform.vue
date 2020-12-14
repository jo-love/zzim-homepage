<template>
    <div>
        <section class="serviceLists">
            <div class="mainContainer">
                <div class="serviceName">{{ data.name }}</div>
                <div>
                    <img class="representativeImage" :src="data.img" />
                </div>
            </div>
            <article>
                <div class="flatformBody">
                    <div class="logoBox">
                        <img class="logo" :src="data.logo" />
                    </div>
                    <h2>{{ data.description }}</h2>
                    <div class="historyBox">
                        <h2 class="history">히스토리</h2>
                        <ul
                            class="timelineArea"
                            v-for="item in data.history"
                            :key="item.id"
                        >
                            <li>
                                <span>{{ item.date }}</span>
                                <span class="content">{{ item.text }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    props: ["data"]
};
</script>
