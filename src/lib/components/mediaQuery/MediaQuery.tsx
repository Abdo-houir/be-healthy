"use client"
import { useResponsive } from "@/lib/hooks/use-responsive"
import { Breakpoint } from "@mui/material"
import { ReactNode } from "react"

type Props = {
    query: MediaQuery,
    start: number | Breakpoint,
    end?: number | Breakpoint,
    children: ReactNode
}

const MediaQueryComponent = ({ query, end, start, children }: Props) => {
    const queryBreakpoint = useResponsive(query, start, end)

    if (queryBreakpoint) {
        return children
    } else {
        return <></>
    }
}

export default MediaQueryComponent