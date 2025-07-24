import { ReactNode } from "react"
import Header from "../components/Header/Header"
import Main from "../components/Main"

type Props = {
    children: ReactNode
}

const CommonLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
        </>
    )
}

export default CommonLayout