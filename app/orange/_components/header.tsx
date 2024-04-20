import Link from "next/link";

export default function Header() {
    return (
        <header className={'flex flex-row items-center gap-6'}>
            <Link href={'/about'}>About</Link>
            <img src={"/orange/triangle.svg"} alt={"fruit"}  width={19} height={21}/>
            <Link href={'/works'}>Works</Link>
            <img src={"/orange/triangle.svg"} alt={"fruit"}  width={19} height={21}/>
            <Link href={'/blog'}>Blog</Link>
        </header>
    )
}
