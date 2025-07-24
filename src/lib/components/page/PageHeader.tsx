import { Box, Stack, Typography, TypographyProps } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
    title: string
    titleProps?: TypographyProps
    subTitle?: string
    subTitleProps?: TypographyProps
    caption?: string
    captionProps?: TypographyProps,
    small?: boolean,
    action?: ReactNode
}

const PageHeader = ({ title, subTitle, caption, titleProps, subTitleProps, captionProps, small, action }: Props) => {
    return (
        <Box
            component={'section'}
            sx={{
                p: 5,
                pt: 3,
                display: 'flex',
                flexDirection: { xs: "column", md: small ? "column" : "row" },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 3
            }}>
            <Stack >
                {
                    typeof title === "string"
                        ? <Typography variant='h3' component='h1' color='primary.dark' {...titleProps}>
                            {title}
                        </Typography>
                        : title
                }
                {
                    typeof subTitle === "string"
                        ? <Typography variant='h4' component='h2' color='textPrimary' {...subTitleProps}>
                            {subTitle}
                        </Typography>
                        : subTitle
                }
                {
                    typeof caption === "string"
                        ? <Typography variant='overline' component='h3' color='textSecondary' {...captionProps}>
                            {caption}
                        </Typography>
                        : caption
                }
            </Stack>
            {action}
        </Box>
    )
}

export default PageHeader