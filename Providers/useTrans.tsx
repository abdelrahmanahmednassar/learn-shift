'use client';

import {
  createContext,
  useContext,
  ReactNode,
} from 'react';
import en from "@/lang/en.json";

/**
 * Translation context and provider for i18n.
 */
type TranslationType = typeof en;

interface TranslationContextType {
  trans: TranslationType;
  lang: "ar" | "en";
}

const TranslationContext = createContext<TranslationContextType | null>(null);

export function useTrans() {
  const context = useContext(TranslationContext);
  if (!context) throw new Error('useTrans must be used within a TranslationProvider');
  return context;
}

interface TranslationProviderProps {
  children: ReactNode;
  dictionary: TranslationType;
  lang: "ar" | "en";
}

export function TranslationProvider({
  children,
  dictionary,
  lang,
}: TranslationProviderProps) {
  return (
    <TranslationContext.Provider value={{ trans: dictionary, lang }}>
      {children}
    </TranslationContext.Provider>
  );
}