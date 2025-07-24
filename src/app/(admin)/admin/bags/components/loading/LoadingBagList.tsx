import { Stack } from "@mui/material"
import BagSkelton from "./BagSkelton"


const LoadingBagList = () => {
  return (
    <Stack
      maxHeight={"70vh"}
      overflow="scroll"
      spacing={3}
    >
      <BagSkelton />
      <BagSkelton />
      <BagSkelton />
      <BagSkelton />
      <BagSkelton />
      <BagSkelton />
      <BagSkelton />
      <BagSkelton />
      <BagSkelton />
    </Stack>
  )
}

export default LoadingBagList