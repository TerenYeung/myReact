import Handlebars from 'handlebars';
import {
    combineReducers,
    createStore
} from 'redux';

const source = `
	<div class="oprate">
		<p>文章列表：总数{{posts.length}}</p>
		{{#if posts}}
			<ul>
				{{#each posts}}
					<li>{{this.id}} --- {{this.title}}</li>
				{{/each}}
			</ul>
		{{/if}}
			<P>用户信息：是否登录：{{user.isLogin}}</P>
		{{# if user.isLogin}}
			用户邮箱：{{user.userData.email}}
			用户名：{{user.userData.name}}
		{{/if}}
	</div>
`;



const template = Handlebars.compile(source);

function displayPage(data) {
    const html = template(data);
    document.body.innerHTML += html;
}

const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';
const USER_LOGIN = 'USER_LOGIN';

// action creators
function createPost(data) {
    return {
        type: CREATE_POST,
        data,
    }
}

function deletePost(id) {
    return {
        type: DELETE_POST,
        id,
    }
}

function userLogin(data) {
    return {
        type: USER_LOGIN,
        data,
    }
}

// reducers
const initialPostsState = [];
const initialUserState = {
    isLogin: false,
    userData: {}
}

function posts(state = initialPostsState, action) {
    switch (action.type) {
        case CREATE_POST:
            return [...state, action.data];
        case DELETE_POST:
            return state.filter(post => post.id !== action.id);
        default:
            return state;
    }
}

function user(state = initialUserState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return Object.assign({}, state, {
                isLogin: true,
                userData: action.data
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    posts,
    user,
});


const store = createStore(rootReducer);

document.body.innerHTML += '<h2>初始化状态</h2>';

displayPage(store.getState());

store.subscribe(() => {
    displayPage(store.getState());
})

document.body.innerHTML += '<h2>创建两篇文章</h2>';
store.dispatch(createPost({
    id: 1,
    title: 'new title'
}));
store.dispatch(createPost({
    id: 2,
    title: '2nd title'
}));

document.body.innerHTML += `<h2>删除一篇文章</h2>`;
store.dispatch(deletePost(1));

document.body.innerHTML += `<h2>用户登录</h2>`;
store.dispatch(userLogin({
    name: 'teren',
    email: 'teren@me.com'
}))
