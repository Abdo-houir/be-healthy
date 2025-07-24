"use client"

import useBoolean from '@/lib/hooks/use-boolean';
import SourceRoundedIcon from '@mui/icons-material/SourceRounded';
import { Card, Chip, Tooltip } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import CustomerInfoDrawer from './CustomerInfoDrawer';
import { rows } from "./fakeRows";
type Props = {}

const CustomersTable = (props: Props) => {

    const statusList = [
        {
            id: 1,
            label: "At Store"
        },
        {
            id: 2,
            label: "On Way"
        },
        {
            id: 3,
            label: "At customer"
        }
    ]

    const columns: GridColDef[] = [
        {
            field: "Driver Name",
            flex: 0.2,
            minWidth: 100,
            hideable: false
        },
        {
            field: "Driver Id",
            flex: 0.2,
            minWidth: 75
        },
        {
            field: "Customer Name",
            flex: 0.2,
            minWidth: 100,
            hideable: false
        },
        {
            field: "Bag Id",
            flex: 0.2,
            minWidth: 75
        },
        {
            field: "Status",
            flex: 0.2,
            minWidth: 100,
            type: "singleSelect",
            valueOptions: statusList.map((s) => s.label),
            renderCell: (props) => {
                const row = props.row;
                const status = statusList.find((item) => item.label === row.Status)?.id;

                if (status) {
                    return <Chip
                        label={row.Status}
                        color={status === 1 ? "warning" : status === 2 ? "info" : status === 3 ? "success" : "error"}
                    />
                } else {
                    <Chip label={row.Status} color="default" />;
                }
            }
        },
        {
            field: "Date",
            flex: 0.2,
            minWidth: 100
        },
        {
            field: "actions",
            type: "actions",
            width: 80,
            flex: 0.1,
            getActions(params) {
                const row = params.row;
                const openDetails = useBoolean({ initialState: false });
                const status = statusList.find((item) => item.label === row.Status)?.id;

                return [
                    <Tooltip
                        title="view details"
                        arrow
                    >
                        <GridActionsCellItem
                            label="view details"
                            icon={<SourceRoundedIcon />}
                            onClick={openDetails.onTrue}
                        />
                    </Tooltip>,
                    <CustomerInfoDrawer
                        open={openDetails}
                        customer={{
                            customerName: row["Customer Name"],
                            driverName: row["Driver Name"],
                            driverId: row["Driver Id"],
                            bagId: row["Bag Id"],
                            status: row["Status"],
                            date: row["Date"],
                        }}
                        status={status || 1}
                    />
                ]
            },

        }
    ];
    return (
        <Card elevation={0}  >
            <div style={{ height: "60vh" }}>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    sx={{
                        bgcolor: "transparent"
                    }}
                    pageSizeOptions={[5, 15, 25]}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 5 } }
                    }}
                    pagination
                    showToolbar
                    disableRowSelectionOnClick
                />
            </div>
        </Card>
    )
}

export default CustomersTable