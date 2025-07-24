import BagsTable from './BagsTable'

type Props = {
    bags: BagType[]
}

const BagsView = ({ bags }: Props) => {
    return (
        <BagsTable
            bags={bags}
        />
    )
}

export default BagsView