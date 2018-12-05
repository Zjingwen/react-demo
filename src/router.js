import About from './pages/about/';
import Topics from './pages/topics/';
import Hooks from './pages/hooks/';
import Index from './pages/index/';

export default [
  {
    name: 'Index',
    path: '/',
    exact: true,
    component: Index
  },
  {
    name: 'Hooks',
    path: '/hooks',
    exact: true,
    component: Hooks
  },
  { 
    name: 'topics',
    path: '/topics',
    exact: true,
    component: Topics
  },
  { 
    name: 'about',
    path: '/about',
    exact: true,
    component: About
  },
];