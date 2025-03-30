import * as React from 'react';
import './globals.css';
import { NextAppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import LinearProgress from '@mui/material/LinearProgress'
import type { Navigation } from '@toolpad/core/AppProvider';
import {
  SportsGymnastics,
  Backpack,
  AccountCircle,
  TurnSlightRight,
  Hiking,
  Logout
} from "@mui/icons-material";


import theme from '../theme';
import Image from 'next/image';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'bag-builder',
    title: 'Bag Builder',
    icon: <Backpack />,
  },
  {
    segment: 'pro-loadouts',
    title: 'Pro Loadouts',
    icon: <Hiking />,
  },
  {
    segment: 'flight-deck',
    title: 'Flight Deck',
    icon: <TurnSlightRight />,
  },
  {
    segment: 'flight-map',
    title: 'Flight Map',
    icon: <SportsGymnastics />,
  },
  {
    segment: 'throw-gooder',
    title: 'Throw Gooder',
    icon: <SportsGymnastics />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'My Account',
  },
  {
    segment: 'view-account',
    title: 'View Account',
    icon: <AccountCircle />,
  },
  {
    segment: 'sign-out',
    title: 'Sign Out',
    icon: <Logout />,
  },
];

const BRANDING = {
  logo: <Image src="/images/navbar/disc-loadout-logo_white.png" alt="MUI logo" />,
  title: '',
  homeUrl: '/',
};



export default function RootLayout(props: { children: React.ReactNode }) {


  return (
    <html lang="en" data-toolpad-color-scheme="light" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <React.Suspense fallback={<LinearProgress />}>
            <NextAppProvider
              navigation={NAVIGATION}
              branding={BRANDING}
              theme={theme}
            >
              {props.children}
            </NextAppProvider>
          </React.Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
