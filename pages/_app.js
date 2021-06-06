import '../styles/globals.scss'
import Link from "next/link";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="header">
        <div>
          <Link href="/">
            <a>
              Kap's Kitchen
  </a>
          </Link>
        </div>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </>)
}

export default MyApp
