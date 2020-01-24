import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
        path: '/arena',
        name: 'arena',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Arena.vue')
    },
    {
        path: '/entrance',
        name: 'entrance',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "entrance" */ '../views/Entrance.vue'),
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('userName')) {
                next('/')
            } else {
                next()
            }
        }
    },
    {
        path: '/lobby',
        name: 'lobby',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "lobby" */ '../views/Lobby.vue'),
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('userName') || !localStorage.getItem('join')) {
                next('/')
            } else {
                if (localStorage.getItem('join') !== 'true') {
                    next('/entrance')
                } else {
                    next()
                }
            }
        }
    },
    {
        path: '/',
        name: 'registration',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "registration" */ '../views/Registration.vue'),
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('userName')) {
                next('/entrance')
            } else {
                next()
            }
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
