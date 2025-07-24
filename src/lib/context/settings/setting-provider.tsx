'use client'

import { createContext, ReactNode, useMemo } from 'react'
import { useLocalStorage } from '../../hooks/use-local-storage'

const STORAGE_KEY = 'ADSettings'

export type SettingsContextType = SettingsType & {
    onUpdate: <K extends keyof SettingsType>(key: K, value: SettingsType[K]) => void
}

export const SettingContext = createContext<SettingsContextType | undefined>(undefined)

type SettingProviderProps = {
    children: ReactNode
    defaultSettings: SettingsType
}



const SettingProvider = ({ children, defaultSettings }: SettingProviderProps) => {
    const { value, update } = useLocalStorage<SettingsType>(STORAGE_KEY, defaultSettings)

    const memoizedSettings = useMemo<SettingsContextType>(() => ({
        ...value,
        onUpdate: update
    }), [value, update])


    return (
        <SettingContext.Provider value= { memoizedSettings } >
        { children }
        </SettingContext.Provider>
)

}

export default SettingProvider
