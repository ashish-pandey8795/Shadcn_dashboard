// app/layout.tsx
import './globals.css';
import { ActiveThemeProvider } from '@/components/active-theme';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ActiveThemeProvider>{children}</ActiveThemeProvider>
      </body>
    </html>
  );
}
