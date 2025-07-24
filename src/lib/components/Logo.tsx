import Link from '@mui/material/Link'
import Image from 'next/image';
// import RouterLink from '../routes/components/RouterLink';
type Props = {
    width: number,
    height: number
};

function Logo({ width, height }: Props) {
    return (
        <Image
            src="/next.svg"
            alt='log'
            width={width}
            height={height}
        />
    );
}

export default Logo