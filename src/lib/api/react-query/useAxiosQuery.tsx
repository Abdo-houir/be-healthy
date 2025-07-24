import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import { axiosPrivate } from '../axios';

function useAxiosQuery<TData = any>(
    url: string,
    enabled: boolean = true,
    axiosOptions?: AxiosRequestConfig,
): UseQueryResult<TData, any> {
    const query = useQuery<TData, any>({
        queryKey: [url],
        enabled: enabled,
        queryFn: async () => {
            try {
                const response = await axiosPrivate.get<TData>(url, axiosOptions);
                return response.data;
            } catch (error: any) {
                if (error.response?.data) throw error.response.data;
                if (error.response) throw error.response;
                throw error;
            }
        },
    });

    return query
}

export default useAxiosQuery;
