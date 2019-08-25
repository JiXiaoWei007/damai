import HomeIndexPage from './views/home/index.vue';
import WholeIndexPage from './views/whole/index.vue';
import FindIndexPage from './views/find/index.vue';
import TicketholderIndexPage from './views/ticketholder/index.vue';
import MeIndexPage from './views/me/index.vue';
import NotFoundPage from './pages/not-found.vue';
export default [
  {
    path: '/',
    component: HomeIndexPage,
  },
  {
    path: '/whole/',
    component:WholeIndexPage,
  },
  {
    path: '/find/',
    component:FindIndexPage,
  },
  {
    path: '/ticketholder/',
    component:TicketholderIndexPage,
  },
  {
    path: '/me/',
    component:MeIndexPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
