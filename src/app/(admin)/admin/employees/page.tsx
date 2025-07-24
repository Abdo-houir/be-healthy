import PageHeader from "@/lib/components/page/PageHeader";
import { Container } from "@mui/material";
import AdminEmployeesPageContent from "./AdminEmployeesPageContent";
import AddEmployee from "./components/AddEmployee";


const AdminEmployeesPage = () => {
  const AccountTypes: RoleType[] = ["admin", "admin_cook", "driver", "store_employee"]

  return (
    <Container>
      <PageHeader
        title="Employees"
        subTitle="welcome dear admin here you can add, delete,update or search Employees and manage them"
        action={<AddEmployee AccountTypes={AccountTypes} />}
      />
      <AdminEmployeesPageContent
        AccountTypes={AccountTypes}
      />
    </Container>

  )
}

export default AdminEmployeesPage