import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/">
            <Image
                src="/images/cryptolyte-logo.png"
                alt="Picture of the logo"
                width={200}
                height={200}
            />
        </Link>
    );
}
