import { createRoute, createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { MainLayout } from './components/Layout/MainLayout'
import { TestPage } from './pages/Test.page'
import { HomePage } from './pages/Home.page'

export const rootRoute = createRootRoute({
  component: () => (
    <MainLayout>
      <Outlet />
      <TanStackRouterDevtools />
    </MainLayout>
  ),
})

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/home',
  component: HomePage,
})

export const testRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/test',
  component: TestPage,
})

export const testAnalyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/test/analytics',
  component: () => <div>Analytics Page</div>,
})

export const routeTree = rootRoute.addChildren([
  indexRoute,
  testRoute,
  testAnalyticsRoute
])
