import Lifecycle from './pages/lifecycle/';
import Hooks from './pages/hooks/';
import Index from './pages/index/';
import Memo from './pages/memo/';
import IsValidElement from './pages/isValidElement';
import CreacteFactory from './pages/createFactory';
import Children from './pages/children';
import CreateRef from './pages/createRef';
import ForwardRef from './pages/forwardRef';
import Lazy from './pages/lazy';

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
  {
    name: 'children',
    path: '/children',
    component: Children,
  },
  {
    name: 'createRef',
    path: '/createRef',
    component: CreateRef,
  },
  {
    name: 'forwardRef',
    path: '/forwardRef',
    component: ForwardRef,
  },
  {
    name: 'lazy',
    path: '/lazy',
    component: Lazy,
  },
];
