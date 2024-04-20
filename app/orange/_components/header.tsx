import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className={'flex flex-row items-center gap-6'}>
            <Link href={'/about'}>About</Link>
            <Image src={"/orange/triangle.svg"} alt={"fruit"}  width={19} height={21}/>
            <Link href={'/works'}>Works</Link>
            <Image src={"/orange/triangle.svg"} alt={"fruit"}  width={19} height={21}/>
            <Link href={'/blog'}>Blog</Link>
        </header>
    )
}
