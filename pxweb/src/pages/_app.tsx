import { Roboto } from 'next/font/google'
import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { AppContextProvider } from '../context/AppContextProvider';

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className={roboto.className}>
            <AppContextProvider>
                <Header />
                {/* Component är sidkomponenten */}
                <Component {...pageProps} /> 
            </AppContextProvider>
        </main>
    )
}