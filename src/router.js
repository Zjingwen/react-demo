import Lifecycle from './pages/lifecycle/';
import Hooks from './pages/hooks/';
import Index from './pages/index/';
import Memo from './pages/memo/';
import IsValidElement from './pages/isValidElement';
import CreacteFactory from './pages/createFactory';

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
  {
    name: 'isValidElement',
    path: '/isValidElement',
    component: IsValidElement,
  },
  {
    name: 'creacteFactory',
    path: '/creacteFactory',
    component: CreacteFactory,
  },
];
