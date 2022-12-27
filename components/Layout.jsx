
import { useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Head from "next/head";
import { useRouter } from "next/router";
import nProgress from "nprogress";

const Layout = ({ children, title, description, footer = true, dark = false }) => {

    const router = useRouter()

    useEffect(() => { //todo esto es para manejar los cambias de ruta en la pagina

        const handleRouteChange = url => nProgress.start()

        router.events.on('routeChangeStart', handleRouteChange)

        router.events.on('routeChangeComplete', () => nProgress.done())

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    })

    return(
        <div>
    <Head>
        {title? <title>{title}</title>: <title>Mi portafolio</title>}
        {description? <meta name="description" content={description} /> :
        <meta name="description" content="Portafolio CV de Johan Alberto Leon Serrano, FullStack Devloper"></meta>}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"></link>
    </Head>
        <Navbar />

        <main className="container py-4">
            {children}
        </main>

        {
            footer && (
                <footer className="bg-dark text-light text-center">
                     <div className="container p-4">
                      <h1>&copy; Portafolio de Johan Alberto León Serrano</h1>
                      <p>{new Date().getFullYear()}</p>
                     </div>
                 </footer>
            )
        }

        
        
    </div>
    )
}

export default Layout