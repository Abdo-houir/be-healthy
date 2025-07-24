import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { METHODS } from "../axios";
import { handleErrorMessageDecider } from "../handleErrorMessageDecider";
import useAxiosMutation from "./useAxiosMutation";

type Method = keyof typeof METHODS;

export const useMutate = (
    endpoint: string,
    validateEndpoints: string[],
    method: Method,
    callBack: () => void,
    failCallback: () => void,
    message: string,
    isEncoded: boolean
) => {
    const queryClient = useQueryClient();
    const Mutation = useAxiosMutation(
        endpoint,
        method,
        isEncoded ? {
            headers: { "Content-Type": "multipart/form-data" },
        } : {}
    );

    return {
        mutate: (input: unknown) => {
            Mutation.mutate(input, {
                onSuccess: (response) =>
                 {
                    queryClient.invalidateQueries(validateEndpoints as InvalidateQueryFilters<readonly string[]>)
                    toast.success(response && response.message ? response.message : message);
                    if (callBack) callBack()
                },
                onError: (error: Error | AxiosError) => {
                    toast.error(handleErrorMessageDecider(error));
                    if (failCallback) failCallback()
                }
            })
        },
        loading: Mutation.isPending
    }
}