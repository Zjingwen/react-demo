import About from './pages/about/';
import Topics from './pages/Topics/';
import Hooks from './pages/Hooks/';

export default [
  {
    name: 'Hooks',
    path: '/',
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