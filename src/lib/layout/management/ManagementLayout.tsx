import { ReactNode } from 'react'
import Main from '../components/Main'
import { DRAWER } from '../config-header'
import ManagementHeader from './ManagementHeader'

type Props = {
  children: ReactNode
}

const ManagementLayout = ({ children }: Props) => {
  return (
    <>
      <ManagementHeader />
      <Main
        sx={{
          pl: { xs: '20px', lg: `${DRAWER.VERTICAL}px` },
        }}
      >
          {children}
      </Main>
    </>
  )
}

export default ManagementLayout