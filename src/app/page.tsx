import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Herbie Bingham',
    description: "Herbie Bingham landing page",
    keywords: ['herbie', 'bingham']
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ComingSoon/>
    </main>
  );
}
