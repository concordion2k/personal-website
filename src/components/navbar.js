import React from 'react'
import NavButton from './button'

export default class NavBar extends React.Component {

    render() {
        return <nav><NavButton name={"Home"}/> | <NavButton name={"About"}/> | <NavButton name={"Blog"}/></nav>
    }
}