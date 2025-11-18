import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react'
import vi from '@/locales/vi'
import en from '@/locales/en'

type Language = 'vi' | 'en'

const dictionaries = {
  vi,
  en
}

type Dictionary = typeof vi

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  dictionary: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('vi')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const storedLang = window.localStorage.getItem('language') as Language | null
    if (storedLang && storedLang in dictionaries) {
      setLanguageState(storedLang)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('language', language)
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      dictionary: dictionaries[language]
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}


