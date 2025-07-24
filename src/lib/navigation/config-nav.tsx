import { HomeMaxTwoTone } from "@mui/icons-material";
import BadgeIcon from '@mui/icons-material/Badge';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import { paths } from "./paths";
export const commonLinks: HomeLink[] = [
    {
        icon: <HomeMaxTwoTone />,
        label: "Home",
        href: paths.common.home
    }
]

export const adminLinks: AppLink[] = [
    {
        icon: <DashboardCustomizeTwoToneIcon />,
        label: "DASHBOARD",
        href: paths.admin.home,
        children: [
            {
                icon: <Groups2RoundedIcon />,
                label: "Customers",
                href: paths.admin.customers
            },
            {
                icon: <BadgeIcon />,
                label: "Employees",
                href: paths.admin.employees.index
            },
            {
                icon: <BusinessCenterIcon />,
                label: "Bags",
                href: paths.admin.bags.index
            },
        ]
    },
]