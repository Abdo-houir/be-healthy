import List from '@mui/material/List'
import SidebarLink from './SidebarLink'

type Props = {
    links: AppLink[],
    openFirst: boolean
}
const SidebarLinks = ({ links, openFirst = true }: Props) => {
    if (links) {
        return (
            <List disablePadding>
                {
                    links.map((link) => (
                        <SidebarLink navListItem={link} key={link?.href} openFirst={openFirst} />
                    ))
                }
            </List>
        )
    }
}

export default SidebarLinks