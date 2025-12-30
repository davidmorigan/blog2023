import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="flex gap-4">
      <Link href="/" className="text-lg font-semibold hover:underline">
        Home
      </Link>
      <Link href="/impact" className="text-lg font-semibold hover:underline">
        Impact
      </Link>
    </nav>
  )
}

export default Navigation
