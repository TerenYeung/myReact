import 'bootstrap/scss/bootstrap.scss';

// react UI-Library
import React from 'react';
import {
	render
} from 'react-dom';

// reduxw
// bindActionCreations 将actionCreations和store.dispatch方法进行绑定，使得在组件中调用this.props.actions方法时，即可dispatch该action；
// createStore可以创建以reducers为参数的store，const store = createStore(rootReducer);
// applyMiddleware提供在action被dispatch和调用最终的reducer之前的扩展能力;

// bindActionCreators(actionCreators, dispatch)
// const store = createStore(rootReducer)
// const store = applyMiddleware(thunkMiddleware,logger)(creatStore)(rootReducer);
import {
	bindActionCreators,
	createStore,
	applyMiddleware
} from 'redux';

// react-redux
// Provider是store的提供者
// connect是将store连接到组件的方法,具体是将store的state和actions映射到组件的props上

// connect(mapStateToProps, mapDispatchToProps)(component)
import {
	connect,
	Provider
} from 'react-redux';

// 异步action中间件
import thunkMiddleware from 'redux-thunk';

import Deskmark from 'components/Deskmark';
import * as actionCreators from 'actions';
import rootReducer from 'reducers';

const store = applyMiddleware(
	thunkMiddleware
)(createStore)(rootReducer);

const App = connect(
	state => ({
		state
	}),
	dispatch => ({
		actions: bindActionCreators(actionCreators, dispatch),
	})
)(Deskmark);

const container = document.body.appendChild(
	document.createElement('div')
);

render(
	<Provider store={store}>
		<App />	
	</Provider>,
	container
);