import { Anchor, Box, Text, Title } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import classes from './Test.module.css';

export function TestPage() {
  return (
    <Box p="xl">
      <Title className={classes.title}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Test
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
        Vite integration follow{' '}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>
      <ColorSchemeToggle />
    </Box>
  );
}