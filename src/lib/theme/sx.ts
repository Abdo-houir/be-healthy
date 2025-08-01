import { alpha } from "@mui/material/styles";

interface Props {
    color?: string
    blur?: string
    opacity?: number
    imgUrl?: string

}

export function bgBlur(props: Props) {
    const color = props?.color || '#000000';
    const blur = props?.blur || 6;
    const opacity = props?.opacity || 0.8;
    const imgUrl = props?.imgUrl;

    if (imgUrl) {
        return {
            position: 'relative',
            backgroundImage: `url(${imgUrl})`,
            '&:before': {
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 9,
                content: '""',
                width: '100%',
                height: '100%',
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundColor: alpha(color, opacity),
            },
        };
    }

    return {
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: alpha(color, opacity),
    };
}

export const textIcon = {
    display: "flex",
    flexDirection: "row",
    gap: 0.5,
    alignItems: "center"
}
export const rowSpaceBetween = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
}
export const rowSpaceAround = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
}