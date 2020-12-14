import { asyncComponent } from "./utils";
import store from "../store";

import DefaultHeader from "@/js/components/headers/DefaultHeader";
import DefaultFooter from "@/js/components/footer/Footer";
import { defaults } from "lodash";

function getDefaultHeader(title) {
    return {
        components: {
            DefaultHeader
        },
        render(createElement) {
            return createElement("DefaultHeader", {
                props: {
                    title
                }
            });
        }
    };
}

function getDefaultFooter() {
    return {
        components: {
            DefaultFooter
        },
        render(createElement) {
            return createElement("DefaultFooter");
        }
    };
}

export default [
    {
        path: "/",
        components: {
            default: asyncComponent("Index")
        },
        meta: {
            needAuth: true
        },
        children: [
            {
                path: "",
                name: "HomeMain",
                components: {
                    default: asyncComponent("main/Index"),
                    header: getDefaultHeader("HomeMain"),
                    footer: getDefaultFooter()
                }
            },
            {
                path: `test`,
                name: "Test",
                components: {
                    default: asyncComponent(`main/Test`),
                    header: getDefaultHeader("Test")
                },
                meta: {
                    action: true
                }
            },
            {
                path: "companyInfo",
                name: "CompanyInfo",
                components: {
                    default: asyncComponent("companyInfo/CompanyInfo"),
                    header: getDefaultHeader("CompanyInfo"),
                    footer: getDefaultFooter()
                }
            },
            {
                path: "service",
                name: "Service",
                components: {
                    default: asyncComponent("service/Service"),
                    header: getDefaultHeader("Service"),
                    footer: getDefaultFooter()
                },
                meta: {
                    action: true
                }
            },
            {
                path: "recruit",
                name: "Recruit",
                components: {
                    default: asyncComponent("recruit/Recruit"),
                    header: getDefaultHeader("Recruit"),
                    footer: getDefaultFooter()
                },
                meta: {
                    action: true
                }
            },
            {
                path: "register",
                name: "Register",
                components: {
                    default: asyncComponent("register/Register"),
                    header: getDefaultHeader("Register"),
                    footer: getDefaultFooter()
                },
                meta: {
                    action: true
                }
            }
        ]
    }
];
