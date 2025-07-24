import { TypographyVariantsOptions } from "@mui/material";

export function remToPx(value:number) {
    return Math.round(parseFloat(value.toString()) * 16);
  }
  
  export function pxToRem(value:number) {
    return `${value / 16}rem`;
  }

  interface MediaType {
    sm: number
    md: number
    lg: number
  }
  
  export function responsiveFontSizes({ sm, md, lg }:MediaType) {
    return {
      "@media (min-width:600px)": {
        fontSize: pxToRem(sm),
      },
      "@media (min-width:900px)": {
        fontSize: pxToRem(md),
      },
      "@media (min-width:1200px)": {
        fontSize: pxToRem(lg),
      },
    };
  }
  
  export const primaryFont = "Cairo, sans-serif";
  export const secondaryFont = "Cairo, sans-serif";
  
  // ----------------------------------------------------------------------
  
  export const typography:TypographyVariantsOptions  = {
    fontFamily: primaryFont,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 900,
      lineHeight: 80 / 64,
      fontSize: pxToRem(35),
      ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
    },
    h2: {
      fontWeight: 800,
      lineHeight: 64 / 48,
      fontSize: pxToRem(28),
      ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
    },
    h3: {
      fontWeight: 800,
      lineHeight: 1.5,
      fontSize: pxToRem(20),
      ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(16),
      ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(14),
      ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
    },
    h6: {
      fontWeight: 600,
      lineHeight: 28 / 18,
      fontSize: pxToRem(14),
      ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(13),
      ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 }),
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: 22 / 14,
      fontSize: pxToRem(12),
      ...responsiveFontSizes({ sm: 14, md: 14, lg: 14 }),
    },
    body1: {
      lineHeight: 1.5,
      fontSize: pxToRem(13),
      ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 }),
    },
    body2: {
      lineHeight: 22 / 14,
      fontSize: pxToRem(12),
      ...responsiveFontSizes({ sm: 14, md: 14, lg: 14 }),
    },
    caption: {
      lineHeight: 1.5,
      fontSize: pxToRem(10),
      ...responsiveFontSizes({ sm: 12, md: 12, lg: 12 }),
    },
    overline: {
      fontWeight: 700,
      lineHeight: 1.5,
      textTransform: "uppercase",
      fontSize: pxToRem(10),
      ...responsiveFontSizes({ sm: 12, md: 12, lg: 12 }),
    },
    button: {
      fontWeight: 700,
      lineHeight: 24 / 14,
      textTransform: "none",
      fontSize: pxToRem(12),
      ...responsiveFontSizes({ sm: 14, md: 14, lg: 14 }),
    },
  };
  