import { lazy } from 'react';

const routes = [
  {
    name: 'homePage',
    path: '/',
    exact: true,
    component: () => lazy(() => import('../pages/home')),
  },
  {
    name: 'now playing',
    path: '/categories/now-playing',
    exact: true,
    component: () => lazy(() => import('../pages/nowPlaying')),
  },
  {
    name: 'popular',
    path: '/categories/popular',
    exact: true,
    component: () => lazy(() => import('../pages/popular')),
  },
  {
    name: 'top rated',
    path: '/categories/top-rated',
    exact: true,
    component: () => lazy(() => import('../pages/topRated')),
  },
  {
    name: 'upcoming',
    path: '/categories/upcoming',
    exact: true,
    component: () => lazy(() => import('../pages/upcoming')),
  },
];

export default routes;
