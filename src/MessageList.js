import React, {Component} from 'react';
import Message from './Message';

class MessageList extends Component {
    render() {
        return (
            <div>
                {this.props.messages.map((message, i) => <Message key={i}/>)}
            </div>
        );
    }
}

export default MessageList;