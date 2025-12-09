import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import Detail from "../views/Details.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact .vue";
import Wishlist from "../views/Wishlist.vue";

const routes = [
    { path: "/", name: "Home", component: Home},
    { path: "/menu", name: "Menu", component: Menu},
    { path: '/details/:id', name: 'Details', component: Detail },
     {path: "/about", name: "About", component: About },
    {path: "/contact", name: "Contact", component: Contact },
    {path: "/wishlist", name: "Wishlist", component: Wishlist }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
