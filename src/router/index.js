import * as vueRouter from "vue-router";
import routes from "./routes";

const router = vueRouter.createRouter({
	history: vueRouter.createWebHistory(import.meta.env.BASE_URL),
	base: import.meta.env.BASE_URL,
	routes
});

export default router;
