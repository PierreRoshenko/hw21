import Contacts from "../pages/Contacts";
import { HomePage } from "../pages/home";
import { Images } from "../pages/images";
import { posts } from "../pages/posts";

export const appRoutes = [{
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/feed',
        component: posts
    },
    {
        path: '/images',
        component: Images
    },
    {
        path: '/contacts',
        component: Contacts
    },

]