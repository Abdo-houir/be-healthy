"use client"
import { endpoints } from "@/app/data/api/endpoints"
import { useMutate } from "@/lib/api/react-query/useMutate"
import InfoDrawer from "@/lib/components/modals/drawers/InfoDrawer"
import MyAlert from "@/lib/components/view/MyAlert"
import { UseBoolean } from "@/lib/hooks/use-boolean"
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DeleteIcon from '@mui/icons-material/Delete'
import { LoadingButton } from "@mui/lab"
import { Button, Container, Grid } from "@mui/material"

type Props = {
    open: UseBoolean,
    bag_id: number,
    id: number,
}

const DeleteEmployee = ({ open, bag_id,id }: Props) => {

    const callback = () => {
        open.onFalse()
    }
    const { loading, mutate } = useMutate
        (
            endpoints.admin.bags.deleteBag(id),
            [endpoints.admin.bags.getAllBags],
            "DELETE",
            callback,
            () => { },
            `bag of id : [ ${bag_id} ] deleted successfully`,
            false
        );

        const handleClick = () => {
            mutate(null)
        }
    return (
        <InfoDrawer
            open={open}
            title={"Delete Bag of id " + bag_id}
            drawerProps={{
                anchor: "top"
            }}
            withClose={false}
            top
        >
            <Container
                sx={{
                    p: 3
                }}
            >
                <MyAlert
                    severity="warning"
                    message={`are you sure you want to delete the bag pf id : [ ${bag_id} ] this action can't be undone`}
                />
                <Grid container pt={3} spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <LoadingButton
                            variant="contained"
                            onClick={handleClick}
                            color="error"
                            loading={loading}
                            fullWidth
                            startIcon={<DeleteIcon />}
                        >
                            Delete
                        </LoadingButton>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Button
                            variant="contained"
                            color="success"
                            fullWidth
                            disabled={loading}
                            onClick={open.onFalse}
                            startIcon={<CheckCircleIcon />}
                        >
                            cancel
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </InfoDrawer>
    )
}

export default DeleteEmployee