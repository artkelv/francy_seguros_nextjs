import '@/styles/globals.css'

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '600','800', '900'],
  subsets: ['devanagari']
})

export default function App({ Component, pageProps }) {
  return(
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}
