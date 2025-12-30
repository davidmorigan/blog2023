import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-center md:justify-between mb-20 mt-8">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-4 md:mb-0">
        <Link href="/" className="hover:underline">
          //davidmorigan
        </Link>
      </h2>
      <nav className="flex gap-4">
        <Link href="/" className="text-lg font-semibold hover:underline">
          Blog
        </Link>
        <Link href="/impact" className="text-lg font-semibold hover:underline">
          Impact
        </Link>
      </nav>
    </header>
  )
}

export default Header
