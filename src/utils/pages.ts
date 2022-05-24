import { RouteDefinition } from 'solid-app-router';
import { Component, lazy } from 'solid-js';

const pages = import.meta.glob('../pages/**/*.tsx');
const datas = import.meta.globEager('../pages/**/*.data.ts');

const routes: RouteDefinition[] = [];

Object.entries(pages).forEach(([path, file]) => {
  let root: RouteDefinition | null = null;
  let data = Object.entries(datas).find(
    ([data]) => data === path.replace('.tsx', '.data.ts')
  )?.[1];

  path = path
    .replace('../pages', '')
    .replace('.tsx', '')
    .replace(/\/index$/, '')
    .replace(/\[(.*)\]/, ':$1')
    .replace(':...', '*');

  if (path.includes('/outlet')) {
    const [prefix, suffix] = path.split('/outlet');
    const parent = routes.find((page) => page.path === (prefix || '/'));
    if (parent) {
      parent.children = parent.children || [];
      // If there is an outlet at the root level then we need
      // to create a duplicate of itself as its own children
      // in order for anything to actually render
      if (parent.path === '/')
        (parent.children as RouteDefinition[]).push({
          path: '/',
          component: lazy(
            Object.entries(pages).find(
              ([p]) => p === '../pages/index.tsx'
            )![1] as () => Promise<{ default: Component<{}> }>
          ),
          data: data?.default,
        });
      path = suffix;
      root = parent;
    }
  }

  (root?.children && Array.isArray(root?.children)
    ? root?.children
    : routes
  ).push({
    path: path || '/',
    component: lazy(file as () => Promise<{ default: Component<{}> }>),
    data: data?.default,
  });
});

export default routes;
