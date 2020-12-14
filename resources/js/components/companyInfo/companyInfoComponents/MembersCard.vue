<template>
    <div>
        <img :src="member.imgSrc" />
        <p>
            <span>{{ member.name }}</span> {{ member.position }}
        </p>
    </div>
</template>
<script>
export default {
    name: "MembersCard",
    props: ["member"]
};
</script>
