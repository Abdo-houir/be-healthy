import InfoDrawer from "@/lib/components/modals/drawers/InfoDrawer";
import InfoLabelIcon from "@/lib/components/view/InfoLabelIcon";
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Avatar, Chip, Container, Grid, Stack, Typography } from "@mui/material";
type Props = {
    open: {
        value: boolean;
        onFalse: () => void;
    }
    customer: CustomerType,
    status: number
}

const CustomerInfoDrawer = ({ open, customer, status }: Props) => {
    return (
        <>
            <InfoDrawer
                open={open}
                title="customer details"
                withClose
            >
                <Container sx={{ p: 5 }}>
                    <Stack
                        flexDirection={{ xs: "column", sm: "row" }}
                        justifyContent="space-between"
                        mb={3}
                    >
                        <Stack
                            flexDirection="row"
                            spacing={0.5}
                            alignItems="center"
                        >
                            <Avatar
                                sx={{
                                    width: 75,
                                    height: 75,
                                }}
                            >
                            </Avatar>
                            <Stack>
                                <Typography variant="body2">
                                    {customer.customerName}
                                </Typography>
                                <Typography variant="caption">
                                    {customer.bagId}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Chip
                            label={customer.status}
                            color={status === 1 ? "warning" : status === 2 ? "info" : status === 3 ? "success" : "error"}
                        />
                    </Stack>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <InfoLabelIcon
                                label="Customer Name"
                                value={customer.customerName}
                                icon={<AccountBoxRoundedIcon />}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <InfoLabelIcon
                                label="Driver Name"
                                value={customer.driverName}
                                icon={<SupportAgentIcon />}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <InfoLabelIcon
                                label="Driver Id"
                                value={customer.driverId}
                                icon={<AirportShuttleIcon />}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <InfoLabelIcon
                                label="Bag Id"
                                value={customer.bagId}
                                icon={<ShoppingBagIcon />}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </InfoDrawer>
        </>
    )
}

export default CustomerInfoDrawer