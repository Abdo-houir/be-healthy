import { Skeleton, Stack } from '@mui/material'


const EmployeeAccountLoading = () => {
    return (
        <Stack spacing={2}>
            <Skeleton variant="circular" width={80} height={80} />
            <Skeleton variant="rectangular" height={100} />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
        </Stack>
    )
}

export default EmployeeAccountLoading