import React from 'react'
import { Modal, Button, Alert } from 'react-bootstrap'

const profile = require('../../assets/profile.png')

export default class HomePage extends React.Component {
    
    render() {
        return (
            <div>
                <center>
                    <br></br>
                    <img alt="" src={profile} />
                    <br></br>
                    <h1>Welcome to the Home Page</h1>
                </center>
                <br></br>
                <div className="container">
                    <h2>This is where Dan says stuff on the internet.</h2>
                    <p>I hope to write many things here.</p>
                    <Button bsStyle="primary" onClick={this.click}>
                        Test Me
                    </Button>
                </div>
            </div>
        )
    }

    // I am currently trying to figure out how to render this alert.
    click() {
        return (
            <Alert bsStyle="warning">
                <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
            </Alert>
        )
    }
}