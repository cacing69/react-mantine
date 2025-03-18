import { AppShell, Burger, Code, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useRouter } from '@tanstack/react-router';
import {
  IconHome,
  IconTestPipe,
  IconSettings,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';
import classes from './MainLayout.module.css';
import { useState, useEffect } from 'react';

const data = [
  { link: '/home', label: 'Home', icon: IconHome },
  { link: '/test', label: 'Test', icon: IconTestPipe },
  { link: '/settings', label: 'Settings', icon: IconSettings },
];

export function MainLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure();
  const [activePath, setActivePath] = useState(router.state.location.pathname);

  useEffect(() => {
    setActivePath(router.state.location.pathname);
  }, [router.state.location.pathname]);

  const isLinkActive = (path: string) => {
    if (path === '/home') {
      return activePath === path;
    }
    return activePath.startsWith(path);
  };

  const links = data.map((item) => (
    <Link
      to={item.link}
      className={classes.link}
      data-active={isLinkActive(item.link) || undefined}
      key={item.label}
      onClick={() => setActivePath(item.link)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened }
      }}
      padding="md"
    >
      <AppShell.Navbar>
        <nav className={classes.navbar}>
          <div className={classes.navbarMain}>
            <Group className={classes.header} justify="space-between">
              <div>Logo</div>
              <Code fw={700}>v1.0.0</Code>
            </Group>
            {links}
          </div>

          <div className={classes.footer}>
            <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
              <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
              <span>Change account</span>
            </a>

            <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
              <IconLogout className={classes.linkIcon} stroke={1.5} />
              <span>Logout</span>
            </a>
          </div>
        </nav>
      </AppShell.Navbar>

      <AppShell.Main>
        <Group px="md" py="md" style={{ backgroundColor: 'var(--mantine-color-body)' }}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}