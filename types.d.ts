
type ThemeMode = "light" | "dark"
type DirectionMode = "rtl" | "ltr"

interface SettingsType {
    theme: ThemeMode
    direction: DirectionMode
}

interface AppLink {
    href?: string
    icon: ReactElement
    label: string,
    children?: AppLink[]
}

interface HomeLink {
    href: string
    icon: ReactElement
    label: string,
}

type MediaQuery =  "up" | "down" | "between";