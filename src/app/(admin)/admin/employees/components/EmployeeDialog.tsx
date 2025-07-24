import { endpoints } from "@/app/data/api/endpoints"
import { EmployeeSchema, EmployeeSchemaType } from "@/app/data/schemas/adminSchema"
import { useMutate } from "@/lib/api/react-query/useMutate"
import RHFTextField from "@/lib/components/form/rhf/RHFTextField"
import RHFUpload from "@/lib/components/form/rhf/RHFUpload"
import MyDialog from "@/lib/components/modals/dialogs/MyDialog"
import MyAlert from "@/lib/components/view/MyAlert"
import useBoolean, { UseBoolean } from "@/lib/hooks/use-boolean"
import { yupResolver } from "@hookform/resolvers/yup"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import PhoneIcon from '@mui/icons-material/Phone'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { LoadingButton } from "@mui/lab"
import { Button, Grid, IconButton, MenuItem } from "@mui/material"
import { FormProvider, Resolver, useForm } from "react-hook-form"

type Props = {
    open: UseBoolean,
    isUpdate?: boolean
    AccountTypes: RoleType[],
    defaultValues?: EmployeeSchemaType,
    id?: number
}

const EmployeeDialog = ({ open, isUpdate, AccountTypes, defaultValues, id }: Props) => {
    const password = useBoolean({ initialState: false });
    const passwordConfirm = useBoolean({ initialState: false });

    const methods = useForm<EmployeeSchemaType>({
        resolver: yupResolver(EmployeeSchema) as Resolver<EmployeeSchemaType>,
        defaultValues: isUpdate ? defaultValues : {
            first_name: "",
            last_name: "",
            phone: "",
            role: "",
            password: "",
            image: undefined,
            password_confirmation: ""
        }
    });

    const { handleSubmit, reset } = methods;
    const callback = () => {
        open.onFalse();
        reset();
    }
    const { loading, mutate } = useMutate(
        isUpdate ? endpoints.admin.employees.updateUser(id || 0) : endpoints.admin.employees.createUser,
        [endpoints.admin.employees.getAllUsers("all")],
        "POST",
        callback,
        () => { },
        "Employee created successfully",
        true
    )
    return (

        <FormProvider {...methods}>
            <MyDialog
                open={open}
                responsive
                maxWidth="md"
                title={
                    <MyAlert
                        title={
                            isUpdate ? `updating employee info` : "adding new employee"
                        }
                        message={
                            isUpdate
                                ? "fill up the form and submit it with the new values please note the account owner of this update"
                                : "fill up the form and confirm it to add new Employee"
                        }
                        severity="info"
                    />
                }
                actions={
                    <>
                        <LoadingButton
                            endIcon={<CheckIcon />}
                            onClick={handleSubmit((data) => {
                                console.log(data);
                                mutate(data)
                            })}
                            loading={loading}
                        >
                            {
                                isUpdate ? "confirm" : "add"
                            }
                        </LoadingButton>
                        <Button
                            color="error"
                            endIcon={<CloseIcon />}
                            onClick={open.onFalse}
                            disabled={loading}
                        >
                            close
                        </Button>
                    </>
                }

            >
                <Grid container py={1} spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <RHFTextField
                            name="first_name"
                            label="First Name"
                            fullWidth
                            size="small"
                            type="text"
                            icon={<DriveFileRenameOutlineIcon />}
                            end
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <RHFTextField
                            name="last_name"
                            label="Last Name"
                            fullWidth
                            size="small"
                            type="text"
                            icon={<DriveFileRenameOutlineIcon />}
                            end
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <RHFTextField
                            name="phone"
                            label="Phone Number"
                            fullWidth
                            size="small"
                            type="text"
                            icon={<PhoneIcon />}
                            end
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <RHFTextField
                            name="role"
                            label="Job Position"
                            fullWidth
                            size="small"
                            type="text"
                            icon={<AssignmentIndIcon />}
                            start
                            select
                        >
                            {
                                AccountTypes.map(accountType => (
                                    <MenuItem key={accountType} value={accountType}>
                                        {accountType}
                                    </MenuItem>
                                ))
                            }
                        </RHFTextField>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <RHFTextField
                            name="password"
                            label="Password"
                            fullWidth
                            size="small"
                            type={password.value ? "text" : "password"}
                            icon={
                                <IconButton onClick={password.onToggle}>
                                    {
                                        password.value ? <VisibilityOffIcon /> : <VisibilityIcon />
                                    }
                                </IconButton>
                            }
                            end
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <RHFTextField
                            name="password_confirmation"
                            label="Confirm Password"
                            fullWidth
                            size="small"
                            type={passwordConfirm.value ? "text" : "password"}
                            icon={
                                <IconButton onClick={passwordConfirm.onToggle}>
                                    {
                                        passwordConfirm.value ? <VisibilityOffIcon /> : <VisibilityIcon />
                                    }
                                </IconButton>

                            }
                            end
                        />
                    </Grid>
                </Grid>
                <RHFUpload
                    name="image"
                />
            </MyDialog>
        </FormProvider>

    )
}

export default EmployeeDialog