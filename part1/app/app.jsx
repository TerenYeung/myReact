import React from 'react';
import {
	render
} from 'react-dom';
import Profile from './Profile';

const props = {
	name: 'teren',
	age: 18
};

const app = document.createElement('div');
document.body.appendChild(app);


render(<Profile {...props} />, app);