import Vue from "vue";
import Router from "vue-router";
import Pokedex from "@/components/Pokedex";
import Home from "@/components/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Pokedex",
      name: "Pokedex",
      component: Pokedex
    }
  ]
});
