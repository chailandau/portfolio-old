import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Chai Landau - Engineer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
