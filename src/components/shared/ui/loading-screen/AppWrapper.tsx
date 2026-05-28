'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './LoadingScreen';

interface AppWrapperProps {
  children: React.ReactNode;
}

export const AppWrapper = ({ children }: AppWrapperProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>
      )}

      <div
        style={{
          opacity: !isMounted || isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-out',
          height: isLoading ? '100vh' : 'auto',
          overflow: isLoading ? 'hidden' : 'visible',
        }}
        className="flex min-h-screen flex-col"
      >
        {children}
      </div>
    </>
  );
};
