import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'

const Intro = () => {
  return (
    <>
      <nav className="flex justify-end gap-4 mt-8 mb-8">
        <Link href="/" className="text-lg font-semibold hover:underline">
          Blog
        </Link>
        <Link href="/impact" className="text-lg font-semibold hover:underline">
          Impact
        </Link>
      </nav>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-16 md:mb-12">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Davidmorigan
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          Unleashing the power of product innovation to scale startups.
        </h4>
      </section>
    </>
  )
}

export default Intro
