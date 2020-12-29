import React from 'react'
import Header from './Header/Header'

interface Props {

}

const Layout: React.FC<Props> = props => {

    return (
        <>
            <Header />
            <div id="content">
                <main className="fillHeight">
                    {props.children}
                </main>
            </div>
        </>
    )
}

export default Layout
