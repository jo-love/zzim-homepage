<template>
    <div class="CompanyInfo">
        <main-banner />
        <div class="vision">
            <h3>VISION</h3>
            <div class="contents">
                <div>
                    <p>
                        Let's help people
                        <span>Play Better</span>
                    </p>
                </div>
                <ul>
                    <li>
                        <span>01</span>
                        <p>By making it convenient and accessible</p>
                    </li>
                    <li>
                        <span class="point">02</span>
                        <p>
                            By providing Inspiring
                            <br />
                            content on how/where to play
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="brandMission">
            <h3>Brand mission</h3>
            <p>
                개개인 취향과 성향을 기반으로 나만을 위한 취향저격 콘텐츠를
                추천해주는
                <span>여가생활 필수 어플, <span class="point">찜</span></span>
            </p>
            <div class="wrapper">
                <ul>
                    <li v-for="mission in brandMission" :key="mission.id">
                        <span v-html="`${mission.head}`"></span>
                        <p>
                            {{ mission.description }}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="companyProfile">
            <h3>COMPANY PROFILE</h3>
            <div class="wrapper">
                <info-table :datas="companyInfos" />
            </div>
        </div>
        <div class="history">
            <h3>History</h3>
            <div class="wrapper">
                <company-history :history="history" />
            </div>
        </div>
        <div class="members">
            <h3>MEMBERS</h3>
            <div class="wrapper">
                <ul>
                    <li v-for="member in members" :key="member.name">
                        <members-card :member="member" />
                    </li>
                </ul>
            </div>
        </div>
        <div class="contact">
            <h3>CONTACT US</h3>
            <div class="wrapper">
                <info-table :datas="contactInfo" />
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { companyInfoData } from "../companyInfo/CompanyInfoData";
import MainBanner from "./companyInfoComponents/MainBanner";
import History from "./companyInfoComponents/History";
import MembersCard from "./companyInfoComponents/MembersCard";
import InfoTable from "./companyInfoComponents/InfoTable";

export default {
    components: {
        "main-banner": MainBanner,
        "members-card": MembersCard,
        "info-table": InfoTable,
        "company-history": History
    },
    data: () => ({
        companyInfos: { ...companyInfoData.companyProfile },
        members: {},
        contactInfo: { ...companyInfoData.contact },
        brandMission: { ...companyInfoData.brandMission },
        history: {}
    }),
    created() {
        axios
            .get("/data/companyInfo.json")
            .then(({ data }) => {
                const DATA = data.data;
                this.members = { ...DATA.members };
                this.history = { ...DATA.history };
            })
            .catch(e => {
                console.log(e);
            });
    }
};
</script>
<style lang="scss" scoped></style>
