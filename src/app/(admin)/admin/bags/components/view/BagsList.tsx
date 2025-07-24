import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

type Props = {
    bags: BagType[]
}

const BagsList = ({ bags }: Props) => {
    console.log(bags);
    
    return (
        <div>
            <BusinessCenterIcon />
        </div>
    )
}

export default BagsList