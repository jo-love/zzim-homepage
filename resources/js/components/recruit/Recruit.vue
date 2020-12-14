<template>
    <div class="Recruit">
        <div class="recruitPageBody">
            <h2>채용중인 분야</h2>
            <div class="recruitContainer">
                <Menu @changeSelected="changeSelected"></Menu>
                <Description :isSelected="isSelected"></Description>
            </div>
        </div>
    </div>
</template>

<script>
import Description from "./Description";
import Menu from "./Menu";
export default {
    components: { Menu, Description },
    data() {
        return {
            isSelected: ""
        };
    },
    methods: {
        changeSelected(idx) {
            this.isSelected = idx;
        }
    }
};
</script>
