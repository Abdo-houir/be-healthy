"use client"

import useAuthContext from "@/app/context/auth/useAuthContext";
import { LoginSchema } from "@/app/data/schemas/authScheama";
import MyFormProvider from "@/lib/components/form/rhf/MyFormProvider";
import RHFTextField from "@/lib/components/form/rhf/RHFTextField";
import useBoolean from "@/lib/hooks/use-boolean";
import { yupResolver } from "@hookform/resolvers/yup";
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LoadingButton } from '@mui/lab';
import { Stack } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const methods = useForm({
        resolver: yupResolver(LoginSchema()),
        defaultValues: {
            phone: "",
            password: ""
        }
    });


    const { handleSubmit } = methods;

    const showPassword = useBoolean({ "initialState": false });

  const {login:{isPending,isSuccess,mutate}} = useAuthContext();

    return (
        <MyFormProvider
            methods={methods}
            onSubmit={handleSubmit((data:LoginInput) => {
               mutate(data)
            })}
        >
            <Stack spacing={3} mt={3}>
                <RHFTextField
                    name="phone"
                    label="phone number"
                    type="text"
                    isZero
                    size='small'
                    icon={<BadgeRoundedIcon />}
                    end
                    fullWidth
                />
                <RHFTextField
                    name="password"
                    label="password"
                    size='small'
                    type={showPassword.value ? 'text' : 'password'}
                    end
                    fullWidth
                    icon={
                        <IconButton onClick={showPassword.onToggle} edge="end">
                            {showPassword.value ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    }
                />
                <LoadingButton
                    variant="contained"
                    endIcon={<LoginRoundedIcon />}
                    type="submit"
                    loading={isPending}
                    disabled={isSuccess}
                >
                    login
                </LoadingButton>
                {/* <Typography>
                    have'nt join our family tet!! please <MUILink component={Link} href={paths.auth.login}>register</MUILink>
                </Typography> */}
            </Stack>
        </MyFormProvider>
    )
}

export default LoginForm