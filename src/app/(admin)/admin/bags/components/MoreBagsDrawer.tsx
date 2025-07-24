"use client"
import { endpoints } from "@/app/data/api/endpoints"
import { MoreBagsSchema } from "@/app/data/schemas/adminSchema"
import { useMutate } from "@/lib/api/react-query/useMutate"
import MyFormProvider from "@/lib/components/form/rhf/MyFormProvider"
import RHFTextField from "@/lib/components/form/rhf/RHFTextField"
import InfoDrawer from "@/lib/components/modals/drawers/InfoDrawer"
import { UseBoolean } from "@/lib/hooks/use-boolean"
import { yupResolver } from "@hookform/resolvers/yup"
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { LoadingButton } from "@mui/lab"
import { Container, Stack } from "@mui/material"
import { useForm } from "react-hook-form"

type Props = {
    open: UseBoolean
}

const MoreBagsDrawer = ({ open }: Props) => {
    const methods = useForm({
        resolver: yupResolver(MoreBagsSchema()),
        defaultValues: {
            quantity: 0
        }
    });
    const { handleSubmit, reset } = methods

    const callback = () => {
        reset();
        open.onFalse()
    }
    const { loading, mutate } = useMutate
        (
            endpoints.admin.bags.addBag,
            [endpoints.admin.bags.getAllBags],
            "POST",
            callback,
            () => { },
            "bags created successfully",
            false
        );
    return (
        <InfoDrawer
            open={open}
            title="Add More Bags To The Store"
            drawerProps={{
                anchor: "top"
            }}
            top
        >
            <Container
                sx={{
                    p: 3
                }}
            >
                <MyFormProvider
                    methods={methods}
                    onSubmit={handleSubmit((data) => {
                        mutate(data)
                    })}
                >
                    <Stack spacing={3}>
                        <RHFTextField
                            name="quantity"
                            label="new bags quantity"
                            fullWidth
                            size="small"
                            type="number"
                            icon={<BusinessCenterIcon/>}
                            end
                        />
                        <LoadingButton
                            variant="contained"
                            type="submit"
                            loading={loading}
                            startIcon={<CheckCircleIcon />}
                        >
                            Confirm
                        </LoadingButton>
                    </Stack>
                </MyFormProvider>
            </Container>
        </InfoDrawer>
    )
}

export default MoreBagsDrawer