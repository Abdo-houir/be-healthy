"use client"

import useBoolean from '@/lib/hooks/use-boolean';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { alpha, Collapse, Icon, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {
    link: AppLink
}

const SidebarSubLinks = ({ link }: Props) => {
    const open = useBoolean({ initialState: false });
    const currentLocation = usePathname();
    const theme = useTheme();

    const color = theme.palette.primary.dark
    const bgColor = alpha(theme.palette.primary.dark, theme.palette.mode === 'dark' ? 0.075 : 0.15)

    const [isCurrentSubList, setIsCurrentSubList] = useState(false);

    useEffect(() => {
        setIsCurrentSubList(prev => false)
        if (link.children) {
            link.children.map(subLink => {
                if (currentLocation === subLink.href) setIsCurrentSubList(prev => true);
            })
        }
    }, [currentLocation, link]);

    return (
        <List disablePadding>
            <ListItem
                disablePadding
                onClick={() => open.onToggle()}
                sx={{
                    bgcolor: isCurrentSubList ? bgColor : 'inherit',
                    color: isCurrentSubList ? color : 'inherit'
                }}
                key={link.label}
            >
                <ListItemButton >
                    <ListItemIcon>
                        <Icon sx={{ color: isCurrentSubList ? color : 'inherit' }}>
                            {link.icon}
                        </Icon>
                    </ListItemIcon>
                    <ListItemText primary={link.label} />
                    <IconButton>
                        <Icon component={motion.div} animate={{ rotate: open.value ? 180 : 0 }}>
                            <ExpandMoreRoundedIcon />
                        </Icon>
                    </IconButton>
                </ListItemButton>
            </ListItem>
            <Collapse in={open.value} timeout='auto' unmountOnExit
                sx={{
                    rowGap: "500px",
                    " .MuiButtonBase-root ": {
                        p: 0.75
                    },
                }}
            >

                {
                    link.children &&
                    link.children.map(subLink => {
                        const isCurrentLocation = subLink.href === currentLocation
                        const linkColor = isCurrentLocation ? color : 'inherit';
                        const linkBgColor = isCurrentLocation ? bgColor : 'inherit';
                        const scale = isCurrentLocation ? 1 : 0.5
                        return (
                            <ListItem
                                key={subLink?.label}
                                disablePadding
                                sx={{ /* color: linkColor,*/
                                    bgcolor: linkBgColor
                                }}
                            >

                                <ListItemButton LinkComponent={Link} href={subLink.href} >
                                    <Icon
                                        fontSize='medium'
                                        sx={{
                                            ml: 4,
                                            mr: 1,
                                            scale: scale,
                                            color: linkColor,
                                            transitionProperty: 'all',
                                            transitionDuration: 0.1
                                        }}
                                    >

                                        {subLink.icon}
                                    </Icon>
                                    <ListItemText primary={subLink.label} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
            </Collapse>
        </List>
    )
}

export default SidebarSubLinks