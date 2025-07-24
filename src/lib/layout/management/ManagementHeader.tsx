"use client"
import Header from "@/lib/components/layout/Header";
import Logo from "@/lib/components/Logo";
import Sidebar from "@/lib/components/modals/drawers/Sidebar";
import SidebarLinks from "@/lib/navigation/components/sidebar/SidebarLinks";
import useNavLinks from "@/lib/navigation/use-nav-links";
import { Stack } from "@mui/material";
type Props = {}

const ManagementHeader = (props: Props) => {
    const links = useNavLinks("admin");

    return (
        <Header
            actions={
                <Sidebar >
                    <Stack spacing={5}>
                        <Stack justifyContent="center" alignItems="center">
                            <Logo width={100} height={100} />
                        </Stack>
                        <SidebarLinks
                            openFirst
                            links={links}
                        />
                    </Stack>
                </Sidebar>
            }
        >
            <></>
        </Header>
    )
}

export default ManagementHeader