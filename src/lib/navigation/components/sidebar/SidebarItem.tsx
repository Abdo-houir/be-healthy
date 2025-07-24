"use client"
import { alpha, Icon, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    link: AppLink
}

const SidebarItem = ({ link }: Props) => {
    const currentLocation = usePathname();
    const theme = useTheme();
    const color = link.href === currentLocation ? theme.palette.primary.dark : "inherit";
    const bgColor = link.href === currentLocation ? alpha(theme.palette.primary.dark, theme.palette.mode === 'dark' ? 0.075 : 0.15) : 'inherit'

    return (
        <ListItem
            disablePadding
            sx={{
                color: color,
                bgcolor: bgColor,
            }}
        >
            <ListItemButton LinkComponent={Link} href={link.href}>
                <ListItemIcon sx={{ color: color }}>
                    <Icon fontSize='medium' sx={{ pb: 4 }}>
                        {link.icon}
                    </Icon>
                </ListItemIcon>
                <ListItemText primary={link.label} />
            </ListItemButton>
        </ListItem >
    )
}

export default SidebarItem