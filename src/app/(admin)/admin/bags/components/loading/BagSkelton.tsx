import { Card, CardMedia, Skeleton } from "@mui/material"

type Props = {}

const BagSkelton = (props: Props) => {
    return (
        <Card sx={{ minHeight: "fit-content", p: 1}}>
            <CardMedia>
                <Skeleton variant="rectangular" height={200} animation="wave"/>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </CardMedia>
        </Card>
    )
}

export default BagSkelton