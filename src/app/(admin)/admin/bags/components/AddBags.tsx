"use client"

import useBoolean from "@/lib/hooks/use-boolean";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { Button } from "@mui/material";
import MoreBagsDrawer from "./MoreBagsDrawer";
type Props = {}

const AddBags = (props: Props) => {
    const open = useBoolean({ initialState: false });
    return (
        <>
            <Button
                sx={{ textWrap: "nowrap" }}
                variant="contained"
                onClick={open.onTrue}
                startIcon={<MedicalServicesIcon />}
            >
                Add More Bags
            </Button>
            <MoreBagsDrawer
                open={open}
            />
        </>
    )
}

export default AddBags