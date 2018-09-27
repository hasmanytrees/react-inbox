import React, {Component} from 'react';
import './App.css';
import Toolbar from './Toolbar.js';
import MessageList from './MessageList'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Toolbar/>
                <MessageList/>
            </div>
        );
    }
}

export default App;
