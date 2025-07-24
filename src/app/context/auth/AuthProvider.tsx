import { endpoints } from '@/app/data/api/endpoints'
import { setHeaderToken } from '@/lib/api/axios'
import { handleErrorMessageDecider } from '@/lib/api/handleErrorMessageDecider'
import useAxiosMutation from '@/lib/api/react-query/useAxiosMutation'
import { ACCESS_TOKEN_KEY, ROLES } from '@/lib/config-global'
import useBoolean from '@/lib/hooks/use-boolean'
import { useLocalStorage } from '@/lib/hooks/use-local-storage'
import { paths } from '@/lib/navigation/paths'
import { useRouter } from 'next/navigation'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

type Props = {
    children: ReactNode
}

export type authContextType = {
    user: LoginType | null
    login: {
        mutate: (data: LoginInput) => void,
        isPending: boolean,
        isSuccess: boolean

    }
    status: AuthType
    isLoading: boolean
}
export const authContext = createContext<authContextType | null>(null);

const AuthProvider = ({ children }: Props) => {
    // const accessToken = JSON.parse(localStorage.getItem(ACCESS_TOKEN_KEY) || "");
    const { value, reset, update } = useLocalStorage(ACCESS_TOKEN_KEY, { token: "" });
    const { replace } = useRouter();

    const [user, setUser] = useState<LoginType | null>(null);
    const [status, setStatus] = useState<AuthType>("unauthenticated");
    const isLoading = useBoolean({ initialState: false });

    const { isPending, mutate, isSuccess } = useAxiosMutation(
        endpoints.auth.login,
        "POST",
    )

    useEffect(() => {
        console.log(status);

        if (status === "unauthenticated") {
            const accessToken = JSON.parse(localStorage.getItem(ACCESS_TOKEN_KEY) || "");
            if (accessToken && accessToken.token) {
                setHeaderToken(accessToken.token);
                setStatus("authenticated")
            }
        }
    }, [status, value]);

    const values: authContextType = {
        isLoading: isLoading.value,
        status: status,
        user: user,
        login: {
            mutate: (data: LoginInput) => {
                mutate(data, {
                    onSuccess: (response) => {
                        const data = response.data as LoginType
                        setUser(data);
                        setHeaderToken(data.token)
                        update("token", data.token);
                        setStatus("authenticated");
                        toast.success("logged in successfully. welcome back!");
                        switch (data.role) {
                            case ROLES.SUPER_ADMIN:
                                replace(paths.admin.customers)
                                break;

                            default:
                                replace(paths.common.home)
                                break;
                        }
                    },
                    onError: (error) => {
                        toast.error(handleErrorMessageDecider(error))

                    }
                })
            },
            isPending: isPending,
            isSuccess: isSuccess
        }
    }

    return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider