'use client'


import { useContext } from 'react';
import { SettingContext, SettingsContextType } from './setting-provider'; // adjust path

const useSettingsContext = (): SettingsContextType => {
  const context = useContext(SettingContext);

  if (!context) {
    throw new Error('useSettingsContext must be used within a SettingProvider');
  }

  return context;
};

export default useSettingsContext;
