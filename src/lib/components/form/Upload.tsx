// Upload.tsx
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, SxProps, Theme, useTheme } from '@mui/material/styles';
import React, { forwardRef, ReactNode } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import Image from './Image';

export interface UploadProps extends DropzoneOptions {
    disabled?: boolean;
    multiple?: boolean;
    error?: boolean;
    helperText?: ReactNode;

    // single-file props
    file?: string | File;
    onDelete?: () => void;

    // multi-file props (if multiple=true)
    files?: Array<string | File>;
    onRemove?: (file: File) => void;
    onRemoveAll?: () => void;

    // whether to render image thumbnails
    thumbnail?: boolean;
    onUpload?: () => void;

    sx?: SxProps<Theme>;
}

const Upload = forwardRef<HTMLDivElement, UploadProps>((props, ref) => {
    const {
        disabled = false,
        multiple = false,
        error,
        helperText,
        file,
        onDelete,
        files,
        onRemove,
        onRemoveAll,
        thumbnail,
        onUpload,
        sx,
        ...dropzoneOptions
    } = props;

    const theme = useTheme();

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
    } = useDropzone(dropzoneOptions);

    const hasFile = Boolean(file) && !multiple;
    const hasFiles = Array.isArray(files) && files.length > 0;
    const hasError = isDragReject || Boolean(error);

    /** Placeholder UI when no file is present */
    const Placeholder = () => (
        <Stack spacing={2} alignItems="center" justifyContent="center">
            <Typography variant="h6">
                Drop or select the file
            </Typography>
            <Typography variant="body2">
                Drop files here or click to browse your device
                <Typography
                    component="span"
                    sx={{ mx: 0.5, color: 'primary.main' }}
                >
                    {/* call-to-action text */}
                </Typography>
            </Typography>
        </Stack>
    );

    /** Preview a single image */
    const SingleFilePreview: React.FC<{ src: string }> = ({ src }) => (
        <Box
            sx={{
                p: 1,
                position: 'absolute',
                width: 1,
                height: 1,
            }}
        >
            <Image
                alt="file preview"
                src={src}
                width={1000}
                height={1000}
                sx={{ width: 1, height: 1, borderRadius: 1 }}
            />
        </Box>
    );

    /** Delete button when a single file is loaded */
    const DeleteButton = hasFile && onDelete && (
        <IconButton
            size="small"
            onClick={onDelete}
            disabled={disabled}
            sx={{
                position: 'absolute',
                top: theme.spacing(2),
                right: theme.spacing(2),
                zIndex: 9,
                color: (theme) => alpha(theme.palette.common.white, 0.8),
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.7),
                '&:hover': {
                    bgcolor: (theme) => alpha(theme.palette.grey[900], 0.5),
                },
            }}
        >
            <CancelIcon />
        </IconButton>
    );

    return (
        <Box ref={ref} sx={{ position: 'relative', width: 1, ...sx }}>
            <Box
                component="div"
                {...getRootProps()}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 5,
                    outline: 'none',
                    borderRadius: 1,
                    cursor: 'pointer',
                    bgcolor: alpha(theme.palette.grey[500], 0.08),
                    border: `1px dashed ${alpha(theme.palette.grey[500], 0.2)}`,
                    transition: theme.transitions.create(['opacity', 'padding']),
                    '&:hover': { opacity: 0.7 },
                    ...(isDragActive && { opacity: 0.7 }),
                    ...(disabled && { opacity: 0.4, pointerEvents: 'none' }),
                    ...(hasError && {
                        color: 'error.main',
                        borderColor: 'error.main',
                        bgcolor: alpha(theme.palette.error.main, 0.1),
                    }),
                    ...(hasFile && { padding: '24% 0' }),
                }}
            >
                <input {...getInputProps()} />

                {hasFile ? (
                    <SingleFilePreview
                        src={
                            typeof file === 'string' ? file : (file as any).preview || ''
                        }
                    />
                ) : (
                    <Placeholder />
                )}
            </Box>

            {DeleteButton}

            {helperText}
        </Box>
    );
});

Upload.displayName = 'Upload';
export default Upload;
