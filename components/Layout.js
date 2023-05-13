import { Fragment } from 'react'
// imports
import Footer from './Footer';
import Header from './Header';

// custom components
const Layout = ({children}) => {
    return <Fragment>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </Fragment>   
}
export default Layout