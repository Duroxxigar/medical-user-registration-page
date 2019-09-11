import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';
import doc from './img/stock-doctor.jpg';
import HeaderBar from './HeaderBar';

class App extends Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <HeaderBar />
                </div>
                <div className="flex-container">
                    <div id="left-box">
                        <img id="img-left" src={doc} alt="Doctor and patient together" />
                    </div>
                    <div id="right-box">
                        <h2 className="center-text">Please register below</h2>
                        <div id="form-outer">
                            <RegistrationForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;