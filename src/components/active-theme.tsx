

'use client';

import {
  ThemeProvider as NextThemeProvider,
  useTheme as useNextTheme,
} from 'next-themes';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type ThemeContextType = {
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
  mode: string;
  setMode: (mode: 'light' | 'dark' | 'system') => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ActiveThemeProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('active-theme');
      if (savedTheme) return savedTheme;

      // Optional: use system preference for first-time users
      const isDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      return isDark ? 'default-dark' : 'default';
    }
    return 'default';
  });

  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('active-theme', activeTheme);
    }
  }, [activeTheme]);

  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <InnerThemeProvider
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
      >
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
  children: ReactNode;
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
}) {
  const { theme: mode, setTheme: setMode } = useNextTheme();

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        setActiveTheme,
        mode: mode || 'system',
        setMode,
      }}
    >
      <div data-theme={activeTheme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export const useThemeConfig = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeConfig must be used within ActiveThemeProvider');
  }
  return context;
};


