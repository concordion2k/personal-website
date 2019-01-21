import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import * as Bootstrap from 'react-bootstrap'
import React from 'react'

import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import BlogPage from './components/blog/BlogPage'

export default class AppRouter extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <center>
                        <nav className="nav">
                            <Link className="link" to="/">Home</Link>
                            <Link className="link" to="/about">About</Link>
                            <Link className="link" to="/blog">Blog</Link>
                        </nav>
                    </center>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/blog" component={BlogPage}/>
                </div>
            </Router>
        )
    }
}
