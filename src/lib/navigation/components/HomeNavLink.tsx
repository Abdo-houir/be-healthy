'use client';

import { Button } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


type HomeNavLinkProps = {
  link: AppLink;
};

const HomeNavLink = ({ link }: HomeNavLinkProps) => {
  const pathname = usePathname(); // ✅ Next.js App Router way
  const theme = useTheme();

  const isActive = pathname === link.href;
  const color = isActive ? theme.palette.primary.dark : 'inherit';
  const bgColor = isActive
    ? alpha(theme.palette.primary.dark, theme.palette.mode === 'dark' ? 0.075 : 0.15)
    : 'inherit';

  return (
    <Button
      href={link.href}
      LinkComponent={Link}
      color="inherit"
      variant="text"
      disableElevation
      draggable={false}
      sx={{
        color,
        bgcolor: bgColor,
        textTransform: 'none',
      }}
      endIcon={isActive && link.icon ? link.icon : undefined}
    >
      {link.label}
    </Button>
  );
};

export default HomeNavLink;
