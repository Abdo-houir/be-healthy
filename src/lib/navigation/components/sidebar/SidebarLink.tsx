"use client"
import useBoolean from '@/lib/hooks/use-boolean';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { alpha, Collapse, Icon, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SidebarItem from './SidebarItem';
import SidebarSubLinks from './SidebarSubLinks';

type Props = {
    navListItem: AppLink
    openFirst: boolean
}
const SidebarLink = ({ navListItem, openFirst }: Props) => {
    const open = useBoolean({ initialState: openFirst });
    const currentLocation = usePathname();

    const theme = useTheme();

    const color = theme.palette.primary.dark
    const bgColor = alpha(theme.palette.primary.dark, theme.palette.mode === 'dark' ? 0.075 : 0.15)

    const [isCurrentSubList, setIsCurrentSubList] = useState(false);

    useEffect(() => {
        setIsCurrentSubList(prev => false)
        if (navListItem.children) {
            navListItem.children.map(subLink => {
                if (currentLocation === subLink.href) setIsCurrentSubList(prev => true);
            })
        }
    }, [currentLocation, navListItem]);


    return (
        <>
            <ListItem
                disablePadding
                onClick={() => open.onToggle()}
                sx={{
                    bgcolor: isCurrentSubList ? bgColor : 'inherit',
                    color: isCurrentSubList ? color : 'inherit'
                }}
                key={navListItem.label}
            >
                <ListItemButton >
                    <ListItemIcon>
                        <Icon sx={{ color: isCurrentSubList ? color : 'inherit' }}>
                            {navListItem.icon}
                        </Icon>
                    </ListItemIcon>
                    <ListItemText primary={navListItem.label} />
                    <IconButton>
                        <Icon component={motion.div} animate={{ rotate: open.value ? 180 : 0 }}>
                            <ExpandMoreRoundedIcon />
                        </Icon>
                    </IconButton>
                </ListItemButton>
            </ListItem>
            {
                navListItem.children &&
                <Collapse in={open.value} timeout='auto' unmountOnExit>
                    {
                        navListItem.children.map(link => (
                            link.children
                                ?
                                <SidebarSubLinks link={link} key={link.label} />
                                :
                                <SidebarItem link={link}  />
                        ))
                    }
                </Collapse>
            }
        </>
    )
}

export default SidebarLink