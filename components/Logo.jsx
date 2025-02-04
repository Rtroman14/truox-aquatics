import Link from "next/link";
import Image from "next/image";

export default function Logo({ width = 200, height = 200 }) {
    return (
        <Link href="/">
            <Image src="/images/logo.png" alt="Picture of the logo" width={width} height={height} />
        </Link>
    );
}
