import ThemeSwitcher from "@/lib/components/actions/ThemeSwitcher"
import Logo from "@/lib/components/Logo"
import MediaQueryComponent from "@/lib/components/mediaQuery/MediaQuery"
import HomeNavLink from "@/lib/navigation/components/HomeNavLink"
import useNavLinks from "@/lib/navigation/use-nav-links"
import { AppBar, Container, Stack } from "@mui/material"
import ClientToolBar from "./ClientToolBar"

type Props = {}

const Header = (props: Props) => {
    const homeLinks = useNavLinks();

    return (
        <AppBar
            elevation={0}
            sx={{
                bgcolor: "transparent"
            }}
        >
            <ClientToolBar>
                <Container
                    sx={{
                        height: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <Logo
                        height={90}
                        width={90}
                    />
                    <MediaQueryComponent
                        query="up"
                        start='md'
                    >
                        <Stack direction="row" spacing={2}>
                            {
                                homeLinks.map(link => (
                                    <HomeNavLink
                                        key={link.href}
                                        link={link}
                                    />
                                ))
                            }
                        </Stack>
                    </MediaQueryComponent>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <ThemeSwitcher />
                    </Stack>
                </Container>
            </ClientToolBar>
        </AppBar>
    )
}

export default Header