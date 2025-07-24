import { textIcon } from "@/lib/theme/sx";
import { Divider, Stack, Typography, TypographyProps } from "@mui/material";
import React, { ReactNode } from "react";

interface InfoLabelIconProps {
  label: string;
  value: string | ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  tProps?: TypographyProps
}

const InfoLabelIcon: React.FC<InfoLabelIconProps> = ({
  label,
  value,
  icon,
  action,
  tProps,
}) => (
  <Stack spacing={0.5}>
    <Stack flexDirection="row" justifyContent="space-between">
      <Stack spacing={0.5}>
        <Typography variant="h6" color="primary" sx={{...textIcon}} {...tProps}>
          {icon}
          {label}
        </Typography>
        {typeof value === "string" ? (
          <Typography variant="body1">{value}</Typography>
        ) : (
          value
        )}
      </Stack>
      {action && action}
    </Stack>
    <Divider />
  </Stack>
);

export default InfoLabelIcon;
