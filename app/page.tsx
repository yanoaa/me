import Link from "next/link";

export default function Home() {
  return (
      <main className={'w-screen h-screen p-20 bg-slate-50 flex flex-row gap-4'}>
          <Link href={'/orange'}>
              Orange Portfolio
          </Link>
      </main>
  );
}
