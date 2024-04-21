import "@/app/photographic/photographic.css"
import Image from "next/image";
import CherryBlossom from "@/assets/photographic/cherry.png";
import Nemophila from "@/assets/photographic/nemophila.jpg";
import {Section} from "@/app/photographic/_components/section";

export default function Page() {
    return (
        <>
            <header className={'px-16 py-8 bg-photo-surface'}>
                <h1 className={'text-[1.75rem] leading-loose'}>Anya Forger</h1>
                <p>Spy / Primary School Student</p>
            </header>
            <main>
                <Image src={CherryBlossom} alt={'cherry-blossom'} className={'w-8/12 h-96 object-cover'}/>
                <Section>
                    <h2>ABOUT</h2>
                    <p>1st grade student at Eden College</p>
                    <p>I like peanuts</p>
                </Section>
                <Image src={Nemophila} alt={'nemophila'} className={'w-8/12 h-96 object-cover ml-auto'}/>
            </main>
            <footer className={'py-8'}>
                anya © {new Date().getFullYear()}
            </footer>
        </>
    )
}
