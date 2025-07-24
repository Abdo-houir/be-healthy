"use client"

import { endpoints } from "@/app/data/api/endpoints"
import { handleErrorMessageDecider } from "@/lib/api/handleErrorMessageDecider"
import useAxiosQuery from "@/lib/api/react-query/useAxiosQuery"
import { useMutate } from "@/lib/api/react-query/useMutate"
import MyAlert from "@/lib/components/view/MyAlert"
import useBoolean from "@/lib/hooks/use-boolean"
import BadgeIcon from '@mui/icons-material/Badge'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DoDisturbIcon from '@mui/icons-material/DoDisturb'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Checkbox, Chip, Stack, Tooltip } from "@mui/material"
import { GridActionsCellItem, GridColDef, GridDeleteIcon } from "@mui/x-data-grid"
import EmployeeDetailsDrawer from "./components/detalis/EmployeeDetailsDrawer"
import EmployeeDialog from "./components/EmployeeDialog"
import EmployeesTable from "./components/EmployeesTable"
type Props = {
    AccountTypes: RoleType[]
}
const AdminEmployeesPageContent = ({ AccountTypes }: Props) => {
    const employees = useAxiosQuery(endpoints.admin.employees.getAllUsers("all"));

    const columns: GridColDef[] = [
        {
            field: "id",
            headerName: "Employee Id",
            minWidth: 50,
            flex: 0.1,
            hideable: false,
            type: "number"
        },
        {
            field: "first_name",
            headerName: "First Name",
            minWidth: 100,
            flex: 0.2,
            hideable: false,
            type: "string"
        },
        {
            field: "last_name",
            headerName: "Last Name",
            minWidth: 100,
            flex: 0.2,
            hideable: false,
            type: "string"
        },
        {
            field: "phone",
            headerName: "Phone Number",
            minWidth: 100,
            flex: 0.2,
            type: "string"
        },
        {
            field: "role",
            headerName: "Job Position",
            minWidth: 100,
            flex: 0.2,
            type: "singleSelect",
            valueOptions: AccountTypes
        },
        {
            field: "is_active",
            headerName: "Is Active",
            minWidth: 100,
            flex: 0.2,
            type: "boolean",
            renderCell(params) {
                const active = params.row.is_active as boolean;

                const { loading,mutate} = useMutate(
                    endpoints.admin.employees.updateUser(params.row.id),
                    [endpoints.admin.employees.getAllUsers("all")],
                    "POST",
                    () => { },
                    () => { },
                    "status toggled  successfully",
                    true
                )

                const handleToggle = () => {
                    const payload = {
                        is_active: active? 0 : 1
                    }
                    mutate(payload);
                }
                return <Stack flexDirection="row" justifyContent="center" alignItems="center">
                    <Chip
                        variant="outlined"
                        icon={active ? <CheckCircleIcon /> : <DoDisturbIcon />}
                        label={active ? "Active" : "Inactive"}
                        color={active ? "success" : "error"}
                    />
                    <Checkbox
                        checked={active}
                        onClick={handleToggle}
                        disabled={loading}
                    />
                </Stack>
            },
        },
        {
            field: "actions",
            type: "actions",
            minWidth: 75,
            flex: 0.1,
            hideable: false,
            getActions(params) {
                const row = params.row as TableEmployeeType;
                const openDetails = useBoolean({ initialState: false });
                const openEdit = useBoolean({ initialState: false });

                return [
                    <Tooltip
                        title="View Employee Details"
                        arrow
                    >
                        <GridActionsCellItem
                            label="View Employee Details"
                            icon={
                                <Box color="info.main">
                                    <BadgeIcon />
                                </Box>
                            }
                            onClick={openDetails.onTrue}
                        />
                    </Tooltip>,
                    <GridActionsCellItem
                        label="Delete Employee"
                        icon={
                            <Box sx={{ color: 'error.main' }}>
                                <GridDeleteIcon />
                            </Box>
                        } showInMenu
                    />,
                    <GridActionsCellItem
                        label="Edit Employee"
                        onClick={openEdit.onTrue}
                        icon={
                            <Box sx={{ color: 'warning.light' }}>
                                <EditIcon />
                            </Box>
                        } showInMenu
                    />,
                    <EmployeeDetailsDrawer
                        employee={row}
                        open={openDetails}
                    />,
                    <EmployeeDialog
                        open={openEdit}
                        AccountTypes={AccountTypes}
                        isUpdate
                        defaultValues={{
                            first_name: row.first_name,
                            last_name: row.last_name,
                            phone: row.phone,
                            role: row.role,
                            password: "",
                            password_confirmation: "",
                        }}
                        id={row.id}
                    />
                ]
            },
        },

    ]


    if (employees.isLoading) {
        return <EmployeesTable
            columns={columns}
            employees={[]}
            loading
        />
    } else if (employees.isError) {
        return <MyAlert
            severity="error"
            color="error"
            message={handleErrorMessageDecider(employees.error)}
        />
    } else {
        return <EmployeesTable
            columns={columns}
            employees={employees.data.data as TableEmployeeType[]}
        />
    }
}

export default AdminEmployeesPageContent