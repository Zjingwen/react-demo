import Lifecycle from './pages/lifecycle/';
import Hooks from './pages/hooks/';
import Index from './pages/index/';
import Memo from './pages/memo/';

export default [
  {
    name: 'index',
    path: '/',
    component: Index,
  },
  {
    name: 'hooks',
    path: '/hooks',
    component: Hooks,
  },
  {
    name: 'memo',
    path: '/memo',
    component: Memo,
  },
  {
    name: 'lifecycle',
    path: '/lifecycle',
    component: Lifecycle,
  },
];
