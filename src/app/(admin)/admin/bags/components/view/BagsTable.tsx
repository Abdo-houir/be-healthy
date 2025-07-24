"use client"
import useBoolean from '@/lib/hooks/use-boolean';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import InfoIcon from '@mui/icons-material/Info';
import { Card, Chip, Tooltip } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import DeleteBagDrawer from '../DeleteBagDrawer';
type Props = {
    bags: BagType[]
}

const BagsTable = ({ bags }: Props) => {
    const BagStatusValues: BagStatus[] = ["available", "unavailable"]
    const columns: GridColDef[] = [
        {
            field: "bag_id",
            headerName: "Bag Id",
            minWidth: 100,
            flex: 0.2,
            hideable: false
        },
        {
            field: "status",
            headerName: "Bag Status",
            minWidth: 100,
            flex: 0.2,
            type: "singleSelect",
            hideable: false,
            valueOptions: BagStatusValues,
            renderCell: (props) => {
                const status = props.row.status as BagStatus;

                return <Chip
                    variant="outlined"
                    icon={status === "available" ? <CheckCircleIcon /> : status === "unavailable" ? <DoDisturbIcon /> : <InfoIcon />}
                    label={status}
                    color={status === "available" ? "success" : status === "unavailable" ? "error" : "secondary"}
                />
            }
        },
        {
            field: "last_update_at",
            headerName: "Bag last update at",
            minWidth: 100,
            flex: 0.2,
            valueFormatter: (value) => {
                return value || "never"
            }
        },
        {
            field: "actions",
            type: "actions",
            getActions(params) {
                const openDelete = useBoolean({ initialState: false });
                const row = params.row;

                return [
                    <Tooltip
                        title="Delete Bag"
                        arrow
                    >
                        <GridActionsCellItem
                            label="Delete Bag"
                            icon={<DeleteIcon />}
                            onClick={openDelete.onTrue}
                        />
                    </Tooltip>,
                    <DeleteBagDrawer open={openDelete} bag_id={row.bag_id} id={row.id}/>
                ]
            },
        }
    ]

    return (
        <Card elevation={0}  >
            <div style={{ height: "60vh" }}>
                <DataGrid
                    columns={columns}
                    rows={bags}
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
                />
            </div>
        </Card>
    )
}

export default BagsTable