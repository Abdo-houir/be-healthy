"use client"
import useBoolean from '@/lib/hooks/use-boolean';
import BadgeIcon from '@mui/icons-material/Badge';
import { Button } from "@mui/material";
import EmployeeDialog from './EmployeeDialog';

type Props = {
    AccountTypes: RoleType[]
}

const AddEmployee = ({ AccountTypes }: Props) => {
    const open = useBoolean({ initialState: false })
    return (
        <>
            <Button
                variant="contained"
                startIcon={<BadgeIcon />}
                onClick={open.onTrue}
            >
                Add New Employee
            </Button>
            <EmployeeDialog
                open={open}
                AccountTypes={AccountTypes}
            />
        </>
    )
}

export default AddEmployee