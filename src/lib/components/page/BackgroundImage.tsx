import { alpha, Box, Stack, SxProps, Theme } from "@mui/material"
import { ReactNode } from "react"

interface Props {
  imageSrc: string,
  transparency?: number
  imageSx?: SxProps<Theme>
  containerSx?: SxProps<Theme>,
  children: ReactNode
}
const BackgroundImage = ({ imageSrc, transparency = 0.5, imageSx, containerSx, children }: Props) => {
  return <Box
    sx={{
      backgroundImage: `url('${imageSrc}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: 1,
      ...imageSx
    }}
  >
    <Stack
    justifyContent="center"
      sx={{
        width: 1,
        height: 1,
        backgroundColor: alpha("#000000", transparency),
        ...containerSx,
      }}
    >
      {children}
    </Stack>
  </Box>
}

export default BackgroundImage