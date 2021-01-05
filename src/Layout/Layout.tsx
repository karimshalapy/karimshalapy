import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import SideLinks from './SideLinks/SideLinks'

interface Props {

}

const Layout: React.FC<Props> = props => {

    return (
        <>
            <Header />
            <SideLinks isLeft />
            <SideLinks />
            <div id="content">
                <main className="fillHeight" style={{ counterReset: "section 0" }}>
                    {props.children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
