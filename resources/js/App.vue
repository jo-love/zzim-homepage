<template>
    <div class="main">
        <router-view id="contents" :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    name: "app",
    components: {},
    computed: {},
    methods: {}
};
</script>
