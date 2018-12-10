import Lifecycle from './pages/lifecycle/';
import Topics from './pages/topics/';
import Hooks from './pages/hooks/';
import Index from './pages/index/';

export default [
  {
    name: 'Index',
    path: '/',
    component: Index
  },
  {
    name: 'hooks',
    path: '/hooks',
    component: Hooks
  },
  { 
    name: 'topics',
    path: '/topics',
    component: Topics
  },
  { 
    name: 'lifecycle',
    path: '/lifecycle',
    component: Lifecycle
  },
];