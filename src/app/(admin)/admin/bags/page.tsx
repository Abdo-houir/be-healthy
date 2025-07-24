import PageHeader from "@/lib/components/page/PageHeader"
import { Container } from "@mui/material"
import AdminBagsPageContent from "./AdminBagsPageContent"
import AddBags from "./components/AddBags"


const AdminBagsPage = () => {
    return (
        <Container>
            <PageHeader
                title="Store Bags"
                subTitle="welcome dear admin here you can add, delete,update or search bags and manage them"
                action={<AddBags />}
            />
            <AdminBagsPageContent />
        </Container>
    )
}

export default AdminBagsPage