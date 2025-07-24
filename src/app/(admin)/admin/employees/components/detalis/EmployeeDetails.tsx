import InfoLabelIcon from "@/lib/components/view/InfoLabelIcon";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BadgeIcon from '@mui/icons-material/Badge';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Avatar, Grid, Stack, Typography } from "@mui/material";

type Props = {
    employee: EmployeeType
}

const EmployeeDetails = ({ employee }: Props) => {
    console.log(employee);

    return (
        <>

            <Stack
                flexDirection="column"
                spacing={1}
                alignItems="center"
                justifyContent="center"
            >
                <Avatar
                    sx={{
                        width: { xs: 100, sm: 150 },
                        height: { xs: 100, sm: 150 },
                    }}
                    src={employee.image || ""}
                />
                <Typography variant="h4">
                    {`${employee.first_name} ${employee.last_name}`}
                </Typography>
                <Typography variant="h5">
                    {employee.phone}
                </Typography>
            </Stack>
            <Grid container pt={3} spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <InfoLabelIcon
                        label="Employee First Name"
                        value={employee.first_name}
                        icon={<BadgeIcon />}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <InfoLabelIcon
                        label="Employee Last Name"
                        value={employee.last_name}
                        icon={<BadgeIcon />}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <InfoLabelIcon
                        label="Job Position"
                        value={employee.role}
                        icon={<AdminPanelSettingsIcon />}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <InfoLabelIcon
                        label="Phone Number"
                        value={employee.phone}
                        icon={<LocalPhoneIcon />}
                    />
                </Grid>
                {/* <Grid size={{ xs: 12, sm: 6 }}>
                    <InfoLabelIcon
                        label="Employee Id"
                        value={employee.id}
                        icon={<StyleIcon />}
                    />
                </Grid> */}
            </Grid>
        </>
    )
}

export default EmployeeDetails