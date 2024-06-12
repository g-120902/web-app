'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Create a Context
const LoadingContext = createContext<{ loading: boolean; setLoading: React.Dispatch<React.SetStateAction<boolean>> } | null>(null);

// Create a Provider function
export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
