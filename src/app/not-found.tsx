import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="font-serif text-[8rem] font-light text-gold/20 leading-none">404</div>
      <h1 className="font-serif text-3xl font-light text-white mt-4 mb-3">Page Not Found</h1>
      <p className="text-[0.85rem] text-white/45 mb-8 max-w-sm">
        The page you're looking for seems to have wandered off — much like a couple lost in each other's eyes.
      </p>
      <Link href="/" className="btn-gold">Return Home</Link>
    </div>
  )
}
