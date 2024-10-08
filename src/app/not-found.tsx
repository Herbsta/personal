import ComingSoon from "@/components/ComingSoon";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <h2>Uh oh! You landed on a page that is not found...</h2>
            <ComingSoon/>
        </div>
    </main>
  )
}