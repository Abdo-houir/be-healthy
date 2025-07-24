"use client"

import { useResponsive } from "@/lib/hooks/use-responsive";
import { ReactNode } from "react";
import MyDrawer from "./MyDrawer";

type Props = {
    children: ReactNode
}

const Sidebar = ({ children }: Props) => {
    const lgUp = useResponsive("up", "lg");

    return (
        <MyDrawer
            DrawerProps={{
                variant: lgUp ? "permanent" : "temporary"
            }}
            renderBtn={!lgUp}
        >
            {children}
        </MyDrawer>
    )
}

export default Sidebar