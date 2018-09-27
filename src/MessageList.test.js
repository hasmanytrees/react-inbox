import React from 'react';
import {shallow} from 'enzyme';
import MessageList from './MessageList';
import Message from './Message';

describe('Message List', () => {
    it('should display n messages', () => {
        const messages = [
            {subject: 'Not spam'},
            {subject: 'Really not spam'}
        ];

        const messageList = shallow(<MessageList messages={messages}/>);

        expect(messageList.find(Message)).toHaveLength(messages.length);
    });
});