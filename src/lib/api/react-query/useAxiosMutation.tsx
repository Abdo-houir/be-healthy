import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { axiosPrivate, METHODS } from '../axios';

type Method = keyof typeof METHODS;

function useAxiosMutation<TData = any, TVariables = any>(
    url: string,
    method: Method,
    axiosOptions?: AxiosRequestConfig,
    mutationOptions?: UseMutationOptions<TData, any, TVariables>
): UseMutationResult<TData, any, TVariables> {
    return useMutation<TData, any, TVariables>({
        mutationKey: [url],
        mutationFn: async (formData: TVariables) => {
            try {
                let response: AxiosResponse<TData>;

                console.log(method);
                
                switch (method) {
                    case METHODS.POST:
                        response = await axiosPrivate.post(url, formData, axiosOptions);
                        break;
                    case METHODS.PUT:
                        response = await axiosPrivate.put(url, formData, axiosOptions);
                        break;
                    case METHODS.PATCH:
                        response = await axiosPrivate.patch(url, formData, axiosOptions);
                        break;
                    case METHODS.DELETE:
                        response = await axiosPrivate.delete(url, { ...axiosOptions, data: formData });
                        break;
                    case METHODS.GET:
                        response = await axiosPrivate.get(url, axiosOptions);
                        break;
                    default:
                        throw new Error('Invalid or missing HTTP method');
                }

                return response.data;
            } catch (error: any) {
                if (error.response?.data) throw error.response.data;
                if (error.response) throw error.response;
                throw error;
            }
        },
        ...mutationOptions,
    });
}

export default useAxiosMutation;
