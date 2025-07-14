// components/active-theme.tsx
'use client';

import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes';
import React, { createContext, useContext, useState } from 'react';

type ThemeContextType = {
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
  mode: string;
  setMode: (mode: 'light' | 'dark' | 'system') => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ActiveThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<string>('default');

  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <InnerThemeProvider activeTheme={activeTheme} setActiveTheme={setActiveTheme}>
        {children}
      </InnerThemeProvider>
    </NextThemeProvider>
  );
}

function InnerThemeProvider({
  children,
  activeTheme,
  setActiveTheme,
}: {
  children: React.ReactNode;
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
}) {
  const { theme: mode, setTheme: setMode } = useNextTheme();

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme, mode: mode || 'system', setMode }}>
      <div data-theme={activeTheme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export const useThemeConfig = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeConfig must be used within ActiveThemeProvider');
  return context;
};
