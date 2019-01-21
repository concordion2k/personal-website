import React from 'react'
import NavButton from './NavButton'

export default class NavBar extends React.Component {

    render() {
        return <nav className="nav"><center><NavButton name={"Home"}/> | <NavButton name={"About"}/> | <NavButton name={"Blog"}/></center></nav>
    }
}