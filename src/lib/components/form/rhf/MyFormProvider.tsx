import { FormEventHandler, ReactNode } from 'react'
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'

type Props<T extends FieldValues> = {
    children: ReactNode,
    methods: UseFormReturn<T>,
    onSubmit:FormEventHandler<HTMLFormElement>
}
const MyFormProvider = <T extends FieldValues>({ children, onSubmit, methods }: Props<T>) => {
    return (
        <FormProvider {...methods}>
            <form onSubmit={onSubmit}>{children}</form>
        </FormProvider>
    )
}

export default MyFormProvider