<template>
    <div>
        <ul>
            <li
                v-for="story in isOpen ? history : slicedHistory"
                :key="story.year"
            >
                <span>{{ story.year }}</span>
                <table>
                    <tr v-for="list in story.historyList" :key="list.month">
                        <td>{{ list.month }}</td>
                        <td>{{ list.description }}</td>
                    </tr>
                </table>
            </li>
        </ul>
        <button @click="isOpenHandler">
            {{ isOpen ? "접어두기" : "더보기" }}
        </button>
    </div>
</template>
<script>
export default {
    name: "History",
    props: ["history"],
    data: () => ({
        isOpen: false
    }),
    methods: {
        isOpenHandler() {
            this.isOpen = !this.isOpen;
        }
    },
    computed: {
        slicedHistory: function() {
            return Object.values(this.history).slice(0, 2);
        }
    }
};
</script>
