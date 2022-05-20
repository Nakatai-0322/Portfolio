import Vue from "vue";
import VueRouter from "vue-router";
import Profile from "../views/Profile.vue";
import Gallery from "../views/Gallery.vue";
import Skills from "../views/Skills.vue";
import Blogs from "../views/Blogs.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: Gallery,
    },
    {
        path: "/skills",
        name: "Skills",
        component: Skills,
    },
    {
        path: "/blogs",
        name: "Blogs",
        component: Blogs,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
});

export default router;
