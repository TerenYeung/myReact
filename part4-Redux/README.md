### Redux

action is a object that contains actionType and data;

reducer is a function that deals with data and return new state;

store is data center that has 3 methods:

	- store.dispatch
	- store.subscribe
	- store.getState

ui -> store.dispatch(action) -> reducers deal with state based on action and return new state
-> store.subscribe the state change and excute the callback

### Flux && Redux的区别

UI操作后

Flux的action creator直接通过AppDispatcher.dispatch(action)发送action

Redux所有接口部署在store这个单例，通过store.dispatch(action)发送action

Store接收到action信号

Flux可以存在不同类型的store，在store里面订阅的action的事件类型，从而执行定义在该store的回调函数，
所有的数据处理都在store中

Redux只存在一个store单例，const store = createStore(rootReducer), 当store.dispatch相应的action触发时
会数据会直接在store上的reducers上进行数据处理，然后返回一个新的state

state变化导致视图重绘

Flux通过EventEmitter提供的接口，在store发生action的回调函数发送自定义事件，view层通过监听自定义事件获取当前视图的最新state而更新视图

Redux通过store.getState方法获取最新的state,然后结合框架，如React进行动态更新视图；

### 整体概念

- store

```
store.dispatch(action)
// 通过reducer将action和state的操作连接，计算出新state

store.subscribe(func)
// 当action导致state发生变化时，触发回调

store.getState()
//获取当前最新的state

```

```
import 

```