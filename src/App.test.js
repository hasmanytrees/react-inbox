import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Toolbar from './Toolbar';
import MessageList from './MessageList'

describe('app', () => {
    it('renders without crashing', () => {
        const app = shallow(<App/>);

        expect(app.find('.App')).toHaveLength(1);
    });

    it('should find the toolbar', () => {
        const app = shallow(<App/>);

        expect(app.find(Toolbar)).toHaveLength(1);
    });

    it('should have a MessageList', () => {
        const app = shallow(<App/>);

        expect(app.find(MessageList)).toHaveLength(1);
    });
});

