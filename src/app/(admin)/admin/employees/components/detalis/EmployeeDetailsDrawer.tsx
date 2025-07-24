"use client"
import { endpoints } from "@/app/data/api/endpoints"
import { handleErrorMessageDecider } from "@/lib/api/handleErrorMessageDecider"
import useAxiosQuery from "@/lib/api/react-query/useAxiosQuery"
import InfoDrawer from "@/lib/components/modals/drawers/InfoDrawer"
import MyAlert from "@/lib/components/view/MyAlert"
import { UseBoolean } from "@/lib/hooks/use-boolean"
import { Container } from "@mui/material"
import EmployeeAccountLoading from "../laoding/EmployeeAccountLoading"
import EmployeeDetails from "./EmployeeDetails"

type Props = {
    open: UseBoolean,
    employee: TableEmployeeType
}

const EmployeeDetailsDrawer = ({ open, employee }: Props) => {
    const data = useAxiosQuery(endpoints.admin.employees.getUser(employee.id), open.value);

    return (
        <InfoDrawer
            open={open}
            title={""}
            top
        >
            <Container sx={{ p: 3 }} >
                {
                    data.isLoading || data.isPaused ?
                        <EmployeeAccountLoading />
                        : data.isError ?
                            <MyAlert
                                message={handleErrorMessageDecider(data.error)}
                                severity="error"
                            />
                            : data.isSuccess &&
                            <EmployeeDetails
                                employee={data.data.data as EmployeeType}
                            />
                }
            </Container>
        </InfoDrawer>
    )
}

export default EmployeeDetailsDrawer