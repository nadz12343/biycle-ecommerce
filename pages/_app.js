import '../styles/globals.css'
import { BaseContextProvider } from 'next/dist/shared/lib/utils'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
