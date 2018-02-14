import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>
                    Emaily!
                </h1>
                <p>Emaily is a tool for maintain campaigns and send all comunications by email.</p>
                <p>Any suggestion? Send an <a href="mailto:dodzsolutions@gmail.com">email</a> to us.</p>
            </div>
        );
    }
}

export default Landing;