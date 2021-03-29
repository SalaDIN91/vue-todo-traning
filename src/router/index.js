import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import Experiment from "@/components/Experiment";

Vue.use(VueRouter);

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/experiment",
        name: "Experiment",
        component: Experiment
    }
];

//@todo что оно делает
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});


export default router;