import { headers } from "next/headers";

export const dynamic = "force-dynamic";

async function getMessage() {
  const headersList = await headers();
  const proto = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("host") || "localhost:3000";
  const baseUrl = `${proto}://${host}`;

  const res = await fetch(`${baseUrl}/api/hello`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch hello message");
  }

  return res.json() as Promise<{ message: string }>;
}

export default async function SsrPage() {
  const data = await getMessage();

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <h1 className="text-3xl font-bold">{data.message} - SSR</h1>
    </div>
  );
}


