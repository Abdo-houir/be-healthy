"use client"

import { Card } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

type Props = {
    columns: GridColDef[],
    employees: TableEmployeeType[],
    loading?: boolean
}

const EmployeesTable = ({ columns, employees, loading }: Props) => {

    return (
        <Card elevation={0}  >
            <div style={{ height: "60vh" }}>
                <DataGrid
                    columns={columns}
                    rows={employees}
                    sx={{
                        bgcolor: "transparent",
                    }}
                    pageSizeOptions={[5, 15, 25]}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 5 } }
                    }}
                    pagination
                    showToolbar
                    disableRowSelectionOnClick
                    filterMode="client"
                    loading={loading}
                />
            </div>
        </Card>
    )
}

export default EmployeesTable