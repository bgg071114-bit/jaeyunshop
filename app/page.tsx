import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060606] text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-lime-400/20 blur-[120px]" />
        <div className="absolute bottom-[-150px] right-[-100px] h-[260px] w-[260px] rounded-full bg-green-500/20 blur-[120px]" />
    </div>

      {/* Phone */}
      <div className="mx-auto flex min-h-screen max-w-[430px] flex-col px-6">

        {/* Header */}
        <header className="flex items-center justify-between py-7">

          <div>

            <h1 className="text-3xl font-black tracking-tight">
              재윤샵
            </h1>

            <p className="mt-1 text-sm text-zinc-400">
              Safe & Fast Service
            </p>

          </div>

          <button className="rounded-2xl bg-lime-300 px-5 py-3 font-bold text-black transition hover:scale-105 active:scale-95">
            문의하기
          </button>

        </header>

        {/* Hero */}

        <section className="mt-8">

          <div className="rounded-[34px] border border-white/5 bg-white/5 p-8 backdrop-blur-2xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-lime-400/15 px-4 py-2 text-sm text-lime-300">

              <Sparkles size={16} />

              현재 문의 가능

            </div>

            <h2 className="text-[40px] font-black leading-tight">

              안전하고<br />

              빠른 거래.

            </h2>

            <p className="mt-5 text-[15px] leading-7 text-zinc-400">

              클랜 미네랄 · 리부트 대리 · 강화 티켓

              <br />

              빠르고 안전하게 진행합니다.

            </p>

            <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-lime-300 py-4 text-lg font-bold text-black transition hover:scale-[1.02] active:scale-95">

              디스코드 문의

              <ArrowRight size={20} />

            </button>

          </div>

        </section>

      </div>

    </main>
  );
}