'use client'

import { useCallback, useEffect, useState } from 'react'

type UseLocalStorageReturn<T> = {
  value: T
  update: <K extends keyof T>(name: K, newValue: T[K]) => void
  reset: () => void
}

export function useLocalStorage<T extends Record<string, any>>(
  key: string,
  defaultValue: T
): UseLocalStorageReturn<T> {
  const [value, setValue] = useState<T>(defaultValue)

  useEffect(() => {
    const storedValue = getFromStorage<T>(key)

    if (storedValue) {
      setValue(prev => ({
        ...prev,
        ...storedValue
      }))
    }
  }, [key])

  const updateValue = useCallback((newValue: Partial<T>) => {
    setValue(prev => {
      const updatedValue = {
        ...prev,
        ...newValue
      }
      setStorage(key, updatedValue)
      return updatedValue
    })
  }, [key])

  const update = useCallback<<K extends keyof T>(name: K, newValue: T[K]) => void>(
    (name, newValue) => {
      updateValue({ [name]: newValue } as unknown as Partial<T>)
    },
    [updateValue]
  )

  const reset = useCallback(() => {
    removeFromStorage(key)
    setValue(defaultValue)
  }, [key, defaultValue])

  return {
    value,
    update,
    reset
  }
}

// helpers
function getFromStorage<T>(key: string): T | null {
  try {
    const result = localStorage.getItem(key)
    if (result) {
      return JSON.parse(result) as T
    }
  } catch (error) {
    console.error(error)
  }
  return null
}

function setStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(error)
  }
}

function removeFromStorage(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(error)
  }
}
