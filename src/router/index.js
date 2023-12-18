import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue';
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Search from '../views/Search.vue'
import Works from '../views/Works.vue'
import BlogDetails from '../views/BlogDetails.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/about",
        name: "about",
        component: About,
      },
      {
        path: "/works",
        name: "works",
        component: Works,
      },
      {
        path: "/blog",
        name: "blog",
        component: Blog,
      },
      {
        path: "/contact",
        name: "contact",
        component: Contact,
      },
      {
        path: '/search',
        name: 'search',
        component: Search,
      },
      {
        path: '/blog/:id',
        name: 'blogDetails',
        component: BlogDetails,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
export { router };
