import Header from "@/app/orange/_components/header";
import Fruit from "@/public/orange/fruit.svg";
import Image from "next/image";
import Footer from "@/app/orange/_components/footer";
import {githubLink, instagramLink, twitterLink, yourName} from "@/app/property";
import "@/app/orange/_components/header.css";

export default function Page() {
    return (
        <main className={'bg-orange-background w-screen min-h-screen '}>
            <div className={'absolute w-screen z-0 '}>
                <div className={'relative'}>
                    <Fruit width={240} height={240} className={'rotate-12 absolute top-12 left-16'}/>
                    <Fruit width={420} height={420} className={'-rotate-45 absolute top-16 right-0'}/>
                    <Fruit width={320} height={320} className={'-rotate-12 absolute top-[30rem] right-[24rem]'}/>
                </div>
            </div>
            <div className={'max-w-screen-lg flex flex-col items-center mx-auto px-12 py-10 z-10'}>
                <Header/>
                <h1 className={"py-32 line"}>
                    <p className={'inline text-6xl font-semibold pr-6'}>{yourName}</p>
                    <p className={'inline text-6xl '}>Portfolio</p>
                </h1>
                <div className={'relative w-full  h-[36rem]'}>
                    <section className={'bg-orange-container-b rounded-[3rem] p-12 leading-loose ' +
                        'absolute left-56 top-44 w-36 h-36'}/>
                    <section className={'bg-orange-container-b rounded-[3rem] p-12 leading-loose ' +
                        'absolute left-8'}>
                        <h2>About</h2>
                        <p>University of Osaka</p>
                        <p>Faculty of Engineering</p>
                        <p>Science, Department of</p>
                        <p>Information Science</p>
                    </section>
                    <section className={'bg-orange-container-a rounded-[3rem] p-12 leading-loose ' +
                        'absolute right-12 top-12'}>
                        <ul className={'flex flex-col gap-4'}>
                            <li>
                                <Image src={'/orange/twitter_outlined.png'} alt={'twitter'}
                                       width={30} height={30} className={'inline mr-3'}/>
                                <a href={twitterLink} target={'_blank'} rel={'noopener noreferrer'}
                                   className={'inline'}>Twitter</a>
                            </li>
                            <li>
                                <Image src={'/orange/instagram_outlined.png'} alt={'twitter'}
                                       width={30} height={30} className={'inline mr-3'}/>
                                <a href={instagramLink} target={'_blank'} rel={'noopener noreferrer'}
                                   className={'inline'}>Instagram</a>
                            </li>
                            <li>
                                <Image src={'/orange/github_outlined.png'} alt={'twitter'}
                                       width={30} height={30} className={'inline mr-3'}/>
                                <a href={githubLink} target={'_blank'} rel={'noopener noreferrer'}
                                   className={'inline'}>GitHub</a>
                            </li>
                        </ul>
                    </section>
                    <section className={'bg-orange-container-c rounded-[3rem] p-12 leading-loose ' +
                        'absolute left-48 top-[360px]'}>
                        <h2>History</h2>
                        <p>
                            <span className={'pr-4'}>2024.09</span>
                            <span>Birth</span>
                        </p>
                    </section>
                </div>
                <Footer/>
            </div>
        </main>
    );
}
