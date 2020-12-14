<template>
    <footer class="Footer">
        <div class="wrapper">
            <span>ZziEut Co.</span>
            <address>
                <ul>
                    <li v-for="data in footerData" :key="data.tile">
                        {{ data.desc }}
                    </li>
                </ul>
            </address>
            <p class="copyright">&copy; Copyright 2020 찌읏</p>
        </div>
    </footer>
</template>
<script>
export default {
    name: "Footer",
    data: () => ({
        footerData: [
            {
                title: "address",
                desc: "서울시 성북구 동선동 4가 137 지안빌딩 4층"
            },
            {
                title: "tel",
                desc: "070-4905-2942"
            },
            {
                title: "email",
                desc: "kkotkkio@zzieut.com"
            }
        ]
    })
};
</script>
