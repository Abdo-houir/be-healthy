"use client"

import AuthProvider from '@/app/context/auth/AuthProvider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode } from 'react'
import SettingProvider from './context/settings/setting-provider'
import ToastProvider from './context/ToastProvider'
import MyThemeProvider from './theme/MyThemeProvider'

type Props = {
    children: ReactNode
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        }
    }
});

const AppProvider = ({ children }: Props) => {
    return (

        <AppRouterCacheProvider>
            <QueryClientProvider client={queryClient} >
                <SettingProvider
                    defaultSettings={{
                        direction: "ltr",
                        theme: "light"
                    }}
                >
                    <MyThemeProvider>
                        <ToastProvider />
                        <AuthProvider>
                            {children}
                        </AuthProvider>
                    </MyThemeProvider>
                </SettingProvider>
                <ReactQueryDevtools client={queryClient} />
            </QueryClientProvider>
        </AppRouterCacheProvider>
    )
}

export default AppProvider