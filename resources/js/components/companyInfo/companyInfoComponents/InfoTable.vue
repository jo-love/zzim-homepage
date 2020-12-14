<template>
    <table>
        <tr v-for="data in datas" :key="data.head">
            <th>{{ data.head }}</th>
            <td v-html="`${data.description}`"></td>
        </tr>
    </table>
</template>
<script>
export default {
    name: "InfoTable",
    props: ["datas"]
};
</script>
