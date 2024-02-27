import type { RouteObject } from 'react-router';

const routes: Record<string, RouteObject[]> = {};
export function regRoute(group: string, route: RouteObject) {
  if (!routes[group]) {
    routes[group] = [];
  }
  routes[group].push(route);
}
export function getRoutesInGroup(group: string) {
  return [
    {
      path: '/',
      children: routes[group] || [],
    },
  ];
}
