//import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  //preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => { //removed preview, from { preview, children }
  return (
    <>
      <Meta />
      <div className="min-h-screen">
       //<Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
