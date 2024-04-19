import Link from "next/link";
import Triangle from "@/public/orange/triangle.svg"

export default function Header() {
    return (
        <header className={'flex flex-row items-center gap-6'}>
            <Link href={'/about'}>About</Link>
            <Triangle width={19} height={21}/>
            <Link href={'/works'}>Works</Link>
            <Triangle width={19} height={21}/>
            <Link href={'/blog'}>Blog</Link>
        </header>
    )
}
