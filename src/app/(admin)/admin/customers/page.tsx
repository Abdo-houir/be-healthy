import PageHeader from "@/lib/components/page/PageHeader";
import { Container } from "@mui/material";
import CustomersTable from "./components/CustomersTable";
type Props = {}

const AdminCustomersPage = (props: Props) => {

 
    return (
        <Container>
            <PageHeader
                title="customers management"
                subTitle="here you can view and manage our customers "
            />
          <CustomersTable />
        </Container>
    )
}

export default AdminCustomersPage