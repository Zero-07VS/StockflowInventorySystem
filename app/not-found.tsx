import Link from "next/link";

import Particles from "@/components/particicles";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,var(--c3)_0%,var(--c1)_45%,var(--c0)_100%)] gap-4">
            <Particles />   
            <h1 className="text-white text-2xl font-bold">404 - Not Found</h1>
            <p className="text-white text-lg">La página que buscas no existe</p>
            <Link href="/dashboard" className="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl">Volver</Link>
        </div>
    );
}