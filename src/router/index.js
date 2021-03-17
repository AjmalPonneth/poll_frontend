import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Detail from "@/components/Detail.vue";
import Results from "@/components/Results.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/polls/:id",
      name: "Detail",
      component: Detail
    },
    {
      path: "/results/:id",
      name: "Results",
      component: Results
    }
  ]
});
