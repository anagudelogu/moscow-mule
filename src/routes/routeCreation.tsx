import { type FC, lazy, type LazyExoticComponent, Suspense } from 'react'
import { type RouteObject } from 'react-router-dom'

interface Page {
  Element: LazyExoticComponent<FC>
  path?: string
  children?: Page[]
}

const pagesName: Page[] = [
  {
    Element: lazy<FC>(async () => await import('@/pages/Homepage')),
    path: '/',
  },
]

const createChildrenRoute = (child: Page): RouteObject => {
  return {
    path: child.path,
    element: (
      <Suspense fallback={<div />}>
        <child.Element />
      </Suspense>
    ),
    children: child.children?.map((c) => createChildrenRoute(c)),
  } satisfies RouteObject
}

export const pages: RouteObject[] = pagesName.map((page) => {
  return {
    path: page.path,
    element: (
      <Suspense fallback={<div />}>
        <page.Element />
      </Suspense>
    ),
    children: page.children?.map((child) => createChildrenRoute(child)),
  }
})
