import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home";
import user from "../components/user";
import UserDetail from "../components/UserDetail";

Vue.use(Router)

export default new Router({
    routes:[
        {path: "/home",component:home},
        {path: "/",component:home},
        {path: "/user",component:user},
        {path: "/detail/:id/:username/:bir/:content/", component: UserDetail},


    ],
})
