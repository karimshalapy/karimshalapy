import React from 'react'
import Header from './Header/Header'

interface Props {

}

const Layout: React.FC<Props> = props => {

    return (
        <>
            <Header />
            {props.children}
        </>
    )
}

export default Layout
