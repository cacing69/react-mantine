


import '@mantine/core/styles.css';

import { StrictMode } from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { MantineProvider } from '@mantine/core';
import { routeTree } from './routes';
import { theme } from './theme';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

void router.load();

export default function App() {
  return (
    <StrictMode>
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </StrictMode>
  );
}