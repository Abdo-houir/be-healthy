import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import Logo from '../../components/Logo';

type Props = {
    children: ReactNode
}
const AuthLayout = ({ children }: Props) => {

    return (
        <>
            <Button
                variant='contained' color='secondary'
                LinkComponent={Link}
                href='/'
                endIcon={<KeyboardReturnRoundedIcon />}
                sx={{
                    position: 'absolute',
                    right: 48,
                    top: 24,
                    zIndex: 100
                }}

            >
                Home
            </Button>
            <Grid
                container
            >
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper
                        component='fieldset'
                        sx={{
                            width: 1,
                            height: 1,
                            border: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: { xs: "center", md: "space-between" },
                            alignItems: "center",
                        }}
                        elevation={2}

                    >
                        <Logo
                            width={300}
                            height={300}
                        />
                        {children}
                    </Paper>
                </Grid>
                <Grid size={{ xs: 0, md: 6 }}>
                    <Image
                        key="graduation"
                        src="/backgrounds/healthy-food.avif"
                        alt='auth'
                        width={5000}
                        height={5000}
                        style={{
                            borderRadius: 0,
                            width: "100%",
                            height: "100dvh",
                        }}

                    />
                </Grid>
            </Grid >
        </>
    )
}

export default AuthLayout