import { shadows } from '@/lib/theme/shadows';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  alpha,
  Box,
  Chip,
  Drawer,
  DrawerProps,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import React, { ReactNode } from 'react';

interface InfoDrawerProps {
  open: {
    value: boolean;
    onFalse: () => void;
  };
  title: string | ReactNode;
  withClose?: boolean;
  maxWidth?: number;
  action?: ReactNode;
  children: ReactNode;
  drawerProps?: DrawerProps
  top?: boolean
}

const InfoDrawer: React.FC<InfoDrawerProps> = ({
  open,
  title,
  withClose = true,
  maxWidth,
  action,
  children,
  drawerProps,
  top
}) => {

  const theme = useTheme();

  return (
    <Drawer
      open={open.value}
      onClose={open.onFalse}
      anchor={top ? "top" : "bottom"}
      PaperProps={{
        sx: {
          maxHeight: { xs: '90vh', sm: '85vh' },
          maxWidth: maxWidth ?? 750,
          mx: 'auto',
          overflow: 'scroll',
          borderTopLeftRadius: { xs: 0, sm: top ? 0 : 30 },
          borderTopRightRadius: { xs: 0, sm: top ? 0 : 30 },
          borderBottomLeftRadius: { xs: 0, sm: !top ? 0 : 30 },
          borderBottomRightRadius: { xs: 0, sm: !top ? 0 : 30 }
        }
      }}
      {...drawerProps}
    >
      <Stack
        flexDirection={top ? "column-reverse" : "column"}
      >
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          mt={!top ? "2vh" : "0"}
          mb={top ? "2vh" : "0"}
          height="4vh"
          mx={2}
        >
          <Chip
            sx={{
              boxShadow: shadows(theme.palette.mode)[4],
              justifyContent: 'start',
              flexGrow: 1
            }}
            label={
              typeof title === 'string' ? (
                <Typography color="primary.dark" variant="h6">
                  {title}
                </Typography>
              ) : (
                title
              )
            }
            avatar={
              withClose ? (
                <Tooltip arrow title={"close"}>
                  <IconButton
                    color="error"
                    size="small"
                    sx={(theme) => ({
                      bgcolor: alpha(theme.palette.error.main, 0.2)
                    })}
                    onClick={open.onFalse}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                </Tooltip>
              ) : undefined
            }
          />
          {action}
        </Stack>
        <Box
          maxHeight={{ xs: '84vh', sm: '79vh' }}
          overflow="scroll"
          className="scrollbar"
        >
          {children}
        </Box>
      </Stack>
    </Drawer>
  );
};

export default InfoDrawer;
