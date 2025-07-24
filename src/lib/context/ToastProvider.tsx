'use client'

import { ToastContainer } from "react-toastify";
import useSettingsContext from "./settings/useSettingsContext ";

const ToastProvider = () => {
    const settings = useSettingsContext();

    return (
        <ToastContainer
            position="top-center"
            autoClose={3000}
            limit={4}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={settings.theme === 'dark' ? 'dark' : 'light'}
        />
    )
}

export default ToastProvider