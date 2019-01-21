import React from 'react'
import { Alert } from 'react-bootstrap'

export default class AlertClass extends React.Component {
    render() {
        return (
            <div>
                <Alert bsStyle="warning">
                    <strong>Test Warning</strong> This is a test alert.
                </Alert>
            </div>
        )
    }
}
