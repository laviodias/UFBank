import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Navegação</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <Link href="/hello" className="underline">
                1 - Página Hello (client side via API route)
              </Link>
            </li>
            <li>
              <Link href="/ssr" className="underline">
                2 - Página SSR
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
