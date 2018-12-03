import About from './pages/about/';
import Topics from './pages/Topics/';
import Home from './pages/Home/';

export default  [
  { 
    name: 'home',
    path: '/',
    exact: true,
    component: Home
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
]