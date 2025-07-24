'use client';

import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import { alpha, Box, Button, Card, CardContent, CardMedia, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import Logo from '../../components/Logo';


type AltAuthLayoutProps = {
    children: ReactNode;
};

const AltAuthLayout = ({ children }: AltAuthLayoutProps) => {
    return (
        <Box
            sx={(theme) => ({
                position: 'relative',
                height: '100vh',
                width: '100vw',
                bgcolor: alpha(theme.palette.background.default, 0.8),
            })}
        >
            <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                    height: '100vh',
                    width: '100vw',
                }}
            >
                <Card sx={{ borderRadius: 3 }} elevation={1}>
                    <CardMedia sx={{ pt: 2 }} >
                        <Stack alignItems="center" justifyContent="center">
                            <Logo
                                width={400}
                                height={200}
                            />
                        </Stack>
                    </CardMedia>
                    <CardContent>{children}</CardContent>
                </Card>
            </Stack>

            <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
            >
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
            </Box>
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
        </Box>
    );
};

export default AltAuthLayout;
