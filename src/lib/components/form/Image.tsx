// components/Image.tsx
import Box, { BoxProps } from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { forwardRef } from 'react';

export function getRatio(ratio = "1/1") {
    return {
      "4/3": "calc(100% / 4 * 3)",
      "3/4": "calc(100% / 3 * 4)",
      "6/4": "calc(100% / 6 * 4)",
      "4/6": "calc(100% / 4 * 6)",
      "16/9": "calc(100% / 16 * 9)",
      "9/16": "calc(100% / 9 * 16)",
      "21/9": "calc(100% / 21 * 9)",
      "9/21": "calc(100% / 9 * 21)",
      "1/1": "100%",
    }[ratio];
  }
  
export interface ImageProps extends Omit<NextImageProps, 'placeholder'> {
  ratio?: string;              // e.g. "16/9", "4/3"
  overlay?: boolean;
  disabledEffect?: boolean;    // turn off blur effect?
  sx?: BoxProps['sx'];
}

const Image = forwardRef<HTMLSpanElement, ImageProps>((props, ref) => {
  const {
    ratio,
    overlay,
    disabledEffect = false,
    alt,
    src,
    width,
    height,
    sx,
    ...nextImageProps
  } = props;
  const theme = useTheme();

  const overlayStyles = overlay
    ? {
        '&:before': {
          content: `''`,
          position: 'absolute' as const,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: alpha(theme.palette.grey[500], 0.48),
          zIndex: 1,
        },
      }
    : undefined;

  return (
    <Box
      ref={ref}
      component="span"
      sx={{
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
        verticalAlign: 'bottom',
        ...(ratio && { width: 1 }),
        '& .next-image': {
          objectFit: 'cover',
          position: ratio ? 'absolute' : 'relative',
          top: 0,
          left: 0,
        },
        '& .next-image-wrapper': {
          position: 'relative',
          width: '100%',
          ...(ratio && { paddingTop: getRatio(ratio) }),
        },
        ...overlayStyles,
        ...sx,
      }}
    >
      <Box className="next-image-wrapper">
        <NextImage
          className="next-image"
          src={src}
          alt={alt}
          width={width}
          height={height}
          placeholder={disabledEffect ? undefined : 'blur'}
          blurDataURL="/assets/placeholder.svg"
          {...nextImageProps}
        />
      </Box>
    </Box>
  );
});

Image.displayName = 'Image';
export default Image;
